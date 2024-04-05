import React from 'react';
import { Card, CardBody } from 'reactstrap';
import ItemList from './ItemList';

const Section1 = ({ label, items }) => {
    return (
        <div>
            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">{label} <a href="#" className="btn btn-primary"><i className='mdi mdi-pencil'></i> Edit</a> </h5>
                    <br />
                    <p className="card-text">
                        <ItemList items={items} />
                    </p>
                </CardBody>
            </Card>
        </div>
    );
};

export default Section1;