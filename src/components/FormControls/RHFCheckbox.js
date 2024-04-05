import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import { FormFeedback, Input, Label } from 'reactstrap';

const RHFCheckbox = ({ isController = false, ...props }) => {
  const {
    name,
    label,
    errorobj,
    control,
    defaultValue,
    checked = false,
    disabled = false,
    handleCheckbox,
    ...extraProps
  } = props;

  if (!isController) {
    return (
      <Fragment>
        <div className="mb-3">
          <Input type="checkbox" onChange={(e) => handleCheckbox(e.target.checked)} id="example-checkbox-input"  {...extraProps} />
          <Label htmlFor="example-checkbox-input" className="form-label">{label}</Label>
        </div>
      </Fragment>
    );
  }
  let isError = false;

  if (errorobj && Object.prototype.hasOwnProperty.call(errorobj, name)) {
    isError = true;
  }

  return <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field }) => (
      <Fragment>
        <div className="mb-3">
          <Input
            {...field}
            {...extraProps}
            type="checkbox"
            defaultChecked={defaultValue}
            invalid={isError}
            disabled={disabled}
            onChange={(_,) => {
              // return !handleCheckbox ? field.onChange(_.target.checked) : handleCheckbox(_.target.checked);
              field.onChange(_.target.checked);
              if (handleCheckbox) {
                handleCheckbox(_.target.checked)
              }
            }}
          /> {' '}
          <Label htmlFor="example-checkbox-input" className="form-label">{label}</Label>
          {/* {isError && <FormFeedback type="invalid">{errorMessage}</FormFeedback>} */}
          {/* @mmp error msg display in every checkbox */}

          {isError && <FormFeedback type="invalid"></FormFeedback>}

        </div>
      </Fragment>
    )}
  />
}

export default RHFCheckbox;
