import React, { Fragment } from "react";
import { Controller } from "react-hook-form";
import { FormFeedback, Input, Label } from "reactstrap";
import RHFDisableField from "./RHFDisableField";

const RHFTextField = (props) => {
  const {
    id,
    name,
    label,
    errorobj,
    control,
    defaultValue,
    multiline,
    rows,
    onChange,
    handleOnChange,
    classes,
    isController = true,
    isRequired = true,
    backgroundcolor = false,
    autoFocus = false,
    bsSize = "md",
    type = "text",
    disabledField = false,
    note = false,

    ...extraProps
  } = props;

  if (!isController) {
    return (
      <Fragment>
        {/* <div className={`mb-3 ${classes?.wrapper}`} > */}
        <div className={`${classes?.wrapper}`} >
          <div className={label && "mb-2"}>
            {label && (
              <Label htmlFor="example-text-input" className={`form-label ${classes?.label}`}>
                {label}
              </Label>
            )}
            {!disabledField ?
              <React.Fragment>

                <Input
                  {...props}
                  autoFocus={autoFocus}
                  style={backgroundcolor ? { background: backgroundcolor, color: '#fff' } : null}
                  type={type}
                  onChange={(data) => {
                    if (handleOnChange) {
                      handleOnChange(
                        name,
                        data?.target?.value,
                      ); /* You must pass this function while isController is false -> else you will not get selected values */
                    }
                  }}
                  className={classes?.field}
                />
                <small>{note && note}</small>
              </React.Fragment>
              : <RHFDisableField fieldValue={defaultValue}></RHFDisableField>
            }
          </div>
        </div>
      </Fragment>
    );
  }

  let isError = false;
  let errorMessage = "";
  let disabled = false;
  let someValue = "";

  if (errorobj && Object.prototype.hasOwnProperty.call(errorobj, name)) {
    isError = true;
    errorMessage = errorobj[name]?.message;
  }

  disabled = props.disabled === undefined ? false : props.disabled;

  if (defaultValue !== undefined) {
    someValue = defaultValue;
  }

  // console.log('re-render')

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={someValue}
      render={({ field, fieldState: { error } }) => (
        <Fragment>
          <div className={`mb-3 ${classes?.wrapper}`}>
            {label && <Label htmlFor="example-text-input" className={`form-label ${classes?.label}`}>
              {label} {isRequired && <span className="text-danger">*</span>}
            </Label>
            }
            {!disabledField ?
              <Fragment>
                <Input
                  autoComplete="off"
                  {...field}
                  {...extraProps}
                  autoFocus={autoFocus}
                  bsSize={bsSize}
                  type={type}
                  invalid={error}
                  disabled={disabled}
                  onChange={(_) => {
                    if (type === 'number') {
                      return !onChange ? field.onChange(+_.target.value) : onChange(_);
                    } else {
                      return !onChange ? field.onChange(_.target.value) : onChange(_);
                    }
                  }}
                  rows={rows}
                  className={classes?.field}
                />
                <em>{note && note}</em>
                {error && (
                  <FormFeedback type="invalid" className={classes?.error}>{error?.message}</FormFeedback>
                )}
              </Fragment>
              : <RHFDisableField fieldValue={field.value} bsSize={bsSize}></RHFDisableField>
            }
          </div>
        </Fragment>
      )}
    />
  );
};

export default RHFTextField
