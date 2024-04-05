import React, { useEffect, useState } from 'react'
import { Card, CardBody, NavItem, NavLink } from 'reactstrap';
import classnames from "classnames"
import RHFButton from 'components/FormControls/RHFButton';


const WizardForm = (props) => {
    const { steps, currentStep, setStep, children } = props;
    // const [activeStep, setActiveStep] = useState(currentStep);


    // const obj = steps?.find((step) => step?.id === currentStep)?.component;

    // console.log('finalStep obj =>', obj);

    // const MyComponent = {
    //     ...obj,
    //     props: {
    //         setStep: setStep
    //     }
    // }

    // console.log('finalStep =>', obj, MyComponent);

    // const renderStep = (step) => {
    //     if (step?.id === currentStep) {
    //         return step?.component
    //     }
    // }


    return (
        <Card>
            <CardBody>
                <div className="form-wizard-wrapper wizard clearfix">
                    <div className="steps clearfix">
                        <ul>
                            {steps?.map((step, index) =>
                                <NavItem key={step}
                                    className={classnames({ 'current': currentStep === index + 1 })}>
                                    <NavLink
                                        className={classnames({ 'current': currentStep === index + 1 })}
                                    // onClick={() => setActiveStep(index + 1)}
                                    >
                                        <span className="number">{index + 1}.</span>{" "} {step}
                                    </NavLink>
                                </NavItem>


                            )}
                        </ul>
                    </div>
                    {children}

                    {/* {steps?.map((step) => renderStep(step))} */}

                    {/* {finalStep?.find((step) => step?.id === currentStep)?.component} */}

                    {/* {MyComponent} */}


                </div>
            </CardBody>
        </Card>
    )
}

export default WizardForm; 
