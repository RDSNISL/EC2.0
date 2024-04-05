import React, { useState } from 'react'
import { Card, CardBody } from 'reactstrap';

import RHFButton from 'components/FormControls/RHFButton'
import { useWizardFormState } from 'context/WizardFormContext';
import FormGenerater from 'components/FormBuilder/FormGenerater';

const Step2 = (props) => {
    const { activeStep, setStep } = props;
    const [state, setFormState] = useWizardFormState();

    const step2FormJSON = [
        {
            "isEditable": true,
            "name": "address",
            "label": "Address",
            "placeholder": "Enter Address",
            "type": "textarea",
            "validationType": "string",
            "sectionName": "row1",
            "sectionHeading": "row",
            "rows": 3,
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
        },
        {
            "isEditable": true,
            "name": "country_id",
            "label": "Country",
            "placeholder": "Select",
            "type": "select",
            "validationType": "object",
            "sectionName": "row2",
            "sectionHeading": "row2",
            "rows": 0,
            "disabledField": false,
            "disabled": false,
            "validations": [
                {
                    "type": "required",
                    "params": [
                        "Select Country"
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
                    "url": "http://192.168.100.89:4002/api/country",
                    "method": "post",
                    "body": "{}",
                    "labelField": "name",
                    "valueField": "_id"
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
                "wrapper": "col-md-4",
                "label": "",
                "field": "",
                "error": ""
            }
        },
        {
            "isEditable": true,
            "name": "state_id",
            "label": "State",
            "placeholder": "Select",
            "type": "select",
            "validationType": "object",
            "sectionName": "row2",
            "sectionHeading": "row2",
            "rows": 0,
            "disabledField": false,
            "disabled": false,
            "validations": [
                {
                    "type": "required",
                    "params": [
                        "Select State"
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
                "isDependentField": true,
                "dependentOn": [
                    "country_id"
                ]
            },
            "fillOptions": {
                "byApi": true,
                "apiConfig": {
                    "url": "http://192.168.100.89:4002/api/states",
                    "method": "post",
                    "body": "{}",
                    "labelField": "name",
                    "valueField": "_id"
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
                "wrapper": "col-md-4",
                "label": "",
                "field": "",
                "error": ""
            }
        },
        {
            "isEditable": true,
            "name": "city_id",
            "label": "City",
            "placeholder": "Select",
            "type": "select",
            "validationType": "object",
            "sectionName": "row2",
            "sectionHeading": "row2",
            "rows": 0,
            "disabledField": false,
            "disabled": false,
            "validations": [
                {
                    "type": "required",
                    "params": [
                        "Select City"
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
                "isDependentField": true,
                "dependentOn": [
                    "state_id"
                ]
            },
            "fillOptions": {
                "byApi": true,
                "apiConfig": {
                    "url": "http://192.168.100.89:4002/api/city",
                    "method": "post",
                    "body": "{}",
                    "labelField": "name",
                    "valueField": "_id"
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
                "wrapper": "col-md-4",
                "label": "",
                "field": "",
                "error": ""
            }
        }
    ]

    const [filterObj, setFilterObj] = useState(null);

    const handleOnChange = (obj) => {
        const { name, val } = obj;
        setFilterObj((prev) => ({
            ...prev,
            [name]: val?.value
        }))
    }

    const onSubmit = (values) => {
        setFormState({ ...state, ...values });
        setStep(activeStep + 1)
    }

    return (
        <Card>
            <CardBody>
                <FormGenerater
                    formFields={step2FormJSON}

                    handleOnChange={handleOnChange}
                    selectedFilters={filterObj}

                    onSubmit={(values) => onSubmit(values)}

                    defaultValues={state}
                    allowResetForm={false}

                    actions={
                        <div className='d-flex justify-content-end'>
                            <RHFButton btnName="Previous" outline={true} onClick={() => setStep(activeStep - 1)} />
                            &nbsp;
                            <RHFButton btnName="Next" type="submit" />
                        </div>
                    }

                />
            </CardBody>
        </Card>
    )
}

export default Step2