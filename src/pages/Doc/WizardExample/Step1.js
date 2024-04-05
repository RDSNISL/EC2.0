import React from 'react'
import RHFButton from 'components/FormControls/RHFButton'
import { useWizardFormState } from 'context/WizardFormContext';
import FormGenerater from 'components/FormBuilder/FormGenerater';
import { Card, CardBody } from 'reactstrap';

const Step1 = (props) => {
    const { activeStep, setStep, } = props;

    const [state, setFormState] = useWizardFormState();

    const step1FormJSON = [
        {
            "isEditable": true,
            "name": "name",
            "label": "Name",
            "placeholder": "Enter name",
            "type": "text",
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
                "wrapper": "col-md-12",
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
        },
        {
            "isEditable": true,
            "name": "fiends",
            "label": "Friends",
            "placeholder": "Select Friend",
            "type": "select",
            "validationType": "object",
            "sectionName": "row3",
            "sectionHeading": "row3",
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
                "isClearable": true,
                "isSearchable": true,
                "isMulti": false,
                "isRtl": false
            },
            "dependency": {
                "isDependentField": false,
                "dependentOn": []
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
                        "label": "Aditya",
                        "value": "adi"
                    },
                    {
                        "label": "Mahesh",
                        "value": "mkt"
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

    const onSubmit = (values) => {
        setFormState({ ...state, ...values });
        setStep(activeStep + 1)
    }

    return (
        <Card>
            <CardBody>
                <FormGenerater
                    formFields={step1FormJSON}
                    onSubmit={(values) => onSubmit(values)}
                    defaultValues={state}
                    allowResetForm={true}
                    actions={
                        <div className='d-flex justify-content-end'>
                            <RHFButton btnName="Next" type="submit" />
                        </div>
                    }
                />
            </CardBody>
        </Card>
    )
}

export default Step1