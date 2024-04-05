import RHFTextField from "components/FormControls/RHFTextField";
import RHFAutoCompleteSelect from "components/FormControls/RHFAutoCompleteSelect";
import RHFCheckBoxGroup from "components/FormControls/RHFCheckBoxGroup";
import RHFRadioButton from "components/FormControls/RHFRadioButton";
import RHFMobileNo from "components/FormControls/RHFMobileNo";
import RHFDatePicker from "components/FormControls/RHFDatePicker";
import RHFDropZone from "components/FormControls/RHFDropZone";

import RHFInputTags from "components/FormControls/RHFInputTags";
import RHFSwitch from "components/FormControls/RHFSwitch";
// import RHFCKEditor from "components/FormControls/RHFCKEditor";
import RHFTextEditor from "components/FormControls/RHFTextEditor";

// const RHFTextField = React.lazy(() => import("components/FormControls/RHFTextField"));
// const RHFAutoCompleteSelect = React.lazy(() => import("components/FormControls/RHFAutoCompleteSelect"));

export const FIELD_TYPES = {
    text: RHFTextField,
    textarea: RHFTextField,
    email: RHFTextField,
    password: RHFTextField,
    number: RHFTextField,
    phone: RHFMobileNo,
    tag: RHFInputTags, // new
    switch: RHFSwitch, // new
    ckEditor: RHFTextEditor, // new

    radio: RHFRadioButton,
    checkbox: RHFCheckBoxGroup,

    select: RHFAutoCompleteSelect,

    file: RHFDropZone,
    date: RHFDatePicker,
};


export const FIELD_TYPE = {
    text: "text",
    email: "email",
    number: "number",
    password: "password",
    phone: "phone",
    textarea: "textarea",
    radio: "radio",
    checkbox: "checkbox",
    select: "select",
    file: "file",
    date: "date",
    tag: "tag", // new
    switch: "switch", // new
    ckEditor: "ckEditor", // new
};


export const FIELD_TYPES_OPTIONS = [
    { value: "text", label: "Text" },
    { value: "email", label: "Email" },
    { value: "number", label: "Number" },
    { value: "password", label: "Password" },
    { value: "phone", label: "Phone Input" },
    { value: "textarea", label: "Text Area" },
    { value: "radio", label: "Radio" },
    { value: "checkbox", label: "Checkbox" },
    { value: "select", label: "Select" },
    { value: "file", label: "File Upload" },
    { value: "date", label: "Date Input" },
    { value: "tag", label: "Tag Input" }, // new
    { value: "switch", label: "Toggle Switch" }, // new
    { value: "ckEditor", label: "Ck Editor" }, // new
];

export const DEFAULT_VALUES = {
    text: "",
    email: "",
    number: 0,
    password: "",
    textarea: "",
    radio: "",
    checkbox: [],
    select: [],
    file: [],
    phone: "",
    date: "",
    tag: [],
    switch: false,
    ckEditor: ""
};

export const VALUE_TYPES = {
    STRING: "string",
    NUMBER: "number",
    ARRAY: "array",
    MIXED: "mixed",
    BOOLEAN: "boolean",
    DATE: "date",
    OBJECT: "object",
};

export const VALIDATION_TYPES = {
    REQUIRED: "required",
    MIN: "min",
    MAX: "max",
    LENGTH: "length",
    MATCHES: "matches",
};

export const IMAGE_DISPLAY_TYPES_OPTIONS = [
    { value: "regular", label: "Regular" },
    { value: "round", label: "Rounded" },
    { value: "paperclip", label: "Pin" }
];

export const SELECT_PLUGIN_CONFIG_OPTIONS = [
    {
        "label": "Clearable",
        "value": 'isClearable'
    },
    {
        "label": "Searchable",
        "value": "isSearchable"
    },
    {
        "label": "Multiple",
        "value": "isMulti"
    },
    {
        "label": "Right to left",
        "value": "isRtl"
    }
]

export const SELECT_PLUGIN_CONFIG = {
    isClearable: false,
    isSearchable: false,
    isMulti: false,
    isRtl: false
}
