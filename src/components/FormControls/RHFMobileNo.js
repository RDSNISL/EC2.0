import React, { Fragment } from "react";
import { Controller } from "react-hook-form";
import { FormFeedback, Label } from "reactstrap";
import PhoneInput from 'react-phone-input-2'
import RHFDisableField from "./RHFDisableField";
import 'react-phone-input-2/lib/style.css'

const RHFMobileNo = (props) => {
  const {
    name,
    setCountries,
    label,
    errorobj,
    isController,
    control,
    defaultValue,
    handleOnChange,
    isRequired = true,
    disabledField = false,
    bsSize = "md",
    classes,
    ...extraProps
  } = props;

  if (!isController) {
    return (
      <Fragment>
        <div className={`mb-3 ${classes?.wrapper}`} >
          <div className={label && "mb-2"}>
            {label && (
              <Label htmlFor="example-text-input" className={`form-label ${classes?.label}`}>
                {label}
              </Label>
            )}
            {!disabledField ?
              <PhoneInput
                {...props}
                country={"in"}
                excludeCountries={['us', 'kz']}
                onChange={(phone) => {
                  if (handleOnChange) {
                    handleOnChange(name, phone);
                  }
                }}
                className={classes?.field}
              />
              : <RHFDisableField fieldValue={defaultValue}></RHFDisableField>
            }
          </div>
        </div>
      </Fragment>
    );
  }

  let isError = false;
  let errorMessage = "";
  let someValue = "";

  if (errorobj && Object.prototype.hasOwnProperty.call(errorobj, name)) {
    isError = true;
    errorMessage = errorobj[name]?.message;
  }


  if (defaultValue !== undefined) {
    someValue = defaultValue;
  }

  const borderStyle = errorMessage ? { borderColor: "#fd625e" } : null
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={someValue}
      render={({ field: { ref, ...field } }) => (
        <Fragment>
          <div className={`mb-3 ${classes?.wrapper}`}>
            {label && <Label htmlFor="example-text-input" className={`form-label ${classes?.label}`}>
              {label} {isRequired && <span className="text-danger">*</span>}
            </Label>
            }
            {!disabledField ?
              <Fragment>
                <PhoneInput
                  {...field}
                  {...extraProps}
                  defaultMask='(...) ...-....'
                  inputStyle={borderStyle}
                  buttonStyle={borderStyle}
                  priority={{ ca: 0, us: 1, kz: 0, ru: 1 }}
                  country={"in"}
                  excludeCountries={['us', 'kz']}
                  onChange={(phone, country, e, formattedValue) => field.onChange(formattedValue)}
                  isValid={(phone, country, countries) => {
                    // setCountries(countries)
                    return true
                  }}
                  className={classes?.field}
                />
                {isError && (
                  <FormFeedback type="invalid" className={classes?.error} >{errorMessage}</FormFeedback>
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

export default RHFMobileNo;
