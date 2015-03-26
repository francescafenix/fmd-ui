
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
            placeholders: {"FENIX_CDN": "//fenixapps.fao.org/repository"},
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
        'domReady!'
    ], function (TopMenu, AuthenticationManager, Editor) {

        var authUser = amplify.store.sessionStorage('afo.security.user'),
            menuUrl,
            publicMenuConfig =  'config/fenix-ui-menu.json',
            authMenuConfig = 'config/fenix-ui-menu-auth.json';

        authUser ? menuUrl = authMenuConfig : menuUrl = publicMenuConfig;

        var topMenu = new TopMenu({
            active: 'view',
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
                active: 'view',
                url: url,
                className : 'fx-top-menu',
                breadcrumb : {
                    active : true,
                    container : "#breadcumb_container",
                    showHome : true
                }
            })
        }


    });
});