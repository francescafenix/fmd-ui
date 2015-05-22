define(['i18n!nls/questions'], function(Quests) {
	return {
	    "type": "object",
	    "title": Quests.cat7,
	    "properties": {
	        "ask16": {
	            "title": Quests['ask16'],
	            "type": "string",
	            "uniqueItems": true,
	            "format": "select",
	            "enum": [
	                "Yes",
	                "No",
	                "Not sure"
	            ]
	        },
	        "ask16.1": {
	            "title": Quests['ask16.1'],
	            "type": "string",
	        },
	        "ask16.2": {
	            "title": Quests['ask16.2'],
	            "type": "string",
	        },
	        "ask17": {
	            "title": Quests['ask16'],
	            "type": "string",
	            "uniqueItems": true,
	            "format": "select",
	            "enum": [
	                "Yes",
	                "No",
	                "Not sure"
	            ]
	        },
	        "ask17.1": {
	            "title": Quests['ask16.1'],
	            "type": "string",
	        },
	        "ask17.2": {
	            "title": Quests['ask16.2'],
	            "type": "string",
	        }
	    }
	};
});