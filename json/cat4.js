define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests.cat4,
		"properties": {
			"ask4": {
				"title": Quests['ask4'],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
					"Yes",
					"No",
					"Partial"
				]
			},
			"ask4.1": {
				"title": Quests['ask4.1'],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
					"Yes",
					"No",
					"Partial"
				]
			},
			"ask4.1.1": {
				"title": Quests['ask4.1.1'],
				"type": "string"
			},
			"ask4.2": {
				"title": Quests['ask4.2'],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
					"Yes",
					"No",
					"Partial"
				]
			},
			"ask4.2.1": {
				"title": Quests['ask4.2.1'],
				"type": "string"
			},
			"ask4.3": {
				"title": Quests['ask4.3'],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
					"Yes",
					"No",
					"Partial"
				]
			},
			"ask4.3.1": {
				"title": Quests['ask4.3.1'],
				"type": "string"
			}
		}
	};
});