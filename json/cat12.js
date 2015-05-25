define(['i18n!nls/questions'], function(Quests) {
	return {
	    "type": "object",
	    "title": Quests['cat12'],
	    "properties": {
	        "ask31": {
	            "title": Quests['ask31'],
	            "type": "string",
	            "uniqueItems": true,
	            "format": "select",
	            "enum": [
	                "Yes",
	                "No"
	            ]
	        },
	        "ask31.1": {
	            "title": Quests['ask21.1'],
	            "type": "string"
	        },
	        "ask32": {
	            "title": Quests['ask32'],
	            "type": "string",
	            "uniqueItems": false,
	            "format": "select",
	            "enum": [
	                "Yes",
	                "No"
	            ]
	        },
	        "ask31.1": {
	            "title": Quests['ask21.1'],
	            "type": "string"
	        }
	    }
	};
});