define([
	'jquery','underscore','jsoneditor'
], function ($, _, JSONEditor) {

	function dirname(path) {
		return path.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');;
	}

	function renderForm(target, schemaUrl, opts) {

		this.opts = _.defaults(opts || {}, {
			theme: 'bootstrap3',
			disable_collapse: true,
			disable_edit_json: true,
			disable_properties: true,
			ajax: true,			
			schema: {
				$ref: dirname(location.href)+'/'+schemaUrl
			}
		});

		console.log(this.opts);
		
		this.target = (target instanceof jQuery) ? target : $(target);

		this.editor = new JSONEditor(this.target[0], this.opts);
	};
	//CONTACT FORM
	//JSONEditor.defaults.language = 'en';		
	/*JSONEditor.defaults.options.ajax = true;
	JSONEditor.defaults.options.theme = 'bootstrap3';
	JSONEditor.defaults.options.disable_collapse = true;
	JSONEditor.defaults.options.disable_edit_json = true;
	JSONEditor.defaults.options.disable_properties = true;*/

	return function (target, schemaUrl, opts) {
		return new renderForm(target, schemaUrl, opts);
	}
});