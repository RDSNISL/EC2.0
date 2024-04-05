import React from 'react'
import TextChip from '../TextChip';
import { Card, CardBody } from 'reactstrap';

const OpportunityCard = (props) => {

    const {
        leadName,
        source,
        email,
        jobLink,
        price,
        bidDate,
        weightage,
        technology,
        actions = null,
    } = props;

    return (
        <Card className='card-shadow mb-0'>
            <CardBody>
                <p className='fw-bold fs-6'>
                    {leadName}
                    <span className='ms-4 me-2'><TextChip text={weightage} bgColor='green' /></span>
                    <span><TextChip text={technology} bgColor='pink' /></span>
                </p>
                <p>{source}</p>
                <p>{email} <i className="mdi mdi-email ms-1" /></p>
                <p>{jobLink}</p>
                <p>{price}</p>
                <div className='d-flex justify-content-between'>
                    <p>{bidDate}</p> {actions && actions}
                </div>
            </CardBody>
        </Card >
    )
}

export default OpportunityCard