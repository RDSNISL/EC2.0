


export const customFields = [
    {
        name: "firstName",
        label: "First Name",
        placeholder: "Enter First Name",
        type: "text",
        // value: "",
        validationType: 'string',
        isEditable: true, // its like isDisabled field (true / false)
        validations: [
            {
                type: "required",
                params: ["First Name is required!"]
            },
            {
                type: "max",
                params: [4, "Max 4 charenter long"]
            },
        ],
        sectionName: 'row1',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-6',
        }
    },
    {
        name: "lastName",
        label: "Last Name",
        placeholder: "Enter Last Name",
        type: "text",
        validationType: 'string',
        isEditable: true,
        validations: [],
        sectionName: 'row1',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-6',
        }
    },

    {
        name: "email",
        label: "Email",
        placeholder: "Email",
        type: "email",
        validationType: 'string',
        isEditable: true,
        validations: [
            { type: "required", params: ["Email is required!"] },
            { type: "email", params: ["Please enter a valid email id."] },
        ],
        sectionName: 'row2',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-4',
        }
    },
    {
        name: "password",
        label: "Password",
        placeholder: "Enter strong password",
        type: "password",
        validationType: 'string',
        isEditable: true,
        validations: [
            {
                type: "required",
                params: ["Password is required!"]
            },
            {
                type: "min",
                params: [8, "Min 8 charenter long"]
            },
            {
                type: "max",
                params: [16, "Max 16 charenter long"]
            },
        ],
        sectionName: 'row2',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-4',
        }
    },

    {
        name: "url",
        label: "URL",
        placeholder: "Valid URL",
        type: "text",
        validationType: 'string',
        isEditable: true,
        validations: [
            { type: "required", params: ["URL is required!"] },
            {
                type: "matches",
                params: [
                    /^(?:(?:https?):\/\/)?(?!0\.0\.0\.0$)(?:(?:(?:1?\d\d?|2[0-4]\d|25[0-5])(?:\.(?!$))?){4}|(?:[a-zA-Z\d]\.|[a-zA-Z\d](?:(?![-.]{2})[a-zA-Z\d-]){0,63}?[a-zA-Z\d]\.){1,63}?[a-z]{2,63})(?:[:/].*)?$/,
                    "Please enter a valid URL"
                ]
            },
        ],
        sectionName: 'row3',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-12',
        }
    },
    {
        name: "phone",
        label: "Mobile No",
        placeholder: "Enter contact number",
        type: "phone",
        validationType: 'string',
        isEditable: true,
        validations: [
            {
                type: "required",
                params: ["Mobile No. is required!"]
            },
        ],
        sectionName: 'row2',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-4',
        }
    },


    {
        name: "address",
        label: "Address",
        placeholder: "Building, Landmark etc",
        type: "textarea",
        multiline: true,
        rows: 5,
        validationType: 'string',
        isEditable: true,
        validations: [],
        sectionName: 'row4',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-12',
        }
    },


    {
        name: "vaccancy",
        label: "Vaccancy",
        placeholder: "Select Vaccancy",
        type: "select",
        validationType: 'object', //  note : when single select - object  && multi select - array
        isEditable: true,
        validations: [
            // { type: "min", params: [1, "Country is required!"] }
            {
                type: "required",
                params: ["Select at least one"]
            }
        ],
        sectionName: 'row5',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-6',
        },

        selectPluginConfig: {
            isClearable: true,
            isSearchable: true,
            isMulti: false,
            isRtl: false
        },
        dependency: {
            isDependentField: false,
        },
        fillOptions: {
            byApi: false,
            apiConfig: {
                url: "",
                method: "get",
                body: {},
                labelField: "name",
                valueField: "id"
            },
            options: [
                {
                    "label": "React Js",
                    "value": "react-js"
                },
                {
                    "label": "Vue Js",
                    "value": "vue-js"
                }
            ],
        },

    },
    {
        name: "developer",
        label: "Developer",
        placeholder: "Select Dev",
        type: "select",
        validationType: 'array', //  note : when single select - object  && multi select - array
        isEditable: true,
        validations: [
            {
                type: "required",
                params: ["Select at least one"]
            },
            { type: "max", params: [4, "Maximum 4 developer allow"] }
        ],
        sectionName: 'row5',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-6',
        },

        selectPluginConfig: {
            "isClearable": true,
            "isSearchable": true,
            "isMulti": true,
            "isRtl": false
        },
        dependency: {
            isDependentField: false,
        },
        fillOptions: {
            byApi: true,
            apiConfig: {
                url: "https://jsonplaceholder.typicode.com/users",
                method: "get",
                body: {},
                labelField: "name",
                valueField: "id"
            },
            options: [],
        },

    },


    /*--------Dependent Field----------*/

    {
        name: "country_id", // "countryId",
        label: "Country",
        placeholder: "Select Country",
        type: "select",
        validationType: 'object', //  note : when single select - object  && multi select - array
        isEditable: true,
        validations: [
            {
                type: "required",
                params: ["Select at least one"]
            }
        ],
        sectionName: 'row10',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-4',
        },

        selectPluginConfig: {
            isClearable: true,
            isSearchable: true,
            isMulti: false,
            isRtl: false
        },

        dependency: {
            isDependentField: false,
            dependentOn: []
        },

        fillOptions: {
            byApi: true,
            apiConfig: {
                url: "http://192.168.100.89:4002/api/country",
                method: "post",
                body: {},
                labelField: "name",
                valueField: "_id"
            },
            options: [],
        },

    },

    {
        name: "state_id", // "stateId",
        label: "State",
        placeholder: "Select State",
        type: "select",
        validationType: 'object', //  note : when single select - object  && multi select - array
        isEditable: true,
        validations: [
            {
                type: "required",
                params: ["Select at least one"]
            }
        ],
        sectionName: 'row10',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-4',
        },

        selectPluginConfig: {
            isClearable: true,
            isSearchable: true,
            isMulti: false,
            isRtl: false
        },

        dependency: {
            isDependentField: true,
            dependentOn: ['country_id'], // ['countryId'],
        },

        fillOptions: {
            byApi: true,
            apiConfig: {
                url: "http://192.168.100.89:4002/api/states",
                method: "post",
                body: {},
                labelField: "name",
                valueField: "_id"
            },
            options: [],
        },

    },

    {
        name: "city_id",  // "cityId"
        label: "City",
        placeholder: "Select City",
        type: "select",
        validationType: 'object', //  note : when single select - object  && multi select - array
        isEditable: true,
        validations: [
            {
                type: "required",
                params: ["Select at least one"]
            }
        ],
        sectionName: 'row10',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-4',
        },

        selectPluginConfig: {
            isClearable: true,
            isSearchable: true,
            isMulti: false,
            isRtl: false
        },

        dependency: {
            isDependentField: true,
            dependentOn: ['country_id', 'state_id'],  // ['countryId', 'stateId'],
        },

        fillOptions: {
            byApi: true,
            apiConfig: {
                url: "http://192.168.100.89:4002/api/city",
                method: "post",
                body: {},
                labelField: "name",
                valueField: "_id"
            },
            options: [],
        },
    },

    /* -----Dependent Field Over ------ */


    {
        name: "tech",
        label: "Technology",
        type: "checkbox",
        validationType: 'array',
        isEditable: true,
        validations: [
            {
                type: "required",
                params: ["Field is required"]
            },
        ],
        sectionName: 'row6',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-12',
        },

        fillOptions: {
            byApi: true,
            apiConfig: {
                url: "https://jsonplaceholder.typicode.com/users",
                method: "get",
                body: {},
                labelField: "name",
                valueField: "id"
            },
            options: [
                {
                    "label": "Cricket",
                    "value": "Yes"
                },
                {
                    "label": "FootBall",
                    "value": "No"
                }
            ],
        },

    },
    {
        name: "designation",
        label: "Designation",
        type: "radio",
        validationType: 'string',
        isEditable: true,
        validations: [
            {
                type: "required",
                params: ["Filed is required"]
            },
        ],
        sectionName: 'row7',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-12',
        },

        fillOptions: {
            byApi: true,
            apiConfig: {
                url: "https://jsonplaceholder.typicode.com/users",
                method: "get",
                body: {},
                labelField: "name",
                valueField: "id"
            },
            options: [
                {
                    "label": "Developer",
                    "value": "developer"
                },
                {
                    "label": "Team Leader",
                    "value": "teamleader"
                },
                {
                    "label": "Project Manager",
                    "value": "projectmanager"
                }
            ],
        },

    },
    {
        name: "dob",
        label: "Date of Submission",
        type: "date",
        validationType: 'string',
        isEditable: true,
        validations: [
            {
                type: "required",
                params: ["Date is required"],
            },
        ],
        sectionName: 'row8',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-12',
        },

    },

    {
        name: "experience",
        label: "Experience",
        placeholder: "Enter your experience",
        type: "number",
        validationType: 'number',
        isEditable: true, // its like isDisabled field (true / false)
        validations: [
            {
                type: "required",
                params: ["Experience is required!"]
            },
            {
                type: "min",
                params: [0, "It should be >= 0"]
            },
            {
                type: "max",
                params: [20, "It should be <= 20"]
            },
        ],
        sectionName: 'row11',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-12',
        }
    },

    {
        name: "fileUpload",
        label: "File Upload",
        type: "file",
        validationType: 'array',
        isEditable: true,
        validations: [
            {
                type: "required",
                params: ["Required field"]
            },
            {
                type: "max",
                params: [2, "Max 2 files"]
            },
        ],
        sectionName: 'row9',
        sectionHeading: '',
        classes: {
            error: '',
            field: '',
            label: '',
            wrapper: 'col-md-12',
        },

        fileConfig: {
            multiple: true,
            maxSize: 100000, // 100 kb per file
            maxFiles: 2,
            filePreview: true,
            accept: "image/png, image/jpg, image/jpeg, image/gif, image/svg+xml",
        }

    },

];

