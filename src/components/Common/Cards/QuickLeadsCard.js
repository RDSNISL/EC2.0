import React from 'react'
import TextChip from '../TextChip';
import { Card, CardBody } from 'reactstrap';
import ThreeDotMenu from '../ThreeDotMenu';
import ActionButtons from 'components/FormControls/ActionButtons';

const QuickLeadsCard = (props) => {

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
        // <Card className='mb-0' style={{ boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)" }}>
        <Card className='card-shadow mb-0'>
            <CardBody>
                <div className='d-flex justify-content-between'>
                    <p className='fw-bold fs-6'>
                        {leadName}
                        <span className='ms-4 me-2'><TextChip text={weightage} bgColor='green' /></span>
                        <span><TextChip text={technology} bgColor='pink' /></span>
                    </p>

                    {/* {actions &&
                        <ThreeDotMenu
                            items={actions?.items}
                            onClick={(val) => actions?.onClick(val)}
                            className={actions?.className}
                        />
                    } */}
                    {actions && actions}

                </div>
                <p>{source}</p>
                <p>{email} <i className="mdi mdi-email ms-1" /></p>
                <p>{jobLink}</p>
                <p>{price}</p>
                <p>{bidDate}</p>
            </CardBody>
        </Card >
    )
}

export default QuickLeadsCard