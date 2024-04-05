import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import PerfectScrollbar from 'react-perfect-scrollbar'
import DrageItem from './DrageItem'
import KanbanHeader from 'components/Common/KanbanHeader';
import EmptyBoardCard from 'components/Common/Cards/EmptyBoardCard';
import 'react-perfect-scrollbar/dist/css/styles.css';


const grid = 8;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "#eaeaeb" : "#eaeaeb",
    // padding: grid,

    // maxHeight: 700,
    // overflow: 'auto'
});

const DroppableSection = ({ column, items = [], header, handleThreeDotClick }) => {

    return (
        <PerfectScrollbar style={{ maxHeight: 700 }}>
            <Droppable droppableId={`${column}`}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                    >
                        {header && <KanbanHeader {...header} />}

                        {items?.length > 0 ? items?.map((item, i) => (
                            <DrageItem
                                item={item}
                                column={column}
                                index={i}
                                handleThreeDotClick={handleThreeDotClick}
                            />
                        )) :
                            <EmptyBoardCard title="No Records Found" />
                        }

                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </PerfectScrollbar>
    )
}

export default DroppableSection