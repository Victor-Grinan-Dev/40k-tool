const data = {
    "gameSystem": {
        "xmlns": "http://www.battlescribe.net/schema/gameSystemSchema",
        "id": "sys-352e-adc2-7639-d6a9",
        "name": "Warhammer 40,000 10th Edition",
        "revision": "21",
        "battleScribeVersion": "2.03",
        "type": "gameSystem",
        "publications": {
            "publication": [
                {
                    "id": "48fc-15aa-b307-9443",
                    "name": "10th Edition Core Rules",
                    "shortName": "10th Ed Core"
                },
                {
                    "name": "Github",
                    "hidden": "false",
                    "id": "8db3-575d-91b-47f8",
                    "shortName": "BSData/wh40k-10e",
                    "publisherUrl": "https://github.com/BSData/wh40k-10e"
                }
            ]
        },
        "costTypes": {
            "costType": [
                {
                    "id": "51b2-306e-1021-d207",
                    "name": "pts",
                    "defaultCostLimit": "-1",
                    "hidden": "false",
                    "modifiers": {
                        "modifier": {
                            "type": "set",
                            "value": "true",
                            "field": "hidden",
                            "conditionGroups": {
                                "conditionGroup": {
                                    "type": "and",
                                    "conditions": {
                                        "condition": [
                                            {
                                                "type": "atLeast",
                                                "value": "1",
                                                "field": "selections",
                                                "scope": "roster",
                                                "childId": "cac3-71d1-ea4b-795d",
                                                "shared": "true",
                                                "includeChildSelections": "true",
                                                "includeChildForces": "true"
                                            },
                                            {
                                                "type": "instanceOf",
                                                "value": "1",
                                                "field": "selections",
                                                "scope": "self",
                                                "childId": "roster",
                                                "shared": "true"
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    "name": "Crusade Points",
                    "id": "b03b-c239-15a5-da55",
                    "defaultCostLimit": "-1",
                    "hidden": "true",
                    "modifiers": {
                        "modifier": {
                            "type": "set",
                            "value": "false",
                            "field": "hidden",
                            "scope": "roster",
                            "conditions": {
                                "condition": {
                                    "type": "instanceOf",
                                    "value": "1",
                                    "field": "selections",
                                    "scope": "self",
                                    "childId": "cac3-71d1-ea4b-795d",
                                    "shared": "true",
                                    "includeChildSelections": "true",
                                    "includeChildForces": "true"
                                }
                            }
                        }
                    }
                },
                {
                    "name": "Crusade: Battle Honours",
                    "id": "75bb-ded1-c86d-bdf0",
                    "defaultCostLimit": "-1",
                    "hidden": "true",
                    "comment": "Tracking number for Crusade"
                },
                {
                    "name": "Crusade: Experience",
                    "id": "a623-fe74-1d33-cddf",
                    "defaultCostLimit": "-1",
                    "hidden": "true",
                    "comment": "Tracking number for Crusade"
                },
                {
                    "name": "Crusade: Weapon Modifications",
                    "id": "716d-91b7-d55a-1022",
                    "defaultCostLimit": "-1",
                    "hidden": "true",
                    "comment": "Tracking number for Crusade"
                }
            ]
        },
        "profileTypes": {
            "profileType": [
                {
                    "id": "c547-1836-d8a-ff4f",
                    "name": "Unit",
                    "characteristicTypes": {
                        "characteristicType": [
                            {
                                "id": "e703-ecb6-5ce7-aec1",
                                "name": "M"
                            },
                            {
                                "id": "d29d-cf75-fc2d-34a4",
                                "name": "T"
                            },
                            {
                                "id": "450-a17e-9d5e-29da",
                                "name": "SV"
                            },
                            {
                                "id": "750a-a2ec-90d3-21fe",
                                "name": "W"
                            },
                            {
                                "id": "58d2-b879-49c7-43bc",
                                "name": "LD"
                            },
                            {
                                "id": "bef7-942a-1a23-59f8",
                                "name": "OC"
                            }
                        ]
                    }
                },
                {
                    "id": "f77d-b953-8fa4-b762",
                    "name": "Ranged Weapons",
                    "characteristicTypes": {
                        "characteristicType": [
                            {
                                "id": "9896-9419-16a1-92fc",
                                "name": "Range"
                            },
                            {
                                "id": "3bb-c35f-f54-fb08",
                                "name": "A"
                            },
                            {
                                "id": "94d-8a98-cf90-183e",
                                "name": "BS"
                            },
                            {
                                "id": "2229-f494-25db-c5d3",
                                "name": "S"
                            },
                            {
                                "id": "9ead-8a10-520-de15",
                                "name": "AP"
                            },
                            {
                                "id": "a354-c1c8-a745-f9e3",
                                "name": "D"
                            },
                            {
                                "id": "7f1b-8591-2fcf-d01c",
                                "name": "Keywords"
                            }
                        ]
                    }
                },
                {
                    "id": "9cc3-6d83-4dd3-9b64",
                    "name": "Abilities",
                    "characteristicTypes": {
                        "characteristicType": {
                            "id": "9b8f-694b-e5e-b573",
                            "name": "Description"
                        }
                    }
                },
                {
                    "id": "8a40-4aaa-c780-9046",
                    "name": "Melee Weapons",
                    "characteristicTypes": {
                        "characteristicType": [
                            {
                                "id": "914c-b413-91e3-a132",
                                "name": "Range"
                            },
                            {
                                "id": "2337-daa1-6682-b110",
                                "name": "A"
                            },
                            {
                                "id": "95d1-95f-45b4-11d6",
                                "name": "WS"
                            },
                            {
                                "id": "ab33-d393-96ce-ccba",
                                "name": "S"
                            },
                            {
                                "id": "41a0-1301-112a-e2f2",
                                "name": "AP"
                            },
                            {
                                "id": "3254-9fe6-d824-513e",
                                "name": "D"
                            },
                            {
                                "id": "893f-9000-ccf7-648e",
                                "name": "Keywords"
                            }
                        ]
                    }
                },
                {
                    "id": "74f8-5443-9d6d-1f1e",
                    "name": "Transport",
                    "characteristicTypes": {
                        "characteristicType": {
                            "id": "30f2-be70-861d-1b84",
                            "name": "Capacity"
                        }
                    }
                }
            ]
        },
        "categoryEntries": {
            "categoryEntry": [
                {
                    "id": "9cfd-1c32-585f-7d5c",
                    "name": "Character",
                    "hidden": "false"
                },
                {
                    "id": "4f3a-f0f7-6647-348d",
                    "name": "Epic Hero",
                    "hidden": "false"
                },
                {
                    "id": "cf47-a0d7-7207-29dc",
                    "name": "Infantry",
                    "hidden": "false"
                },
                {
                    "id": "9693-cf84-fe69-37a9",
                    "name": "Monster",
                    "hidden": "false"
                },
                {
                    "id": "e338-111e-d0c6-b687",
                    "name": "Battleline",
                    "hidden": "false"
                },
                {
                    "id": "ba07-411c-2832-1f79",
                    "name": "Dedicated Transport",
                    "hidden": "false"
                },
                {
                    "id": "14a0-40c9-2748-ae6e",
                    "name": "Mounted",
                    "hidden": "false"
                },
                {
                    "id": "2d7f-1892-2fd0-e29c",
                    "name": "Captain",
                    "hidden": "false"
                },
                {
                    "id": "5a61-81ac-eb7c-a87e",
                    "name": "Grenades",
                    "hidden": "false"
                },
                {
                    "id": "aff3-d6a3-2a95-9dc",
                    "name": "Imperium",
                    "hidden": "false"
                },
                {
                    "id": "4ac9-fd30-1e3d-b249",
                    "name": "Configuration",
                    "hidden": "false"
                },
                {
                    "id": "1160-70ae-a862-b1a8",
                    "name": "Unit",
                    "hidden": "false"
                },
                {
                    "id": "c619-2086-bbcf-69c9",
                    "name": "Fly",
                    "hidden": "false"
                },
                {
                    "id": "6df-937-16bc-8c1a",
                    "name": "Smoke",
                    "hidden": "false"
                },
                {
                    "id": "13bf-2bee-3ae0-b414",
                    "name": "Psyker",
                    "hidden": "false"
                },
                {
                    "id": "dbd4-63-af05-998",
                    "name": "Vehicle",
                    "hidden": "false"
                },
                {
                    "id": "6dda-e157-334d-e93a",
                    "name": "Walker",
                    "hidden": "false"
                },
                {
                    "id": "75e8-57c4-40e3-1817",
                    "name": "Transport",
                    "hidden": "false"
                },
                {
                    "id": "63f1-e6e8-f6f6-a4f0",
                    "name": "Aircraft",
                    "hidden": "false"
                },
                {
                    "id": "19d7-9c74-2140-5851",
                    "name": "Fortification",
                    "hidden": "false"
                },
                {
                    "id": "d666-e2c9-b6cc-5716",
                    "name": "Towering",
                    "hidden": "false"
                },
                {
                    "id": "5929-ad51-d006-e008",
                    "name": "Titanic",
                    "hidden": "false"
                },
                {
                    "id": "4c3e-9310-a516-3590",
                    "name": "Beast",
                    "hidden": "false"
                },
                {
                    "id": "4c00-2578-faf5-6918",
                    "name": "Chaos",
                    "hidden": "false"
                },
                {
                    "id": "bb67-f191-6562-acc7",
                    "name": "Faction: Chaos Knights",
                    "hidden": "false"
                },
                {
                    "id": "d1d8-6ae0-1be7-e9e",
                    "name": "Faction: Tyranids",
                    "hidden": "false"
                },
                {
                    "id": "1015-db48-a2fa-c7da",
                    "name": "Faction: Drukhari",
                    "hidden": "false",
                    "constraints": {
                        "constraint": {
                            "type": "max",
                            "value": "-1",
                            "field": "51b2-306e-1021-d207",
                            "scope": "force",
                            "shared": "true",
                            "id": "4d8f-6e09-606e-788e",
                            "includeChildSelections": "true",
                            "includeChildForces": "false"
                        }
                    },
                    "modifiers": {
                        "modifier": [
                            {
                                "type": "set",
                                "value": "500",
                                "field": "4d8f-6e09-606e-788e",
                                "id": "f5a0-b59-1410-a903",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "and",
                                        "conditions": {
                                            "condition": [
                                                {
                                                    "type": "notInstanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "primary-catalogue",
                                                    "childId": "38de-521f-1ce0-44a0",
                                                    "shared": "true",
                                                    "includeChildSelections": "false"
                                                },
                                                {
                                                    "type": "greaterThan",
                                                    "value": "0",
                                                    "field": "selections",
                                                    "scope": "force",
                                                    "childId": "d62d-db22-4893-4bc0",
                                                    "shared": "true",
                                                    "includeChildSelections": "true"
                                                }
                                            ]
                                        }
                                    }
                                }
                            },
                            {
                                "type": "set",
                                "value": "1000",
                                "field": "4d8f-6e09-606e-788e",
                                "id": "2e33-3f3b-a0f6-a6bd",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "and",
                                        "conditions": {
                                            "condition": [
                                                {
                                                    "type": "notInstanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "primary-catalogue",
                                                    "childId": "38de-521f-1ce0-44a0",
                                                    "shared": "true",
                                                    "includeChildSelections": "false"
                                                },
                                                {
                                                    "type": "greaterThan",
                                                    "value": "0",
                                                    "field": "selections",
                                                    "scope": "force",
                                                    "childId": "baf8-997f-e323-a090",
                                                    "shared": "true",
                                                    "includeChildSelections": "true"
                                                }
                                            ]
                                        }
                                    }
                                }
                            },
                            {
                                "type": "set",
                                "value": "1500",
                                "field": "4d8f-6e09-606e-788e",
                                "id": "2e5f-b5f2-28bb-573e",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "and",
                                        "conditions": {
                                            "condition": [
                                                {
                                                    "type": "notInstanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "primary-catalogue",
                                                    "childId": "38de-521f-1ce0-44a0",
                                                    "shared": "true",
                                                    "includeChildSelections": "false"
                                                },
                                                {
                                                    "type": "greaterThan",
                                                    "value": "0",
                                                    "field": "selections",
                                                    "scope": "force",
                                                    "childId": "4204-82d0-908c-a62a",
                                                    "shared": "true",
                                                    "includeChildSelections": "true"
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    "id": "4378-1827-4988-be4e",
                    "name": "Faction: Aeldari",
                    "hidden": "false"
                },
                {
                    "id": "fa45-57e-930e-602b",
                    "name": "Faction: Astra Militarum",
                    "hidden": "false"
                },
                {
                    "id": "b5e4-3253-c157-54fd",
                    "name": "Faction: Imperial Knights",
                    "hidden": "false",
                    "modifiers": {
                        "modifier": [
                            {
                                "type": "set",
                                "value": "1",
                                "field": "807c-44c1-6f7d-dfb8",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "and",
                                        "conditions": {
                                            "condition": [
                                                {
                                                    "type": "notInstanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "primary-catalogue",
                                                    "childId": "25dd-7aa0-6bf4-f2d5",
                                                    "shared": "true",
                                                    "includeChildForces": "false"
                                                },
                                                {
                                                    "type": "equalTo",
                                                    "value": "0",
                                                    "field": "selections",
                                                    "scope": "force",
                                                    "childId": "4c40-ab9-54af-d290",
                                                    "shared": "true"
                                                }
                                            ]
                                        },
                                        "conditionGroups": {
                                            "conditionGroup": {
                                                "type": "or",
                                                "conditions": {
                                                    "condition": [
                                                        {
                                                            "type": "greaterThan",
                                                            "value": "0",
                                                            "field": "selections",
                                                            "scope": "roster",
                                                            "childId": "e4d6-1a77-132b-f39d",
                                                            "shared": "true",
                                                            "includeChildSelections": "true",
                                                            "includeChildForces": "true"
                                                        },
                                                        {
                                                            "type": "greaterThan",
                                                            "value": "0",
                                                            "field": "selections",
                                                            "scope": "roster",
                                                            "childId": "af4c-b971-a31c-669c",
                                                            "shared": "true",
                                                            "includeChildSelections": "true",
                                                            "includeChildForces": "true"
                                                        },
                                                        {
                                                            "type": "greaterThan",
                                                            "value": "0",
                                                            "field": "selections",
                                                            "scope": "roster",
                                                            "childId": "481c-3b2e-5c99-c248",
                                                            "shared": "true",
                                                            "includeChildSelections": "true",
                                                            "includeChildForces": "true"
                                                        },
                                                        {
                                                            "type": "greaterThan",
                                                            "value": "0",
                                                            "field": "selections",
                                                            "scope": "roster",
                                                            "childId": "f76f-29c1-de9-74c2",
                                                            "shared": "true",
                                                            "includeChildSelections": "true",
                                                            "includeChildForces": "true"
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "type": "set",
                                "value": "3",
                                "field": "807c-44c1-6f7d-dfb8",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "and",
                                        "conditions": {
                                            "condition": [
                                                {
                                                    "type": "notInstanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "primary-catalogue",
                                                    "childId": "25dd-7aa0-6bf4-f2d5",
                                                    "shared": "true",
                                                    "includeChildForces": "false"
                                                },
                                                {
                                                    "type": "atLeast",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "force",
                                                    "childId": "4c40-ab9-54af-d290",
                                                    "shared": "true"
                                                }
                                            ]
                                        },
                                        "conditionGroups": {
                                            "conditionGroup": {
                                                "type": "or",
                                                "conditions": {
                                                    "condition": [
                                                        {
                                                            "type": "equalTo",
                                                            "value": "0",
                                                            "field": "selections",
                                                            "scope": "roster",
                                                            "childId": "e4d6-1a77-132b-f39d",
                                                            "shared": "true",
                                                            "includeChildSelections": "true",
                                                            "includeChildForces": "true"
                                                        },
                                                        {
                                                            "type": "equalTo",
                                                            "value": "0",
                                                            "field": "selections",
                                                            "scope": "roster",
                                                            "childId": "af4c-b971-a31c-669c",
                                                            "shared": "true",
                                                            "includeChildSelections": "true",
                                                            "includeChildForces": "true"
                                                        },
                                                        {
                                                            "type": "equalTo",
                                                            "value": "0",
                                                            "field": "selections",
                                                            "scope": "roster",
                                                            "childId": "f76f-29c1-de9-74c2",
                                                            "shared": "true",
                                                            "includeChildSelections": "true",
                                                            "includeChildForces": "true"
                                                        },
                                                        {
                                                            "type": "equalTo",
                                                            "value": "0",
                                                            "field": "selections",
                                                            "scope": "roster",
                                                            "childId": "481c-3b2e-5c99-c248",
                                                            "shared": "true",
                                                            "includeChildSelections": "true",
                                                            "includeChildForces": "true"
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "type": "set",
                                "value": "0",
                                "field": "807c-44c1-6f7d-dfb8",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "and",
                                        "conditions": {
                                            "condition": [
                                                {
                                                    "type": "notInstanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "primary-catalogue",
                                                    "childId": "25dd-7aa0-6bf4-f2d5",
                                                    "shared": "true",
                                                    "includeChildForces": "false"
                                                },
                                                {
                                                    "type": "atLeast",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "force",
                                                    "childId": "4c40-ab9-54af-d290",
                                                    "shared": "true"
                                                }
                                            ]
                                        },
                                        "conditionGroups": {
                                            "conditionGroup": {
                                                "type": "or",
                                                "conditions": {
                                                    "condition": [
                                                        {
                                                            "type": "greaterThan",
                                                            "value": "0",
                                                            "field": "selections",
                                                            "scope": "roster",
                                                            "childId": "e4d6-1a77-132b-f39d",
                                                            "shared": "true",
                                                            "includeChildSelections": "true",
                                                            "includeChildForces": "true"
                                                        },
                                                        {
                                                            "type": "greaterThan",
                                                            "value": "0",
                                                            "field": "selections",
                                                            "scope": "roster",
                                                            "childId": "af4c-b971-a31c-669c",
                                                            "shared": "true",
                                                            "includeChildSelections": "true",
                                                            "includeChildForces": "true"
                                                        },
                                                        {
                                                            "type": "greaterThan",
                                                            "value": "0",
                                                            "field": "selections",
                                                            "scope": "roster",
                                                            "childId": "f76f-29c1-de9-74c2",
                                                            "shared": "true",
                                                            "includeChildSelections": "true",
                                                            "includeChildForces": "true"
                                                        },
                                                        {
                                                            "type": "greaterThan",
                                                            "value": "0",
                                                            "field": "selections",
                                                            "scope": "roster",
                                                            "childId": "481c-3b2e-5c99-c248",
                                                            "shared": "true",
                                                            "includeChildSelections": "true",
                                                            "includeChildForces": "true"
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "constraints": {
                        "constraint": {
                            "type": "max",
                            "value": "-1",
                            "field": "selections",
                            "scope": "force",
                            "shared": "true",
                            "id": "807c-44c1-6f7d-dfb8",
                            "includeChildSelections": "true",
                            "includeChildForces": "true"
                        }
                    }
                },
                {
                    "id": "1e42-dfae-cbdd-207d",
                    "name": "Faction: Heretic Astartes",
                    "hidden": "false"
                },
                {
                    "id": "fd71-afa6-b13b-7fda",
                    "name": "Faction: Adepta Sororitas",
                    "hidden": "false"
                },
                {
                    "id": "ee0-cf31-4fb5-6b26",
                    "name": "Faction: Necrons",
                    "hidden": "false"
                },
                {
                    "id": "571f-ec3a-a5a2-751a",
                    "name": "Faction: Legiones Daemonica",
                    "hidden": "false",
                    "constraints": {
                        "constraint": {
                            "type": "max",
                            "value": "-1",
                            "field": "51b2-306e-1021-d207",
                            "scope": "force",
                            "shared": "true",
                            "id": "f70b-465d-493f-52e3",
                            "includeChildSelections": "true"
                        }
                    },
                    "modifiers": {
                        "modifier": [
                            {
                                "type": "set",
                                "value": "250",
                                "field": "f70b-465d-493f-52e3",
                                "id": "4796-8c50-4a43-66c8",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "and",
                                        "conditions": {
                                            "condition": [
                                                {
                                                    "type": "notInstanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "primary-catalogue",
                                                    "childId": "d265-877b-e03d-30ca",
                                                    "shared": "true"
                                                },
                                                {
                                                    "type": "greaterThan",
                                                    "value": "0",
                                                    "field": "selections",
                                                    "scope": "force",
                                                    "childId": "d62d-db22-4893-4bc0",
                                                    "shared": "true",
                                                    "includeChildSelections": "true"
                                                }
                                            ]
                                        }
                                    }
                                }
                            },
                            {
                                "type": "set",
                                "value": "500",
                                "field": "f70b-465d-493f-52e3",
                                "id": "bc6-87f4-482b-c1cd",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "and",
                                        "conditions": {
                                            "condition": [
                                                {
                                                    "type": "notInstanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "primary-catalogue",
                                                    "childId": "d265-877b-e03d-30ca",
                                                    "shared": "true"
                                                },
                                                {
                                                    "type": "greaterThan",
                                                    "value": "0",
                                                    "field": "selections",
                                                    "scope": "force",
                                                    "childId": "baf8-997f-e323-a090",
                                                    "shared": "true",
                                                    "includeChildSelections": "true"
                                                }
                                            ]
                                        }
                                    }
                                }
                            },
                            {
                                "type": "set",
                                "value": "750",
                                "field": "f70b-465d-493f-52e3",
                                "id": "b336-af46-e756-ab15",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "and",
                                        "conditions": {
                                            "condition": [
                                                {
                                                    "type": "notInstanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "primary-catalogue",
                                                    "childId": "d265-877b-e03d-30ca",
                                                    "shared": "true"
                                                },
                                                {
                                                    "type": "greaterThan",
                                                    "value": "0",
                                                    "field": "selections",
                                                    "scope": "force",
                                                    "childId": "4204-82d0-908c-a62a",
                                                    "shared": "true",
                                                    "includeChildSelections": "true"
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    "id": "b2a9-ede5-7a83-4da8",
                    "name": "Slaanesh",
                    "hidden": "false"
                },
                {
                    "id": "ed0d-8e2a-225c-2340",
                    "name": "Nurgle",
                    "hidden": "false"
                },
                {
                    "id": "4bd-5ee0-f179-2fc5",
                    "name": "Khorne",
                    "hidden": "false"
                },
                {
                    "id": "b188-114f-6ba5-79a1",
                    "name": "Tzeentch",
                    "hidden": "false"
                },
                {
                    "id": "6e7-40c-58d9-e402",
                    "name": "Faction: Adeptus Astartes",
                    "hidden": "false"
                },
                {
                    "id": "5418-f86b-6e76-c5a",
                    "name": "Faction: Adeptus Mechanicus",
                    "hidden": "false"
                },
                {
                    "id": "226b-cf1e-353a-ae7f",
                    "name": "Faction: Genestealer Cults",
                    "hidden": "false"
                },
                {
                    "id": "bd1d-c1a5-6ca2-c791",
                    "name": "Faction: World Eaters",
                    "hidden": "false"
                },
                {
                    "id": "8474-765-16a9-f00d",
                    "name": "Faction: Leagues of Votann",
                    "hidden": "false"
                },
                {
                    "id": "9888-ddb2-a141-6037",
                    "name": "Faction: Death Guard",
                    "hidden": "false"
                },
                {
                    "id": "3d58-2655-391e-ecc",
                    "name": "Faction: T'au Empire",
                    "hidden": "false"
                },
                {
                    "id": "eea5-aeaf-bbf0-d5ee",
                    "name": "Faction: Adeptus Custodes",
                    "hidden": "false"
                },
                {
                    "id": "56cc-5f43-2403-8da0",
                    "name": "Faction: Orks",
                    "hidden": "false"
                },
                {
                    "id": "7002-1fbb-7571-e8e7",
                    "name": "Faction: Thousand Sons",
                    "hidden": "false"
                },
                {
                    "id": "d564-3284-bf44-b873",
                    "name": "Faction: Grey Knights",
                    "hidden": "false"
                },
                {
                    "id": "5128-90b-e4a5-dcbd",
                    "name": "Faction: Agents of the Imperium",
                    "hidden": "false"
                },
                {
                    "id": "aab1-4f05-fabe-5ba5",
                    "name": "Faction: Dark Angels",
                    "hidden": "false"
                },
                {
                    "id": "65e4-13-4fa8-b36c",
                    "name": "Faction: Salamanders",
                    "hidden": "false"
                },
                {
                    "id": "d39c-9989-db7f-d815",
                    "name": "Faction: Deathwatch",
                    "hidden": "false"
                },
                {
                    "id": "62ac-ef42-27b4-ae7",
                    "name": "Faction: Blood Angels",
                    "hidden": "false"
                },
                {
                    "id": "1a2d-2f00-c054-4dcb",
                    "name": "Faction: Ultramarines",
                    "hidden": "false"
                },
                {
                    "id": "a0d9-c115-2a-8330",
                    "name": "Faction: Space Wolves",
                    "hidden": "false"
                },
                {
                    "id": "9249-acae-2882-d95",
                    "name": "Faction: Black Templars",
                    "hidden": "false"
                },
                {
                    "id": "84b7-7194-3b84-1b0c",
                    "name": "Faction: Raven Guard",
                    "hidden": "false"
                },
                {
                    "id": "b88e-1b0c-b79f-5cdf",
                    "name": "Faction: Iron Hands",
                    "hidden": "false"
                },
                {
                    "id": "97aa-d0e4-71c7-96c3",
                    "name": "Faction: Imperial Fists",
                    "hidden": "false"
                },
                {
                    "id": "5c0e-2250-dd3a-1df9",
                    "name": "Faction: White Scars",
                    "hidden": "false"
                },
                {
                    "id": "5c0e-4c31-d51b-e470",
                    "name": "Warlord",
                    "hidden": "false",
                    "constraints": {
                        "constraint": [
                            {
                                "field": "selections",
                                "scope": "roster",
                                "value": "1",
                                "percentValue": "false",
                                "shared": "true",
                                "includeChildSelections": "true",
                                "includeChildForces": "false",
                                "id": "16ac-a6c9-6d9a-d6d5",
                                "type": "min"
                            },
                            {
                                "field": "selections",
                                "scope": "roster",
                                "value": "1",
                                "percentValue": "false",
                                "shared": "true",
                                "includeChildSelections": "true",
                                "includeChildForces": "false",
                                "id": "3d50-6d29-4f91-8f73",
                                "type": "max"
                            }
                        ]
                    }
                },
                {
                    "id": "9c0e-7e25-4580-e439",
                    "name": "Daemon",
                    "hidden": "false"
                },
                {
                    "id": "6474-0ce3-6b5a-120c",
                    "name": "Primarch",
                    "hidden": "false"
                },
                {
                    "id": "4f09-0141-6c70-6c5a",
                    "name": "Daemon Prince",
                    "hidden": "false"
                },
                {
                    "id": "b00b-5bae-444f-964e",
                    "name": "Swarm",
                    "hidden": "false"
                },
                {
                    "id": "2471-e2e0-3f55-d6cb",
                    "name": "Drone",
                    "hidden": "false"
                },
                {
                    "id": "7850-cc5a-c191-b80d",
                    "name": "Great Devourer",
                    "hidden": "false"
                },
                {
                    "name": "Retinue",
                    "hidden": "false",
                    "id": "cc77-a53-fca8-f48e"
                },
                {
                    "name": "Terminator",
                    "hidden": "false",
                    "id": "740a-892c-8958-defa"
                },
                {
                    "name": "Rhino",
                    "hidden": "false",
                    "id": "50a2-5557-84bb-ca4d"
                },
                {
                    "id": "dda2-bb0a-215e-ad9c",
                    "name": "Jump Pack",
                    "hidden": "false"
                },
                {
                    "name": "Armiger",
                    "id": "4c40-ab9-54af-d290",
                    "hidden": "false"
                },
                {
                    "name": "Questoris",
                    "id": "e4d6-1a77-132b-f39d"
                },
                {
                    "name": "Dominus",
                    "id": "af4c-b971-a31c-669c"
                },
                {
                    "name": "Allied Units",
                    "hidden": "false",
                    "id": "887b-ab87-92a2-20f5",
                    "modifiers": {
                        "modifier": [
                            {
                                "type": "set",
                                "value": "Brood Brothers",
                                "field": "name",
                                "conditions": {
                                    "condition": {
                                        "type": "instanceOf",
                                        "value": "1",
                                        "field": "selections",
                                        "scope": "primary-catalogue",
                                        "childId": "3bdf-a114-5035-c6ac",
                                        "shared": "true",
                                        "includeChildSelections": "true",
                                        "includeChildForces": "true"
                                    }
                                }
                            },
                            {
                                "type": "set",
                                "value": "500",
                                "field": "4d8f-6e09-606e-788e",
                                "id": "4ff4-f313-206c-fcb0",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "and",
                                        "conditions": {
                                            "condition": [
                                                {
                                                    "type": "instanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "primary-catalogue",
                                                    "childId": "3bdf-a114-5035-c6ac",
                                                    "shared": "true",
                                                    "includeChildSelections": "true",
                                                    "includeChildForces": "true"
                                                },
                                                {
                                                    "type": "greaterThan",
                                                    "value": "0",
                                                    "field": "selections",
                                                    "scope": "force",
                                                    "childId": "d62d-db22-4893-4bc0",
                                                    "shared": "true",
                                                    "includeChildSelections": "true",
                                                    "includeChildForces": "true"
                                                }
                                            ]
                                        }
                                    }
                                }
                            },
                            {
                                "type": "set",
                                "value": "1000",
                                "field": "4d8f-6e09-606e-788e",
                                "id": "1225-b57b-bfa5-1448",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "and",
                                        "conditions": {
                                            "condition": [
                                                {
                                                    "type": "greaterThan",
                                                    "value": "0",
                                                    "field": "selections",
                                                    "scope": "force",
                                                    "childId": "baf8-997f-e323-a090",
                                                    "shared": "true",
                                                    "includeChildSelections": "true",
                                                    "includeChildForces": "true"
                                                },
                                                {
                                                    "type": "instanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "primary-catalogue",
                                                    "childId": "3bdf-a114-5035-c6ac",
                                                    "shared": "true",
                                                    "includeChildSelections": "true",
                                                    "includeChildForces": "true"
                                                }
                                            ]
                                        }
                                    }
                                }
                            },
                            {
                                "type": "set",
                                "value": "1500",
                                "field": "4d8f-6e09-606e-788e",
                                "id": "3d8e-d570-a4d2-6ed8",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "and",
                                        "conditions": {
                                            "condition": [
                                                {
                                                    "type": "greaterThan",
                                                    "value": "0",
                                                    "field": "selections",
                                                    "scope": "force",
                                                    "childId": "4204-82d0-908c-a62a",
                                                    "shared": "true",
                                                    "includeChildSelections": "true",
                                                    "includeChildForces": "true"
                                                },
                                                {
                                                    "type": "instanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "primary-catalogue",
                                                    "childId": "3bdf-a114-5035-c6ac",
                                                    "shared": "true",
                                                    "includeChildSelections": "true",
                                                    "includeChildForces": "true"
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "constraints": {
                        "constraint": {
                            "type": "max",
                            "value": "-1",
                            "field": "51b2-306e-1021-d207",
                            "scope": "roster",
                            "shared": "true",
                            "id": "4d8f-6e09-606e-788e",
                            "includeChildSelections": "true",
                            "includeChildForces": "true",
                            "negative": "false"
                        }
                    }
                },
                {
                    "name": "Acastus",
                    "hidden": "false",
                    "id": "f76f-29c1-de9-74c2"
                },
                {
                    "name": "Cerastus",
                    "hidden": "false",
                    "id": "481c-3b2e-5c99-c248"
                },
                {
                    "name": "Artillery",
                    "hidden": "false",
                    "id": "8cab-448d-37b7-32bc"
                },
                {
                    "name": "Order of Battle",
                    "id": "ac7e-be7b-eb02-4752",
                    "hidden": "false"
                }
            ]
        },
        "forceEntries": {
            "forceEntry": [
                {
                    "id": "bb9d-299a-ed60-2d8a",
                    "name": "Army Roster",
                    "hidden": "false",
                    "categoryLinks": {
                        "categoryLink": [
                            {
                                "id": "d5de-ee57-ad4b-e4b7",
                                "name": "Configuration",
                                "hidden": "false",
                                "targetId": "4ac9-fd30-1e3d-b249",
                                "primary": "false"
                            },
                            {
                                "id": "16fc-8e39-ee82-cf96",
                                "name": "Epic Hero",
                                "hidden": "false",
                                "targetId": "4f3a-f0f7-6647-348d",
                                "primary": "false"
                            },
                            {
                                "id": "c932-1176-dc9-b390",
                                "name": "Character",
                                "hidden": "false",
                                "targetId": "9cfd-1c32-585f-7d5c",
                                "primary": "false",
                                "constraints": {
                                    "constraint": {
                                        "field": "selections",
                                        "scope": "roster",
                                        "value": "1",
                                        "percentValue": "false",
                                        "shared": "true",
                                        "includeChildSelections": "true",
                                        "includeChildForces": "true",
                                        "id": "f08b-2179-601f-9af",
                                        "type": "min"
                                    }
                                },
                                "modifiers": {
                                    "modifier": {
                                        "type": "set",
                                        "value": "0",
                                        "field": "f08b-2179-601f-9af",
                                        "conditionGroups": {
                                            "conditionGroup": {
                                                "type": "or",
                                                "conditions": {
                                                    "condition": [
                                                        {
                                                            "type": "instanceOf",
                                                            "value": "1",
                                                            "field": "selections",
                                                            "scope": "primary-catalogue",
                                                            "childId": "bdc0-c0d-72d7-87e2",
                                                            "shared": "true",
                                                            "id": "1fe4-8f37-4c24-271"
                                                        },
                                                        {
                                                            "type": "instanceOf",
                                                            "value": "1",
                                                            "field": "selections",
                                                            "scope": "primary-catalogue",
                                                            "childId": "880c-c7e-4a43-a0c1",
                                                            "shared": "true",
                                                            "id": "f16a-b2cd-1da5-4050"
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "id": "b3ba-1e1a-a92d-60d2",
                                "name": "Battleline",
                                "hidden": "false",
                                "targetId": "e338-111e-d0c6-b687",
                                "primary": "false"
                            },
                            {
                                "id": "6d77-b79d-3ccb-6bf6",
                                "name": "Infantry",
                                "hidden": "false",
                                "targetId": "cf47-a0d7-7207-29dc",
                                "primary": "false"
                            },
                            {
                                "id": "f5d5-b603-69b3-411c",
                                "name": "Swarm",
                                "hidden": "false",
                                "targetId": "b00b-5bae-444f-964e",
                                "primary": "false"
                            },
                            {
                                "id": "6503-057c-cb62-badb",
                                "name": "Mounted",
                                "hidden": "false",
                                "targetId": "14a0-40c9-2748-ae6e",
                                "primary": "false"
                            },
                            {
                                "id": "87ea-37d2-7b40-c708",
                                "name": "Beast",
                                "hidden": "false",
                                "targetId": "4c3e-9310-a516-3590",
                                "primary": "false"
                            },
                            {
                                "id": "8e39-465e-7cfc-3085",
                                "name": "Monster",
                                "hidden": "false",
                                "targetId": "9693-cf84-fe69-37a9",
                                "primary": "false"
                            },
                            {
                                "id": "2c76-65c5-bad0-8208",
                                "name": "Vehicle",
                                "hidden": "false",
                                "targetId": "dbd4-63-af05-998",
                                "primary": "false"
                            },
                            {
                                "id": "8243-857b-2133-8887",
                                "name": "Drone",
                                "hidden": "false",
                                "targetId": "2471-e2e0-3f55-d6cb",
                                "primary": "false"
                            },
                            {
                                "id": "cf3e-2c24-fe34-39f9",
                                "name": "Dedicated Transport",
                                "hidden": "false",
                                "targetId": "ba07-411c-2832-1f79",
                                "primary": "false"
                            },
                            {
                                "id": "9198-c35d-71cd-eea3",
                                "name": "Fortification",
                                "hidden": "false",
                                "targetId": "19d7-9c74-2140-5851",
                                "primary": "false"
                            },
                            {
                                "id": "a41a-6330-4718-d8d2",
                                "name": "Unit",
                                "hidden": "false",
                                "targetId": "1160-70ae-a862-b1a8",
                                "primary": "false"
                            },
                            {
                                "name": "Allied Units",
                                "hidden": "false",
                                "id": "8d39-1cfc-6e44-2dae",
                                "targetId": "887b-ab87-92a2-20f5"
                            }
                        ]
                    }
                },
                {
                    "name": "Boarding Action",
                    "hidden": "true",
                    "id": "1d6e-2579-8e7f-1ed4",
                    "categoryLinks": {
                        "categoryLink": [
                            {
                                "id": "4f79-1f3a-7f95-ae21",
                                "name": "Configuration",
                                "hidden": "false",
                                "targetId": "4ac9-fd30-1e3d-b249",
                                "primary": "false"
                            },
                            {
                                "id": "73b6-764d-b0ab-977c",
                                "name": "Epic Hero",
                                "hidden": "false",
                                "targetId": "4f3a-f0f7-6647-348d",
                                "primary": "false"
                            },
                            {
                                "id": "95ea-911f-b9a5-2d3e",
                                "name": "Character",
                                "hidden": "false",
                                "targetId": "9cfd-1c32-585f-7d5c",
                                "primary": "false",
                                "constraints": {
                                    "constraint": {
                                        "field": "selections",
                                        "scope": "roster",
                                        "value": "1",
                                        "percentValue": "false",
                                        "shared": "true",
                                        "includeChildSelections": "true",
                                        "includeChildForces": "true",
                                        "id": "f08b-2179-601f-9af",
                                        "type": "min"
                                    }
                                }
                            },
                            {
                                "id": "57d9-fc38-a603-fdd2",
                                "name": "Battleline",
                                "hidden": "false",
                                "targetId": "e338-111e-d0c6-b687",
                                "primary": "false"
                            },
                            {
                                "id": "ee07-d0f5-deb6-b64c",
                                "name": "Infantry",
                                "hidden": "false",
                                "targetId": "cf47-a0d7-7207-29dc",
                                "primary": "false"
                            },
                            {
                                "id": "6d07-c461-1f18-a3eb",
                                "name": "Swarm",
                                "hidden": "false",
                                "targetId": "b00b-5bae-444f-964e",
                                "primary": "false"
                            },
                            {
                                "id": "d9fd-28fe-bd15-d67e",
                                "name": "Mounted",
                                "hidden": "false",
                                "targetId": "14a0-40c9-2748-ae6e",
                                "primary": "false"
                            },
                            {
                                "id": "9835-544c-d9d1-72bf",
                                "name": "Beast",
                                "hidden": "false",
                                "targetId": "4c3e-9310-a516-3590",
                                "primary": "false"
                            },
                            {
                                "id": "bc76-9342-c298-99c9",
                                "name": "Monster",
                                "hidden": "false",
                                "targetId": "9693-cf84-fe69-37a9",
                                "primary": "false"
                            },
                            {
                                "id": "61bf-bd6b-cba7-70b2",
                                "name": "Vehicle",
                                "hidden": "false",
                                "targetId": "dbd4-63-af05-998",
                                "primary": "false"
                            },
                            {
                                "id": "5db7-9406-f21f-2de0",
                                "name": "Drone",
                                "hidden": "false",
                                "targetId": "2471-e2e0-3f55-d6cb",
                                "primary": "false"
                            },
                            {
                                "id": "fe2b-ae0-8572-b6ff",
                                "name": "Dedicated Transport",
                                "hidden": "false",
                                "targetId": "ba07-411c-2832-1f79",
                                "primary": "false"
                            },
                            {
                                "name": "Retinue",
                                "hidden": "false",
                                "id": "d932-86b9-29ec-c799",
                                "targetId": "cc77-a53-fca8-f48e"
                            }
                        ]
                    }
                },
                {
                    "name": "Crusade Force",
                    "id": "cac3-71d1-ea4b-795d",
                    "hidden": "true",
                    "forceEntries": {
                        "forceEntry": {
                            "name": "Crusade Army",
                            "id": "ff7b-8f73-1756-650a",
                            "hidden": "false",
                            "categoryLinks": {
                                "categoryLink": {
                                    "name": "Configuration",
                                    "hidden": "false",
                                    "id": "c078-56fb-a0e9-fa0d",
                                    "targetId": "4ac9-fd30-1e3d-b249"
                                }
                            },
                            "modifiers": {
                                "modifier": [
                                    {
                                        "type": "set",
                                        "value": "1000",
                                        "field": "57b7-ac0e-5d06-9ddb",
                                        "conditions": {
                                            "condition": {
                                                "type": "atLeast",
                                                "value": "1",
                                                "field": "selections",
                                                "scope": "roster",
                                                "childId": "d62d-db22-4893-4bc0",
                                                "shared": "true",
                                                "includeChildSelections": "true"
                                            }
                                        }
                                    },
                                    {
                                        "type": "set",
                                        "value": "2000",
                                        "field": "57b7-ac0e-5d06-9ddb",
                                        "conditions": {
                                            "condition": {
                                                "type": "atLeast",
                                                "value": "1",
                                                "field": "selections",
                                                "scope": "roster",
                                                "childId": "baf8-997f-e323-a090",
                                                "shared": "true",
                                                "includeChildSelections": "true"
                                            }
                                        }
                                    },
                                    {
                                        "type": "set",
                                        "value": "3000",
                                        "field": "57b7-ac0e-5d06-9ddb",
                                        "conditions": {
                                            "condition": {
                                                "type": "atLeast",
                                                "value": "1",
                                                "field": "selections",
                                                "scope": "roster",
                                                "childId": "4204-82d0-908c-a62a",
                                                "shared": "true",
                                                "includeChildSelections": "true"
                                            }
                                        }
                                    }
                                ]
                            },
                            "constraints": {
                                "constraint": [
                                    {
                                        "type": "min",
                                        "value": "1",
                                        "field": "forces",
                                        "scope": "roster",
                                        "shared": "true",
                                        "id": "21dc-d454-3048-5aeb",
                                        "includeChildSelections": "true",
                                        "includeChildForces": "true"
                                    },
                                    {
                                        "type": "max",
                                        "value": "1",
                                        "field": "forces",
                                        "scope": "roster",
                                        "shared": "true",
                                        "id": "97cd-724b-362c-071d",
                                        "includeChildSelections": "true",
                                        "includeChildForces": "true"
                                    },
                                    {
                                        "type": "max",
                                        "value": "0",
                                        "field": "51b2-306e-1021-d207",
                                        "scope": "force",
                                        "shared": "true",
                                        "id": "57b7-ac0e-5d06-9ddb",
                                        "includeChildSelections": "true"
                                    }
                                ]
                            }
                        }
                    },
                    "categoryLinks": {
                        "categoryLink": [
                            {
                                "name": "Order of Battle",
                                "hidden": "false",
                                "id": "2452-ede7-7eb6-add4",
                                "targetId": "ac7e-be7b-eb02-4752"
                            },
                            {
                                "name": "Configuration",
                                "hidden": "false",
                                "id": "a290-a601-b0c5-3ba1",
                                "targetId": "4ac9-fd30-1e3d-b249"
                            },
                            {
                                "name": "Epic Hero",
                                "hidden": "false",
                                "id": "50c3-798d-734d-6d5f",
                                "targetId": "4f3a-f0f7-6647-348d",
                                "primary": "false"
                            },
                            {
                                "name": "Character",
                                "hidden": "false",
                                "id": "5fa8-178e-cb6c-4669",
                                "targetId": "9cfd-1c32-585f-7d5c",
                                "primary": "false",
                                "constraints": {
                                    "constraint": {
                                        "type": "min",
                                        "value": "1",
                                        "field": "selections",
                                        "scope": "roster",
                                        "shared": "true",
                                        "id": "771b-70a4-6eca-ca13",
                                        "percentValue": "false",
                                        "includeChildSelections": "true",
                                        "includeChildForces": "true"
                                    }
                                },
                                "modifiers": {
                                    "modifier": {
                                        "type": "set",
                                        "value": "0",
                                        "field": "771b-70a4-6eca-ca13",
                                        "conditionGroups": {
                                            "conditionGroup": {
                                                "type": "or",
                                                "conditions": {
                                                    "condition": [
                                                        {
                                                            "type": "instanceOf",
                                                            "value": "1",
                                                            "field": "selections",
                                                            "scope": "primary-catalogue",
                                                            "childId": "bdc0-c0d-72d7-87e2",
                                                            "shared": "true",
                                                            "id": "6850-9e2d-ee40-9fdb"
                                                        },
                                                        {
                                                            "type": "instanceOf",
                                                            "value": "1",
                                                            "field": "selections",
                                                            "scope": "primary-catalogue",
                                                            "childId": "880c-c7e-4a43-a0c1",
                                                            "shared": "true",
                                                            "id": "ebb2-e80e-a08a-e168"
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "name": "Battleline",
                                "hidden": "false",
                                "id": "ceb5-d65a-179b-cfdd",
                                "targetId": "e338-111e-d0c6-b687",
                                "primary": "false"
                            },
                            {
                                "name": "Infantry",
                                "hidden": "false",
                                "id": "9447-a1b3-41e2-8e71",
                                "targetId": "cf47-a0d7-7207-29dc",
                                "primary": "false"
                            },
                            {
                                "name": "Swarm",
                                "hidden": "false",
                                "id": "a8d2-e42d-2d2d-5b61",
                                "targetId": "b00b-5bae-444f-964e",
                                "primary": "false"
                            },
                            {
                                "name": "Mounted",
                                "hidden": "false",
                                "id": "2252-2bf7-54da-f3e3",
                                "targetId": "14a0-40c9-2748-ae6e",
                                "primary": "false"
                            },
                            {
                                "name": "Beast",
                                "hidden": "false",
                                "id": "c56a-baf2-b6e3-dc10",
                                "targetId": "4c3e-9310-a516-3590",
                                "primary": "false"
                            },
                            {
                                "name": "Monster",
                                "hidden": "false",
                                "id": "8eef-7007-d7a2-a968",
                                "targetId": "9693-cf84-fe69-37a9",
                                "primary": "false"
                            },
                            {
                                "name": "Vehicle",
                                "hidden": "false",
                                "id": "f68a-2d0c-fd7b-9460",
                                "targetId": "dbd4-63-af05-998",
                                "primary": "false"
                            },
                            {
                                "name": "Drone",
                                "hidden": "false",
                                "id": "1285-e936-26c8-b9bd",
                                "targetId": "2471-e2e0-3f55-d6cb",
                                "primary": "false"
                            },
                            {
                                "name": "Dedicated Transport",
                                "hidden": "false",
                                "id": "8ef9-4038-9434-2ed0",
                                "targetId": "ba07-411c-2832-1f79",
                                "primary": "false"
                            },
                            {
                                "name": "Fortification",
                                "hidden": "false",
                                "id": "9521-ccd2-1cb5-eef5",
                                "targetId": "19d7-9c74-2140-5851",
                                "primary": "false"
                            },
                            {
                                "name": "Unit",
                                "hidden": "false",
                                "id": "4657-058c-657b-3d14",
                                "targetId": "1160-70ae-a862-b1a8",
                                "primary": "false"
                            },
                            {
                                "name": "Allied Units",
                                "hidden": "false",
                                "id": "8d77-c7df-e1a3-0680",
                                "targetId": "887b-ab87-92a2-20f5"
                            }
                        ]
                    },
                    "modifiers": {
                        "modifier": {
                            "type": "increment",
                            "value": "1",
                            "field": "215f-8816-ff04-d1ef",
                            "repeats": {
                                "repeat": {
                                    "value": "1",
                                    "repeats": "1",
                                    "field": "selections",
                                    "scope": "force",
                                    "childId": "4213-a51d-bffe-87dc",
                                    "shared": "true",
                                    "roundUp": "false",
                                    "includeChildSelections": "true",
                                    "includeChildForces": "true"
                                }
                            }
                        }
                    },
                    "constraints": {
                        "constraint": {
                            "type": "max",
                            "value": "0",
                            "field": "51b2-306e-1021-d207",
                            "scope": "force",
                            "shared": "true",
                            "id": "215f-8816-ff04-d1ef",
                            "includeChildSelections": "true",
                            "includeChildForces": "true"
                        }
                    }
                }
            ]
        },
        "entryLinks": {
            "entryLink": {
                "id": "7380-3e40-6ed6-b7cc",
                "name": "Battle Size",
                "hidden": "false",
                "collective": "false",
                "import": "true",
                "targetId": "564e-fbc6-5266-3ea4",
                "type": "selectionEntry"
            }
        },
        "sharedSelectionEntries": {
            "selectionEntry": [
                {
                    "id": "564e-fbc6-5266-3ea4",
                    "name": "Battle Size",
                    "hidden": "false",
                    "collective": "false",
                    "import": "true",
                    "type": "upgrade",
                    "constraints": {
                        "constraint": [
                            {
                                "field": "selections",
                                "scope": "roster",
                                "value": "1",
                                "percentValue": "false",
                                "shared": "true",
                                "includeChildSelections": "true",
                                "includeChildForces": "true",
                                "id": "d907-5a90-75f2-feec",
                                "type": "max"
                            },
                            {
                                "field": "selections",
                                "scope": "roster",
                                "value": "1",
                                "percentValue": "false",
                                "shared": "true",
                                "includeChildSelections": "true",
                                "includeChildForces": "true",
                                "id": "6b1c-4cb6-1e16-5ada",
                                "type": "min"
                            }
                        ]
                    },
                    "categoryLinks": {
                        "categoryLink": {
                            "id": "bc21-bf76-b29d-576c",
                            "name": "Configuration",
                            "hidden": "false",
                            "targetId": "4ac9-fd30-1e3d-b249",
                            "primary": "true"
                        }
                    },
                    "selectionEntryGroups": {
                        "selectionEntryGroup": {
                            "id": "b960-4789-a3a6-59cb",
                            "name": "Battle Size",
                            "hidden": "false",
                            "collective": "false",
                            "import": "true",
                            "defaultSelectionEntryId": "none",
                            "constraints": {
                                "constraint": [
                                    {
                                        "field": "selections",
                                        "scope": "parent",
                                        "value": "1",
                                        "percentValue": "false",
                                        "shared": "true",
                                        "includeChildSelections": "false",
                                        "includeChildForces": "false",
                                        "id": "132a-318-b78a-7afb",
                                        "type": "min"
                                    },
                                    {
                                        "field": "selections",
                                        "scope": "parent",
                                        "value": "1",
                                        "percentValue": "false",
                                        "shared": "true",
                                        "includeChildSelections": "false",
                                        "includeChildForces": "false",
                                        "id": "dea4-90c8-6d86-3a01",
                                        "type": "max"
                                    }
                                ]
                            },
                            "selectionEntries": {
                                "selectionEntry": [
                                    {
                                        "id": "d62d-db22-4893-4bc0",
                                        "name": "1. Incursion (1000 Point limit)",
                                        "hidden": "false",
                                        "collective": "false",
                                        "import": "true",
                                        "type": "upgrade",
                                        "costs": {
                                            "cost": {
                                                "name": "pts",
                                                "typeId": "51b2-306e-1021-d207",
                                                "value": "0"
                                            }
                                        },
                                        "modifiers": {
                                            "modifier": {
                                                "type": "set",
                                                "value": "true",
                                                "field": "hidden",
                                                "conditions": {
                                                    "condition": {
                                                        "type": "instanceOf",
                                                        "value": "1",
                                                        "field": "selections",
                                                        "scope": "force",
                                                        "childId": "1d6e-2579-8e7f-1ed4",
                                                        "shared": "true",
                                                        "includeChildForces": "true"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "id": "baf8-997f-e323-a090",
                                        "name": "2. Strike Force (2000 Point limit)",
                                        "hidden": "false",
                                        "collective": "false",
                                        "import": "true",
                                        "type": "upgrade",
                                        "costs": {
                                            "cost": {
                                                "name": "pts",
                                                "typeId": "51b2-306e-1021-d207",
                                                "value": "0"
                                            }
                                        },
                                        "modifiers": {
                                            "modifier": {
                                                "type": "set",
                                                "value": "true",
                                                "field": "hidden",
                                                "conditions": {
                                                    "condition": {
                                                        "type": "instanceOf",
                                                        "value": "1",
                                                        "field": "selections",
                                                        "scope": "force",
                                                        "childId": "1d6e-2579-8e7f-1ed4",
                                                        "shared": "true",
                                                        "includeChildForces": "true"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "id": "4204-82d0-908c-a62a",
                                        "name": "3. Onslaught (3000 Point limit)",
                                        "hidden": "false",
                                        "collective": "false",
                                        "import": "true",
                                        "type": "upgrade",
                                        "costs": {
                                            "cost": {
                                                "name": "pts",
                                                "typeId": "51b2-306e-1021-d207",
                                                "value": "0"
                                            }
                                        },
                                        "modifiers": {
                                            "modifier": {
                                                "type": "set",
                                                "value": "true",
                                                "field": "hidden",
                                                "conditions": {
                                                    "condition": {
                                                        "type": "instanceOf",
                                                        "value": "1",
                                                        "field": "selections",
                                                        "scope": "force",
                                                        "childId": "1d6e-2579-8e7f-1ed4",
                                                        "shared": "true",
                                                        "includeChildForces": "true"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "type": "upgrade",
                                        "import": "true",
                                        "name": "4. Boarding Patrol (500 Point Limit)",
                                        "hidden": "false",
                                        "id": "21b-48a5-24c-152c",
                                        "modifiers": {
                                            "modifier": {
                                                "type": "set",
                                                "value": "true",
                                                "field": "hidden",
                                                "conditions": {
                                                    "condition": {
                                                        "type": "notInstanceOf",
                                                        "value": "1",
                                                        "field": "selections",
                                                        "scope": "force",
                                                        "childId": "1d6e-2579-8e7f-1ed4",
                                                        "shared": "true",
                                                        "includeChildForces": "true"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "costs": {
                        "cost": {
                            "name": "pts",
                            "typeId": "51b2-306e-1021-d207",
                            "value": "0"
                        }
                    },
                    "modifiers": {
                        "modifier": {
                            "type": "set",
                            "value": "true",
                            "field": "hidden",
                            "conditions": {
                                "condition": {
                                    "type": "instanceOf",
                                    "value": "1",
                                    "field": "selections",
                                    "scope": "force",
                                    "childId": "cac3-71d1-ea4b-795d",
                                    "shared": "true"
                                }
                            }
                        }
                    }
                },
                {
                    "type": "upgrade",
                    "import": "true",
                    "name": "Show Legends",
                    "hidden": "false",
                    "id": "9ed-cbf4-bfe5-90bf",
                    "categoryLinks": {
                        "categoryLink": {
                            "targetId": "4ac9-fd30-1e3d-b249",
                            "id": "8f35-ad49-afb5-715",
                            "primary": "true",
                            "name": "Configuration"
                        }
                    },
                    "constraints": {
                        "constraint": [
                            {
                                "field": "selections",
                                "scope": "force",
                                "value": "1",
                                "percentValue": "false",
                                "shared": "true",
                                "includeChildSelections": "false",
                                "includeChildForces": "false",
                                "id": "7cbd-24e3-bacb-1eb1",
                                "type": "min"
                            },
                            {
                                "type": "min",
                                "value": "1",
                                "field": "selections",
                                "scope": "parent",
                                "shared": "true",
                                "id": "51d8-e3c2-867-5eb"
                            },
                            {
                                "type": "max",
                                "value": "1",
                                "field": "selections",
                                "scope": "parent",
                                "shared": "true",
                                "id": "1f32-5aaa-603e-fed1"
                            }
                        ]
                    },
                    "modifiers": {
                        "modifier": [
                            {
                                "type": "set",
                                "field": "7cbd-24e3-bacb-1eb1",
                                "value": "0"
                            },
                            {
                                "type": "set",
                                "field": "51d8-e3c2-867-5eb",
                                "value": "0"
                            },
                            {
                                "type": "set",
                                "value": "Legends are visible",
                                "field": "name"
                            }
                        ]
                    }
                },
                {
                    "type": "upgrade",
                    "import": "true",
                    "name": "Show Unaligned Forces",
                    "hidden": "false",
                    "id": "2973-ea51-7f8d-5403",
                    "constraints": {
                        "constraint": [
                            {
                                "field": "selections",
                                "scope": "force",
                                "value": "1",
                                "percentValue": "false",
                                "shared": "true",
                                "includeChildSelections": "false",
                                "includeChildForces": "false",
                                "id": "756f-43f7-60e3-d93b",
                                "type": "min"
                            },
                            {
                                "type": "min",
                                "value": "1",
                                "field": "selections",
                                "scope": "parent",
                                "shared": "true",
                                "id": "2caa-2d0e-2ef7-2245"
                            },
                            {
                                "type": "max",
                                "value": "1",
                                "field": "selections",
                                "scope": "parent",
                                "shared": "true",
                                "id": "ed3f-a6a6-a555-2a07"
                            }
                        ]
                    },
                    "modifiers": {
                        "modifier": [
                            {
                                "type": "set",
                                "field": "756f-43f7-60e3-d93b",
                                "value": "0"
                            },
                            {
                                "type": "set",
                                "field": "2caa-2d0e-2ef7-2245",
                                "value": "0"
                            },
                            {
                                "type": "set",
                                "value": "Unaligned Forces are visible",
                                "field": "name"
                            }
                        ]
                    }
                },
                {
                    "type": "upgrade",
                    "import": "true",
                    "name": "Show Unaligned Fortifications",
                    "hidden": "false",
                    "id": "e916-2cf4-a49d-b8c4",
                    "constraints": {
                        "constraint": [
                            {
                                "field": "selections",
                                "scope": "force",
                                "value": "1",
                                "percentValue": "false",
                                "shared": "true",
                                "includeChildSelections": "false",
                                "includeChildForces": "false",
                                "id": "555c-624d-1099-249b",
                                "type": "min"
                            },
                            {
                                "type": "min",
                                "value": "1",
                                "field": "selections",
                                "scope": "parent",
                                "shared": "true",
                                "id": "d690-2eb1-642-a72a"
                            },
                            {
                                "type": "max",
                                "value": "1",
                                "field": "selections",
                                "scope": "parent",
                                "shared": "true",
                                "id": "355a-61e4-abb8-b97b"
                            }
                        ]
                    },
                    "modifiers": {
                        "modifier": [
                            {
                                "type": "set",
                                "field": "555c-624d-1099-249b",
                                "value": "0"
                            },
                            {
                                "type": "set",
                                "field": "d690-2eb1-642-a72a",
                                "value": "0"
                            },
                            {
                                "type": "set",
                                "value": "Unaligned Fortifications are visible",
                                "field": "name"
                            }
                        ]
                    }
                },
                {
                    "type": "upgrade",
                    "import": "true",
                    "name": "Show/Hide Options",
                    "hidden": "false",
                    "id": "e8ef-836a-a9d1-901d",
                    "entryLinks": {
                        "entryLink": [
                            {
                                "import": "true",
                                "name": "Show Legends",
                                "hidden": "false",
                                "type": "selectionEntry",
                                "id": "892f-57ca-d650-7199",
                                "targetId": "9ed-cbf4-bfe5-90bf"
                            },
                            {
                                "import": "true",
                                "name": "Show Unaligned Forces",
                                "hidden": "false",
                                "type": "selectionEntry",
                                "id": "985-e753-2e94-859",
                                "targetId": "2973-ea51-7f8d-5403"
                            },
                            {
                                "import": "true",
                                "name": "Show Unaligned Fortifications",
                                "hidden": "false",
                                "type": "selectionEntry",
                                "id": "4d37-22c-a45c-64f8",
                                "targetId": "e916-2cf4-a49d-b8c4"
                            }
                        ]
                    },
                    "constraints": {
                        "constraint": {
                            "field": "selections",
                            "scope": "force",
                            "value": "1",
                            "percentValue": "false",
                            "shared": "true",
                            "includeChildSelections": "false",
                            "includeChildForces": "false",
                            "id": "7478-2e95-2444-b500",
                            "type": "min"
                        }
                    },
                    "modifiers": {
                        "modifier": [
                            {
                                "type": "set",
                                "field": "7478-2e95-2444-b500",
                                "value": "0"
                            },
                            {
                                "type": "set-primary",
                                "value": "4ac9-fd30-1e3d-b249",
                                "field": "category"
                            },
                            {
                                "type": "set",
                                "value": "true",
                                "field": "hidden",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "and",
                                        "conditions": {
                                            "condition": [
                                                {
                                                    "type": "notInstanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "force",
                                                    "childId": "cac3-71d1-ea4b-795d",
                                                    "shared": "true"
                                                },
                                                {
                                                    "type": "atLeast",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "roster",
                                                    "childId": "cac3-71d1-ea4b-795d",
                                                    "shared": "true"
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    "type": "upgrade",
                    "import": "true",
                    "name": "Order of Battle",
                    "hidden": "false",
                    "id": "eda7-8b4b-3719-af36",
                    "categoryLinks": {
                        "categoryLink": {
                            "name": "Order of Battle",
                            "hidden": "false",
                            "id": "9cd2-0658-7168-7881",
                            "targetId": "ac7e-be7b-eb02-4752",
                            "primary": "true"
                        }
                    },
                    "constraints": {
                        "constraint": [
                            {
                                "type": "min",
                                "value": "1",
                                "field": "selections",
                                "scope": "roster",
                                "shared": "true",
                                "id": "d59f-2804-3c43-6b7e",
                                "includeChildSelections": "true"
                            },
                            {
                                "type": "max",
                                "value": "1",
                                "field": "selections",
                                "scope": "roster",
                                "shared": "true",
                                "id": "b3a1-d8c7-6085-5d98",
                                "includeChildSelections": "true"
                            }
                        ]
                    },
                    "selectionEntries": {
                        "selectionEntry": [
                            {
                                "type": "upgrade",
                                "import": "true",
                                "name": "Requisition Points",
                                "hidden": "false",
                                "id": "ce7f-9d46-52a9-947c",
                                "defaultAmount": "5",
                                "constraints": {
                                    "constraint": {
                                        "type": "max",
                                        "value": "10",
                                        "field": "selections",
                                        "scope": "parent",
                                        "shared": "true",
                                        "id": "b320-bdb5-fe91-6078",
                                        "includeChildSelections": "false"
                                    }
                                }
                            },
                            {
                                "type": "upgrade",
                                "import": "true",
                                "name": "Battle Tally",
                                "hidden": "false",
                                "id": "3dd5-2e5a-a042-6595"
                            },
                            {
                                "type": "upgrade",
                                "import": "true",
                                "name": "Victories",
                                "hidden": "false",
                                "id": "1d15-6e78-ba49-ace9"
                            },
                            {
                                "type": "upgrade",
                                "import": "true",
                                "name": "Supply Limit",
                                "hidden": "false",
                                "id": "4213-a51d-bffe-87dc",
                                "constraints": {
                                    "constraint": {
                                        "type": "min",
                                        "value": "1000",
                                        "field": "selections",
                                        "scope": "parent",
                                        "shared": "true",
                                        "id": "6be6-c41c-ea86-298a",
                                        "includeChildSelections": "false"
                                    }
                                }
                            }
                        ]
                    },
                    "modifiers": {
                        "modifier": [
                            {
                                "type": "set",
                                "value": "0",
                                "field": "d59f-2804-3c43-6b7e",
                                "conditions": {
                                    "condition": {
                                        "type": "notInstanceOf",
                                        "value": "1",
                                        "field": "selections",
                                        "scope": "force",
                                        "childId": "cac3-71d1-ea4b-795d",
                                        "shared": "true",
                                        "includeChildSelections": "false",
                                        "includeChildForces": "false"
                                    }
                                }
                            },
                            {
                                "type": "set",
                                "value": "true",
                                "field": "hidden",
                                "conditions": {
                                    "condition": {
                                        "type": "notInstanceOf",
                                        "value": "1",
                                        "field": "selections",
                                        "scope": "force",
                                        "childId": "cac3-71d1-ea4b-795d",
                                        "shared": "true",
                                        "includeChildSelections": "false",
                                        "includeChildForces": "false"
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "sharedRules": {
            "rule": [
                {
                    "id": "8bf7-8812-923d-29e4",
                    "name": "Pistol",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "25",
                    "hidden": "false",
                    "description": "Weapons with [PISTOL] in their profile are known as Pistols. If a unit contains any models equipped with Pistols, that unit is eligible to shoot in its controlling player\u00e2\u20ac\u2122s Shooting phase even while it is within Engagement Range of one or more enemy units. When such a unit is selected to shoot, it can only resolve attacks using its Pistols and can only target one of the enemy units it is within Engagement Range of. In such circumstances, a Pistol can target an enemy unit even if other friendly units are within Engagement Range of the same enemy unit.\u00c2\u00a0\n\nIf a model is equipped with one or more Pistols, unless it is a MONSTER or VEHICLE model, it can either shoot with its Pistols or with all of its other ranged weapons. Declare whether such a model will shoot with its Pistols or its other ranged weapons before selecting targets."
                },
                {
                    "id": "8367-374c-f87-c627",
                    "name": "Hazardous",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "28",
                    "hidden": "false",
                    "description": "Weapons with [HAZARDOUS] in their profile are known as Hazardous weapons. Each time a unit is selected to shoot or fight, after that unit has resolved all of its attacks, for each Hazardous weapon that targets were selected for when resolving those attacks, that unit must take one Hazardous test. To do so, roll one D6: on a 1, that test is failed.\u00c2\u00a0For each failed test you must resolve the following sequence (resolve each failed test one at a time):\u00c2\u00a0\n\n\u00e2\u2013\u00a0 If possible, select one model in that unit that has lost one or more wounds and is equipped with one or more Hazardous weapons.\u00c2\u00a0\n\u00e2\u2013\u00a0 Otherwise, if possible, select one model in that unit (excluding CHARACTER models) equipped with one or more Hazardous weapons.\u00c2\u00a0\n\u00e2\u2013\u00a0 Otherwise, select one CHARACTER model in that unit equipped with one or more Hazardous weapons.\u00c2\u00a0\n\nIf a model was selected, that unit suffers 3 mortal wounds and when allocating those mortal wounds, they must be allocated to the selected model.\u00c2\u00a0\n\nIf a unit from a player\u00e2\u20ac\u2122s army is selected as the target of the Fire Overwatch Stratagem in their opponent\u00e2\u20ac\u2122s Charge phase, any mortal wounds inflicted by Hazardous tests are allocated after the charging unit has ended its Charge move."
                },
                {
                    "id": "b4dd-3e1f-41cb-218f",
                    "name": "Leader",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "39",
                    "hidden": "false",
                    "description": "While a Bodyguard unit contains a Leader, it is known as an Attached unit and, with the exception of rules that are triggered when units are destroyed (pg 12), it is treated as a single unit for all rules purposes. Each time an attack targets an Attached unit, until the attacking unit has resolved all of its attacks, you must use the Toughness characteristic of the Bodyguard models in that unit, even if a Leader in that unit has a different Toughness characteristic. Each time an attack successfully wounds an Attached unit, that attack cannot be allocated to a Character model in that unit, even if that Character model has lost one or more wounds or has already had attacks allocated to it this phase. As soon as the last Bodyguard model in an Attached unit has been destroyed, any attacks made against that unit that have yet to be allocated can then be allocated to Character models in that unit.\n\nEach time the last model in a Bodyguard unit is destroyed, each CHARACTER unit that is part of that Attached unit becomes a separate unit, with its original Starting Strength. If this happens as the result of an attack, they become separate units after the attacking unit has resolved all of its attacks.\u00c2\u00a0\n\nEach time the last model in a CHARACTER unit that is attached to a Bodyguard unit is destroyed and there is not another CHARACTER unit attached, that Attached unit\u00e2\u20ac\u2122s Bodyguard unit becomes a separate unit, with its original Starting Strength. If this happens as the result of an attack, they become separate units after the attacking unit has resolved all of its attacks.\u00c2\u00a0\n\nEach time a unit that is part of an Attached unit is destroyed, it does not have the keywords of any other units that make up that Attached unit (unless it has those keywords on its own datasheet) for the purposes of any rules that would be triggered when that unit is destroyed."
                },
                {
                    "id": "be1e-ac8e-1e2c-3528",
                    "name": "Devastating Wounds",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "28",
                    "hidden": "false",
                    "description": "Weapons with [DEVASTATING WOUNDS] in their profile are known as Devastating Wounds weapons. Each time an attack is made with such a weapon, if that attack scores a Critical Wound, no saving throw of any kind can be made against that attack (including invulnerable saving throws). Such attacks are only allocated to models after all other attacks made by the attacking unit have been allocated and resolved. After that attack is allocated and after any modifiers are applied, it inflicts a number of mortal wounds on the target equal to the Damage characteristic of that attack, instead of inflicting damage normally."
                },
                {
                    "id": "fc8a-8c24-bae9-cc1c",
                    "name": "Assault",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "25",
                    "hidden": "false",
                    "description": "Weapons with [ASSAULT] in their profile are known as Assault weapons. If a unit that Advanced this turn contains any models equipped with Assault weapons, it is still eligible to shoot in this turn\u00e2\u20ac\u2122s Shooting phase. When such a unit is selected to shoot, you can only resolve attacks using Assault weapons its models are equipped with."
                },
                {
                    "id": "115b-79dc-f723-d761",
                    "name": "Extra Attacks",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "28",
                    "hidden": "false",
                    "description": "Weapons with [EXTRA ATTACKS] in their profile are known as Extra Attacks weapons. Each time the bearer of one or more Extra Attacks weapons fights, it makes attacks with each of the Extra Attacks melee weapons it is equipped with and it makes attacks with one of the melee weapons it is equipped with that does not have the [EXTRA ATTACKS] ability (if any). The number of attacks made with an Extra Attacks weapon cannot be modified by other rules, unless that weapon\u00e2\u20ac\u2122s name is explicitly specified in that rule."
                },
                {
                    "id": "cf93-ad4d-2f08-a79d",
                    "name": "Twin-linked",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "25",
                    "hidden": "false",
                    "description": "Weapons with [TWIN-LINKED] in their profile are known as Twin-linked weapons. Each time an attack is made with such a weapon, you can re-roll that attack\u00e2\u20ac\u2122s Wound roll."
                },
                {
                    "id": "4111-82e3-9444-e942",
                    "name": "Anti-",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "28",
                    "hidden": "false",
                    "description": "Weapons with [ANTI-KEYWORD X+] in their profile are known as Anti weapons. Each time an attack is made with such a weapon against a target with the keyword after the word \u00e2\u20ac\u02dcAnti-\u00e2\u20ac\u2122, an unmodified Wound roll of \u00e2\u20ac\u02dcx+\u00e2\u20ac\u2122 scores a Critical Wound."
                },
                {
                    "id": "1897-c22c-9597-12b1",
                    "name": "Sustained Hits",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "28",
                    "hidden": "false",
                    "description": "Weapons with [SUSTAINED HITS X] in their profile are known as Sustained Hits weapons. Each time an attack is made with such a weapon, if a Critical Hit is rolled, that attack scores a number of additional hits on the target as denoted by \u00e2\u20ac\u02dcx\u00e2\u20ac\u2122"
                },
                {
                    "id": "1202-10a8-78e9-4c67",
                    "name": "Heavy",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "26",
                    "hidden": "false",
                    "description": "Weapons with [HEAVY] in their profile are known as Heavy weapons. Each time an attack is made with such a weapon, if the attacking model\u00e2\u20ac\u2122s unit Remained Stationary this turn, add 1 to that attack\u00e2\u20ac\u2122s Hit roll."
                },
                {
                    "id": "7cdb-fb99-44a9-8849",
                    "name": "Melta",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "26",
                    "hidden": "false",
                    "description": "Weapons with [MELTA X] in their profile are known as Melta weapons. Each time an attack made with such a weapon targets a unit within half that weapon\u00e2\u20ac\u2122s range, that attack\u00e2\u20ac\u2122s Damage characteristic is increased by the amount denoted by \u00e2\u20ac\u02dcx\u00e2\u20ac\u2122."
                },
                {
                    "id": "9bf4-280f-bbe2-6fbb",
                    "name": "Feel No Pain",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "23",
                    "hidden": "false",
                    "description": "Some models have 'Feel No Pain x+' listed in their abilities. Each time a model with this ability suffers damage and so would lose a wound (including wounds lost due to mortal wounds), roll one D6: if the result is greater than or equal to the number denoted by 'x: that wound is ignored and is not lost. If a model has more than one Feel No Pain ability, you can only use one of those abilities each time that model suffers damage and so would lose a wound."
                },
                {
                    "id": "6c1f-1cf7-ff25-c99e",
                    "name": "Blast",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "26",
                    "hidden": "false",
                    "description": "Weapons with [BLAST] in their profile are known as Blast weapons, and they make a random number of attacks. Each time you determine how many attacks are made with a Blast weapon, add 1 to the result for every five models that were in the target unit when you selected it as the target (rounding down). Blast weapons can never be used to make attacks against a unit that is within Engagement Range of one or more units from the attacking model\u00e2\u20ac\u2122s army (including its own unit)."
                },
                {
                    "id": "9143-31ae-e0a6-6007",
                    "name": "Precision",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "26",
                    "hidden": "false",
                    "description": "Weapons with [PRECISION] in their profile are known as Precision weapons. Each time an attack made with such a weapon successfully wounds an Attached unit, if a Character model in that unit is visible to the attacking model, the attacking model\u00e2\u20ac\u2122s player can choose to have that attack allocated to that Character model instead of following the normal attack sequence."
                },
                {
                    "id": "4ddd-4e29-acdd-5e6d",
                    "name": "Indirect Fire",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "26",
                    "hidden": "false",
                    "description": "Weapons with [INDIRECT FIRE] in their profile are known as Indirect Fire weapons, and attacks can be made with them even if the target is not visible to the attacking model. These attacks can destroy enemy models in a target unit even though none may have been visible to the attacking unit when you selected that target.\n\n\nIf no models in a target unit are visible to the attacking unit when you select that target, then each time a model in the attacking unit makes an attack against that target using an Indirect Fire weapon, subtract 1 from that attack\u00e2\u20ac\u2122s Hit roll, an unmodified Hit roll of 1-3 always fails, and the target has the Benefit of Cover against that attack. Weapons with the [TORRENT] ability cannot be fired using the [INDIRECT FIRE] ability."
                },
                {
                    "id": "2ebc-abdf-8129-6c57",
                    "name": "Lance",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "25",
                    "hidden": "false",
                    "description": "Weapons with [LANCE] in their profile are known as Lance weapons. Each time an attack is made with such a weapon, if the bearer made a Charge move this turn, add 1 to that attack\u00e2\u20ac\u2122s Wound roll."
                },
                {
                    "id": "d1d1-611e-5191-1095",
                    "name": "Lethal Hits",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "25",
                    "hidden": "false",
                    "description": "Weapons with [LETHAL HITS] in their profile are known as Lethal Hits weapons. Each time an attack is made with such a weapon, a Critical Hit automatically wounds the target."
                },
                {
                    "id": "4640-43e7-30b-215a",
                    "name": "Ignores Cover",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "25",
                    "hidden": "false",
                    "description": "Weapons with [IGNORES COVER] in their profile are known as Ignores Cover weapons. Each time an attack is made with such a weapon, the target cannot have the Benefit of Cover against that attack."
                },
                {
                    "id": "c5c8-8b58-b8b6-7786",
                    "name": "Rapid Fire",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "25",
                    "hidden": "false",
                    "description": "Weapons with [RAPID FIRE X] in their profile are known as Rapid Fire weapons. Each time such a weapon targets a unit within half that weapon\u00e2\u20ac\u2122s range, the Attacks characteristic of that weapon is increased by the amount denoted by \u00e2\u20ac\u02dcx\u00e2\u20ac\u2122."
                },
                {
                    "id": "5edf-d619-23e0-9b56",
                    "name": "Torrent",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "25",
                    "hidden": "false",
                    "description": "Weapons with [TORRENT] in their profile are known as Torrent weapons. Each time an attack is made with such a weapon, that attack automatically hits the target."
                },
                {
                    "id": "ada6-bac1-ffe0-d6f7",
                    "name": "Scouts",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "39",
                    "hidden": "false",
                    "description": "Some units have \u00e2\u20ac\u02dcScouts x\"\u00e2\u20ac\u2122 listed in their abilities. If every model in a unit has this ability, then at the start of the first battle round, before the first turn begins, it can make a Normal move of up to x\", with the exception that, while making that move, the distance moved by each model in that unit can be greater than that model's Move characteristic, as long as it is not greater than x\".\u00c2\u00a0\n\nDEDICATED TRANSPORT models can make use of any Scouts x\" ability listed in their abilities, or a Scouts x\" ability that a unit that starts the battle embarked within that DEDICATED TRANSPORT\u00c2\u00a0 model has (provided only models with this ability are embarked within that Dedicated Transport model), regardless of how that embarked unit gained this ability (e.g. listed in their abilities, conferred by an Enhancement or by an attached Character, etc.).\u00c2\u00a0\n\nA unit that moves using this ability must end that move more than 9\" horizontally away from all enemy models. If both players have units that can do this, the player who is taking the first turn moves their units first."
                },
                {
                    "id": "c05d-f4c3-f091-4938",
                    "name": "Infiltrators",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "39",
                    "hidden": "false",
                    "description": "During deployment, if every model in a unit has this ability, then when you set it up, it can be set up anywhere on the battlefield that is more than 9\" horizontally away from the enemy deployment zone and all enemy models."
                },
                {
                    "id": "7cb5-dd6b-dd87-ad3b",
                    "name": "Deep Strike",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "39",
                    "hidden": "false",
                    "description": "During the Declare Battle Formations step, if every model in a unit has this ability, you can set it up in Reserves instead of setting it up on the battlefield. If you do, in the Reinforcements step of one of your Movement phases you can set up this unit anywhere on the battlefield that is more than 9\" horizontally away from all enemy models.\n\nIf a unit with the Deep Strike ability arrives from Strategic Reserves, the controlling player can choose for that unit to be set up either using the rules for Strategic Reserves or using the Deep Strike ability."
                },
                {
                    "id": "b68a-5ded-65ac-98c",
                    "name": "Deadly Demise",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "23",
                    "hidden": "false",
                    "description": "Some models have 'Deadly Demise x' listed in their abilities. When such a model is destroyed, roll one D6 before removing it from play (if such a model is a TRANSPORT, roll before any embarked models disembark). On a 6, each unit within 6\" of that model suffers a number of mortal wounds denoted by 'x' (if this is a random number, roll separately for each unit within 6\")."
                },
                {
                    "id": "bec5-4288-34a6-ccfa",
                    "name": "Stealth",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "20",
                    "hidden": "false",
                    "description": "If every model in a unit has this ability, then each time a ranged attack is made against it, subtract 1 from that attack\u00e2\u20ac\u2122s Hit roll."
                },
                {
                    "id": "5e13-1624-d280-418d",
                    "name": "Super-Heavy Walker",
                    "hidden": "false",
                    "description": "Each time a model with this ability makes a Normal, Advance or Fall Back move, it can move through models (excluding TITANIC models) and sections of terrain features that are 4\" or less in height.\u00c2\u00a0\nWhen doing so:\n- It can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them.\n- It can also move through sections of terrain features that are more than 4\" in height, but if it does, after it has moved, roll one D6: on a 1, that model is Battle-shocked."
                },
                {
                    "id": "a8a0-8fe7-898-e0f3",
                    "name": "Lone Operative",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "19",
                    "hidden": "false",
                    "description": "Unless part of an Attached unit, this unit can only be selected as the target of a ranged attack if the attacking model is within 12\"."
                },
                {
                    "id": "eec5-5f54-9c03-c305",
                    "name": "Hover",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "53",
                    "hidden": "false",
                    "description": "Some AIRCRAFT models have 'Hover' listed in their abilities. When you are instructed to Declare Battle Formations, before doing anything else, you must first declare which models from your army with this ability will be in Hover mode.\n\nIf a model is in Hover mode,  then until the end of the battle, its Move characteristic is changed to 20\", it loses the AIRCRAFT keyword and it loses all associated rules for being an AlRCRAFT model. Models in Hover mode do not start the battle in Reserves, but you can choose to place them into Strategic Reserves following the normal rules if you wish."
                },
                {
                    "id": "24-c886-e8ba-5a89",
                    "name": "Fights First",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "32",
                    "hidden": "false",
                    "description": "Units with this ability that are eligible to fight do so in the Fights First step, provided every model in the unit has this ability."
                },
                {
                    "id": "e9c4-2bb8-12ee-cd1b",
                    "name": "Psychic",
                    "publicationId": "48fc-15aa-b307-9443",
                    "page": "38",
                    "hidden": "false",
                    "description": "Some weapons and abilities can only be used by PSYKERS. Such weapons and abilities are tagged with the word 'Psychic'. If a Psychic weapon or ability causes any unit to suffer one or more wounds, each of those wounds is considered to have been inflicted by a Psychic Attack."
                },
                {
                    "id": "13b2-6518-dab3-7ea1",
                    "name": "Firing Deck",
                    "page": "17",
                    "hidden": "false",
                    "description": "Some TRANSPORT models have \u00e2\u20ac\u02dcFiring Deck x\u00e2\u20ac\u2122 listed in their abilities. Each time such a model is selected to shoot in the Shooting phase, you can select up to \u00e2\u20ac\u02dcx\u00e2\u20ac\u2122 models embarked within it whose units have not already shot this phase. Then, for each of those embarked models, you can select one ranged weapon that embarked model is equipped with (excluding weapons with the [ONE SHOT] ability). Until that TRANSPORT model has resolved all of its attacks, it counts as being equipped with all of the weapons you selected in this way, in addition to its other weapons. Until the end of the phase, those selected models\u00e2\u20ac\u2122 units are not eligible to shoot."
                },
                {
                    "id": "cd26-1611-860a-91e4",
                    "name": "One Shot",
                    "hidden": "false",
                    "description": "The bearer can only shoot with this weapon once per battle."
                }
            ]
        },
        "sharedProfiles": {
            "profile": [
                {
                    "id": "fa4e-5ac8-11a6-78d2",
                    "name": "Fortification",
                    "hidden": "false",
                    "typeId": "9cc3-6d83-4dd3-9b64",
                    "typeName": "Abilities",
                    "characteristics": {
                        "characteristic": {
                            "name": "Description",
                            "typeId": "9b8f-694b-e5e-b573",
                            "text": "While an enemy unit is only within Engagement Range of one or more FORTIFICATIONS from your army:\n- That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll.\n- Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so."
                        }
                    }
                },
                {
                    "name": "Lord of Deceit (Aura)",
                    "typeId": "9cc3-6d83-4dd3-9b64",
                    "typeName": "Abilities",
                    "hidden": "false",
                    "id": "8332-466b-a51f-63ab",
                    "characteristics": {
                        "characteristic": {
                            "name": "Description",
                            "typeId": "9b8f-694b-e5e-b573",
                            "text": "Each time your opponent\u00c2\u00a0targets a unit from their army with a Stratagem, if that\u00c2\u00a0unit is within 12\" of this model, increase the cost of\u00c2\u00a0that use of that Stratagem by 1CP."
                        }
                    }
                }
            ]
        },
        "sharedSelectionEntryGroups": {
            "selectionEntryGroup": [
                {
                    "name": "Weapon Modifications",
                    "id": "f9da-852a-d7f0-92e9",
                    "hidden": "false",
                    "selectionEntries": {
                        "selectionEntry": [
                            {
                                "type": "upgrade",
                                "import": "true",
                                "name": "Brutal (S+1)",
                                "hidden": "false",
                                "id": "d92a-5d2e-0b38-ea01",
                                "constraints": {
                                    "constraint": {
                                        "type": "max",
                                        "value": "1",
                                        "field": "selections",
                                        "scope": "parent",
                                        "shared": "true",
                                        "id": "75f5-1a3b-0da5-91b0",
                                        "includeChildSelections": "false"
                                    }
                                },
                                "costs": {
                                    "cost": [
                                        {
                                            "name": "pts",
                                            "typeId": "51b2-306e-1021-d207",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade Points",
                                            "typeId": "b03b-c239-15a5-da55",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Experience",
                                            "typeId": "a623-fe74-1d33-cddf",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Weapon Modifications",
                                            "typeId": "716d-91b7-d55a-1022",
                                            "value": "1"
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "upgrade",
                                "import": "true",
                                "name": "Armour Piercing (AP+1)",
                                "hidden": "false",
                                "id": "d181-a615-5566-8e5a",
                                "constraints": {
                                    "constraint": {
                                        "type": "max",
                                        "value": "1",
                                        "field": "selections",
                                        "scope": "parent",
                                        "shared": "true",
                                        "id": "3018-0ec7-e3e5-de6a",
                                        "includeChildSelections": "false"
                                    }
                                },
                                "costs": {
                                    "cost": [
                                        {
                                            "name": "pts",
                                            "typeId": "51b2-306e-1021-d207",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade Points",
                                            "typeId": "b03b-c239-15a5-da55",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Experience",
                                            "typeId": "a623-fe74-1d33-cddf",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Weapon Modifications",
                                            "typeId": "716d-91b7-d55a-1022",
                                            "value": "1"
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "upgrade",
                                "import": "true",
                                "name": "Precise",
                                "hidden": "false",
                                "id": "658a-396c-f9a0-d15f",
                                "constraints": {
                                    "constraint": {
                                        "type": "max",
                                        "value": "1",
                                        "field": "selections",
                                        "scope": "parent",
                                        "shared": "true",
                                        "id": "6002-d56b-06a2-194a",
                                        "includeChildSelections": "false"
                                    }
                                },
                                "profiles": {
                                    "profile": {
                                        "name": "Precise",
                                        "typeId": "9cc3-6d83-4dd3-9b64",
                                        "typeName": "Abilities",
                                        "hidden": "false",
                                        "id": "a3d2-6ce8-adf3-448a",
                                        "characteristics": {
                                            "characteristic": {
                                                "name": "Description",
                                                "typeId": "9b8f-694b-e5e-b573",
                                                "text": "Each time a Critical Wound is scored for an attack made\u00c2\u00a0with this weapon, that attack has the [PRECISION] ability."
                                            }
                                        }
                                    }
                                },
                                "infoLinks": {
                                    "infoLink": {
                                        "name": "Precision",
                                        "id": "119c-b206-e441-6abe",
                                        "hidden": "false",
                                        "type": "rule",
                                        "targetId": "9143-31ae-e0a6-6007"
                                    }
                                },
                                "costs": {
                                    "cost": [
                                        {
                                            "name": "pts",
                                            "typeId": "51b2-306e-1021-d207",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade Points",
                                            "typeId": "b03b-c239-15a5-da55",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Experience",
                                            "typeId": "a623-fe74-1d33-cddf",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Weapon Modifications",
                                            "typeId": "716d-91b7-d55a-1022",
                                            "value": "1"
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "upgrade",
                                "import": "true",
                                "name": "Master-worked (D+1)",
                                "hidden": "false",
                                "id": "4b25-c6e7-3350-9c1c",
                                "constraints": {
                                    "constraint": {
                                        "type": "max",
                                        "value": "1",
                                        "field": "selections",
                                        "scope": "parent",
                                        "shared": "true",
                                        "id": "f492-ff46-c01c-fa7f",
                                        "includeChildSelections": "false"
                                    }
                                },
                                "costs": {
                                    "cost": [
                                        {
                                            "name": "pts",
                                            "typeId": "51b2-306e-1021-d207",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade Points",
                                            "typeId": "b03b-c239-15a5-da55",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Experience",
                                            "typeId": "a623-fe74-1d33-cddf",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Weapon Modifications",
                                            "typeId": "716d-91b7-d55a-1022",
                                            "value": "1"
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "upgrade",
                                "import": "true",
                                "name": "Heirloom (A+1)",
                                "hidden": "false",
                                "id": "09c4-6313-8cd5-d77a",
                                "constraints": {
                                    "constraint": {
                                        "type": "max",
                                        "value": "1",
                                        "field": "selections",
                                        "scope": "parent",
                                        "shared": "true",
                                        "id": "9712-b244-1f9c-e8c2",
                                        "includeChildSelections": "false"
                                    }
                                },
                                "costs": {
                                    "cost": [
                                        {
                                            "name": "pts",
                                            "typeId": "51b2-306e-1021-d207",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade Points",
                                            "typeId": "b03b-c239-15a5-da55",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Experience",
                                            "typeId": "a623-fe74-1d33-cddf",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Weapon Modifications",
                                            "typeId": "716d-91b7-d55a-1022",
                                            "value": "1"
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "upgrade",
                                "import": "true",
                                "name": "Finely Balanced (BS/WS+1)",
                                "hidden": "false",
                                "id": "13b7-d8d5-72c2-1f72",
                                "constraints": {
                                    "constraint": {
                                        "type": "max",
                                        "value": "1",
                                        "field": "selections",
                                        "scope": "parent",
                                        "shared": "true",
                                        "id": "26be-21c9-e43a-04c0",
                                        "includeChildSelections": "false"
                                    }
                                },
                                "costs": {
                                    "cost": [
                                        {
                                            "name": "pts",
                                            "typeId": "51b2-306e-1021-d207",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade Points",
                                            "typeId": "b03b-c239-15a5-da55",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Experience",
                                            "typeId": "a623-fe74-1d33-cddf",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Weapon Modifications",
                                            "typeId": "716d-91b7-d55a-1022",
                                            "value": "1"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "modifiers": {
                        "modifier": [
                            {
                                "type": "set",
                                "value": "true",
                                "field": "hidden",
                                "conditionGroups": {
                                    "conditionGroup": {
                                        "type": "or",
                                        "conditions": {
                                            "condition": {
                                                "type": "lessThan",
                                                "value": "1",
                                                "field": "selections",
                                                "scope": "roster",
                                                "childId": "cac3-71d1-ea4b-795d",
                                                "shared": "true",
                                                "includeChildSelections": "true",
                                                "includeChildForces": "true"
                                            }
                                        },
                                        "conditionGroups": {
                                            "conditionGroup": [
                                                {
                                                    "type": "and",
                                                    "conditions": {
                                                        "condition": {
                                                            "type": "lessThan",
                                                            "value": "1",
                                                            "field": "selections",
                                                            "scope": "self",
                                                            "childId": "any",
                                                            "shared": "true",
                                                            "includeChildSelections": "true"
                                                        }
                                                    },
                                                    "conditionGroups": {
                                                        "conditionGroup": {
                                                            "type": "or",
                                                            "conditionGroups": {
                                                                "conditionGroup": [
                                                                    {
                                                                        "type": "and",
                                                                        "conditions": {
                                                                            "condition": [
                                                                                {
                                                                                    "type": "equalTo",
                                                                                    "value": "6",
                                                                                    "field": "75bb-ded1-c86d-bdf0",
                                                                                    "scope": "model-or-unit",
                                                                                    "childId": "any",
                                                                                    "shared": "true",
                                                                                    "includeChildSelections": "true"
                                                                                },
                                                                                {
                                                                                    "type": "atLeast",
                                                                                    "value": "1",
                                                                                    "field": "selections",
                                                                                    "scope": "model-or-unit",
                                                                                    "childId": "1511-18fe-f51e-7b9d",
                                                                                    "shared": "true",
                                                                                    "includeChildSelections": "true"
                                                                                },
                                                                                {
                                                                                    "type": "notInstanceOf",
                                                                                    "value": "1",
                                                                                    "field": "selections",
                                                                                    "scope": "ancestor",
                                                                                    "childId": "9cfd-1c32-585f-7d5c",
                                                                                    "shared": "true",
                                                                                    "includeChildSelections": "true"
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        "type": "and",
                                                                        "conditions": {
                                                                            "condition": [
                                                                                {
                                                                                    "type": "equalTo",
                                                                                    "value": "3",
                                                                                    "field": "75bb-ded1-c86d-bdf0",
                                                                                    "scope": "model-or-unit",
                                                                                    "childId": "any",
                                                                                    "shared": "true",
                                                                                    "includeChildSelections": "true"
                                                                                },
                                                                                {
                                                                                    "type": "lessThan",
                                                                                    "value": "1",
                                                                                    "field": "selections",
                                                                                    "scope": "model-or-unit",
                                                                                    "childId": "1511-18fe-f51e-7b9d",
                                                                                    "shared": "true",
                                                                                    "includeChildSelections": "true"
                                                                                },
                                                                                {
                                                                                    "type": "notInstanceOf",
                                                                                    "value": "1",
                                                                                    "field": "selections",
                                                                                    "scope": "ancestor",
                                                                                    "childId": "9cfd-1c32-585f-7d5c",
                                                                                    "shared": "true",
                                                                                    "includeChildSelections": "true"
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        "type": "and",
                                                                        "conditions": {
                                                                            "condition": [
                                                                                {
                                                                                    "type": "instanceOf",
                                                                                    "value": "1",
                                                                                    "field": "selections",
                                                                                    "scope": "ancestor",
                                                                                    "childId": "9cfd-1c32-585f-7d5c",
                                                                                    "shared": "true",
                                                                                    "includeChildSelections": "true"
                                                                                },
                                                                                {
                                                                                    "type": "equalTo",
                                                                                    "value": "6",
                                                                                    "field": "75bb-ded1-c86d-bdf0",
                                                                                    "scope": "model-or-unit",
                                                                                    "childId": "any",
                                                                                    "shared": "true",
                                                                                    "includeChildSelections": "true"
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    "type": "and",
                                                    "conditions": {
                                                        "condition": [
                                                            {
                                                                "type": "lessThan",
                                                                "value": "1",
                                                                "field": "selections",
                                                                "scope": "model",
                                                                "childId": "d1a5-4297-168b-11cd",
                                                                "shared": "true",
                                                                "includeChildSelections": "true",
                                                                "includeChildForces": "false"
                                                            },
                                                            {
                                                                "type": "lessThan",
                                                                "value": "1",
                                                                "field": "selections",
                                                                "scope": "unit",
                                                                "childId": "d1a5-4297-168b-11cd",
                                                                "shared": "true",
                                                                "includeChildSelections": "true",
                                                                "includeChildForces": "false"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                }
                            },
                            {
                                "type": "set",
                                "value": "2",
                                "field": "2a14-db5e-c5ad-5ae9",
                                "conditions": {
                                    "condition": {
                                        "type": "equalTo",
                                        "value": "1",
                                        "field": "selections",
                                        "scope": "self",
                                        "childId": "any",
                                        "shared": "true"
                                    }
                                }
                            }
                        ]
                    },
                    "constraints": {
                        "constraint": [
                            {
                                "type": "max",
                                "value": "2",
                                "field": "selections",
                                "scope": "self",
                                "shared": "true",
                                "id": "b96f-03f7-d8a1-92ce",
                                "includeChildSelections": "false"
                            },
                            {
                                "type": "min",
                                "value": "0",
                                "field": "selections",
                                "scope": "self",
                                "shared": "true",
                                "id": "2a14-db5e-c5ad-5ae9"
                            }
                        ]
                    }
                },
                {
                    "name": "Crusade",
                    "id": "a877-78a7-06f2-f04d",
                    "hidden": "false",
                    "collapsible": "true",
                    "selectionEntries": {
                        "selectionEntry": [
                            {
                                "type": "upgrade",
                                "import": "true",
                                "name": "Experience Points",
                                "hidden": "false",
                                "id": "2dbf-4d49-5d74-85c9",
                                "constraints": {
                                    "constraint": {
                                        "type": "max",
                                        "value": "30",
                                        "field": "selections",
                                        "scope": "parent",
                                        "shared": "true",
                                        "id": "466f-ffd6-0947-139b",
                                        "includeChildSelections": "false"
                                    }
                                },
                                "modifiers": {
                                    "modifier": {
                                        "type": "set",
                                        "value": "-1",
                                        "field": "466f-ffd6-0947-139b",
                                        "conditionGroups": {
                                            "conditionGroup": {
                                                "type": "or",
                                                "conditions": {
                                                    "condition": [
                                                        {
                                                            "type": "instanceOf",
                                                            "value": "1",
                                                            "field": "selections",
                                                            "scope": "ancestor",
                                                            "childId": "9cfd-1c32-585f-7d5c",
                                                            "shared": "true",
                                                            "includeChildSelections": "true"
                                                        },
                                                        {
                                                            "type": "atLeast",
                                                            "value": "1",
                                                            "field": "selections",
                                                            "scope": "parent",
                                                            "childId": "1511-18fe-f51e-7b9d",
                                                            "shared": "true",
                                                            "includeChildSelections": "true"
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                },
                                "costs": {
                                    "cost": [
                                        {
                                            "name": "pts",
                                            "typeId": "51b2-306e-1021-d207",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Crusade Points",
                                            "typeId": "b03b-c239-15a5-da55",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Battle Honours",
                                            "typeId": "75bb-ded1-c86d-bdf0",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Experience",
                                            "typeId": "a623-fe74-1d33-cddf",
                                            "value": "1"
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "upgrade",
                                "import": "true",
                                "name": "Legendary Veterans",
                                "hidden": "false",
                                "id": "1511-18fe-f51e-7b9d",
                                "constraints": {
                                    "constraint": {
                                        "type": "max",
                                        "value": "1",
                                        "field": "selections",
                                        "scope": "parent",
                                        "shared": "true",
                                        "id": "1ae8-a0c8-eb1c-8318",
                                        "includeChildSelections": "false"
                                    }
                                },
                                "modifiers": {
                                    "modifier": {
                                        "type": "set",
                                        "value": "true",
                                        "field": "hidden",
                                        "conditions": {
                                            "condition": {
                                                "type": "instanceOf",
                                                "value": "1",
                                                "field": "selections",
                                                "scope": "ancestor",
                                                "childId": "9cfd-1c32-585f-7d5c",
                                                "shared": "true",
                                                "includeChildSelections": "true"
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "type": "upgrade",
                                "import": "true",
                                "name": "Weapon Modifications",
                                "hidden": "false",
                                "id": "d1a5-4297-168b-11cd",
                                "constraints": {
                                    "constraint": {
                                        "type": "max",
                                        "value": "3",
                                        "field": "selections",
                                        "scope": "parent",
                                        "shared": "true",
                                        "id": "4a83-fc07-f67a-f3ab",
                                        "includeChildSelections": "false"
                                    }
                                },
                                "modifiers": {
                                    "modifier": [
                                        {
                                            "type": "set",
                                            "value": "6",
                                            "field": "4a83-fc07-f67a-f3ab",
                                            "conditionGroups": {
                                                "conditionGroup": {
                                                    "type": "or",
                                                    "conditions": {
                                                        "condition": [
                                                            {
                                                                "type": "instanceOf",
                                                                "value": "1",
                                                                "field": "selections",
                                                                "scope": "ancestor",
                                                                "childId": "9cfd-1c32-585f-7d5c",
                                                                "shared": "true"
                                                            },
                                                            {
                                                                "type": "atLeast",
                                                                "value": "1",
                                                                "field": "selections",
                                                                "scope": "parent",
                                                                "childId": "1511-18fe-f51e-7b9d",
                                                                "shared": "true"
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "set",
                                            "value": "2",
                                            "field": "b03b-c239-15a5-da55",
                                            "conditions": {
                                                "condition": {
                                                    "type": "instanceOf",
                                                    "value": "1",
                                                    "field": "selections",
                                                    "scope": "ancestor",
                                                    "childId": "5929-ad51-d006-e008",
                                                    "shared": "true"
                                                }
                                            }
                                        }
                                    ]
                                },
                                "costs": {
                                    "cost": [
                                        {
                                            "name": "pts",
                                            "typeId": "51b2-306e-1021-d207",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade Points",
                                            "typeId": "b03b-c239-15a5-da55",
                                            "value": "1"
                                        },
                                        {
                                            "name": "Crusade: Battle Honours",
                                            "typeId": "75bb-ded1-c86d-bdf0",
                                            "value": "1"
                                        },
                                        {
                                            "name": "Crusade: Experience",
                                            "typeId": "a623-fe74-1d33-cddf",
                                            "value": "0"
                                        },
                                        {
                                            "name": "Crusade: Weapon Modifications",
                                            "typeId": "716d-91b7-d55a-1022",
                                            "value": "0"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "modifiers": {
                        "modifier": {
                            "type": "set",
                            "value": "true",
                            "field": "hidden",
                            "conditions": {
                                "condition": {
                                    "type": "lessThan",
                                    "value": "1",
                                    "field": "selections",
                                    "scope": "roster",
                                    "childId": "cac3-71d1-ea4b-795d",
                                    "shared": "true",
                                    "includeChildSelections": "true",
                                    "includeChildForces": "true"
                                }
                            }
                        }
                    },
                    "selectionEntryGroups": {
                        "selectionEntryGroup": {
                            "name": "Battle Scars",
                            "id": "1576-e816-033f-828d",
                            "hidden": "false",
                            "selectionEntries": {
                                "selectionEntry": [
                                    {
                                        "type": "upgrade",
                                        "import": "true",
                                        "name": "Fatigued",
                                        "hidden": "false",
                                        "id": "9d70-a94e-3f89-5eed",
                                        "constraints": {
                                            "constraint": {
                                                "type": "max",
                                                "value": "1",
                                                "field": "selections",
                                                "scope": "parent",
                                                "shared": "true",
                                                "id": "87a1-d9ce-1886-3f2c",
                                                "includeChildSelections": "false"
                                            }
                                        },
                                        "profiles": {
                                            "profile": {
                                                "name": "Fatigued",
                                                "typeId": "9cc3-6d83-4dd3-9b64",
                                                "typeName": "Abilities",
                                                "hidden": "false",
                                                "id": "7d0f-4235-b32f-77f2",
                                                "characteristics": {
                                                    "characteristic": {
                                                        "name": "Description",
                                                        "typeId": "9b8f-694b-e5e-b573",
                                                        "text": "Subtract 1 from the Objective Control characteristic\u00c2\u00a0of models in this unit and this unit never receives a\u00c2\u00a0Charge bonus."
                                                    }
                                                }
                                            }
                                        },
                                        "costs": {
                                            "cost": [
                                                {
                                                    "name": "pts",
                                                    "typeId": "51b2-306e-1021-d207",
                                                    "value": "0"
                                                },
                                                {
                                                    "name": "Crusade Points",
                                                    "typeId": "b03b-c239-15a5-da55",
                                                    "value": "-1"
                                                },
                                                {
                                                    "name": "Crusade: Battle Honours",
                                                    "typeId": "75bb-ded1-c86d-bdf0",
                                                    "value": "0"
                                                },
                                                {
                                                    "name": "Crusade: Experience",
                                                    "typeId": "a623-fe74-1d33-cddf",
                                                    "value": "0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "type": "upgrade",
                                        "import": "true",
                                        "name": "Battle-weary",
                                        "hidden": "false",
                                        "id": "856a-44c0-4d44-4fd6",
                                        "constraints": {
                                            "constraint": {
                                                "type": "max",
                                                "value": "1",
                                                "field": "selections",
                                                "scope": "parent",
                                                "shared": "true",
                                                "id": "ed4f-7458-34ff-ae92",
                                                "includeChildSelections": "false"
                                            }
                                        },
                                        "profiles": {
                                            "profile": {
                                                "name": "Battle-weary",
                                                "typeId": "9cc3-6d83-4dd3-9b64",
                                                "typeName": "Abilities",
                                                "hidden": "false",
                                                "id": "4889-1296-cec0-fdbe",
                                                "characteristics": {
                                                    "characteristic": {
                                                        "name": "Description",
                                                        "typeId": "9b8f-694b-e5e-b573",
                                                        "text": "Each time this unit takes a Battle-shock, Leadership,\u00c2\u00a0Desperate Escape or Out of Action test, subtract 1 from\u00c2\u00a0that test."
                                                    }
                                                }
                                            }
                                        },
                                        "costs": {
                                            "cost": [
                                                {
                                                    "name": "pts",
                                                    "typeId": "51b2-306e-1021-d207",
                                                    "value": "0"
                                                },
                                                {
                                                    "name": "Crusade Points",
                                                    "typeId": "b03b-c239-15a5-da55",
                                                    "value": "-1"
                                                },
                                                {
                                                    "name": "Crusade: Battle Honours",
                                                    "typeId": "75bb-ded1-c86d-bdf0",
                                                    "value": "0"
                                                },
                                                {
                                                    "name": "Crusade: Experience",
                                                    "typeId": "a623-fe74-1d33-cddf",
                                                    "value": "0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "type": "upgrade",
                                        "import": "true",
                                        "name": "Crippling Damage",
                                        "hidden": "false",
                                        "id": "4135-1065-ae32-09a4",
                                        "constraints": {
                                            "constraint": {
                                                "type": "max",
                                                "value": "1",
                                                "field": "selections",
                                                "scope": "parent",
                                                "shared": "true",
                                                "id": "159e-81b2-f506-493f",
                                                "includeChildSelections": "false"
                                            }
                                        },
                                        "profiles": {
                                            "profile": {
                                                "name": "Crippling Damage",
                                                "typeId": "9cc3-6d83-4dd3-9b64",
                                                "typeName": "Abilities",
                                                "hidden": "false",
                                                "id": "301a-57e2-10bd-abe2",
                                                "characteristics": {
                                                    "characteristic": {
                                                        "name": "Description",
                                                        "typeId": "9b8f-694b-e5e-b573",
                                                        "text": "This unit cannot Advance and you must subtract 1\"\u00c2\u00a0from the Move characteristic of models in this unit."
                                                    }
                                                }
                                            }
                                        },
                                        "costs": {
                                            "cost": [
                                                {
                                                    "name": "pts",
                                                    "typeId": "51b2-306e-1021-d207",
                                                    "value": "0"
                                                },
                                                {
                                                    "name": "Crusade Points",
                                                    "typeId": "b03b-c239-15a5-da55",
                                                    "value": "-1"
                                                },
                                                {
                                                    "name": "Crusade: Battle Honours",
                                                    "typeId": "75bb-ded1-c86d-bdf0",
                                                    "value": "0"
                                                },
                                                {
                                                    "name": "Crusade: Experience",
                                                    "typeId": "a623-fe74-1d33-cddf",
                                                    "value": "0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "type": "upgrade",
                                        "import": "true",
                                        "name": "Deep Scars",
                                        "hidden": "false",
                                        "id": "e20d-1f8c-2b62-2abb",
                                        "constraints": {
                                            "constraint": {
                                                "type": "max",
                                                "value": "1",
                                                "field": "selections",
                                                "scope": "parent",
                                                "shared": "true",
                                                "id": "9965-6300-9c34-fe31",
                                                "includeChildSelections": "false"
                                            }
                                        },
                                        "profiles": {
                                            "profile": {
                                                "name": "Deep Scars",
                                                "typeId": "9cc3-6d83-4dd3-9b64",
                                                "typeName": "Abilities",
                                                "hidden": "false",
                                                "id": "7588-ae4f-208e-e049",
                                                "characteristics": {
                                                    "characteristic": {
                                                        "name": "Description",
                                                        "typeId": "9b8f-694b-e5e-b573",
                                                        "text": "Each time a Critical Hit is scored against this unit, that\u00c2\u00a0attack automatically wounds this unit."
                                                    }
                                                }
                                            }
                                        },
                                        "costs": {
                                            "cost": [
                                                {
                                                    "name": "pts",
                                                    "typeId": "51b2-306e-1021-d207",
                                                    "value": "0"
                                                },
                                                {
                                                    "name": "Crusade Points",
                                                    "typeId": "b03b-c239-15a5-da55",
                                                    "value": "-1"
                                                },
                                                {
                                                    "name": "Crusade: Battle Honours",
                                                    "typeId": "75bb-ded1-c86d-bdf0",
                                                    "value": "0"
                                                },
                                                {
                                                    "name": "Crusade: Experience",
                                                    "typeId": "a623-fe74-1d33-cddf",
                                                    "value": "0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "type": "upgrade",
                                        "import": "true",
                                        "name": "Mark of Shame",
                                        "hidden": "false",
                                        "id": "0e21-97c3-92fa-e2a1",
                                        "constraints": {
                                            "constraint": {
                                                "type": "max",
                                                "value": "1",
                                                "field": "selections",
                                                "scope": "parent",
                                                "shared": "true",
                                                "id": "1ae4-98fb-48fc-f64c",
                                                "includeChildSelections": "false"
                                            }
                                        },
                                        "profiles": {
                                            "profile": {
                                                "name": "Mark of Shame",
                                                "typeId": "9cc3-6d83-4dd3-9b64",
                                                "typeName": "Abilities",
                                                "hidden": "false",
                                                "id": "d8fe-6343-8c67-476d",
                                                "characteristics": {
                                                    "characteristic": {
                                                        "name": "Description",
                                                        "typeId": "9b8f-694b-e5e-b573",
                                                        "text": "This unit cannot form an Attached unit, it is unaffected\u00c2\u00a0by the Aura abilities of friendly units, and it cannot be\u00c2\u00a0Marked for Greatness."
                                                    }
                                                }
                                            }
                                        },
                                        "costs": {
                                            "cost": [
                                                {
                                                    "name": "pts",
                                                    "typeId": "51b2-306e-1021-d207",
                                                    "value": "0"
                                                },
                                                {
                                                    "name": "Crusade Points",
                                                    "typeId": "b03b-c239-15a5-da55",
                                                    "value": "-1"
                                                },
                                                {
                                                    "name": "Crusade: Battle Honours",
                                                    "typeId": "75bb-ded1-c86d-bdf0",
                                                    "value": "0"
                                                },
                                                {
                                                    "name": "Crusade: Experience",
                                                    "typeId": "a623-fe74-1d33-cddf",
                                                    "value": "0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "type": "upgrade",
                                        "import": "true",
                                        "name": "Disgraced",
                                        "hidden": "false",
                                        "id": "e3a2-6b61-fd36-df18",
                                        "constraints": {
                                            "constraint": {
                                                "type": "max",
                                                "value": "1",
                                                "field": "selections",
                                                "scope": "parent",
                                                "shared": "true",
                                                "id": "c2ac-ab01-45de-8eca",
                                                "includeChildSelections": "false"
                                            }
                                        },
                                        "profiles": {
                                            "profile": {
                                                "name": "Disgraced",
                                                "typeId": "9cc3-6d83-4dd3-9b64",
                                                "typeName": "Abilities",
                                                "hidden": "false",
                                                "id": "f179-c11e-72f3-2906",
                                                "characteristics": {
                                                    "characteristic": {
                                                        "name": "Description",
                                                        "typeId": "9b8f-694b-e5e-b573",
                                                        "text": "You cannot use any Stratagems to affect this unit and\u00c2\u00a0this unit cannot be Marked for Greatness."
                                                    }
                                                }
                                            }
                                        },
                                        "costs": {
                                            "cost": [
                                                {
                                                    "name": "pts",
                                                    "typeId": "51b2-306e-1021-d207",
                                                    "value": "0"
                                                },
                                                {
                                                    "name": "Crusade Points",
                                                    "typeId": "b03b-c239-15a5-da55",
                                                    "value": "-1"
                                                },
                                                {
                                                    "name": "Crusade: Battle Honours",
                                                    "typeId": "75bb-ded1-c86d-bdf0",
                                                    "value": "0"
                                                },
                                                {
                                                    "name": "Crusade: Experience",
                                                    "typeId": "a623-fe74-1d33-cddf",
                                                    "value": "0"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            "constraints": {
                                "constraint": {
                                    "type": "max",
                                    "value": "3",
                                    "field": "selections",
                                    "scope": "self",
                                    "shared": "true",
                                    "id": "9825-f20a-66cc-7147",
                                    "includeChildSelections": "false"
                                }
                            }
                        }
                    }
                }
            ]
        }
    }
};