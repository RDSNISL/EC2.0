import RHFAutoCompleteSelect from 'components/FormControls/RHFAutoCompleteSelect'
import RHFButton from 'components/FormControls/RHFButton'
import RHFTextField from 'components/FormControls/RHFTextField'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import React from 'react'
import { Card, CardHeader, Col, Row } from 'reactstrap'
import ViewTypeDropdown from './ViewTypeDropdown'
import { SECTIONS } from 'constant/Constant'

const PageHeaderSubHeaderConfig = (props) => {

    const autoComplete = (elementConfig) => {
        return (
            <RHFAutoCompleteSelect
                id={elementConfig.name}
                name={elementConfig.name}
                placeholder={elementConfig?.placeholder}

                selectedFilters={props?.filterObj}

                options={elementConfig.options || []}

                fieldConfig={elementConfig}

                selectPluginConfig={elementConfig?.selectPluginConfig}

                dependency={elementConfig?.dependency} //
                fillOptions={elementConfig?.fillOptions} //

                isController={false}
                className="mb-0 w-150"
                handleOnChange={(name, val) => props?.commonCallBack(name, val)}
            />
        )
    }

    const iconButton = (elementConfig) => {
        return (
            <FeatherIcon icon={elementConfig?.icon} size="20" onClick={() => props?.commonCallBack(elementConfig.name)} cursor="pointer" />
        )
    }

    const actionButton = (elementConfig) => {
        return (
            <RHFButton
                btnName={elementConfig?.btnText}
                icon={elementConfig?.icon}
                onClick={() => props?.commonCallBack(elementConfig.name)}
            />
        )
    }

    const searchBox = (elementConfig) => {
        return (
            <RHFTextField
                id={elementConfig?.name}
                name={elementConfig?.name}
                placeholder="Search here"
                isController={false}
                handleOnChange={(val) => props?.commonCallBack(elementConfig.name, val)}
            />
        )
    }

    const recordViewType = (elementConfig) => {
        return (
            <ViewTypeDropdown
                items={elementConfig?.fillOptions?.options || []}
                onClick={(val) => props?.commonCallBack(elementConfig.name, val)}
                className='view-type'
            />
        )
    }


    /** I will create component mapper later on here  */

    const renderElement = (headerComponent) => {
        if (headerComponent?.type === 'pageTitle' && headerComponent?.isVisible) {
            return (
                <h4 className='m-0 page-title'>{headerComponent?.title}</h4>
            )
        } else if (headerComponent?.type === 'autoComplete') {
            return (
                autoComplete(headerComponent)
            )
        } else if (headerComponent?.type === 'iconButton') {
            return (
                iconButton(headerComponent)
            )
        } else if (headerComponent?.type === 'button') {
            return (
                actionButton(headerComponent)
            )
        } else if (headerComponent?.type === 'textField') {
            return (
                searchBox(headerComponent)
            )
        } else if (headerComponent?.type === 'viewType') {
            return (
                recordViewType(headerComponent)
            )
        }
    }


    return (
        <React.Fragment>
            {props?.header?.isVisible &&
                <Card>
                    <CardHeader>
                        <div className='row gap-3 justify-content-between align-items-center'>
                            {SECTIONS?.map((key, index) => {
                                return (
                                    <div className='row row-gap-3 col-md-auto align-items-center'>
                                        {props?.header?.headerComponents?.[key]?.map((headerComponent, index) => {
                                            return headerComponent?.isVisible &&
                                                (
                                                    <div className={`${headerComponent?.className}`}>
                                                        {renderElement(headerComponent)}
                                                    </div>
                                                )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </CardHeader>
                </Card>
            }
            {
                props?.subHeader?.isVisible &&
                <Card className='m-0' style={{ paddingTop: '1.25rem' }}>
                    <CardHeader>
                        <div className='row gap-3 justify-content-between align-items-center'>
                            {SECTIONS?.map((key, index) => {
                                return (
                                    <div className='row row-gap-3 col-md-auto align-items-center'>
                                        {props?.subHeader?.subHeaderComponents?.[key]?.map((subHeaderComponent, index) => {
                                            return subHeaderComponent?.isVisible &&
                                                (
                                                    <div className={`${subHeaderComponent?.className}`}>
                                                        {renderElement(subHeaderComponent)}
                                                    </div>
                                                )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </CardHeader>
                </Card>
            }
        </React.Fragment >
    )
}

export default PageHeaderSubHeaderConfig