import axios from "axios";
import { SELECT_PLUGIN_CONFIG, VALIDATION_TYPES, VALUE_TYPES } from "constant/FormBuilder";

import * as yup from 'yup';

export const checkIsRequired = (field) => {
    const { validationType, validations, isEditable } = field;

    if (isEditable === true) {
        switch (validationType) {
            case VALUE_TYPES.STRING:
                if (validations.some((val) => val.type === VALIDATION_TYPES.REQUIRED)) {
                    return true;
                }
                return false;

            case VALUE_TYPES.ARRAY:
                if (
                    validations.some(
                        (val) =>
                            val.type === VALIDATION_TYPES.MIN ||
                            val.type === VALIDATION_TYPES.REQUIRED
                    )
                ) {
                    return true;
                }
                return false;

            case VALUE_TYPES.DATE:
                if (validations.some((val) => val.type === VALIDATION_TYPES.MIN)) {
                    return true;
                }
                return false;

            case VALUE_TYPES.MIXED:
                if (validations.some((val) => val.type === VALIDATION_TYPES.REQUIRED)) {
                    return true;
                }
                return false;

            default:
                if (validations.some((val) => val.type === "required")) {
                    return true;
                }
                return false;
        }
    }
    return false;
};

export const createFormSchema = (validateFields) => {
    let schema = {};
    validateFields.forEach((field) => {
        if (yup[field.validationType] && field.isEditable === true) {
            let validator = yup[field.validationType]();

            if (field.validationType === VALUE_TYPES.STRING) {
                validator = validator.trim();
            }
            if (field.validationType === VALUE_TYPES.NUMBER) {
                validator = validator.typeError('Required Field');
            }
            if (field.validationType === VALUE_TYPES.ARRAY) {
                const temp = field.validations.find(
                    (v) => v.type === VALIDATION_TYPES.REQUIRED
                );
                if (temp) {
                    validator = validator.min(
                        1,
                        temp.params[0] ? temp.params[0] : "This field is required"
                    );
                }
            }
            field?.validations?.forEach((validation) => {
                const { params, type } = validation;
                if (!validator[type]) {
                    return;
                }
                validator = validator[type](...params);
            });
            schema[field.name] = validator;
        }
    });
    return schema;
};


export const getOptionsByAPIforDropdown = (optionConfiguration, dependentOn = [], selectedFilters) => {

    if (optionConfiguration?.byApi) {
        const { apiConfig: { url, method, body, labelField, valueField } } = optionConfiguration;
        const reqBody = {};
        if (dependentOn?.length > 0) {
            dependentOn.map(fieldName => {
                reqBody[fieldName] = selectedFilters[fieldName];
            })
        }
        return axios({
            url,
            method,
            data: { ...reqBody, ...body }
        }).then(async (resp) => {
            const options = [];
            resp?.data?.map((item) => {
                options.push({ label: item[labelField], value: item[valueField] })
            })
            return options;
        })
    } else {
        return optionConfiguration?.options
    }

}

/** User inside Checkbox, Radio Field*/
export const getOptionsByAPI = async ({
    url = "",
    method = "",
    body = "{}",
    valueField = "",
    labelField = "",
}) => {
    let options = [];

    const parseBody = JSON.parse(body);
    const isPayload = Object.keys(parseBody)?.length > 0 ? true : false

    if (url !== "") {
        return axios({
            method,
            url,
            data: isPayload ? parseBody : {}
        }).then(resp => {
            console.log('API Response=>', resp?.data)
            options = resp.data.map((item) => ({
                value: item[valueField],
                label: item[labelField],
            }));

            return options;

        }).catch(err => {
            return err.response
        })
    }

    return options;
};


export const createValidationArray = (obj) => {
    const validations = [];
    const data = Object.entries(obj).map(item => {
        const [, value] = item;
        if (value.check) { return item; }
    }).filter(Boolean)

    data?.map(item => {
        const [key, value] = item;
        let params = []
        if (Boolean(value?.value)) {
            params.push(value?.value)
        }
        if (Boolean(value?.message)) {
            params.push(value?.message)
        }
        validations.push({ type: key, params })
    })
    return validations;
}

export const createValidationObject = (validationArr) => {
    const validationObj = {};
    const defaultObj = {
        "required": {
            "check": false,
        },
        "min": {
            "check": false
        },
        "max": {
            "check": false
        },
        "length": {
            "check": false
        },
        "matches": {
            "check": false,
        }
    }
    const ValidationTypes = Object.values(VALIDATION_TYPES);
    validationArr?.map((item) => {
        let obj = { check: true };
        if (ValidationTypes?.includes(item?.type)) {
            if (item?.params?.length == 2) {
                obj = { ...obj, value: item?.params[0], message: item?.params[1] }
            } else {
                obj = { ...obj, message: item?.params[0] }
            }
        }
        validationObj[item?.type] = obj;
        return validationObj;
    });
    const finalObj = { ...defaultObj, ...validationObj };
    return finalObj;
}

export const createSelectPluginConfig = (data) => {
    const obj = {}
    data.map(item => {
        if (SELECT_PLUGIN_CONFIG.hasOwnProperty(item)) {
            obj[item] = true
        }
        return obj;
    })
    return { ...SELECT_PLUGIN_CONFIG, ...obj };
}

export const revertSelectPluginConfig = (data) => {
    const pluginArray = [];
    Object.entries(data)?.map(item => {
        const [key, value] = item;
        if (value) {
            pluginArray.push(key)
        }
    })
    return pluginArray;
}
