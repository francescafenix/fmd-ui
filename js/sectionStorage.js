define([
'jquery','underscore','handlebars','amplify',
], function ($, _, Handlebars, Amplify) {
'use strict';

	function sectionStorage(opts) {
		//TODO extend defaults..

		this.opts = _.defaults(opts, {
			autosave: true,
			autosaveInterval: 10000,
			autosaveLoader: '#fx-sectionstorage-loader',
			storeExpires: null
		});

		this.storeId = _.uniqueId('fx-sectionstorage');
		this.storeObj = {};
		this.sections = [];
		this.autosaveTimer = null;

		if(this.opts.autosave)
			this.initAutoSave();
	};

	sectionStorage.prototype.addSection = function(section) {
		var sectionId = this.storeId +'_'+ _.uniqueId()

		this.sections.push({
			id: sectionId,
			data: section
		});
		return sectionId;
	};

	sectionStorage.prototype.storeSections = function() {

		for(var i in this.sections)
			this.storeObj[ this.sections[i].id ] = this.sections[i].data;

		amplify.store(this.storeId, this.storeObj, {expires: this.opts.storeExpires });

		return this.sections.length;
	};

	sectionStorage.prototype.initAutoSave = function(section) {

		var self = this;

		self.autosaveTimer = setInterval(self.storeSections, self.opts.autosaveInterval);
	};

	return sectionStorage;
});