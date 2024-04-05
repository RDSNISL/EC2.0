import React, { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Col, Form, Row } from 'reactstrap';
import RHFTextField from 'components/FormControls/RHFTextField';
import RHFButton from 'components/FormControls/RHFButton';
import RHFAutoCompleteSelect from 'components/FormControls/RHFAutoCompleteSelect';

const SectionCreator = ({ formContext, defaultSectionList }) => {

    const { control, formState: { errors } } = formContext;  // bcz its belong to main form

    const [sections, setSections] = useState(defaultSectionList);

    const tempData = [];

    const sectionSchema = yup.object().shape({
        sectionName: yup.string().required('Reuired Field'),
        sectionHeading: yup.string().required('Reuired Field'),
    })

    const {
        handleSubmit: sectionSubmit,
        control: sectionControl,
        formState: { errors: sectionErrors },
        reset: sectionReset,
    } = useForm({
        mode: "all",
        resolver: yupResolver(sectionSchema),
    });

    const handleOnSubmit = (values) => {
        tempData.push({ label: values?.sectionName, value: values?.sectionName, heading: values?.sectionHeading })
        setSections(prev => [...prev, ...tempData]);
        sectionReset();
    }

    return (
        <Row>
            <Col md={5}>
                <RHFAutoCompleteSelect
                    id="section"
                    name="section"
                    label="Select Section"
                    placeholder="Select"
                    note="Field will display inside selected section"
                    isController={true}
                    options={sections}
                    control={control}
                    errorobj={errors}
                />
            </Col>
            <Col md={2}>
                <p className='fw-bold fs-4 p-4'>OR</p>
            </Col>
            <Col md={5}>
                <Form key={2} onSubmit={(e) => { e.preventDefault(); }}>
                    <Row>
                        <Col md={6}>
                            <RHFTextField
                                id="sectionName"
                                name="sectionName"
                                label="Name"
                                placeholder="Section name"
                                isController={true}
                                control={sectionControl}
                                errorobj={sectionErrors}
                            />
                        </Col>
                        <Col md={6}>
                            <RHFTextField
                                id="sectionHeading"
                                name="sectionHeading"
                                label="Heading"
                                placeholder="Section heading"
                                isController={true}
                                control={sectionControl}
                                errorobj={sectionErrors}
                            />
                        </Col>
                        <div className='d-flex justify-content-end'>
                            <RHFButton
                                btnName="Add Section"
                                onClick={sectionSubmit(handleOnSubmit)}
                            />
                        </div>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default SectionCreator