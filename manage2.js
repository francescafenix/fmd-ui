
/*global require*/
// relative or absolute path of Components' main.js
require([
	'submodules/fenix-ui-common/js/Compiler',
	'submodules/fenix-ui-menu/js/paths'
], function (Compiler, menuConfig) {

    menuConfig.baseUrl = 'submodules/fenix-ui-menu/js';

    Compiler.resolve([menuConfig], {
            placeholders: {
            	FENIX_CDN: "//fenixapps.fao.org/repository",
            	FENIX_I18N: "../../../i18n"
            },
            config: {
                locale: 'en',
                paths: {
					text: "{FENIX_CDN}/js/requirejs/plugins/text/2.0.12/text",
					i18n: "{FENIX_CDN}/js/requirejs/plugins/i18n/2.0.4/i18n",
					domready: "{FENIX_CDN}/js/requirejs/plugins/domready/2.0.1/domReady",

                    underscore: "{FENIX_CDN}/js/underscore/1.7.0/underscore.min",
                    handlebars: "{FENIX_CDN}/js/handlebars/2.0.0/handlebars",
                    amplify:    "{FENIX_CDN}/js/amplify/1.1.2/amplify.min"
                },
                shim: {
                    underscore: {
                        exports: '_'
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
        'submodules/fenix-ui-common/js/AuthManager',
        'handlebars',
        'amplify',

        'text!config/services.json',

		'text!html/pills.html',

        'domready!'
    ], function (TopMenu, AuthManager, Handlebars, Amplify,

    	Config,
    	tmplPills) {

    	pillsTmpl = Handlebars.compile(tmplPills);

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
        new AuthManager();

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

		$('#pills-quest').html(pillsTmpl({
			items: [
				{id:1, title: "ciao1", active: true, html:'<b>HTML1</b>'},
				{id:2, title: "ciao2", active: false, html:'<b>HTML2</b>'},
				{id:3, title: "ciao3", active: false, html:'<b>HTML3</b>'}
			]
		}) );


        $('#form-contact').on('submit', function(e) {
			e.preventDefault();
			var form$ = $(this);
			form$.parents('.container').slideUp();
			console.log( form$.serialize() );
        });

    });
});