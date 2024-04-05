import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FIELD_TYPES } from 'constant/FormBuilder';
import RHFButton from 'components/FormControls/RHFButton';
import { checkIsRequired, createFormSchema } from 'utils';

const FormGenerater = (props) => {
    const { formFields, onSubmit, handleOnChange, selectedFilters, defaultValues, actions, resetFormData, resetButtonClick, allowResetForm = false } = props;

    const [fileData, setFilesData] = useState(null);
    const [selectedCheckBox, setSelectedCheckbox] = useState([]);

    const validateFields = formFields?.map((field) => ({
        name: field?.name,
        validationType: field?.validationType,
        validations: field?.validations,
        isEditable: field?.isEditable,
        inputType: field?.type,
    }));


    const groupBySection = formFields.reduce((group, item) => {
        const { sectionName } = item;
        group[sectionName] = group[sectionName] ?? [];
        group[sectionName].push(item);
        return group;
    }, {});


    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        reset,
    } = useForm({
        mode: "all",
        // defaultValues: defaultValues,
        resolver: yupResolver(yup.object().shape(createFormSchema(validateFields))),
    });


    useEffect(() => {
        if (defaultValues) {
            Object.entries(defaultValues)?.map(item => {
                const [key, value] = item;
                setValue(key, value)
            })

            if (defaultValues?.imageData) {
                setFilesData(defaultValues?.imageData)
            }
        }
    }, [defaultValues])


    const handleCheckbox = (e) => {
        const { checked, value } = e.target;
        // setSelectedCheckbox()
    }

    const getFileData = (files) => {
        setFilesData(files)
    }

    const submitHandler = (data) => {
        // console.log('Form Data =>', data);
        onSubmit(data);
        reset();
    };

    useEffect(() => {
        if (resetFormData) {
            reset();
            resetButtonClick(false)
        }
    }, [resetFormData])

    return (
        <form onSubmit={handleSubmit(submitHandler)}>

            {Object.entries(groupBySection).map(section => {
                const [key, value] = section;
                return (
                    <div className="row">
                        {
                            value?.map((item) => {
                                const Component = FIELD_TYPES[item?.type];
                                return (

                                    <Component
                                        {...item}

                                        id={item?.name}
                                        // value={item?.value ? item?.value : ''}
                                        isController={true}
                                        control={control}
                                        errorobj={errors}
                                        isRequired={item?.disabledField ? false : checkIsRequired(item)}
                                        handleOnChange={(name, val) => handleOnChange && handleOnChange({ name, val })} // for drowpdown & textbox
                                        selectedFilters={selectedFilters && selectedFilters} // optimize it only needful inside dropdown
                                        getFileData={getFileData}
                                        fileData={fileData}

                                    />

                                );
                            })
                        }
                    </div>
                )
            })}

            {formFields.length !== 0 && (
                <div className='d-flex justify-content-end'>
                    {allowResetForm && <RHFButton btnName="Reset" outline={true} onClick={() => reset()} />}&nbsp;
                    {actions}
                </div>
            )}
        </form>
    );
}

export default FormGenerater;