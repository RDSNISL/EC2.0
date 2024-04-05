import React from 'react';
import { Label } from 'reactstrap';

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <p>
                    <Label><strong>{item.label} : </strong></Label>
                    <br />
                    <span>{item.name}</span>
                </p>
            ))}
        </div>
    );
};

export default ItemList;