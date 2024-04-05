import QuickLeadsCard from 'components/Common/Cards/QuickLeadsCard';
import ActionButtons from 'components/FormControls/ActionButtons';
import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging

    // background: isDragging ? "#d8dffa" : "#e0e2e4",

    // styles we need to apply on draggables
    ...draggableStyle
});

const DrageItem = ({ item, column, index, handleThreeDotClick }) => {
    return (
        <Draggable draggableId={`${item?.id}`} key={`${item?.id}`} index={index}>

            {(provided, snapshot) => {
                return (
                    <div
                        ref={provided.innerRef}
                        // snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                        )}
                    >
                        <QuickLeadsCard
                            leadName={item?.name}
                            source={item?.primarySource}
                            email={item?.email}
                            jobLink={item?.jobLink}
                            price={item?.price}
                            bidDate={item?.bidDate}
                            weightage={item?.weightage}
                            technology={item?.technology}

                            actions={
                                <ActionButtons
                                    convert={{
                                        handleClick: () => handleThreeDotClick(column, item, 'convert'),
                                        tooltip: 'Convert to Opportunity'
                                    }}
                                    edit={{
                                        handleClick: () => handleThreeDotClick(column, item, 'edit'),
                                    }}
                                    delete={{
                                        handleClick: () => handleThreeDotClick(column, item, 'delete'),
                                    }}
                                    popUpId={`${item?.id}`}
                                />
                            }
                        />
                    </div>
                );
            }}
        </Draggable >
    );
}

export default DrageItem