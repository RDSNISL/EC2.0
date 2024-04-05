import React from 'react';
import { Row, Col } from 'reactstrap';
import RHFTextField from 'components/FormControls/RHFTextField';
import RHFCheckBoxGroup from 'components/FormControls/RHFCheckBoxGroup';
import { IMAGE_DISPLAY_TYPES_OPTIONS, SELECT_PLUGIN_CONFIG_OPTIONS } from 'constant/FormBuilder';
import RHFCheckbox from 'components/FormControls/RHFCheckbox';
import RHFAutoCompleteSelect from 'components/FormControls/RHFAutoCompleteSelect';


const FieldBaseConfig = ({ inputType, formContext }) => {
    const { control, setValue, getValues, watch, formState: { errors } } = formContext;

    const isDependetField = watch('isDependent');
    const isMultiFileUpload = watch('fileConfig.multiple');

    const handleSelectPluginConfig = (name, e) => {
        const { value, checked } = e?.target;
        if (value === "isMulti" && checked)
            setValue('validationType', 'array')
        else if (value === "isMulti" && !checked)
            setValue('validationType', 'object')
    }

    const loadTextAreaConfig = () => {
        return (
            <RHFTextField
                id="rows"
                name="rows"
                label="Rows"
                type="number"
                placeholder="Enter rows"
                isController={true}
                control={control}
                errorobj={errors}
            />
        )
    }

    const loadSelectConfig = () => {
        return (
            <div>
                <RHFCheckBoxGroup
                    id="selectPluginConfig"
                    name="selectPluginConfig"
                    fillOptions={{
                        byApi: false,
                        apiConfig: {},
                        options: SELECT_PLUGIN_CONFIG_OPTIONS
                    }}
                    isController={true}
                    control={control}
                    errorobj={errors}
                    handleCheckbox={handleSelectPluginConfig}
                />

                <p className='fw-bold fs-6'>Dependancy</p>
                <RHFCheckbox
                    id="isDependent"
                    name="isDependent"
                    label="Only check this option if the field is depend on other field?"
                    defaultValue={getValues('isDependent') ?? false}
                    isRequired={false}
                    isController={true}
                    control={control}
                    errorobj={errors}
                />

                {isDependetField &&
                    <RHFTextField
                        id="dependentOn"
                        name="dependentOn"
                        label="Field Name"
                        placeholder="Enter field name on which its depend"
                        note="Field name must match with database field. Use comma seperate to enter multuple field eg.(country,state)"
                        isController={true}
                        control={control}
                        errorobj={errors}
                    />
                }

            </div>
        )
    }

    const loadFileConfig = () => {
        return (
            <React.Fragment>
                <Row className='mt-2'>
                    <Col md={6}>
                        <RHFCheckbox
                            id="fileConfig.multiple"
                            name="fileConfig.multiple"
                            label="Allow Multiple File Upload?"
                            defaultValue={getValues('fileConfig.multiple') ?? false}
                            isRequired={false}
                            isController={true}
                            control={control}
                            errorobj={errors}
                        />
                    </Col>
                    <Col md={6}>
                        <RHFCheckbox
                            id="fileConfig.filePreview"
                            name="fileConfig.filePreview"
                            label="Show file preview?"
                            defaultValue={getValues('fileConfig.filePreview') ?? true}
                            isRequired={false}
                            isController={true}
                            control={control}
                            errorobj={errors}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <RHFTextField
                            id="fileConfig.maxSize"
                            name="fileConfig.maxSize"
                            label="Max File Size"
                            type="number"
                            placeholder="Maximum file size in KB"
                            note="File size must be in kb"
                            isRequired={true}
                            isController={true}
                            control={control}
                            errorobj={errors}
                        />
                    </Col>

                    {isMultiFileUpload &&
                        <Col md={6}>
                            <RHFTextField
                                id="fileConfig.maxFiles"
                                name="fileConfig.maxFiles"
                                label="No.Of Files"
                                placeholder="How many files want to upload?"
                                type="number"
                                isRequired={true}
                                isController={true}
                                control={control}
                                errorobj={errors}
                            />
                        </Col>
                    }

                    {!isMultiFileUpload &&
                        <Col md={6}>
                            <RHFAutoCompleteSelect
                                id="fileConfig.imageDisplayType"
                                name="fileConfig.imageDisplayType"
                                label="Image Display Type"
                                placeholder="Select type"
                                isController={true}
                                options={IMAGE_DISPLAY_TYPES_OPTIONS}
                                control={control}
                                errorobj={errors}
                            />
                        </Col>
                    }

                </Row>
                <Row>
                    <Col md={12}>
                        <RHFTextField
                            id="fileConfig.accept"
                            name="fileConfig.accept"
                            label="Allow File Types"
                            placeholder="image/png, image/jpg etc."
                            note="Use comma seperate to enter multuple types"
                            isRequired={true}
                            isController={true}
                            control={control}
                            errorobj={errors}
                        />
                    </Col>
                </Row>
            </React.Fragment >
        )
    }


    const fieldConfigMapper = {
        textarea: loadTextAreaConfig,
        select: loadSelectConfig,
        file: loadFileConfig,
        // date: loadDateConfig
    }



    return (
        fieldConfigMapper[inputType] && fieldConfigMapper[inputType]()
    )
}

export default FieldBaseConfig