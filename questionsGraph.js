const questionsGraph = {
    1: {
        "id": 1,
        "question": "IS_THERE_A_CRISIS",
        "answerType": "boolean",
        "answer": {
            "trueKey": "TRUE",
            "falseKey": "FALSE"
        },
        "continueRules": {
            "false": [
                2
            ],
            "true": []
        },
        "start": true
    },
    2: {
        "id": 2,
        "question": "RISK_OF_REMOVAL",
        "category": "parenting",
        "answerType": "boolean",
        "answer": {
            "trueKey": "TRUE",
            "falseKey": "FALSE"
        },
        "continueRules": {
            "true": [
                3
            ],
            "false": [
                4
            ],
            "comment": "if there's is no risk of removal, we skip asking substance abuse questions. Those questions assume risk of removal."
        },
        "start": false
    },
    3: {
        "id": 3,
        "question": "IN_HOME_CASE",
        "category": "parenting",
        "answerType": "boolean",
        "answer": {
            "trueKey": "TRUE",
            "falseKey": "FALSE"
        },
        "continueRules": {
            "true": [
                4
            ],
            "false": [
                4
            ]
        },
        "start": false
    },
    4: {
        "id": 4,
        "question": "SUBSTANCE_REASON_FOR_REMOVAL",
        "category": "substanceAbuse",
        "answerType": "boolean",
        "answer": {
            "trueKey": "TRUE",
            "falseKey": "FALSE"
        },
        "continueRules": {
            "true": [
                5
            ],
            "false": [
                5
            ]
        },
        "start": false
    },
    5: {
        "id": 5,
        "question": "CURRENT_USE_OR_RELAPSE",
        "category": "substanceAbuse",
        "answerType": "boolean",
        "answer": {
            "trueKey": "TRUE",
            "falseKey": "FALSE"
        },
        "continueRules": {
            "true": [
                6
            ],
            "false": [
                6
            ]
        },
        "start": false
    },
    6: {
        "id": 6,
        "question": "SUBSTANCE_ABUSE_IMPACT_PARENTING",
        "category": "substanceAbuse",
        "answerType": "boolean",
        "answer": {
            "trueKey": "TRUE",
            "falseKey": "FALSE"
        },
        "continueRules": {
            "true": [
                7
            ],
            "false": [
                7
            ]
        },
        "start": false
    },
    7: {
        "id": 7,
        "question": "SUBSTANCE_BARRIER_FOR_REUNIFICATION",
        "category": "substanceAbuse",
        "answerType": "boolean",
        "answer": {
            "trueKey": "TRUE",
            "falseKey": "FALSE"
        },
        "continueRules": {
            "true": [
                8
            ],
            "false": [
                8
            ]
        },
        "start": false
    },
    8: {
        "id": 8,
        "question": "STABLE_INCOME",
        "category": "housing",
        "answerType": "boolean",
        "answer": {
            "trueKey": "TRUE",
            "falseKey": "FALSE"
        },
        "continueRules": {
            "true": [
                9
            ],
            "false": [
                9
            ]
        },
        "start": false
    },
    9: {
        "id": 9,
        "question": "HOMELESS_OR_UNSTABLE_HOUSING",
        "category": "housing",
        "answerType": "boolean",
        "answer": {
            "trueKey": "TRUE",
            "falseKey": "FALSE"
        },
        "continueRules": {
            "true": [
                10
            ],
            "false": [
                10
            ]
        },
        "start": false
    },
    10: {
        "id": 10,
        "question": "CASE_STATUS",
        "category": "collaborative",
        "answerType": "categorical",
        "answer": {
            "options": ["FRONT_YARD", "FRONT_PORCH", "FRONT_DOOR", "OTHER"]
        },
        "continueRules": {
            "true": [],
            "false": []
        },
        "start": false
    }
};

export default questionsGraph;
