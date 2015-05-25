define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat14'],
        "properties": {
            "ask34": {
                "title": Quests['ask34'],
                "type": "array",
                "minItems": 1,
                "maxItems": 5,
                "items": {
                    "type": "string",
                    "title": " ",
                    "default": ""
                },
                "additionalItems": false
            },
            "ask35": {
                "title": Quests['ask35'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Epidemiology training",
                    "Laboratory training",
                    "Development of FMD control strategy",
                    "Development of laboratory capacity",
                    "Regional coordination",
                    "Training on surveillance",
                    "Training on Risk Analysis",
                    "Socio-Economic impact studies",
                    "Development/implementation of legislation and Regulation",
                    "Management of FMD emergencies",
                    "Animal Identification",
                    "Movement Control"
                ]
            },
            "ask35.1": {
                "title": Quests['ask35.1'],
                "type": "string"
            }
        }
	};
});