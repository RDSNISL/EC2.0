import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CopyToClipboard } from "react-copy-to-clipboard";
import RHFButton from 'components/FormControls/RHFButton'
import RHFTextField from 'components/FormControls/RHFTextField';
import DialogBox from 'components/Modals/DialogBox';
import { Card, CardBody, CardHeader, Col, Form, Row } from 'reactstrap'
import RHFAutoCompleteSelect from 'components/FormControls/RHFAutoCompleteSelect';
import { FIELD_TYPE, FIELD_TYPES_OPTIONS } from 'constant/FormBuilder';
import RHFCheckbox from 'components/FormControls/RHFCheckbox';
import FieldValidation from './Validation';
import FieldBaseConfig from './FieldBaseConfig';
import CommonFieldConfig from './CommonFieldConfig';
import SectionCreator from './SectionCreator';
import { createSelectPluginConfig, createValidationArray, createValidationObject, revertSelectPluginConfig } from 'utils';
import FormGenerater from './FormGenerater';
import FormFields from './FormFields';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import DOMPurify from "dompurify";

const jsonFormDataSample = [
    {
        "isEditable": true,
        "name": "name",
        "label": "Name",
        "placeholder": "Enter name",
        "type": "text",
        "validationType": "string",
        "sectionName": "Row1",
        "sectionHeading": "aasasas",
        "rows": 0,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please enter your name"
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": {},
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
        "sectionName": "Row1",
        "sectionHeading": "aasasas",
        "rows": 0,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Enter valid email"
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": {},
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
        "name": "bio",
        "label": "Bio",
        "placeholder": "Tell us about you...",
        "type": "textarea",
        "validationType": "string",
        "sectionName": "Row2",
        "sectionHeading": "ssasas",
        "rows": 4,
        "validations": [
            {
                "type": "max",
                "params": [
                    100,
                    "Bio should not more then 100 characters!"
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": {},
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

const originalDataSample = [
    {
        "options": [
            {
                "label": "",
                "value": ""
            }
        ],
        "section": {
            "label": "Row1",
            "value": "Row1",
            "heading": "aasasas"
        },
        "labelField": "Name",
        "nameField": "name",
        "type": {
            "value": "text",
            "label": "Text"
        },
        "placeholder": "Enter name",
        "defaultValue": "",
        "disable": false,
        "validationType": "string",
        "validationsObj": {
            "required": {
                "check": true,
                "message": "Please enter your name"
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
                "check": false
            }
        },
        "classes": true,
        "rows": 0,
        "fillOptionsBy": "",
        "apiConfig": {
            "url": "",
            "method": "",
            "body": {},
            "labelField": "",
            "valueField": ""
        },
        "selectPluginConfig": [],
        "isDependent": false,
        "dependentOn": "",
        "fileConfig": {
            "multiple": false,
            "filePreview": false,
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        },
        "classNameObj": {
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "options": [
            {
                "label": "",
                "value": ""
            }
        ],
        "section": {
            "label": "Row1",
            "value": "Row1",
            "heading": "aasasas"
        },
        "labelField": "Email",
        "nameField": "email",
        "type": {
            "value": "email",
            "label": "Email"
        },
        "placeholder": "Enter your email",
        "defaultValue": "",
        "disable": false,
        "validationType": "string",
        "validationsObj": {
            "required": {
                "check": true,
                "message": "Enter valid email"
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
                "check": false
            }
        },
        "classes": false,
        "classNameObj": {
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        },
        "rows": 0,
        "fillOptionsBy": "",
        "apiConfig": {
            "url": "",
            "method": "",
            "body": {},
            "labelField": "",
            "valueField": ""
        },
        "selectPluginConfig": [],
        "isDependent": false,
        "dependentOn": "",
        "fileConfig": {
            "multiple": false,
            "filePreview": false,
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        }
    },
    {
        "options": [
            {
                "label": "",
                "value": ""
            }
        ],
        "section": {
            "label": "Row2",
            "value": "Row2",
            "heading": "ssasas"
        },
        "labelField": "Bio",
        "nameField": "bio",
        "type": {
            "value": "textarea",
            "label": "Text Area"
        },
        "placeholder": "Tell us about you...",
        "defaultValue": "",
        "disable": false,
        "validationType": "string",
        "validationsObj": {
            "required": {
                "check": false
            },
            "min": {
                "check": false
            },
            "max": {
                "check": true,
                "value": 100,
                "message": "Bio should not more then 100 characters!"
            },
            "length": {
                "check": false
            },
            "matches": {
                "check": false
            }
        },
        "classes": false,
        "classNameObj": {
            "wrapper": "",
            "label": "",
            "field": "",
            "error": ""
        },
        "rows": 4,
        "fillOptionsBy": "",
        "apiConfig": {
            "url": "",
            "method": "",
            "body": {},
            "labelField": "",
            "valueField": ""
        },
        "selectPluginConfig": [],
        "isDependent": false,
        "dependentOn": "",
        "fileConfig": {
            "multiple": false,
            "filePreview": false,
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        }
    }
]

const SchemaBuilder = () => {

    const [isModelOpen, setModel] = useState(false);
    const [isPreviewModelOpen, setPreviewModel] = useState(false);

    const [isAddCustomClass, setAddCustomClass] = useState(false);
    const [isEditMode, setEditMode] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const [originalJsonData, setOriginalJsonData] = useState([]); // it stores values of submited fields
    const [jsonFormData, setJsonFormData] = useState([]);
    const [sectionDataList, setSectionDataList] = useState([]);

    const [selectedFieldIndex, setSelectedFieldIndex] = useState(null);

    const [filterObj, setFilterObj] = useState(null);

    const formSchema = yup.object().shape({
        section: yup.object().shape({ label: '', value: '' }).required('Section is required'),
        labelField: yup.string().trim().required('Label name is required'),
        nameField: yup.string().trim().required('Field name is required'),
        placeholder: yup.string().trim().required('Placeholder is required'),
        type: yup.object().shape({ label: '', value: '' }).required('Field type is required'),
        rows: yup.number().when("type", {
            is: (val) => val?.value === "textarea",
            then: (field) => field.typeError('Required Field').positive('Rows must be more than 0').integer(),
        }),
        fillOptionsBy: yup.string().when("type", {
            is: (val) => ['select', 'radio', 'checkbox'].includes(val?.value),
            then: (field) => field.required('Field is required'),
        }),
        dependentOn: yup.string().trim().when("isDependent", {
            is: (val) => val === true,
            then: (field) => field.required('Field is required'),
        }),

        fileConfig: yup.object().when("type", {
            is: (val) => val?.value === "file",
            then: (field) => yup.object({
                maxSize: yup.number().typeError('Required Field').positive('It should be more then 0').integer(),
                maxFiles: yup.number().when("multiple", {
                    is: (val) => val,
                    then: () => yup.number().typeError('Required Field').positive('It should be more then 0').integer(),
                    otherwise: () => yup.number().notRequired()
                }),
                accept: yup.string().required('Enter allowd file types'),
                imageDisplayType: yup.object().when("multiple", {
                    is: (val) => !val,
                    then: () => yup.object({ label: '', value: '' }).required('Image Display type is required'),
                    otherwise: () => yup.object({ label: '', value: '' }).notRequired()
                })
            })
        }),

        apiConfig: yup.object().when("fillOptionsBy", {
            is: (val) => val === "api",
            then: (s) => yup.object({
                url: yup.string().required('Url a method'),
                method: yup.string().required('Select a method'),
                labelField: yup.string().required('Label field is required'),
                valueField: yup.string().required('Value field is required'),
                body: yup.string().when("method", {
                    is: (val) => val === 'post',
                    then: (field) => field.required('Payload is required'),
                })
            })
        }),

        options: yup.array().when('fillOptionsBy', {
            is: (val) => val === 'static',
            then: (field) => yup.array().of(
                yup.object({
                    label: yup.string().required('Lable is required'),
                    value: yup.string().required('Value is required')
                })
            )
        }),

        validationsObj: yup.object({
            required: yup.object({
                message: yup.string().when('check', {
                    is: (val) => val,
                    then: (field) => field.required('Required')
                })
            }),
            min: yup.object({
                value: yup.number().when('check', {
                    is: (val) => val,
                    then: (field) => yup.number().typeError('Required Field').positive('It should be more then 0').integer()
                }),
                message: yup.string().when('check', {
                    is: (val) => val,
                    then: (field) => field.required('Required')
                })
            }),
            max: yup.object({
                value: yup.number().when('check', {
                    is: (val) => val,
                    then: (field) => yup.number().typeError('Required Field').positive('It should be more then 0').integer()
                }),
                message: yup.string().when('check', {
                    is: (val) => val,
                    then: (field) => field.required('Required')
                })
            }),
            length: yup.object({
                value: yup.number().when('check', {
                    is: (val) => val,
                    then: (field) => yup.number().typeError('Required Field').positive('It should be more then 0').integer()
                }),
                message: yup.string().when('check', {
                    is: (val) => val,
                    then: (field) => field.required('Required')
                })
            }),
            matches: yup.object({
                value: yup.string().when('check', {
                    is: (val) => val,
                    then: (field) => field.required('Required')
                }),
                message: yup.string().when('check', {
                    is: (val) => val,
                    then: (field) => field.required('Required')
                })
            }),
        })

    })

    const formContext = useForm({
        mode: "all",
        defaultValues: { options: [{ label: '', value: '' }] },
        // defaultValues: defaultValue,
        resolver: yupResolver(formSchema),
    });

    const {
        handleSubmit,
        control,
        formState: { errors },
        watch,
        getValues,
        setValue,
        reset,
    } = formContext;

    console.log('form errors ==>', errors)

    const validationsObj = {
        isCheckRequired: watch("validationsObj.required.check"),
        isCheckMin: watch("validationsObj.min.check"),
        isCheckMax: watch("validationsObj.max.check"),
        isCheckLength: watch("validationsObj.length.check"),
        isCheckMatches: watch("validationsObj.matches.check"),
    };


    /* JSON Array */
    const jsonSchema = yup.object().shape({
        jsonData: yup.string().trim().required('Required Field'),
    })

    const {
        handleSubmit: jsonSubmit,
        control: jsonControl,
        formState: { errors: jsonErrors },
        setValue: jsonSetValue,
        getValues: jsonGetValues,
        reset: jsonReset,
    } = useForm({
        mode: "all",
        resolver: yupResolver(jsonSchema),
    });


    const handleJsonSubmit = () => {
        console.log('handle Json Submit =>', JSON.parse(jsonGetValues('jsonData')));

        const readymadeJsonData = JSON.parse(jsonGetValues('jsonData'));
        const fieldBaseJsonData = [];

        readymadeJsonData?.map((jsonData) => {
            const obj = {
                "options": jsonData?.fillOptions?.options,
                "section": {
                    "label": jsonData?.sectionName,
                    "value": jsonData?.sectionName,
                    "heading": jsonData?.sectionHeading
                },
                "labelField": jsonData?.label,
                "nameField": jsonData?.name,
                "type": FIELD_TYPES_OPTIONS?.find(item => item?.value === jsonData?.type),
                "placeholder": jsonData?.placeholder,
                "defaultValue": "", //
                "disable": jsonData?.disabled,
                "validationType": jsonData?.validationType,
                "validationsObj": createValidationObject(jsonData?.validations),
                "rows": jsonData?.rows,
                "fillOptionsBy": jsonData?.fillOptions?.byApi === true ? 'api' : jsonData?.fillOptions?.byApi === false ? 'static' : '',

                // "apiConfig": { ...jsonData?.fillOptions?.apiConfig, body: JSON.stringify(jsonData?.fillOptions?.apiConfig?.body) },
                "apiConfig": {
                    ...jsonData?.fillOptions?.apiConfig, body: JSON.stringify(JSON.parse(jsonData?.fillOptions?.apiConfig?.body), null, 2)
                },

                "selectPluginConfig": revertSelectPluginConfig(jsonData?.selectPluginConfig),
                "isDependent": jsonData?.dependency?.isDependentField,
                "dependentOn": jsonData?.dependency?.dependentOn?.length > 0 ? jsonData?.dependency?.dependentOn : "",
                "fileConfig": jsonData?.fileConfig,
                // "classes": false,
                "classes": Object.values(jsonData?.classes).filter(Boolean).length > 0 ? true : false, // false,
                "classNameObj": jsonData?.classes
            }
            fieldBaseJsonData.push(obj)
            return true;
        })

        setOriginalJsonData(fieldBaseJsonData);
        setJsonFormData(readymadeJsonData);

    }

    const handleModelToggle = () => {
        setModel(!isModelOpen);
        setFilterObj(null);
        setAddCustomClass(false);
        reset();
    }

    /* -------Start--------  */
    const handlePreviewModelToggle = () => {
        setPreviewModel(!isPreviewModelOpen);
        setFilterObj(null);
    }

    const handleOnChange = (obj) => {
        const { name, val } = obj;
        setFilterObj((prev) => ({
            ...prev,
            [name]: val?.value
        }))
    }
    /* -------Over--------  */

    const handleAddField = () => {
        setModel(true);
    }

    const handleCheckbox = (val) => {
        setAddCustomClass(val)
    }

    const handleInputTypeChange = () => {
        setValue('rows', 0)
        setValue('fillOptionsBy', '')
        setValue('apiConfig', {
            url: "",
            method: "",
            body: "{}",
            labelField: "",
            valueField: ""
        })
        setValue('options', [{ label: '', value: '' }])


        setValue('selectPluginConfig', [])
        setValue('isDependent', false)
        setValue('dependentOn', '')


        setValue('fileConfig', {
            "multiple": false,
            "filePreview": false,
            "imageDisplayType": { label: 'Rounded', value: 'round' },
            "maxSize": 0,
            "maxFiles": 0,
            "accept": ""
        })

        setValue('validationsObj', {
            "required": { check: false },
            "min": { check: false },
            "max": { check: false },
            "length": { check: false },
            "matches": { check: false }
        })

        setValue('classNameObj', {
            "wrapper": "",
            "label": "",
            "field": "",
            "error": ""
        })
    }

    const setValidateTypeValue = (inputValue) => {
        const { value: inputType } = inputValue;
        console.log('inputType =>', inputType)
        if ([FIELD_TYPE.text, FIELD_TYPE.textarea, FIELD_TYPE.email, FIELD_TYPE.date, FIELD_TYPE.password, FIELD_TYPE.phone, FIELD_TYPE.radio, FIELD_TYPE.switch, FIELD_TYPE.ckEditor].includes(inputType)) {
            setValue('validationType', 'string')
        } else if ([FIELD_TYPE.select].includes(inputType)) {
            setValue('validationType', 'object')
        } else if ([FIELD_TYPE.checkbox, FIELD_TYPE.file, FIELD_TYPE.tag].includes(inputType)) {
            setValue('validationType', 'array')
        }
        else if ([FIELD_TYPE.number].includes(inputType)) {
            setValue('validationType', 'number')
        }
    }

    const editHandler = (fieldData, index) => {
        console.log('DM data =>', fieldData);
        setEditMode(true);
        setSelectedFieldIndex(index);
        setAddCustomClass(fieldData?.classes);

        Object.entries(fieldData)?.map(field => {
            const [fieldName, fieldValue] = field;
            setValue(fieldName, fieldValue)

            /* In order to beatify body section use below code */
            if (fieldName === 'apiConfig') {
                setValue('apiConfig.body', JSON.stringify(JSON.parse(fieldValue?.body), null, 2))
            }
        })

        setModel(true);
    }

    const deleteHandler = (index) => {
        const copyOriginalJsonData = [...originalJsonData];
        const copyJsonFormData = [...jsonFormData];
        copyOriginalJsonData?.splice(index, 1);
        copyJsonFormData?.splice(index, 1)
        setOriginalJsonData(copyOriginalJsonData);
        setJsonFormData(copyJsonFormData);
    }

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

    const submitFormData = (values) => {
        console.log('Field Data =>', values);

        const schemaObj = {

            isEditable: !values?.disable, // true,  if field is disable then validation will not apply 

            name: values?.nameField,
            label: values?.labelField,
            placeholder: values?.placeholder,
            type: values?.type?.value,
            validationType: values?.validationType,
            sectionName: values?.section?.label,
            sectionHeading: values?.section?.heading,
            rows: values?.rows,

            disabledField: values?.disable,
            disabled: values?.disable,

            validations: createValidationArray(values?.validationsObj),
            selectPluginConfig: createSelectPluginConfig(values?.selectPluginConfig),
            dependency: {
                isDependentField: values?.isDependent,
                dependentOn: values?.isDependent ? values?.dependentOn.split(',') : [],  // ['countryId','stateId'],
            },

            fillOptions: {
                byApi: values?.fillOptionsBy === 'api' ? true : values?.fillOptionsBy === 'static' ? false : '',
                apiConfig: { ...values?.apiConfig, body: values?.apiConfig?.body },
                options: values?.options
            },

            fileConfig: { ...values?.fileConfig, maxSize: values?.fileConfig?.maxSize * 1000 },
            classes: values?.classes ? values?.classNameObj : { "wrapper": "", "label": "", "field": "", "error": "" },
        }

        if (isEditMode) {
            const copyOriginalJsonData = [...originalJsonData];
            const copyJsonFormData = [...jsonFormData];

            copyOriginalJsonData[selectedFieldIndex] = values
            setOriginalJsonData(copyOriginalJsonData)

            copyJsonFormData[selectedFieldIndex] = schemaObj
            setJsonFormData(copyJsonFormData)

            setEditMode(false);

        } else {
            setOriginalJsonData(prev => [...prev, values]);
            setJsonFormData(prev => [...prev, schemaObj]);
        }

        handleModelToggle();
    }


    console.log('Field Schema Formated Obj =>', jsonFormData);
    console.log('Field Schema Original Obj =>', originalJsonData);

    useEffect(() => {
        if (jsonFormData) {
            const val = JSON.stringify(jsonFormData, null, 5)
            jsonSetValue('jsonData', val)
        }
    }, [jsonFormData])


    useEffect(() => {
        const sectionList = [];
        originalJsonData?.map((item) => {
            const sectionExist = sectionList?.find(o => o?.value === item?.section?.value);
            if (!sectionExist) {
                sectionList.push(item?.section);
            }
            return sectionList;
        })
        setSectionDataList(sectionList);
    }, [originalJsonData])


    useEffect(() => {
        if (watch('type')) {
            setValidateTypeValue(watch('type'))
        }
    }, [watch('type')])

    return (
        <div className='page-content'>
            <Row>
                <Col md={6}>
                    <Card>
                        <CardHeader className='d-flex justify-content-between align-items-center'>
                            <span className='fw-bold fs-5'>Form Field Collections</span>
                            <RHFButton
                                btnName="Add Field"
                                onClick={handleAddField}
                            />
                        </CardHeader>
                        <CardBody>
                            <FormFields
                                fields={originalJsonData}
                                handleEditClick={editHandler}
                                handleDeleteClick={deleteHandler}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <CardHeader className="d-flex justify-content-between">
                            <span className='fw-bold fs-5'>Ready to Use JSON</span>
                            <div title={isCopied ? 'Copied' : 'Copy to Clipboard'}>
                                <CopyToClipboard text={JSON.stringify(jsonFormData, null, 5)} onCopy={onCopyText}>
                                    <FeatherIcon
                                        icon="copy"
                                        size="25"
                                        cursor="pointer"

                                    />
                                </CopyToClipboard>
                            </div>

                        </CardHeader>
                        <CardBody>
                            <form onSubmit={jsonSubmit(handleJsonSubmit)}>
                                <RHFTextField
                                    id="jsonData"
                                    name="jsonData"
                                    type="textarea"
                                    rows={15}
                                    isController={true}
                                    control={jsonControl}
                                    errorobj={jsonErrors}
                                // value={JSON.stringify(jsonFormData, null, 5)}
                                // defaultValue={JSON.stringify(jsonFormData, null, 5)}
                                />
                                <RHFButton
                                    btnName="Generate Fields"
                                    type="submit"
                                />
                            </form>

                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <div className='d-flex justify-content-center'>
                <RHFButton
                    btnName="Show Form Preview"
                    onClick={handlePreviewModelToggle}
                />
            </div>


            {isModelOpen &&
                <DialogBox
                    isModelOpen={isModelOpen}
                    handleToggle={handleModelToggle}
                    modelSize='lg'
                    title='Add Field Details'
                >

                    <Form key={1} onSubmit={handleSubmit(submitFormData)}>

                        <SectionCreator formContext={formContext} defaultSectionList={sectionDataList} />

                        <Row>
                            <Col md={6}>
                                <RHFTextField
                                    id="labelField"
                                    name="labelField"
                                    label="Label Name"
                                    placeholder="Enter any label name"
                                    isController={true}
                                    control={control}
                                    errorobj={errors}
                                />
                            </Col>
                            <Col md={6}>
                                <RHFTextField
                                    id="nameField"
                                    name="nameField"
                                    label="Field Name"
                                    placeholder="Field name must be as per database"
                                    note="Field name in database"
                                    isController={true}
                                    control={control}
                                    errorobj={errors}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <RHFAutoCompleteSelect
                                    id="type"
                                    name="type"
                                    label="Field Type"
                                    placeholder="Select field type"
                                    isController={true}
                                    options={FIELD_TYPES_OPTIONS}
                                    control={control}
                                    errorobj={errors}
                                    handleOnChange={handleInputTypeChange}
                                />
                            </Col>
                            <Col md={6}>
                                <RHFTextField
                                    id="placeholder"
                                    name="placeholder"
                                    label="Placeholder"
                                    placeholder="Enter placeholder"
                                    isController={true}
                                    control={control}
                                    errorobj={errors}
                                />
                            </Col>
                        </Row>

                        <Row>
                            {/* <Col md={6}>
                                <RHFTextField
                                    id="defaultValue"
                                    name="defaultValue"
                                    label="Default Value"
                                    placeholder="Enter default value"
                                    isRequired={false}
                                    isController={true}
                                    control={control}
                                    errorobj={errors}
                                />
                            </Col> */}
                            <Col md={6}>
                                <RHFTextField
                                    id="validationType"
                                    name="validationType"
                                    label="Validation Type"
                                    isRequired={true}
                                    disabledField={true}
                                    isController={true}
                                    control={control}
                                    errorobj={errors}
                                />
                            </Col>
                            <Col md={6} className='mt-auto'>
                                <RHFCheckbox
                                    id="disable"
                                    name="disable"
                                    label="Do you want to disable field ?"
                                    defaultValue={getValues('disable') ?? false}
                                    isRequired={false}
                                    isController={true}
                                    control={control}
                                    errorobj={errors}
                                />
                            </Col>
                        </Row>

                        {[FIELD_TYPE.select, FIELD_TYPE.radio, FIELD_TYPE.checkbox, FIELD_TYPE.file, FIELD_TYPE.textarea].includes(watch('type')?.value) &&
                            <div className='border border-2 px-2 mb-4 pt-3'>
                                {/* Field Base Configuration */}
                                {[FIELD_TYPE.select, FIELD_TYPE.radio, FIELD_TYPE.checkbox, FIELD_TYPE.file, FIELD_TYPE.textarea].includes(watch('type')?.value) &&
                                    <Row>
                                        <Col md={12}>
                                            <h5>Plugin Configuration</h5>
                                            <FieldBaseConfig
                                                inputType={watch('type')?.value}
                                                formContext={formContext}
                                            />
                                        </Col>
                                    </Row>
                                }

                                {/* Common Configuration for options setup */}
                                {[FIELD_TYPE.select, FIELD_TYPE.radio, FIELD_TYPE.checkbox].includes(watch('type')?.value) &&
                                    <Row>
                                        <Col md={12}>
                                            <CommonFieldConfig
                                                formContext={formContext}
                                            />
                                        </Col>
                                    </Row>
                                }
                            </div>
                        }

                        {/* Field Validation */}
                        <div className='border border-2 px-2 mb-4 pt-3'>
                            <Row>
                                <Col md={12}>
                                    <h5>Validations</h5>
                                    <FieldValidation
                                        validationObj={validationsObj}
                                        formContext={formContext}
                                    />
                                </Col>
                            </Row>

                        </div>

                        <div className='border border-2 px-2 mb-4 pt-3'>
                            <Row>
                                <Col md={12}>
                                    <h5>Classes</h5>
                                    <RHFCheckbox
                                        id="classes"
                                        name="classes"
                                        label="Do you want to add custom classes?"
                                        defaultValue={getValues('classes') ?? false}
                                        isRequired={false}
                                        isController={true}
                                        control={control}
                                        errorobj={errors}
                                        handleCheckbox={handleCheckbox}
                                    />
                                </Col>
                            </Row>


                            {isAddCustomClass &&
                                <Row>
                                    <Col md={6}>
                                        <RHFTextField
                                            id="classNameObj.wrapper"
                                            name="classNameObj.wrapper"
                                            label="Wrapper"
                                            placeholder="Wrapper class name"
                                            isRequired={false}
                                            isController={true}
                                            control={control}
                                            errorobj={errors}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <RHFTextField
                                            id="classNameObj.label"
                                            name="classNameObj.label"
                                            label="Label"
                                            placeholder="Label class name"
                                            isRequired={false}
                                            isController={true}
                                            control={control}
                                            errorobj={errors}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <RHFTextField
                                            id="classNameObj.field"
                                            name="classNameObj.field"
                                            label="Field"
                                            placeholder="Field class name"
                                            isRequired={false}
                                            isController={true}
                                            control={control}
                                            errorobj={errors}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <RHFTextField
                                            id="classNameObj.error"
                                            name="classNameObj.error"
                                            label="Error"
                                            placeholder="Error class name"
                                            isRequired={false}
                                            isController={true}
                                            control={control}
                                            errorobj={errors}
                                        />
                                    </Col>
                                </Row>
                            }
                        </div>


                        <div className='d-flex justify-content-end'>
                            {/* <RHFButton btnName="Reset" outline={true} onClick={() => reset()}>
                                Reset
                            </RHFButton>
                            &nbsp; */}
                            <RHFButton type="submit">Submit</RHFButton>
                        </div>
                    </Form>
                </DialogBox>
            }



            {isPreviewModelOpen &&
                <DialogBox
                    isModelOpen={isPreviewModelOpen}
                    handleToggle={handlePreviewModelToggle}
                    modelSize='lg'
                    title='Form Preview'
                >
                    <FormGenerater
                        formFields={jsonFormData}
                        handleOnChange={handleOnChange}
                        selectedFilters={filterObj}
                        onSubmit={(data) => console.log('Preview Form Data', data)}
                        // defaultValues={defaultValues}
                        allowResetForm={true}
                        actions={
                            <div className='d-flex justify-content-end'>
                                <RHFButton btnName="Submit" type="submit" />
                            </div>
                        }
                    />
                </DialogBox>
            }


        </div>
    )
}

export default SchemaBuilder