import React, { Fragment } from 'react'
import { useFieldArray } from 'react-hook-form';
import { Button, Card, CardBody, CardHeader, Col, FormFeedback, Row } from 'reactstrap'
import RHFTextField from './RHFTextField'
import FeatherIcon from 'feather-icons-react';

const RHFMultipleValue = (props) => {
    const { errorobj, control, isController, label, bsSize = "sm", name, getValues } = props
    const { append, fields, remove } = useFieldArray({
        control, name,
    })


    const addRow = () => {
        const Value = getValues(name)
        const keyData = Value.map(data => data.key)
        const valueData = Value.map(data => data.value)
        const nullKey = keyData.includes('')
        const nullValue = valueData.includes('')
        if (Value.length === 0 || !nullKey && !nullValue) {
            append({ key: "", value: "" })
        }
    }

    return (
        <Fragment>
            <Card className={`${errorobj?.[name] ? "border-danger" : ''} mb-0`}>
                <CardHeader className='p-3 border-0 pb-0'>
                    <div className='d-flex justify-content-between align-items-center'>
                        {label && <h5 className="card-title m-0">
                            {label}
                        </h5>
                        }
                        <Button onClick={addRow} type='button' color="link" size='sm' className='p-0'>
                            + Add Value
                        </Button>
                    </div>

                </CardHeader>
                <CardBody className='p-3'>
                    {fields.map((field, index) => {
                        const fieldName = `${name}[${index}]`;
                        return (
                            <div className='multiple-value-wrapper' key={field.id}>
                                <Row>
                                    <Col sm="6" className=''>
                                        <RHFTextField
                                            id={`${fieldName}.key`}
                                            name={`${fieldName}.key`}
                                            errorobj={errorobj}
                                            control={control}
                                            isController={isController}
                                            bsSize={bsSize}
                                            defaultValue={field.key}
                                        />
                                    </Col>
                                    <Col sm="6" className=''>
                                        <RHFTextField
                                            id={`${fieldName}.value`}
                                            name={`${fieldName}.value`}
                                            errorobj={errorobj}
                                            control={control}
                                            isController={isController}
                                            bsSize={bsSize}
                                            defaultValue={field.value}
                                        />
                                    </Col>
                                </Row>
                                <FeatherIcon
                                    icon="x"
                                    size="18"
                                    className="actionBtn"
                                    onClick={() => {
                                        remove(index)
                                    }}
                                />
                            </div>
                        )
                    })}
                </CardBody>
            </Card>
            {errorobj[name] && (
                <FormFeedback type="invalid">Required/Invalid value</FormFeedback>
            )}
        </Fragment>
    )
}

export default RHFMultipleValue