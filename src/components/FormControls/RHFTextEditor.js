import React, { Fragment } from 'react'
import { Controller } from 'react-hook-form';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FormFeedback, Label } from 'reactstrap';
import RHFDisableField from './RHFDisableField';


const RHFTextEditor = ({ isController = true, ...props }) => {

    const {
        name,
        control,
        defaultValue,
        handleOnChange,
        classes,
        disabledField = false,
        label = "label",
        isRequired = true,
    } = props

    const modules = {
        toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [
                { align: "" },
                { align: "center" },
                { align: "right" },
                { align: "justify" }
            ]
        ]
    };

    // Formats objects for setting up the Quill editor
    const formats = [
        "bold",
        "italic",
        "underline",
        "strike",
        "align",
        "list",
        "bullet"
    ];

    if (!isController) {
        return (
            <Fragment>
                <div className={`${classes?.wrapper}`} >
                    {label && <Label htmlFor="example-text-input" className={`form-label ${classes?.label}`}>{label}</Label>}

                    {!disabledField ?
                        <ReactQuill
                            {...props}
                            theme="snow"
                            onChange={(data) => {
                                if (handleOnChange) {
                                    handleOnChange(name, data?.target?.value);
                                }
                            }}
                            className={classes?.field}
                            modules={modules}
                            formats={formats}
                        /> : <RHFDisableField fieldValue={defaultValue}></RHFDisableField>
                    }
                </div>
            </Fragment>
        );
    }

    let someValue = "";

    if (defaultValue !== undefined) {
        someValue = defaultValue;
    }

    return (
        <Controller
            name={name}
            control={control}
            id={name}
            defaultValue={someValue}
            render={({ field, fieldState: { error } }) => (
                <Fragment>
                    <div className={`mb-3 ${classes?.wrapper}`}>
                        {label && <Label htmlFor="example-text-input" className={`form-label ${classes?.label}`}>
                            {label} {isRequired && <span className="text-danger">*</span>}
                        </Label>
                        }
                        <ReactQuill
                            {...field}
                            {...props}
                            theme="snow"
                            onChange={(e) => field.onChange(e)}
                            modules={modules}
                            formats={formats}
                            className={classes?.field}
                        />
                        {error && (
                            <FormFeedback type="invalid" className={classes?.error}>{error?.message}</FormFeedback>
                        )}
                    </div>
                </Fragment>
            )}
        />

    )
}

export default RHFTextEditor
