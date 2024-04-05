import React, { useEffect } from 'react'
import RHFButton from 'components/FormControls/RHFButton'
import { Card, CardBody } from 'reactstrap';
import { useWizardFormState } from 'context/WizardFormContext';

const Step4 = (props) => {
    const { activeStep, setStep } = props;

    const [state, setFormState] = useWizardFormState();

    const onSubmit = () => {
        alert(JSON.stringify(state))
        setFormState({})
    }

    return (
        <Card>
            <CardBody>
                <span style={{ fontSize: "100px" }} className='d-flex justify-content-center' >&#128526;</span>
                <div className="d-flex justify-content-end pt-3">
                    <RHFButton
                        btnName="Previous"
                        onClick={() => {
                            setStep(activeStep - 1)
                        }}
                        className="me-2"
                    />
                    <RHFButton
                        btnName="Done"
                        onClick={() => onSubmit()}
                    />

                </div>
            </CardBody>
        </Card>
    )
}

export default Step4