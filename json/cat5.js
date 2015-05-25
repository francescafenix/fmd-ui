define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat5'],
		"properties": {
			"ask5": {
				"title": Quests['ask5'],
				"type":"string",
				"uniqueItems": true,
				"format":"select",
				"enum":[
						"Yes",
						"No",
						"Partially"
						]		
				
			},		
			"ask6": {
				"title": Quests['ask6'],
				"type": "string",
				"uniqueItems": true,
				"format": "select",
				"enum": [
						"Yes, all of them",
						"Yes, limited",
						"No"
					]		
			}
		}		
	}
});