/** This is final data we need to prepare of each field to generate field */
/* Here i have create all types of field and write there configurations */
export const FinalFormFieldJson = [
    {
        "isEditable": true,
        "name": "name",
        "label": "Name",
        "placeholder": "Full Name",
        "type": "text",
        "validationType": "string",
        "sectionName": "row1",
        "sectionHeading": "sas",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Required Field"
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
            "dependentOn": [

            ]
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
            "imageDisplayType": {
                "value": "round",
                "label": "Rounded"
            },
            "filePreview": false,
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        },
        "classes": {
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "email",
        "label": "Email",
        "placeholder": "Enter your email",
        "type": "email",
        "validationType": "string",
        "sectionName": "row1",
        "sectionHeading": "sas",
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
            "dependentOn": [

            ]
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
            "imageDisplayType": {
                "value": "round",
                "label": "Rounded"
            },
            "filePreview": false,
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        },
        "classes": {
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "age",
        "label": "Age - Number",
        "placeholder": "Enter Age",
        "type": "number",
        "validationType": "number",
        "sectionName": "row2",
        "sectionHeading": "row2",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Required"
                ]
            },
            {
                "type": "min",
                "params": [
                    18,
                    "Age should be More then 18"
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
            "dependentOn": [

            ]
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
            "imageDisplayType": {
                "value": "round",
                "label": "Rounded"
            },
            "filePreview": false,
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        },
        "classes": {
            "wrapper": "col-md-6",
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
                    "Required"
                ]
            },
            {
                "type": "length",
                "params": [
                    10,
                    "10 charecters long"
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
            "dependentOn": [

            ]
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
            "imageDisplayType": {
                "value": "round",
                "label": "Rounded"
            },
            "filePreview": false,
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        },
        "classes": {
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "mobile",
        "label": "Phone No",
        "placeholder": "Enter phone no",
        "type": "phone",
        "validationType": "string",
        "sectionName": "row3",
        "sectionHeading": "row 3",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Required"
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
            "dependentOn": [

            ]
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
            "imageDisplayType": {
                "value": "round",
                "label": "Rounded"
            },
            "filePreview": false,
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        },
        "classes": {
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "dob",
        "label": "DOB",
        "placeholder": "dob",
        "type": "date",
        "validationType": "string",
        "sectionName": "row3",
        "sectionHeading": "row 3",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Required"
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
            "dependentOn": [

            ]
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
            "imageDisplayType": {
                "value": "round",
                "label": "Rounded"
            },
            "filePreview": false,
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        },
        "classes": {
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "gender",
        "label": "Gender",
        "placeholder": "radio",
        "type": "radio",
        "validationType": "string",
        "sectionName": "row4",
        "sectionHeading": "row 4",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Required"
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
            "dependentOn": [

            ]
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "Male",
                    "value": "m"
                },
                {
                    "label": "Female",
                    "value": "f"
                }
            ]
        },
        "fileConfig": {
            "multiple": false,
            "imageDisplayType": {
                "value": "round",
                "label": "Rounded"
            },
            "filePreview": false,
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        },
        "classes": {
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "language",
        "label": "Languages",
        "placeholder": "hoby",
        "type": "checkbox",
        "validationType": "array",
        "sectionName": "row4",
        "sectionHeading": "row 4",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Required"
                ]
            },
            {
                "type": "max",
                "params": [
                    2,
                    "Max 2 can select"
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
            "dependentOn": [

            ]
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "React",
                    "value": "react"
                },
                {
                    "label": "Node",
                    "value": "node"
                },
                {
                    "label": "Angular",
                    "value": "Angular"
                },
                {
                    "label": "Vue",
                    "value": "vue"
                }
            ]
        },
        "fileConfig": {
            "multiple": false,
            "imageDisplayType": {
                "value": "round",
                "label": "Rounded"
            },
            "filePreview": false,
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        },
        "classes": {
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "address",
        "label": "Address",
        "placeholder": "Enter address",
        "type": "textarea",
        "validationType": "string",
        "sectionName": "row5",
        "sectionHeading": "row 5",
        "rows": 5,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Required "
                ]
            },
            {
                "type": "max",
                "params": [
                    50,
                    "Max 50 char long"
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
            "dependentOn": [

            ]
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
            "imageDisplayType": {
                "value": "round",
                "label": "Rounded"
            },
            "filePreview": false,
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        },
        "classes": {
            "wrapper": "col-md-12",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "user",
        "label": "User",
        "placeholder": "Select Users",
        "type": "select",
        "validationType": "object",
        "sectionName": "row6",
        "sectionHeading": "row6",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Select user"
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": true,
            "isSearchable": true,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": [

            ]
        },
        "fillOptions": {
            "byApi": true,
            "apiConfig": {
                "url": "https://jsonplaceholder.typicode.com/users",
                "method": "get",
                "body": "{}",
                "labelField": "name",
                "valueField": "id"
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
            "imageDisplayType": {
                "value": "round",
                "label": "Rounded"
            },
            "filePreview": false,
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        },
        "classes": {
            "wrapper": "col-md-12",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "profile",
        "label": "Profile",
        "placeholder": "File Upload",
        "type": "file",
        "validationType": "array",
        "sectionName": "row7",
        "sectionHeading": "row7",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Required"
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
            "dependentOn": [

            ]
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
            "imageDisplayType": {
                "value": "regular",
                "label": "Regular"
            },
            "filePreview": true,
            "maxSize": 900000,
            "maxFiles": 2,
            "accept": "image/png,image/jpg"
        },
        "classes": {
            "wrapper": "col-md-12",
            "label": "",
            "field": "",
            "error": ""
        }
    },


    {
        "isEditable": true,
        "name": "ips",
        "label": "Ip Address",
        "placeholder": "Enter valid ips",
        "type": "tag",
        "validationType": "array",
        "sectionName": "Row8",
        "sectionHeading": "Row8",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Enter ips"
                ]
            },
            {
                "type": "max",
                "params": [
                    3,
                    "Max 3 ips allowed"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "picknic",
        "label": "Coming for picknic",
        "placeholder": "dlaksa",
        "type": "switch",
        "validationType": "string",
        "sectionName": "Row8",
        "sectionHeading": "Row8",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Required"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "description",
        "label": "Description",
        "placeholder": "Say something....",
        "type": "ckEditor",
        "validationType": "string",
        "sectionName": "row9",
        "sectionHeading": "row9",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Required Field"
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
            "wrapper": "col-md-12",
            "label": "",
            "field": "",
            "error": ""
        }
    }

]