import React, { useState } from 'react'
import { NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import classnames from "classnames"
import { Link } from 'react-router-dom';
import RHFButton from 'components/FormControls/RHFButton';

const Stepper = (props) => {
    const { steps } = props;
    const [activeTab, setactiveTab] = useState(1);

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            if (tab >= 1 && tab <= steps?.length) {
                setactiveTab(tab)
            }
        }
    }


    return (
        <div className="form-wizard-wrapper wizard clearfix">
            <div className="steps clearfix">
                <ul>
                    {steps?.map((step, index) =>
                        <NavItem
                            className={classnames({ 'current': activeTab === index + 1 })}>
                            <NavLink
                                className={classnames({ 'current': activeTab === index + 1 })}
                                onClick={() => {
                                    setactiveTab(index + 1)
                                }}
                            >
                                <span className="number">{index + 1}.</span>{" "} {step}
                            </NavLink>
                        </NavItem>
                    )}
                </ul>
            </div>

            <div className="content clearfix">
                <TabContent
                    activeTab={activeTab}
                    className="body"
                >
                    <TabPane tabId={1}>
                        Tab - {steps[activeTab - 1]}
                    </TabPane>
                    <TabPane tabId={2}>
                        Tab - {steps[activeTab - 1]}
                    </TabPane>
                    <TabPane tabId={3}>
                        Tab - {steps[activeTab - 1]}
                    </TabPane>
                    <TabPane tabId={4}>
                        Tab - {steps[activeTab - 1]}
                    </TabPane>
                </TabContent>
            </div>

            <div className="d-flex justify-content-end">
                {activeTab !== 1 &&
                    <RHFButton
                        btnName="Previous"
                        onClick={() => {
                            toggleTab(activeTab - 1)
                        }}
                        className="me-2"
                    />
                }

                <RHFButton
                    btnName={activeTab !== steps?.length ? 'Next' : 'Submit'}
                    onClick={() => {
                        activeTab !== steps?.length ? toggleTab(activeTab + 1) : alert('Submited')
                    }}
                />

            </div>

        </div>
    )
}

export default Stepper