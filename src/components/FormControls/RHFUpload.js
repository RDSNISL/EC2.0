import React, { useState } from 'react'
import { FormFeedback, Label } from 'reactstrap';
import RHFButton from './RHFButton';
import { Controller } from 'react-hook-form';



const RHFUpload = ({ control, inputRef, name, id, label, errorobj, getFileData, setValue, isValidate = false }) => {
    const [fileName, setFileName] = useState()

    let isError = false;
    let errorMessage = '';

    if (errorobj && Object.prototype.hasOwnProperty.call(errorobj, name)) {
        isError = true;
        errorMessage = errorobj[name]?.message;
    }

    const handleUpload = () => {
        inputRef && inputRef?.current?.click();
    };

    const onFileUpload = (e, field) => {
        const objectUrl = URL.createObjectURL(e?.target?.files[0]);
        getFileData({ file: e?.target?.files[0], base64: objectUrl })
        setFileName(e?.target?.files[0]?.name)
        field.onChange(e?.target?.files[0])
        setValue(name, e?.target?.files[0])
    }


    return (
        <Controller
            control={control}
            name={name}
            id={name}
            render={({ field }) => (
                <div className="profile-container">
                    <div className='d-flex justify-content-between'>

                        <Label htmlFor={name} className="form-label">
                            {label}
                        </Label>
                        <input
                            className="d-none"
                            ref={inputRef}
                            name={name}
                            id={id}
                            type="file"
                            onChange={(e) => onFileUpload(e, field)}
                        />
                        {fileName && <span>{fileName}</span>}
                        <RHFButton
                            btnName="Upload"
                            type='button'
                            onClick={() => handleUpload()} />

                    </div>
                    {isError && isValidate && <FormFeedback type="invalid">{errorMessage}</FormFeedback>}

                </div>
            )}
        />
    )
}

export default RHFUpload
