import React, { useState } from 'react'
import WizardForm from 'components/Common/WizardForm'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step1 from './Step1'
import { WizardFormProvider } from 'context/WizardFormContext'
import { WIZARD_FORM_1 } from 'constant/Constant'

const WizardExample = () => {
    const [activeStep, setActiveStep] = useState(1);

    console.log('Steps =>', activeStep)

    const setStep = (step) => {
        setActiveStep(step);
    }

    const formMapper = {
        1: <Step1
            activeStep={activeStep}
            setStep={setStep}
        />,
        2: <Step2
            activeStep={activeStep}
            setStep={setStep}
        />,
        3: <Step3
            activeStep={activeStep}
            setStep={setStep}
        />,
        4: <Step4
            activeStep={activeStep}
            setStep={setStep}
        />,
    }

    return (
        <div className='page-content'>
            <WizardFormProvider>
                <WizardForm
                    steps={['Step1', 'Step2', 'Step3', 'Done']}
                    currentStep={activeStep}
                    setStep={setStep}
                >
                    {formMapper[activeStep]}
                </WizardForm>
            </WizardFormProvider>
        </div>
    )
}

export default WizardExample