import React, { useState } from 'react';
import { Card, CardBody } from 'reactstrap';

const Expander = ({ title, children, icon_name }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpander = () => {
        setIsExpanded(!isExpanded);
    };

    return (

        <div>
            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">
                        <div style={{ cursor: 'pointer' }} onClick={toggleExpander}>
                            {isExpanded ? '-' : '+'} {title} <i className={icon_name}></i>
                        </div>
                    </h5>
                    {isExpanded && (
                        <div className="card-text" style={{ marginLeft: '20px' }}>
                            {children}
                        </div>
                    )}
                </CardBody>
            </Card>


        </div >
    );
};

export default Expander;
