define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat8'],
        "properties": {
            "ask18": {
                "title": Quests['ask18'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "ask18.1": {
                "title": Quests['ask18.1'],
                "type": "object",
                "properties": {
                    "ask18.1.1": {
                        "title": Quests['ask18.1.1'],
                        "type": "string"
                    },
                    "ask18.1.2": {
                        "title": Quests['ask18.1.2'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Yes",
                            "No",
                            "Not sure"
                        ]
                    }
                }
            },
            "aks18.2": {
                "title": Quests['ask18.2'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "aks19": {
                "title": Quests['ask19'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            }
        }
    };
});