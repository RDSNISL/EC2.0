import React, { useState, useEffect } from 'react';
import DialogBox from 'components/Modals/DialogBox';
import FormGenerater from 'components/FormBuilder/FormGenerater'
import RHFButton from 'components/FormControls/RHFButton'

const PopupForm = (props) => {

    const {
        handleModelToggle,
        isModelOpen,
        title,
        actions = null,
        modelSize,
        allColumns,
        getFilteredValues,
        form_section
    } = props;
    const [btnClick, resetButtonClick] = useState(false);

    return (
        <DialogBox
            isModelOpen={isModelOpen}
            handleToggle={handleModelToggle}
            modelSize={modelSize}
            title={title}
            actions={actions}>
            <FormGenerater
                formFields={form_section} // pass sample json data here
                onSubmit={(data) => console.log('Form Data', data)}
                resetFormData={btnClick}  // optional  (resetFormData,resetButtonClick) use to reset form data in parent component
                resetButtonClick={resetButtonClick} // optional (you can pass this both props as optional but they are dependent on each other)
                allowResetForm={false}

                actions={
                    <div className='d-flex justify-content-end'>
                        <RHFButton btnName="Reset" outline={true} onClick="" /> {/** second way to add reset button */}
                        &nbsp;
                        <RHFButton btnName="Submit" type="submit" />
                    </div>
                }
            />
        </DialogBox>
    )
}

export default PopupForm;