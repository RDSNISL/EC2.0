import React from 'react';

const TextChip = (props) => {
    const {
        text = '',
        bgColor = '',
        textColor = '#fff',
        className,
    } = props;
    return (
        <span className={`textChip ${className}`} style={{ backgroundColor: bgColor, color: textColor }}>
            {text}
        </span>
    )
}

export default TextChip;