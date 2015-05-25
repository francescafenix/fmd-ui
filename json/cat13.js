define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat13'],
        "properties": {
            "ask33": {
                "title": Quests['ask31'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask33.1": {
                "title": Quests['ask21.1'],
                "type": "string"
            }

        }
    };
});