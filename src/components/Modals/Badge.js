import React from 'react';

const Badge = ({ count, color_name }) => {
    return (
        <span style={color_name}>
            {count}
        </span>
    );
};

export default Badge;