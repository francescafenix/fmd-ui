define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests.cat2,
		"properties": {
			"ask2": {
				"title": Quests['ask2'],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
					"Yes, officially",
					"Yes, not officially",
					"No",
					"Not sure"
				]
			}
		}
	};
});