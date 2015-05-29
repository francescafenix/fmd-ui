define(['i18n!nls/questions'], function(Quests) {
	return {
		"type": "object",
		"title": Quests['cat2'],
		"properties": {
			"ask2": {
				"title": Quests['ask2'],
				"type": "object",
				"properties": {
						"ask2.1":{
						"title": Quests['ask2.1'],
						"type":"object"
						"properties":{
									"ask2.1.1":{
									"title": Quests['ask2.1.1']
									"type":	"object",
									"properties": {
													"ask2.1.1.1":{ 
													"title": Quests['ask2.1.1.1']
													"type": "string"
													},
													
													"ask2.1.1.2": {
													"title":Quests['ask2.1.1.1.2']
													"type": "string"
												}
						
										}
				                        },
									"ask2.1.2":{
									"title": Quests['ask2.1.2']
									"type":	"object",
									"properties": {
													"ask2.1.2.1":{ 
													"title": Quests['ask2.1.2.1']
													"type": "string"
													},
													
													"ask2.1.1.2": {
													"title":Quests['ask2.1.2.2']
													"type": "string"
												}
						
										}
				                        },
									"ask2.1.3":{
									"title": Quests['ask2.1.3']
									"type":	"object",
									"properties": {
													"ask2.1.3.1":{ 
													"title": Quests['ask2.1.3.1']
													"type": "string"
													},
													
													"ask2.1.3.2": {
													"title":Quests['ask2.1.3.2']
													"type": "string"
												}
						
										}
				                        },
									"ask2.1.4":{
									"title": Quests['ask2.1.4']
									"type":	"object",
									"properties": {
													"ask2.1.4.1":{ 
													"title": Quests['ask2.1.4.1']
													"type": "string"
													},
													
													"ask2.1.4.2": {
													"title":Quests['ask2.1.4.2']
													"type": "string"
												}
						
										}
				                        },
									"ask2.1.5":{
									"title": Quests['ask2.5.1']
									"type":	"object",
									"properties": {
													"ask2.1.5.1":{ 
													"title": Quests['ask2.1.5.1']
													"type": "string"
													},
													
													"ask2.1.5.2": {
													"title":Quests['ask2.1.5.2']
													"type": "string"
												}
						
										}
				                        },
									"ask2.1.6":{
									"title": Quests['ask2.1.6']
									"type":	"object",
									"properties": {
													"ask2.1.6.1":{ 
													"title": Quests['ask2.1.6.1']
													"type": "string"
													},
													
													"ask2.1.1.2": {
													"title":Quests['ask2.1.6.2']
													"type": "string"
												}
						
										}
				                        }			
				
				                        }
										},
						"ask2.2":{
				
						"title": Quests['ask2.2'],
						"type":"object"
						"properties":{
									"ask2.2.1":{
									"title": Quests['ask2.2.1']
									"type":	"object",
									"properties": {
													"ask2.2.1.1":{ 
													"title": Quests['ask2.2.1.1']
													"type": "string"
													},
													
													"ask2.1.1.2": {
													"title":Quests['ask2.2.1.1.2']
													"type": "string",
													 "uniqueItems": true,
													"format": "select",
													"enum": [
																"present",
																"absent"
																]
												}
						
										}
				                        },
									"ask2.2.2":{
									"title": Quests['ask2.2.2']
									"type":	"object",
									"properties": {
													"ask2.2.2.1":{ 
													"title": Quests['ask2.2.2.1']
													"type": "string"
													},
													
													"ask2.2.1.2": {
													"title":Quests['ask2.2.2.2']
													"type": "string",
													"uniqueItems": true,
													"format": "select",
													"enum": [
																"present",
																"absent"
																]
												}
						
										}
				                        },
									"ask2.2.3":{
									"title": Quests['ask2.2.3']
									"type":	"object",
									"properties": {
													"ask2.2.3.1":{ 
													"title": Quests['ask2.2.3.1']
													"type": "string",
													"uniqueItems": true,
													"format": "select",
													"enum": [
																"present",
																"absent"
																]
													},
													
													"ask2.2.3.2": {
													"title":Quests['ask2.2.3.2']
													"type": "string"
												}
						
										}
				                        },
									"ask2.2.4":{
									"title": Quests['ask2.2.4']
									"type":	"object",
									"properties": {
													"ask2.2.4.1":{ 
													"title": Quests['ask2.2.4.1']
													"type": "string"
													},
													
													"ask2.2.4.2": {
													"title":Quests['ask2.2.4.2']
													"type": "string",
													"uniqueItems": true,
													"format": "select",
													"enum": [
																"present",
																"absent"
																]
												}
						
										}
				                        },
									"ask2.2.5":{
									"title": Quests['ask2.2.1']
									"type":	"object",
									"properties": {
													"ask2.2.5.1":{ 
													"title": Quests['ask2.2.5.1']
													"type": "string"
													},
													
													"ask2.2.5.2": {
													"title":Quests['ask2.2.5.2']
													"type": "string",
													"uniqueItems": true,
													"format": "select",
													"enum": [
																"present",
																"absent"
																]
												}
						
										}
				                        },
									"ask2.2.6":{
									"title": Quests['ask2.2.6']
									"type":	"object",
									"properties": {
													"ask2.2.6.1":{ 
													"title": Quests['ask2.2.6.1']
													"type": "string"
													},
													
													"ask2.2.1.2": {
													"title":Quests['ask2.2.6.2']
													"type": "string",
													"uniqueItems": true,
													"format": "select",
													"enum": [
																"present",
																"absent"
																]
												}
						
										}
				                        }			
				
				                        }
				
				
				
				
				
				
				                  }
								
				
				
							}
			}
		}
	};
});
