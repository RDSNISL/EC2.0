import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
// import Board from "@lourenci/react-kanban"
import Board from '@asseinfo/react-kanban'
import { tasks } from 'common/data'
import RenderCardTitle from '../render-card-title'
import CardTaskBox from '../card-task-box'

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "@lourenci/react-kanban/dist/styles.css";
import DroppableSection from '../DroppableSection'


const data = {
    todo: [
        { id: 1, description: 'Task 1', status: 'todo' },
        { id: 2, description: 'Task 2', status: 'todo' },
        { id: 3, description: 'Task 3', status: 'todo' },
        { id: 4, description: 'Task 4', status: 'todo' },
        { id: 5, description: 'Task 5', status: 'todo' },
    ],
    inprogress: [
        { id: 6, description: 'Task 6', status: 'inprogress' },
    ],
    complete: [
        { id: 7, description: 'Task 7', status: 'complete' },
    ],
}



const KanbanView = () => {


    const [boardItem, setBoardItems] = useState(data);
    const columns = ['todo', 'inprogress', 'complete']


    console.log('boardItem =>', boardItem);

    /* When Drag and Drop happend inside same Droppable Id (Same Box) then we are changing position of the elements */
    const reorder = (list, startIndex, endIndex) => {
        const result = [...list]
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    /* When Drag and Drop happend between 2 list (two different Droppable Id) then we are moving an item from one list to another list */
    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = [...source]
        const destClone = [...destination];
        const [removed] = sourceClone.splice(droppableSource?.index, 1);

        destClone.splice(droppableDestination?.index, 0, removed);

        const result = {};
        result[droppableSource?.droppableId] = sourceClone;
        result[droppableDestination?.droppableId] = destClone;

        return result;
    };


    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        const sourceDroppableId = source?.droppableId;
        const destinationDroppableId = destination?.droppableId;

        if (sourceDroppableId === destinationDroppableId) {
            /** Note : While DB operation update sequence of record only */
            const items = reorder(boardItem[sourceDroppableId], source?.index, destination?.index);
            const newState = { ...boardItem };
            newState[sourceDroppableId] = items;
            setBoardItems(newState);

        } else {
            /** Note : While DB operation update sequence and status of record */
            const result = move(boardItem[sourceDroppableId], boardItem[destinationDroppableId], source, destination);
            const newState = { ...boardItem };
            newState[sourceDroppableId] = result[sourceDroppableId];
            newState[destinationDroppableId] = result[destinationDroppableId];
            setBoardItems(newState);
        }

    }

    return (
        <div className=''>
            <React.Fragment>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="row gap-3">
                        {columns?.map((column, index) => {
                            return (
                                <div className="col col-auto">
                                    <DroppableSection
                                        column={column}
                                        items={boardItem[column]}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </DragDropContext>
            </React.Fragment>
        </div>
    )
}

export default KanbanView
