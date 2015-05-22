define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests.cat6,
        "properties": {
            "ask7": {
                "title": Quests['ask7'],
                "type": "object",
                "properties": {
                    "2014 (to date)": {
                        "type": "string",
                        "enum": [
                            "Number of FMD outbreaks detected", "Serotype(s) involved (if unknown, please indicate with ‘unk’)"
                        ]
                    },
                    "2013": {
                        "type": "string",
                        "enum": [
                            "Number of FMD outbreaks detected", "Serotype(s) involved (if unknown, please indicate with ‘unk’)"
                        ]
                    },
                    "2012": {
                        "type": "string",
                        "enum": [
                            "Number of FMD outbreaks detected", "Serotype(s) involved (if unknown, please indicate with ‘unk’)"
                        ]
                    }
                }
            },
            "ask8": {
                "title": Quests['ask8'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "ask9.1": {
                "title": Quests['ask9'],
                "type": "string"
            },
            "ask9.2": {
                "title": Quests['ask9.2'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Maybe"
                ]
            },
            "ask10": {
                "title": Quests['ask10'],
                "type": "object",
                "properties": {
                    "ask10.1": {
                        "title": Quests['ask10.1'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Usually",
                            "Sometimes",
                            "No"
                        ]
                    },
                    "ask10.1.1": {
                        "title": Quests['ask10.1.1'],
                        "type": "string"
                    },
                    "ask10.2": {
                        "title": Quests['ask10.2'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Usually",
                            "Sometimes",
                            "No"
                        ]
                    },
                    "ask10.3": {
                        "title": Quests['ask10.3'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Usually",
                            "Sometimes",
                            "No"
                        ]
                    },
                    "ask10.4": {
                        "title": Quests['ask10.4'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Usually",
                            "Sometimes",
                            "No"
                        ]
                    },
                    "ask10.5": {
                        "title": Quests['ask10.4'],
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
            "ask11": {
                "title": Quests['ask11'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Animal movement restrictions",
                    "Application of biosecurity measures",
                    "Quarantine measures",
                    "Emergency vaccination"
                ]
            },
            "ask11.1": {
                "title": Quests['ask11.1'],
                "type": "string",
            },
            "ask13": {
                "title": Quests['ask13'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "ask14": {
                "title": Quests['ask14'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Yes",
                    "No",
                    "Not sure"
                ]
            },
            "ask14.1": {
                "title": Quests['ask14.1'],
                "type": "string",
            },
            "ask15": {
                "title": Quests['ask15'],
                "type": "string",
                "uniqueItems": false,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            }
        }
    };
});