import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import { FormFeedback, Input, Label } from 'reactstrap';
import RHFDisableField from './RHFDisableField';
import moment from 'moment/moment'
import FeatherIcon from 'feather-icons-react'
import DatePicker from "react-date-picker";

// import DateTimePicker from 'react-datetime-picker';

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

// import 'react-datetime-picker/dist/DateTimePicker.css';
// import 'react-clock/dist/Clock.css';



const RHFDatePicker = ({ isController = false, ...props }) => {
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
              <Label htmlFor="example-text-input" className={`form-label ${classes?.label}`}>{label}</Label>
            )}
            {!disabledField ?
              <DatePicker
                id={name}
                name={name}
                disabled={disabled}
                format={'dd-MM-y'}
                dayPlaceholder='DD'
                monthPlaceholder='MM'
                yearPlaceholder='YYYY'
                className={`form-control ${classes?.field}`}
                clearIcon={<FeatherIcon icon="x" size="18" />}
                calendarIcon={<FeatherIcon icon="calendar" size="18" />}
                onChange={(val) => {
                  if (handleOnChange) {
                    handleOnChange(name, val)
                  };
                }}
              />
              : <RHFDisableField fieldValue={defaultValue}></RHFDisableField>
            }
          </div>
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
              <div>
                {/* <DateTimePicker */}
                <DatePicker
                  {...field}
                  {...extraProps}
                  disabled={disabled}
                  format={'dd-MM-y'}
                  dayPlaceholder='DD'
                  monthPlaceholder='MM'
                  yearPlaceholder='YYYY'
                  className={`form-control ${isError && 'invalid-error'} ${classes?.field}`}
                  clearIcon={<FeatherIcon icon="x" size="18" />}
                  calendarIcon={<FeatherIcon icon="calendar" size="18" />}
                  onChange={(val) => {
                    field.onChange(val)
                    if (handleOnChange) {
                      handleOnChange(field?.name, val)
                    };
                  }}
                />
                {isError && <FormFeedback type="invalid" className={classes?.error}>{errorMessage}</FormFeedback>}
              </div>
            </Fragment>
            : <RHFDisableField fieldValue={field?.value ? moment(field?.value).format('DD-MM-YYYY') : defaultValue}></RHFDisableField>
          }
        </div>
      </Fragment>
    )}
  />
}

export default RHFDatePicker;
