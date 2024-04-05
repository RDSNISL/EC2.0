import React from 'react'
import { Card, CardBody } from 'reactstrap'

const EmptyBoardCard = ({ title }) => {
    return (
        <div className='p-2'>
            <Card className="card-shadow">
                <CardBody>
                    {title}
                </CardBody>
            </Card>
        </div>
    )
}

export default EmptyBoardCard