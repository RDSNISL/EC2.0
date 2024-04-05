import React, { Fragment, useEffect, useState } from "react";
import { FormFeedback, Label } from "reactstrap";
import Select from "react-select";
import { Controller } from "react-hook-form";
import RHFDisableField from "./RHFDisableField";
import axios from "axios";

const RHFAutoCompleteSelect = ({
  id,
  name,
  label,
  placeholder = "Select",
  isController = true,
  control,
  defaultValue = null,
  options = [],
  errorobj,
  onChange,
  handleOnChange = () => { },
  isRequired = true,

  selectPluginConfig = {
    isClearable: true,
    isSearchable: true,
    isMulti: false,
    isRtl: false,
  },

  isLoading = false,
  isDisabled = false,

  disabledField = false,
  disabledText = '',
  value,
  className,
  classes,
  // fieldConfig = {}, // use for header-subheader config file
  selectedFilters = null, // {}
  inputNote = null,

  dependency = null,  // json schema form
  fillOptions, // json schema form

  note = null,
  ...props
}) => {
  let isError = false;
  let errorMessage = "";

  const customStyles = {
    control: (base, state) => ({
      ...base,
      boxShadow: state.isFocused ? 0 : 0,
      borderColor: ((isError && state.isFocused) || isError)
        ? '#ff715b'
        : base.borderColor,
      '&:hover': {
        borderColor: ((isError && state.isFocused) || isError)
          ? '#ff715b'
          : base.borderColor,
      }
    })
  };


  const disabled = isDisabled === undefined ? false : isDisabled;

  if (errorobj && errorobj[name]) {
    isError = true;
    errorMessage = errorobj[name].message;
  }

  const [optionsData, setOptions] = useState([]);

  const fieldConfig = { name, fillOptions, dependency };


  const populateOptions = (optionConfiguration, dependentOn = []) => {

    if (optionConfiguration?.byApi) {
      const { apiConfig: { url, method, body, labelField, valueField } } = optionConfiguration;
      const parseBody = JSON.parse(body);
      const reqBody = {};
      if (dependentOn?.length > 0) {
        dependentOn?.map(fieldName => {
          reqBody[fieldName] = selectedFilters[fieldName];
        })
      }
      axios({
        url,
        method,
        data: { ...reqBody, ...parseBody }
      }).then(resp => {
        const options = [];
        resp?.data?.map((item) => {
          options.push({ label: item[labelField], value: item[valueField] })
        })
        setOptions(options);
      })
    } else {
      setOptions(optionConfiguration?.options);
    }

  }

  // console.log('options selectedFilters =>', selectedFilters)


  useEffect(() => {

    if (!fieldConfig?.dependency?.isDependentField) {
      // independent field
      if (!selectedFilters?.[fieldConfig.name]) {
        // API Call
        populateOptions(fieldConfig?.fillOptions, fieldConfig?.dependency?.dependentOn)
      }

    } else {
      // dpendentField field
      const dependentFields = fieldConfig?.dependency?.dependentOn?.filter(fieldName => {
        if (!selectedFilters?.[fieldName]) {
          return fieldName;
        }
      })
      if (dependentFields?.length === 0) {
        populateOptions(fieldConfig?.fillOptions, fieldConfig?.dependency?.dependentOn)
      } else {
        setOptions([]);
      }
    }

  }, [dependency, selectedFilters])

  const optionsList = options?.length > 0 ? options : optionsData?.length > 0 ? optionsData : [];

  if (!isController) {
    return (
      <Fragment>
        {/* <div className={`mb-3 ${classes?.wrapper} ${className}`}> */}
        <div className={`${classes?.wrapper} ${className}`}>
          {label && <Label htmlFor="select-input" className={`form-label ${classes?.label}`}>
            {label}
          </Label>}
          {!disabledField ?
            <Select
              {...props}
              {...selectPluginConfig}
              placeholder={placeholder}
              className={`react-select-container ${classes?.field}`}
              id={id}
              name={name}
              value={value}
              isDisabled={disabled}
              isLoading={isLoading}
              // options={options}
              options={optionsList}
              defaultValue={defaultValue}
              classNamePrefix="select2-selection"
              menuShouldBlockScroll={true}
              menuPosition="fixed"
              onChange={(data, action) => {
                if (handleOnChange) {
                  handleOnChange(name, data, action); /* You must pass this function while isController is false -> else you will not get selected values */
                }
              }}
            />
            : <RHFDisableField fieldValue={disabledText}></RHFDisableField>
          }
        </div>
      </Fragment>
    );
  }

  return (
    <>
      <Controller
        id={id || name}
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState: { error } }) => {
          // let filteredOptionList = [...options];
          let filteredOptionList = [...optionsList];
          if (selectPluginConfig?.isMulti && field?.value?.length) {
            const selectedValueArr = field.value.map((result) => result.value);
            filteredOptionList = filteredOptionList.filter(
              (item) => selectedValueArr.indexOf(item.value) === -1
            );
          }
          return (
            <Fragment>
              <div className={`mb-3 ${classes?.wrapper}`}>
                <Label htmlFor="select-input" className={`form-label ${classes?.label}`}>
                  {label} {isRequired && <span className="text-danger">*</span>}
                </Label>
                {!disabledField ?
                  <Select
                    {...field}
                    {...props}
                    {...selectPluginConfig}

                    options={filteredOptionList}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className={`react-select-container ${classes?.field}`}
                    isDisabled={disabled}
                    isLoading={isLoading}
                    defaultValue={defaultValue}
                    classNamePrefix="select2-selection"
                    onChange={(data, action) => {
                      field.onChange(data);
                      if (handleOnChange) {
                        handleOnChange(name, data, action);
                      }
                    }}
                    styles={customStyles}
                  /> :
                  <RHFDisableField fieldValue={field.value?.label}></RHFDisableField>
                }
                {note && <em>{note}</em>}
                {/* {isError && !disabledField && <FormFeedback type="invalid" className={classes?.error}>{errorMessage}</FormFeedback>} */}
                {error && !disabledField && <FormFeedback type="invalid" className={classes?.error}>{error?.message}</FormFeedback>}
              </div>
            </Fragment>
          );
        }}
      />
      {inputNote && <small>{inputNote}</small>}

    </>
  );
};

export default RHFAutoCompleteSelect;
