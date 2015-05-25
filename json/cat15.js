define(['i18n!nls/questions'], function(Quests) {
    return {
        "type": "object",
        "title": Quests['cat15'],
        "properties": {
            "ask36": {
                "title": Quests['ask36'],
                "type": "string",
                "uniqueItems": true,
                "format": "select",
                "enum": [
                    "Yes",
                    "No"
                ]
            },
            "ask36.1": {
                "title": Quests['ask36.1'],
                "type": "object",
                "properties": {
                    "ask36.1.1": {
                        "title": Quests['ask36.1.1'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Global",
                            "Regional",
                            "National"
                        ]
                    },
                    "ask36.1.2": {
                        "title": Quests['ask36.1.2'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Closed",
                            "On-going",
                            "Pipeline"
                        ]
                    },
                    "ask36.1.3": {
                        "title": Quests['ask36.1.3'],
                        "type": "object",
                        "properties": {
                            "ask36.1.3.1": {
                                "title": Quests['ask36.1.3.1'],
                                "type": "number"
                            },
                            "ask36.1.3.2": {
                                "title": Quests['ask36.1.3.2'],
                                "type": "string",
                                "uniqueItems": true,
                                "format": "select",
                                "enum": [
                                    "National/Regional Budget",
                                    "External Support"
                                ]
                            },
                            "ask36.1.3.3": {
                                "title": Quests['ask36.1.3.3'],
                                "type": "string"
                            }
                        }
                    },
                    "ask36.2": {
                        "title": Quests['ask36.2'],
                        "type": "string"
                    },
                    "ask36.3": {
                        "title": Quests['ask36.3'],
                        "type": "string",
                        "uniqueItems": true,
                        "format": "select",
                        "enum": [
                            "Emergency Support (Immediate-short term)",
                            "Development project (medium to long term)"
                        ]
                    },
                    "ask36.4": {
                        "title": Quests['ask36.4'],
                        "type": "string",
                        "uniqueItems": false,
                        "format": "select",
                        "enum": [
                            "Epidemiology",
                            "Prevention",
                            "Early Detection",
                            "Emergency Response",
                            "Vaccination",
                            "Laboratory Capacity",
                            "Compensation",
                            "Veterinary Services Capacity",
                            "Communication",
                            "Global/Regional Coordination",
                            "Research"
                        ]
                    },
                    "ask36.4.1": {
                        "title": Quests['ask36.4.1'],
                        "type": "string"
                    },
                    "ask36.4": {
                        "title": Quests['ask36.5'],
                        "type": "string",
                        "uniqueItems": false,
                        "format": "select",
                        "enum": [
                            "FMD PCP",
                            "OIE Performance of Veterinary Services Pathway (PVS)"
                        ]
                    },
                    "ask36.5.1": {
                        "title": Quests['ask36.4.1'],
                        "type": "string"
                    }
                }
            }
        }
    };
});