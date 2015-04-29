/*

USAGE:
	renderForm('#form-contact', 'json/schema.contact.json');

	//new dom element
	var form$ = $('<form>').prependTo('body');
	renderForm(form$, 'json/schema.contact.json');

*/
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

	return function (target, schemaUrl, opts) {
		return new renderForm(target, schemaUrl, opts);
	}
});