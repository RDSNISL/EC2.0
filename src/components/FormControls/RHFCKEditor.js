import React, { useEffect, useState } from 'react';
import { CKEditor } from 'ckeditor4-react';
import { Controller } from "react-hook-form";
import { FormFeedback, Label } from 'reactstrap';

const RHFCKEditor = (props) => {
    const { name, control, setValue, details, label, isRequired = true, disabledField = false } = props

    const [showEditor, setloadEditor] = useState(false);

    // useEffect(() => {
    //     if (details) {
    //         setValue(`${name}`, details?.[name] || '');
    //     }
    // }, [details, name])

    useEffect(() => {
        setTimeout(() => {
            setloadEditor(true)
        }, [100])
    }, [])

    return (
        <div>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <React.Fragment>
                            {showEditor &&
                                <>
                                    {label && <Label htmlFor="example-text-input" className="form-label">
                                        {label} {isRequired && <span className="text-danger">*</span>}
                                    </Label>
                                    }
                                    {JSON.stringify(field)}
                                    <CKEditor
                                        {...field}
                                        name={field?.name}
                                        onChange={(event) => field.onChange(event?.editor?.getData())}
                                        editorUrl="https://cdn.ckeditor.com/4.20.1/full/ckeditor.js"
                                        // initData={field?.value}
                                        initData={<p>Hello</p>}
                                        type="classic"
                                        onInstanceReady={() => { }}
                                    />
                                    {error && <FormFeedback type="invalid">{error?.message}</FormFeedback>}
                                </>
                            }
                        </React.Fragment>
                    )
                }}
            />
        </div>
    )
}

export default RHFCKEditor;