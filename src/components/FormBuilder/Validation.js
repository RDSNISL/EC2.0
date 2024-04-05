import React from 'react'
import RHFCheckbox from 'components/FormControls/RHFCheckbox'
import RHFTextField from 'components/FormControls/RHFTextField'

const FieldValidation = (props) => {
    const { isCheckRequired, isCheckMin, isCheckMax, isCheckLength, isCheckMatches } = props?.validationObj;
    const { control, formState: { errors }, } = props?.formContext;

    return (
        <React.Fragment>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='w-25'>
                    <RHFCheckbox
                        id="validationsObj.required.check"
                        name="validationsObj.required.check"
                        label="Required"
                        defaultValue={isCheckRequired}
                        isRequired={false}
                        isController={true}
                        control={control}
                        errorobj={errors}
                    />
                </div>
                {isCheckRequired &&
                    <div className='flex-grow-1 ms-4'>
                        <RHFTextField
                            id="validationsObj.required.message"
                            name="validationsObj.required.message"
                            label="Error Message"
                            isRequired={false}
                            isController={true}
                            control={control}
                            errorobj={errors}
                        />
                    </div>
                }
            </div>

            <div className='d-flex align-items-center justify-content-between'>
                <div className='w-25'>
                    <RHFCheckbox
                        id="validationsObj.min.check"
                        name="validationsObj.min.check"
                        label="Min"
                        defaultValue={isCheckMin}
                        isRequired={false}
                        isController={true}
                        control={control}
                        errorobj={errors}
                    />
                </div>
                {isCheckMin &&
                    <React.Fragment>
                        <div className='w-25 mx-4'>
                            <RHFTextField
                                id="validationsObj.min.value"
                                name="validationsObj.min.value"
                                label="Value"
                                type="number"
                                defaultValue={1}
                                isRequired={false}
                                isController={true}
                                control={control}
                                errorobj={errors}
                            />
                        </div>
                        <div className='flex-grow-1'>
                            <RHFTextField
                                id="validationsObj.min.message"
                                name="validationsObj.min.message"
                                label="Error Message"
                                isRequired={false}
                                isController={true}
                                control={control}
                                errorobj={errors}
                            />
                        </div>
                    </React.Fragment>
                }
            </div>


            <div className='d-flex align-items-center justify-content-between'>
                <div className='w-25'>
                    <RHFCheckbox
                        id="validationsObj.max.check"
                        name="validationsObj.max.check"
                        label="Max"
                        defaultValue={isCheckMax}
                        isRequired={false}
                        isController={true}
                        control={control}
                        errorobj={errors}
                    />
                </div>
                {isCheckMax &&
                    <React.Fragment>
                        <div className='w-25 mx-4'>
                            <RHFTextField
                                id="validationsObj.max.value"
                                name="validationsObj.max.value"
                                label="Value"
                                type="number"
                                defaultValue={1}
                                isRequired={false}
                                isController={true}
                                control={control}
                                errorobj={errors}
                            />
                        </div>
                        <div className='flex-grow-1'>
                            <RHFTextField
                                id="validationsObj.max.message"
                                name="validationsObj.max.message"
                                label="Error Message"
                                isRequired={false}
                                isController={true}
                                control={control}
                                errorobj={errors}
                            />
                        </div>
                    </React.Fragment>
                }
            </div>

            <div className='d-flex align-items-center justify-content-between'>
                <div className='w-25'>
                    <RHFCheckbox
                        id="validationsObj.length.check"
                        name="validationsObj.length.check"
                        label="Length"
                        defaultValue={isCheckLength}
                        isRequired={false}
                        isController={true}
                        control={control}
                        errorobj={errors}
                    />
                </div>
                {isCheckLength &&
                    <React.Fragment>
                        <div className='w-25 mx-4'>
                            <RHFTextField
                                id="validationsObj.length.value"
                                name="validationsObj.length.value"
                                label="Value"
                                type="number"
                                defaultValue={1}
                                isRequired={false}
                                isController={true}
                                control={control}
                                errorobj={errors}
                            />
                        </div>
                        <div className='flex-grow-1'>
                            <RHFTextField
                                id="validationsObj.length.message"
                                name="validationsObj.length.message"
                                label="Error Message"
                                isRequired={false}
                                isController={true}
                                control={control}
                                errorobj={errors}
                            />
                        </div>
                    </React.Fragment>
                }
            </div>

            <div className='d-flex align-items-center'>
                <div className='w-25'>
                    <RHFCheckbox
                        id="validationsObj.matches.check"
                        name="validationsObj.matches.check"
                        label="Match / Pattern"
                        defaultValue={isCheckMatches}
                        isRequired={false}
                        isController={true}
                        control={control}
                        errorobj={errors}
                    />
                </div>
                {isCheckMatches &&
                    <div className='flex-grow-1 ms-4'>
                        <RHFTextField
                            id="validationsObj.matches.value"
                            name="validationsObj.matches.value"
                            label="Value"
                            isRequired={false}
                            isController={true}
                            control={control}
                            errorobj={errors}
                        />
                        <RHFTextField
                            id="validationsObj.matches.message"
                            name="validationsObj.matches.message"
                            label="Error Message"
                            isRequired={false}
                            isController={true}
                            control={control}
                            errorobj={errors}
                        />
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default FieldValidation;