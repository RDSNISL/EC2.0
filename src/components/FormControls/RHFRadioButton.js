
import React, { Fragment, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { FormFeedback, Input, Label } from 'reactstrap';
import { getOptionsByAPI } from 'utils';

const RHFRadioButton = ({ isController = false, ...props }) => {
    const {
        label,
        name,
        errorobj,
        control,
        options = [],
        isRequired = true,
        autoFocus = false,
        disabled = false,
        handleRadio = () => { },
        checked = false,
        defaultValue = '',
        fillOptions,
        classes,
        ...extraProps
    } = props;


    const [optionsData, setOptions] = useState([]);

    useEffect(() => {
        if (fillOptions) {
            if (fillOptions?.byApi) {
                getOptionsByAPI(fillOptions?.apiConfig)
                    .then((res) => {
                        setOptions(res)
                    })
            } else {
                setOptions(fillOptions?.options)
            }
        }
    }, [fillOptions]);

    const optionsList = options?.length > 0 ? options : optionsData?.length > 0 ? optionsData : [];

    if (!isController) {
        return (
            <Fragment>
                <div className={`mb-3 ${classes?.wrapper}`} >
                    {label && <Label htmlFor="example-radio-input" className={`form-label ${classes?.label}`}>
                        {label} {isRequired && <span className="text-danger">*</span>}
                    </Label>}
                    <Input type="radio" onChange={(e) => handleRadio(e?.target?.value)} id="example-radio-input" className={classes?.field}  {...extraProps} />
                </div>
            </Fragment>
        );
    }

    let isError = false;
    let errorMessage = '';

    if (errorobj && Object.prototype.hasOwnProperty.call(errorobj, name)) {
        isError = true;
        errorMessage = errorobj[name].message;
    }

    return <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState: { error } }) => (
            <Fragment>
                <div className={`mb-3 ${errorMessage && 'border-danger'} ${classes?.wrapper}`} >
                    {label &&
                        <div className='d-flex justify-content-between my-1 py-1 border-0'>
                            <Label htmlFor="example-radio-input" className={`form-label ${classes?.label}`}>
                                {label} {isRequired && <span className="text-danger">*</span>}
                            </Label>
                        </div>
                    }
                    <div className='d-flex flex-wrap p-0'>
                        {optionsList?.map((item, index) =>
                            <div className="form-check me-2" key={index}>
                                <Label htmlFor={item.label} className={`form-label ${classes?.label}`} style={{ cursor: "pointer" }}>{item.label}</Label>
                                <Input
                                    {...field}
                                    {...extraProps}
                                    type="radio"
                                    value={item?.value}
                                    checked={field?.value.toString() === item?.value.toString()}
                                    defaultChecked={field?.value.toString() === item?.value.toString()}
                                    autoFocus={autoFocus}
                                    invalid={error}
                                    disabled={disabled}
                                    className={classes?.field}
                                    onChange={(e) => {
                                        field.onChange(e?.target?.value)
                                        handleRadio && handleRadio(e?.target?.value)
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    {error && <FormFeedback type="invalid" className={classes?.error} >{error?.message}</FormFeedback>}
                </div>
            </Fragment >
        )}
    />
}

export default RHFRadioButton;
