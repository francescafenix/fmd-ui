
/*global require*/
// relative or absolute path of Components' main.js
require([
    'submodules/fenix-ui-common/js/Compiler',
    'submodules/fenix-ui-metadata-editor/js/paths',
    'submodules/fenix-ui-menu/js/paths'
], function (Compiler, 
	MetadataEditor,
	Menu) {

    var metadataEditorConfig = MetadataEditor;
    metadataEditorConfig['baseUrl'] = 'submodules/fenix-ui-metadata-editor/js/';

    var menuConfig = Menu;
    menuConfig['baseUrl'] = 'submodules/fenix-ui-menu/js';

    Compiler.resolve([metadataEditorConfig, menuConfig], {
            placeholders: {
            	FENIX_CDN: "//fenixapps.fao.org/repository",
            	FENIX_CONF_NLS: "../../../config/fenix-ui-metadata-editor/nls"
            },
            config: {
                locale: 'en',
                paths: {
                    underscore: "{FENIX_CDN}/js/underscore/1.7.0/underscore.min",
                    backbone:   "{FENIX_CDN}/js/backbone/1.1.2/backbone.min",
                    handlebars: "{FENIX_CDN}/js/handlebars/2.0.0/handlebars",
                    amplify:    "{FENIX_CDN}/js/amplify/1.1.2/amplify.min",
                    config: 'config',
                    html: 'html'
                },
                shim: {
                    underscore: {
                        exports: '_'
                    },
                    backbone: {
                        deps: ['underscore', 'jquery'],
                        exports: 'Backbone'
                    },
                    handlebars: {
                        exports: 'Handlebars'
                    },
                    amplify: {
                        deps: ['jquery'],
                        exports: 'amplifyjs'
                    }
                }
            }
        });

    // Bootstrap the application
    require([
        'fx-menu/start',
        'src/components/AuthenticationManager',
        'fx-editor/start',
        'amplify',
        'domReady!'
    ], function (TopMenu, AuthenticationManager, Editor) {

        var authUser = amplify.store.sessionStorage('afo.security.user'),
            menuUrl,
            publicMenuConfig =  'config/fenix-ui-menu.json',
            authMenuConfig = 'config/fenix-ui-menu-auth.json';

        authUser ? menuUrl = authMenuConfig : menuUrl = publicMenuConfig;

        var topMenu = new TopMenu({
            active: 'manage',
            url: menuUrl,
            className : 'fx-top-menu',
            breadcrumb : {
                active : true,
                container : "#breadcumb_container",
                showHome : true
            }
        });
        
        /*Login*/
        new AuthenticationManager();

        amplify.subscribe('login', function (user) {
            refreshMenu(authMenuConfig);
        });
        amplify.subscribe('logout', function () {
            console.warn("Event logout intercepted");
            refreshMenu(publicMenuConfig);
        });
        function refreshMenu(url) {
            topMenu.refresh({
                active: 'manage',
                url: url,
                className : 'fx-top-menu',
                breadcrumb : {
                    active : true,
                    container : "#breadcumb_container",
                    showHome : true
                }
            })
        }

        //Editor Metadata
        var userConfig = {
            container: "div#metadataEditorContainer",
            source: null,
            resourceType: 'dataset', //dataset, geographic, codelist
            readOnly: false,
            widget: {
                lang: 'EN'
            },
            config: {
                gui: 			"config/fenix-ui-metadata-editor/gui-config.json",
                jsonMapping: 	"config/fenix-ui-metadata-editor/mapping-config.json",
                validation: 	"submodules/fenix-ui-metadata-editor/conf/json/fx-editor-validation-config.json",
                ajaxEventCalls: "submodules/fenix-ui-metadata-editor/conf/json/fx-editor-ajax-config.json",
                dates: 			"submodules/fenix-ui-metadata-editor/conf/json/fx-editor-dates-config.json"
            }
        };

        this.editor = new Editor().init( userConfig );

        $('#btn-contact-submit').on('click', function(e) {
			e.preventDefault();
			$(this).parents('.container').slideUp();
        });

    });
});