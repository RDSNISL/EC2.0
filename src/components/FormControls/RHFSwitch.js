import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import Switch from "react-switch";
import { FormFeedback } from 'reactstrap';


const RHFSwitch = (props) => {
    const { isController = false, name, label, checked = false, errorobj, control, defaultValue, onChange, rowData, classes, ...extraProps } = props;

    let isError = false;
    let errorMessage = '';
    let disabled = props?.disabled;
    let someValue = false;

    if (!isController) {
        return (
            <Fragment>
                <div className={`${classes?.wrapper}`} >
                    <Switch
                        {...extraProps}
                        name={name}
                        checked={checked}
                        disabled={disabled}
                        onChange={(val) => onChange(val, rowData)}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor="#2D31FA"
                        onHandleColor="#fff"
                        handleDiameter={15}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={25}
                        className={`react-switch ${classes?.field}`}
                    />
                    {label && <span className={`form-label ${classes?.label}`}>&nbsp;{label}</span>}
                </div>
            </Fragment>
        )
    }

    if (errorobj && Object.prototype.hasOwnProperty.call(errorobj, name)) {
        isError = true;
        errorMessage = errorobj[name].message;
    }

    disabled = (props.disabled === undefined) ? false : props.disabled;

    if (defaultValue !== undefined) {
        someValue = defaultValue;
    }

    return <Controller
        name={name}
        control={control}
        defaultValue={someValue}
        render={({ field }) => {
            return (
                <Fragment>
                    <div className={`mb-3 ${classes?.wrapper}`}>
                        <div className='d-flex'>
                            <Switch
                                {...field}
                                {...extraProps}
                                name={name}
                                checked={field.value || checked}
                                disabled={disabled}
                                onChange={(e,) => {
                                    return !onChange ? field.onChange(e) : onChange(e);
                                }}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                onColor="#2D31FA"
                                offColor="#dfdfdf"
                                onHandleColor="#fff"
                                offHandleColor="#bfbfbf"
                                handleDiameter={15}
                                height={20}
                                width={48}
                                className={`react-switch ${classes?.field}`}
                            />
                            {label && <span className={`form-label ${classes?.label}`}>&nbsp;{label}</span>}
                            {isError && <FormFeedback type="invalid" className={classes?.error}>{errorMessage}</FormFeedback>}
                        </div>
                    </div>
                </Fragment>
            )
        }}
    />
}

export default RHFSwitch;
