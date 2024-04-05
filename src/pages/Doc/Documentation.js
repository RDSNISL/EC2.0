import React, { useState } from 'react'
import OpportunityCard from 'components/Common/Cards/OpportunityCard'
import QuickLeadsCard from 'components/Common/Cards/QuickLeadsCard'
import KanbanHeader from 'components/Common/KanbanHeader'
import Stepper from 'components/Common/Stepper'
import ThreeDotMenu from 'components/Common/ThreeDotMenu'
import WizardForm from 'components/Common/WizardForm'
import ActionButtons from 'components/FormControls/ActionButtons'
import RHFButton from 'components/FormControls/RHFButton'
import { useHistory, useLocation } from 'react-router-dom'
import ProgressBar from 'components/Common/ProgressBar'

const Documentation = () => {


    const history = useHistory();

    const editHandler = () => {
        alert('Click Edit')
    }

    const deleteHandler = () => {
        alert('Click Delete')
    }

    const handleActionButtonClick = (payload, actionType) => {
        const actionMapper = {
            edit: editHandler,
            delete: deleteHandler
        };

        if (actionMapper[actionType]) {
            actionMapper[actionType](payload);
        }
    };



    return (
        <div className='page-content' style={{ paddingBottom: "50px" }}>

            <h1>System Components</h1>
            <hr />

            <h3>Kanban Header</h3>
            <KanbanHeader
                header='Attempted to contact'
                subHeader='$425.00'
                text='3 Leads'
                backgroundColor='#daf5e7'
                borderTopColor='#297a50'
            />

            <hr />
            <h3>Quick Leads Card</h3>
            <QuickLeadsCard
                leadName="Dipesh Mali"
                source="Upwork"
                email="dm@narola.email"
                jobLink="www.dm.com"
                price="$15/hour"
                bidDate="1 Jan 2023"
                weightage="S"
                technology="React Js"

                // actions={{
                //     items: [
                //         { label: 'Convert to Opportunity', value: 1, icon: 'refresh-cw' },
                //         { label: 'Edit', value: 2, icon: 'edit' },
                //         { label: 'Delete', value: 3, icon: 'trash-2' }
                //     ],
                //     onClick: (val) => alert(val),
                //     className: 'dotIcon'
                // }}

                actions={
                    <ActionButtons
                        edit={{
                            handleClick: () => handleActionButtonClick(2, 'edit'),
                        }}
                        delete={{
                            handleClick: () => handleActionButtonClick(3, 'delete'),
                        }}
                        popUpId={`1`} // this should be unique
                    />
                }

            />

            <hr />

            <h3>Opportunity Card</h3>
            <OpportunityCard
                leadName="Dipesh Mali"
                source="Upwork"
                email="dm@narola.email"
                jobLink="www.dm.com"
                price="$15/hour"
                bidDate="1 Jan 2023"
                weightage="S"
                technology="React Js"

                actions={
                    <ActionButtons
                        edit={{
                            handleClick: () => handleActionButtonClick(2, 'edit'),
                        }}
                        delete={{
                            handleClick: () => handleActionButtonClick(3, 'delete'),
                        }}
                        popUpId={`2`} // this should be unique
                        actionIcon='plus'
                    />
                }

            />

            <hr />
            <h3>Three Dot Menu</h3>
            <ThreeDotMenu
                items={[
                    { label: 'Convert to Opportunity', value: 1, icon: 'refresh-cw' },
                    { label: 'Edit', value: 2, icon: 'edit' },
                    { label: 'Delete', value: 3, icon: 'trash-2' }
                ]}
                onClick={(val) => alert(val)}
                className='dotIcon'
            />
            <hr />

            {/* <Stepper steps={['Step1', 'Step2', 'Step3', 'Done']} /> */}


            <div className='d-flex justify-content-between' >
                <RHFButton
                    btnName="Play With NISL Form Builder"
                    onClick={() => history.push('/doc/form/builder')}
                />
                <RHFButton
                    btnName="Wizard Form Design By Form Builder"
                    onClick={() => history.push('/doc/wizard')}
                />
                <RHFButton
                    btnName="Form In Edit Mode"
                    onClick={() => history.push('/doc/form/example')}
                />
            </div>

            <hr />

            <ProgressBar val={20} symbol='%' />

        </div>
    )
}

export default Documentation