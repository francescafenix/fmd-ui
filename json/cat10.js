define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests.cat10,
        "properties": {
            "ask21": {
                "title": Quests['ask21'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask21.1": {
                "title": Quests['ask21.1'],
                "type": "string"
            },
            "ask21.2": {
                "title": Quests['ask20.2'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [

                ]
            },
            "ask21.3": {
                "title": Quests['ask20.3'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask21.4": {
                "title": Quests['ask20.4'],
                "type": "string",
            },
            "ask22": {
                "title": Quests['ask22'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "less than 5%",
                    "between 5% and 10%",
                    "between 11 and 25%",
                    "more than 25%",
                    "not sure"
                ]
            },
            "ask23": {
                "title": Quests['ask23'],
                "type": "array",
                "uniqueItems": true,
                "items": {
                	"type": "string",
                	"enum": [ "less than 5%",
	                    "between 5% and 10%",
	                    "between 11 and 25%",
	                    "more than 25%",
	                    "not sure"]
                }
            }

        }
    };
});