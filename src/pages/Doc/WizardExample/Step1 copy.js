import React from 'react'
import { Card, CardBody, Form } from 'reactstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import RHFButton from 'components/FormControls/RHFButton'
import RHFTextField from 'components/FormControls/RHFTextField';
import { useWizardFormState } from 'context/WizardFormContext';

const Step1 = (props) => {
    const { activeStep, setStep, } = props;

    const [state, setFormState] = useWizardFormState();

    const Step1Schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().email().max(150).required("Email is required"),
    });

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: state,
        mode: "onChange",
        resolver: yupResolver(Step1Schema),
    });

    const onSubmit = (values) => {
        setFormState({ ...state, ...values });
        console.log(JSON.stringify(values))
        setStep(activeStep + 1)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className='mt-3'>
            <div className="mb-3">
                <RHFTextField
                    id="name"
                    label="Name"
                    name="name"
                    errorobj={errors}
                    control={control}
                    isController={true}
                />
            </div>
            <div className="mb-3">
                <RHFTextField
                    id="email"
                    label="Email"
                    name="email"
                    errorobj={errors}
                    control={control}
                    isController={true}
                />
            </div>


            <div className="d-flex justify-content-end pt-3">
                {activeStep !== 1 &&
                    <RHFButton
                        btnName="Previous"
                        onClick={() => {
                            setStep(activeStep - 1)
                        }}
                        className="me-2"
                    />
                }
                <RHFButton
                    btnName="Next"
                    type="submit"
                />
            </div>
        </Form >

    )
}

export default Step1