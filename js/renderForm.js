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

		opts = opts || {};

		this.opts = _.defaults(opts, {
			theme: 'bootstrap3',
			template: 'handlebars',
			//TODO languages using module nls/jsoneditor_errors.js

			editable: false,
			disable_collapse: true,
			disable_edit_json: true,
			disable_properties: true,
			disable_array_reorder: true,

			ajax: true,
			schema: _.isString(schema) ? {$ref: require.toUrl(schema)} : schema
		});

		if(!_.isUndefined(opts.editable))
			this.opts = _.extend(this.opts, {
				editable: opts.editable,
				disable_collapse: !opts.editable,
				disable_edit_json: !opts.editable,
				disable_properties: !opts.editable,
				disable_array_reorder: !opts.editable
			});

		console.log('OPTS',this.opts);
		
		this.target = (target instanceof jQuery) ? target : $(target);

		this.editor = new JSONEditor(this.target[0], this.opts);
	};

	renderForm.prototype.setValues = function(data) {
		
		if(_.isObject(data))
			this.editor.setValue(data);

		return this;
	};

	return function (target, schemaUrl, opts) {
		return new renderForm(target, schemaUrl, opts);
	}
});