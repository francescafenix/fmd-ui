
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
        	//FENIX_NLS: "../../../nls" //used by metadata editor
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
				underscore:"{FENIX_CDN}/js/underscore/1.7.0/underscore.min"
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
    	'jquery','underscore','handlebars','amplify',

        'fx-menu/start',
        'submodules/fenix-ui-common/js/AuthManager',

        'config/services',
		'i18n!nls/questions',
		'text!html/pills.html',

        'domready!'
    ], function ($, _, Handlebars, Amplify,
    	TopMenu, AuthManager,
    	
    	Config,
    	Quests,
    	tmplPills
    ) {

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

/*        var questions = [
				{id:1, title: "ciao1", active: true, html:'<b>HTML1</b>'},
				{id:2, title: "ciao2", active: false, html:'<b>HTML2</b>'},
				{id:3, title: "ciao3", active: false, html:'<b>HTML3</b>'}
			];*/

		var activeSection = 'cat1',
			questions = _.compact(_.map(Quests, function(title, key) {
			if(key.match(/^cat/))
			return {
				id: key,
				title: title,
				html: '',
				active: activeSection===key
			};
        }));

        console.log(questions);


		$('#pills-quest').html(pillsTmpl({
			items: questions
		}) );

		$('#pills-quest a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			//e.target // newly activated tab
			//e.relatedTarget // previous active tab

			console.log( $(e.target).data('id') );
		});

        $('#form-contact').on('submit', function(e) {
			e.preventDefault();

			var isFormValid = true;

			$(this).find('input').each(function() {
			    if ($.trim($(this).val()).length == 0) {
			        $(this).parent('.form-group').addClass('has-error');
			        isFormValid = false;
			    }
			    else{
			        $(this).parent('.form-group').removeClass('has-error');
			    }
			});

			if(!isFormValid) {
				alert('Please fill in all fields');
				return false;
			}

			var adata = $(this).serializeArray();
			//var data = _.object(_.pluck(adata, 'name'), _.pluck(adata, 'value'));

			console.log( adata );

			$(this).replaceWith( Handlebars.compile('<ul>{{#each this}}<li>{{name}}: {{value}}</li>{{/each}}</ul>')(adata) );

			//TODO enaleble following json-editor form
        });
    });
});