
require(["submodules/fenix-ui-menu/js/paths",
		 "submodules/fenix-ui-common/js/Compiler"
		 ], function(Menu, Compiler) {

    var menuConfig = Menu;
    
    menuConfig['baseUrl'] = "submodules/fenix-ui-menu/js";

    Compiler.resolve([menuConfig], {
        placeholders: {
        	FENIX_CDN: "//fenixapps.fao.org/repository"
        },
        config: {
        	i18n: {
            	locale: 'en'
            },
            paths: {
				text: "{FENIX_CDN}/js/requirejs/plugins/text/2.0.12/text",
				i18n: "{FENIX_CDN}/js/requirejs/plugins/i18n/2.0.4/i18n",
				domready:  "{FENIX_CDN}/js/requirejs/plugins/domready/2.0.1/domReady",
				jquery:    "{FENIX_CDN}/js/jquery/2.1.1/jquery.min",
				amplify:   "{FENIX_CDN}/js/amplify/1.1.2/amplify.min",
				handlebars:"{FENIX_CDN}/js/handlebars/2.0.0/handlebars",
				underscore:"{FENIX_CDN}/js/underscore/1.8.0/underscore.min"
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
                    exports: 'amplify'
                }
            }
        }
    });

	require([
    	'jquery','underscore','handlebars','amplify',

		'js/renderAuthMenu',

        'config/services',
		
		'domready!'
	], function($, _, Handlebars, amplify,

    	renderAuthMenu,
    	
    	Config
		) {

		renderAuthMenu('home');
        
	});


});