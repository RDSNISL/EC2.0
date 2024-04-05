import React, { useEffect } from 'react'
import RHFButton from 'components/FormControls/RHFButton'
import { Card, CardBody } from 'reactstrap';

const Step3 = (props) => {
    const { activeStep, setStep } = props;

    return (
        <Card>
            <CardBody>
                <p className='fw-normal fs-6'>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is available
                </p>
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
                        onClick={() => setStep(activeStep + 1)}
                    />
                </div>
            </CardBody>
        </Card>
    )
}

export default Step3