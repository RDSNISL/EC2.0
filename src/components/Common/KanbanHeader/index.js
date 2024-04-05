import React from 'react'

const KanbanHeader = (props) => {
    const {
        header,
        subHeader,
        text,
        backgroundColor,
        borderTopColor,
        actions = null
    } = props;


    const style = {
        background: backgroundColor,
        padding: "8px",
        marginBottom: '8px',
        borderRadius: "5px",
        borderTop: `4px solid ${borderTopColor}`,
        position: 'sticky',
        top: 0,
        zIndex: 1
    }

    return (
        <div style={style}>
            <p className='fw-bold fs-5 mb-1'>{header}</p>
            <p className='mb-1'><b className='me-2'>{subHeader}</b><span>{text}</span></p>
        </div>
    )
}

export default KanbanHeader;

