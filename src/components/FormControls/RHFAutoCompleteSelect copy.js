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
  limitTags = -1,
  handleOnChange,
  isRequired = true,
  isClearable = true,
  isSearchable = true,
  isLoading = false,
  isDisabled = false,
  isMultiple = false,
  isTableDropDown = false,
  disabledField = false,
  disabledText = '',
  value,
  className,
  fieldConfig = {},
  inputNote = null,
  selectedFilters = {},
  ...props
}) => {
  let isError = false;
  let errorMessage = "";
  let multiSelect = false;

  const customStyles = {
    control: (base, state) => ({
      ...base,
      boxShadow: state.isFocused ? 0 : 0,
      borderColor: ((isError && state.isFocused) || isError)
        ? 'red'
        : base.borderColor,
      '&:hover': {
        borderColor: ((isError && state.isFocused) || isError)
          ? 'red'
          : base.borderColor,
      }
    })
  };

  if (typeof isMultiple === "undefined" || isMultiple) {
    multiSelect = true;
  }
  const disabled = isDisabled === undefined ? false : isDisabled;

  if (errorobj && errorobj[name]) {
    isError = true;
    errorMessage = errorobj[name].message;
  }

  const [optionsData, setOptions] = useState([]);


  if (!fieldConfig?.dependency?.isDependentField && !fieldConfig?.dependency?.hasSelectedValue) {

    if (fieldConfig?.fillOptions?.byApi) {
      const { apiConfig: { url, method, body, label, value } } = fieldConfig?.fillOptions;
      const config = {};

      if (method === 'post') {
        config.data = body;
      }

      axios({
        url,
        method,
        ...config
      }).then(resp => {
        const options = [];
        resp?.data?.map((item) => {
          options.push({ label: item[label], value: item[value] })
        })
        setOptions(options);
      })
    } else {
      setOptions(fieldConfig?.fillOptions?.options);
    }

  } else if (fieldConfig?.dependency?.isDependentField) {

    /** Note : Here we are checking if any field is dependent on any parent field then 
     * until and unless that parent field get selected we can not fill dependent dropdown */

    if (fieldConfig?.dependency?.filterBy[Object.keys(fieldConfig?.dependency?.filterBy)[0]]) {

      if (fieldConfig?.fillOptions?.byApi) {

        const { apiConfig: { url, method, body, label, value } } = fieldConfig?.fillOptions;
        const config = {};

        if (method === 'post') {
          config.data = body;  // fieldConfig?.dependency?.filterBy  /* step-1 */
        }

        axios({
          url,
          method,
          ...config
        }).then(resp => {

          /**Note - Due to lack of live api just filter the data else we will use step-1 */
          const filterData = resp?.data?.filter((item => {
            if (item[Object.keys(fieldConfig?.dependency?.filterBy)[0]] === Object.values(fieldConfig?.dependency?.filterBy)[0]) {
              return item;
            }
          }))

          const options = [];
          filterData?.map((item) => {
            options.push({ label: item[label], value: item[value] })
          })
          setOptions(options);
        })

      }
      else {
        setOptions(fieldConfig?.fillOptions?.options);
      }

    }
  }

  const optionsList = options?.length > 0 ? options : optionsData?.length > 0 ? optionsData : [];

  if (!isController) {
    return (
      <Fragment>
        <div className={isTableDropDown ? `d-flex align-items-center ${className}` : className}>
          {label && <Label htmlFor="select-input" className="form-label">
            {label}
          </Label>}
          {!disabledField ?
            <Select
              {...props}
              placeholder={placeholder}
              // className={!isTableDropDown ? "react-select-container" : "react-select-container-table"}
              isMulti={multiSelect}
              id={id}
              name={name}
              value={value}
              isClearable={isClearable}
              isSearchable={isSearchable}
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
                  handleOnChange(data, action); /* You must pass this function while isController is false -> else you will not get selected values */
                }
              }}
            />
            : <RHFDisableField fieldValue={disabledText}></RHFDisableField>
          }
        </div>
      </Fragment >
    );
  }

  return (
    <>
      <Controller
        id={id || name}
        name={name}
        control={control}
        defaultValue={defaultValue || []}
        render={({ field }) => {
          // let filteredOptionList = [...options];
          let filteredOptionList = [...optionsList];
          if (multiSelect && field?.value?.length) {
            const selectedValueArr = field.value.map((result) => result.value);
            filteredOptionList = filteredOptionList.filter(
              (item) => selectedValueArr.indexOf(item.value) === -1
            );
          }
          return (
            <Fragment>
              <Label htmlFor="select-input" className="form-label">
                {label} {isRequired && <span className="text-danger">*</span>}
              </Label>
              {!disabledField ?
                <Select
                  {...field}
                  {...props}
                  options={filteredOptionList}
                  id={id}
                  name={name}
                  placeholder={placeholder}
                  className="react-select-container"
                  isMulti={multiSelect}
                  isClearable={isClearable}
                  isSearchable={isSearchable}
                  isDisabled={disabled}
                  isLoading={isLoading}
                  defaultValue={defaultValue}
                  classNamePrefix="select2-selection"
                  onChange={(data, action) => {
                    field.onChange(data);
                    if (handleOnChange) {
                      handleOnChange(data, name, action);
                    }
                  }}
                  styles={customStyles}
                /> :
                <RHFDisableField fieldValue={field.value?.label}></RHFDisableField>
              }
            </Fragment>
          );
        }}
      // className={multiSelect ? "basic-multi-select" : "basic-single"}
      />
      {inputNote && <small>{inputNote}</small>}
      {isError && !disabledField && <FormFeedback type="invalid">{errorMessage}</FormFeedback>}
    </>
  );
};

export default RHFAutoCompleteSelect;
