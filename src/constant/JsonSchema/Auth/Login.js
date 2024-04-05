export const Fields = [
    {
        "isEditable": true,
        "name": "email",
        "label": "Email",
        "placeholder": "Enter valid email",
        "type": "email",
        "validationType": "string",
        "sectionName": "row1",
        "sectionHeading": "row1",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Email is required"
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": false,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": "",
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "",
                    "value": ""
                }
            ]
        },
        "fileConfig": {
            "multiple": false,
            "filePreview": false,
            "imageDisplayType": {
                "label": "Rounded",
                "value": "round"
            },
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        },
        "classes": {
            "wrapper": "",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "password",
        "label": "Password",
        "placeholder": "Enter password",
        "type": "password",
        "validationType": "string",
        "sectionName": "row2",
        "sectionHeading": "row2",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Password is required"
                ]
            },
            {
                "type": "min",
                "params": [
                    8,
                    "Password should be atleast 8 character long"
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": false,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": "",
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "",
                    "value": ""
                }
            ]
        },
        "fileConfig": {
            "multiple": false,
            "filePreview": false,
            "imageDisplayType": {
                "label": "Rounded",
                "value": "round"
            },
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        },
        "classes": {
            "wrapper": "",
            "label": "",
            "field": "",
            "error": ""
        }
    }
]