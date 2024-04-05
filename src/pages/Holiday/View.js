import React, { useState, useEffect } from 'react';
import DialogBox from 'components/Modals/DialogBox';
import { Card, CardBody } from 'reactstrap';


const View = (props) => {
    const {
        handleModelToggle,
        isModelOpen,
        title,
        actions = null,
        modelSize,
        details,
    } = props;

    const greyStyle = {
        backgroundColor: '#efeeee',
        padding: '20px', // Optional: Add more styles as needed
    };

    return (
        <DialogBox className='mt-9'
            isModelOpen={isModelOpen}
            handleToggle={handleModelToggle}
            modelSize={modelSize}
            title={title}
            actions={actions}
            style={greyStyle}
        >
            <div>
                <div className="row">

                    <Card className="col-md-12">
                        <CardBody>
                            <p className="card-text">
                                <b>Holiday Name:</b> {details.data.name}
                                <br />
                                <b>Holiday Date:</b> {details.data.holiday_date}
                                <br />
                                <b>Working Hours(Hours):</b> {details.data.working_hours}
                            </p>
                        </CardBody>
                    </Card>

                </div>
            </div>
        </DialogBox>
    )
}

export default View;