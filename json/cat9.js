define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat8'],
        "properties": {
            "ask20": {
                "title": Quests['ask20'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "ask20.1": {
                "title": Quests['ask20.1'],
                "type": "string"
            },
            "ask20.2": {
                "title": Quests['ask20.2'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Small holder",
                    "Dairy production",
                    "Beef production",
                    "Small ruminants",
                    "Pigs",
                    "Mixed livestock systems",
                    "Other"
                ]
            },
            "ask20.3": {
                "title": Quests['ask20.3'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask20.4": {
                "title": Quests['ask20.4'],
                "type": "string"
            }
        }
    };
});