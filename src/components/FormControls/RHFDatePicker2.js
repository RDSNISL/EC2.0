import React, { Fragment, useState } from 'react';
import { Controller } from 'react-hook-form';
import { FormFeedback, Input, Label } from 'reactstrap';
import RHFDisableField from './RHFDisableField';
import moment from 'moment/moment'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RHFDatePicker = (props) => {
  const {
    name,
    label,
    errorobj,
    control,
    value = null,
    handleOnChange,
    defaultValue = '',
    isRequired = true,
    disabled = false,
    inputFormat = 'DD/MM/YYYY',
    disabledField = false,
    isController = false,
    classes,
    ...extraProps
  } = props;

  if (!isController) {
    return (
      <Fragment>
        <div className={`mb-3 ${classes?.wrapper}`} >
          <Label htmlFor="example-date-input" className={`form-label ${classes?.label}`}>{label}</Label>
          {!disabledField ?
            <Input
              id="example-date-input"
              type="date"
              {...extraProps}
              disabled={disabled}
              defaultValue={defaultValue}
              className={classes?.field}
              onChange={(data) => {
                if (handleOnChange) {
                  handleOnChange(
                    name,
                    data.target.value,
                  ); /* You must pass this function while isController is false -> else you will not get selected values */
                }
              }}
            />
            : <RHFDisableField fieldValue={defaultValue}></RHFDisableField>
          }
        </div>
      </Fragment>
    );
  }

  let isError = false;
  let errorMessage = '';
  let someValue = '';
  if (errorobj && Object.prototype.hasOwnProperty.call(errorobj, name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }
  if (defaultValue !== undefined) {
    someValue = defaultValue;
  }
  return <Controller
    name={name}
    control={control}
    defaultValue={someValue}
    render={({ field }) => (
      <Fragment>
        <div className={`mb-3 ${classes?.wrapper}`} >
          <Label htmlFor="example-date-input" className={`form-label ${classes?.label}`}>{label}
            {isRequired && <span className="text-danger">*</span>}
          </Label>
          {!disabledField ?
            <Fragment>
              <Input
                {...field}
                {...extraProps}
                type="date"
                invalid={isError}
                disabled={disabled}
                className={classes?.field}
                onChange={(_,) => {
                  if (_?.target?.type === 'date') {
                    field.onChange(_.target.value)
                    if (handleOnChange) {
                      handleOnChange(field?.name, _.target.value)
                    };
                  }
                }}
              />
              {isError && <FormFeedback type="invalid" className={classes?.error}>{errorMessage}</FormFeedback>}
            </Fragment>
            : <RHFDisableField fieldValue={moment(field.value).format('DD/MM/YYYY')}></RHFDisableField>
          }
        </div>
      </Fragment>
    )}
  />
}

export default RHFDatePicker;
