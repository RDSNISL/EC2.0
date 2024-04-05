
/**
 * @author - Dipesh Mali
 * Note : In order to generate JSON Schema Form - we must have to pass data in below format 
 * Assume that you have one field it might have below option like (field name, label, validaions etc..)
 */

export const defaultValues = {
    name: "",
    label: "",
    placeholder: "",
    type: "",
    validationType: 'string',
    isEditable: true, // its like isDisabled field (true / false)
    sectionName: '',
    sectionHeading: '',

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

    rows: 0,  // use for textarea

    disabledField: false,
    disabled: false,

    /*--Use for dropdown control--*/
    selectPluginConfig: {
        isClearable: true,
        isSearchable: true,
        isMulti: false,
        isRtl: false
    },
    dependency: {
        isDependentField: false,
        dependentOn: [],  // ['countryId','stateId'],
    },
    /* ----------------------- */

    /*--Use for select,radio,checkbox control to fill options--*/
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
    /* ----------------------- */

    /*--Use for file upload--*/
    fileConfig: {
        multiple: true,
        maxSize: 100000, // 100 kb per file
        maxFiles: 2,
        filePreview: true,
        "imageDisplayType": {
            "value": "round",
            "label": "Rounded"
        },
        accept: "image/png, image/jpg, image/jpeg, image/gif, image/svg+xml",
    },

    /*--Use to apply custom classes--*/
    classes: {
        error: '',
        field: '',
        label: '',
        wrapper: 'col-md-6',
    }
    /*-------------------- */
}