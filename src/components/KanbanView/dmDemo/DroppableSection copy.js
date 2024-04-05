import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import DrageItem from '../DrageItem'

const grid = 8;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
});

const DroppableSection = ({ column, items = [] }) => {
    return (
        <Droppable droppableId={`${column}`}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                >
                    <p className='fw-normal fs-4 text-center'>{column}</p>
                    {items?.map((item, i) => (
                        <DrageItem
                            item={item}
                            index={i}
                        />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default DroppableSection