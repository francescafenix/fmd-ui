/*

USAGE:
	renderForm('#form-contact', 'json/schema.contact.json');

	//new dom element
	var form$ = $('<form>').prependTo('body');
	renderForm(form$, 'json/schema.contact.json');

*/
define([
	'require','jquery','underscore','jsoneditor'
], function (require, $, _, JSONEditor) {

	function renderForm(target, schema, opts) {

		this.opts = _.defaults(opts || {}, {
			theme: 'bootstrap3',
			template: 'handlebars',
			//TODO langugaues using module nls/jsoneditor_errors.js
			disable_collapse: true,
			disable_edit_json: true,
			disable_properties: true,
			
			//disable_array_add: true,
			//disable_array_delete: true,
			disable_array_reorder: true,

			ajax: true,
			schema: _.isString(schema) ? {$ref: require.toUrl(schema)} : schema
		});
		
		this.target = (target instanceof jQuery) ? target : $(target);

		this.editor = new JSONEditor(this.target[0], this.opts);
	};

	return function (target, schemaUrl, opts) {
		return new renderForm(target, schemaUrl, opts);
	}
});