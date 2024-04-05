import React from 'react'
import { Col, Row } from 'reactstrap';
import RHFRadioButton from 'components/FormControls/RHFRadioButton';
import RHFTextField from 'components/FormControls/RHFTextField';
import { useFieldArray } from 'react-hook-form';
import FeatherIcon from 'feather-icons-react';

const CommonFieldConfig = ({ formContext }) => {
    const { control, watch, formState: { errors } } = formContext;

    const { fields, append, remove } = useFieldArray({
        control,
        name: "options"
    });

    const fillOptionBy = watch('fillOptionsBy');
    const method = watch('apiConfig.method');

    const renderAPIConfig = () => {
        return (
            <React.Fragment>
                <Row>
                    <Col md={6}>
                        <RHFTextField
                            id="apiConfig.url"
                            name="apiConfig.url"
                            label="Url"
                            placeholder="Enter valid api url"
                            isController={true}
                            control={control}
                            errorobj={errors}
                        />
                    </Col>
                    <Col md={6}>
                        <RHFRadioButton
                            id="apiConfig.method"
                            name="apiConfig.method"
                            label="Method"
                            isController={true}
                            control={control}
                            errorobj={errors}
                            options={[
                                {
                                    "label": "GET",
                                    "value": "get"
                                },
                                {
                                    "label": "POST",
                                    "value": "post"
                                }
                            ]}
                        />
                    </Col>
                </Row>
                {method === 'post' &&
                    <Row>
                        <Col md={12}>
                            <RHFTextField
                                id="apiConfig.body"
                                name="apiConfig.body"
                                label="Payload"
                                placeholder="Enter payload as object"
                                type="textarea"
                                multiline={true}
                                rows={4}
                                isRequired={true}
                                isController={true}
                                control={control}
                                errorobj={errors}
                            />
                        </Col>
                    </Row>
                }
                <Row>
                    <Col md={6}>
                        <RHFTextField
                            id="apiConfig.labelField"
                            name="apiConfig.labelField"
                            label="label Field"
                            placeholder="Enter field name act as label"
                            isController={true}
                            control={control}
                            errorobj={errors}
                        />
                    </Col>
                    <Col md={6}>
                        <RHFTextField
                            id="apiConfig.valueField"
                            name="apiConfig.valueField"
                            label="Value Field"
                            placeholder="Enter field name act as value"
                            isController={true}
                            control={control}
                            errorobj={errors}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }

    const renderStaticConfig = () => {
        return (
            <React.Fragment>
                {
                    fields?.map((field, index) => {
                        return (
                            <Row key={field?.id} className='align-items-center'>
                                <Col md={5}>
                                    <RHFTextField
                                        id={field?.id}
                                        name={`options[${index}].label`}
                                        label="Label"
                                        placeholder="Enter label"
                                        isController={true}
                                        control={control}
                                        errorobj={errors}
                                    />
                                </Col>

                                <Col md={5}>
                                    <RHFTextField
                                        id={field?.id}
                                        name={`options[${index}].value`}
                                        label="Value"
                                        placeholder="Enter value"
                                        isController={true}
                                        control={control}
                                        errorobj={errors}
                                    />
                                </Col>
                                {index > 0 &&
                                    <Col md={fields?.length - 1 === index ? 1 : 2}>
                                        <FeatherIcon
                                            icon="x-circle"
                                            size={25}
                                            stroke="#FF0000"
                                            onClick={() => remove(index)}
                                            cursor="pointer"
                                        />
                                    </Col>
                                }
                                {fields?.length - 1 === index &&
                                    <Col md={fields?.length - 1 === index ? 1 : 2}>
                                        <FeatherIcon
                                            icon="plus-square"
                                            size={25}
                                            stroke="#3b5de7"
                                            onClick={() => append({ label: '', value: '' })}
                                            cursor="pointer"
                                        />
                                    </Col>
                                }
                            </Row>
                        )
                    })
                }
            </React.Fragment>

        )
    }

    const sectionMapper = {
        'api': renderAPIConfig,
        'static': renderStaticConfig
    }

    return (
        <div>
            <p className='fw-bold fs-6'>How would you like to add options.?</p>
            <RHFRadioButton
                id="fillOptionsBy"
                name="fillOptionsBy"
                label={null}
                isController={true}
                control={control}
                errorobj={errors}
                options={[
                    {
                        "label": "Api Call",
                        "value": "api"
                    },
                    {
                        "label": "Manually",
                        "value": "static"
                    }
                ]}
            />
            {sectionMapper[fillOptionBy] && sectionMapper[fillOptionBy]()}
        </div>
    )
}

export default CommonFieldConfig