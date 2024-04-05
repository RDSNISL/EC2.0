import React, { Fragment } from "react";
import { Controller } from "react-hook-form";
import { FormFeedback, Label } from "reactstrap";
import TagsInput from "react-tagsinput";
import classNames from 'classnames';
import "react-tagsinput/react-tagsinput.css";
import RHFDisableField from "./RHFDisableField";

const RHFInputTags = ({ isController = true, ...props }) => {
  const {
    name,
    label,
    errorobj,
    control,
    defaultValue,
    placeholder,
    onChange,
    isRequired = true,
    disabledField = false,
    classes,
    ...extraProps
  } = props;

  if (!isController) {
    return (
      <Fragment>
        <div className={`${classes?.wrapper}`} >
          <div className={label && "mb-3"}>
            {label && (
              <Label htmlFor="example-text-input" className={`form-label ${classes?.label}`}>
                {label}
              </Label>
            )}
            {!disabledField ?
              <TagsInput
                {...extraProps}
                inputProps={{ placeholder: placeholder }}
                value={[]}
                onChange={(value) => onChange(value)}
                className={classes?.field}
              /> : <RHFDisableField fieldValue={defaultValue}></RHFDisableField>
            }
          </div>
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
      defaultValue={someValue}
      render={({ field, fieldState: { error } }) => (
        <Fragment>
          <div className={`mb-3 ${classes?.wrapper}`}>
            {label && <Label htmlFor="example-text-input" className={`form-label ${classes?.label}`}>
              {label} {isRequired && <span className="text-danger">*</span>}
            </Label>
            }
            {!disabledField ?
              <React.Fragment>
                <div className={error ? 'react-tagsinput invalid-error' : 'react-tagsinput'}>
                  <TagsInput
                    {...field}
                    {...extraProps}
                    inputProps={{ placeholder: placeholder }}
                    value={field?.value || []}
                    onChange={(value) => {
                      field.onChange(value);
                    }}
                    className={classes?.field}
                  />
                </div>
                <small className="text-muted">Press enter after entering value to add it</small>
                {error && <FormFeedback type="invalid" className={classes?.error}>{error?.message}</FormFeedback>}
              </React.Fragment> :
              <RHFDisableField fieldValue={field?.value ?? defaultValue}></RHFDisableField>
            }
          </div>
        </Fragment>
      )}
    />
  );
};

export default RHFInputTags;
