
import React, { Fragment, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { FormFeedback, Input, Label } from 'reactstrap';
import { getOptionsByAPI } from 'utils';

const RHFCheckBoxGroup = ({ isController = false, ...props }) => {
    const {
        label,
        name,
        errorobj,
        control,
        autoFocus = false,
        disabled = false,
        isRequired = true,
        handleCheckbox = () => { },
        checked = false,
        defaultValue = [],
        fillOptions,
        classes,
        ...extraProps
    } = props;


    const [options, setOptions] = useState([]);

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


    const handleChange = (e, field) => {
        field.onChange(
            e.target.checked
                ? [...field?.value, e.target.value]
                : [...field?.value.filter((val) => val !== e.target.value)]
        );
        handleCheckbox(field?.name, e)
    }


    if (!isController) {
        return (
            <Fragment>
                <div className={`mb-3 ${classes?.wrapper}`} >
                    <Label htmlFor="example-checkbox-input" className={`form-label ${classes?.label}`}>{label}</Label>
                    <Input type="checkbox" onChange={(name, e) => handleCheckbox(name, e)} id="example-checkbox-input" className={classes?.field} {...extraProps} />
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
        render={({ field: { ref, ...field } }) => (
            <Fragment>
                <div className={`mb-3 ${errorMessage && 'border-danger'} ${classes?.wrapper}`} >
                    <div className='d-flex justify-content-between my-1 py-1 border-0'>
                        {label && <Label htmlFor="example-checkbox-input" className={`form-label ${classes?.label}`}>
                            {label} {isRequired && <span className="text-danger">*</span>}
                        </Label>}
                    </div>
                    <div className='d-flex flex-wrap p-0'>
                        {options?.map((item, index) =>
                            <div className="form-check me-2" key={index}>
                                <Label htmlFor={item.label} className={`form-label ${classes?.label}`} style={{ cursor: "pointer" }}>{item.label}</Label>
                                <Input
                                    {...field}
                                    {...extraProps}
                                    type="checkbox"
                                    value={item?.value}
                                    checked={field?.value?.includes(item.value.toString()) ? true : false}
                                    defaultChecked={field?.value?.includes(item.value.toString()) ? true : false}
                                    autoFocus={autoFocus}
                                    invalid={isError}
                                    disabled={disabled}
                                    onChange={(event) => handleChange(event, field)}
                                    className={classes?.field}
                                />
                            </div>
                        )}
                    </div>
                    {isError && <FormFeedback type="invalid" className={classes?.error}>{errorMessage}</FormFeedback>}
                </div>
            </Fragment>
        )}
    />
}

export default RHFCheckBoxGroup;
