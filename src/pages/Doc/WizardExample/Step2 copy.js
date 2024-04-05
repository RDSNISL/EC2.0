import React, { useEffect } from 'react'
import { Card, CardBody, Form } from 'reactstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import RHFButton from 'components/FormControls/RHFButton'
import RHFTextField from 'components/FormControls/RHFTextField';
import { useWizardFormState } from 'context/WizardFormContext';

const Step2 = (props) => {
    const { activeStep, setStep } = props;
    const [state, setFormState] = useWizardFormState();

    const Step2Schema = yup.object().shape({
        address: yup.string().required("Address is required"),
    });

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: state,
        mode: "onChange",
        resolver: yupResolver(Step2Schema),
    });

    const onSubmit = (values) => {
        setFormState({ ...state, ...values });
        console.log("Address =>", JSON.stringify(values))
        setStep(activeStep + 1)
    }

    return (
        <Card>
            <CardBody>
                {/* <Form> */}

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <RHFTextField
                            id="address"
                            label="Address"
                            name="address"
                            type="textarea"
                            multiline={true}
                            rows={4}
                            errorobj={errors}
                            control={control}
                            isController={true}
                        />
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <RHFButton
                            btnName="Previous"
                            onClick={() => {
                                setStep(activeStep - 1)
                            }}
                            className="me-2"
                        />
                        <RHFButton
                            btnName="Next"
                            type="submit"
                        />
                    </div>

                </Form>
            </CardBody>
        </Card>
    )
}

export default Step2