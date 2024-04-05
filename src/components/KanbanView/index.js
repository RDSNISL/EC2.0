import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
// import Board from "@lourenci/react-kanban"
// import Board from '@asseinfo/react-kanban'
import { tasks } from 'common/data'
import RenderCardTitle from './render-card-title'
import CardTaskBox from './card-task-box'

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// import "@lourenci/react-kanban/dist/styles.css";
import DroppableSection from './DroppableSection'
import ActionButtons from 'components/FormControls/ActionButtons'


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



const KanbanView = (props) => {

    const { kanbanData, columns, reOrderElement, moveElement } = props;

    // const [boardItem, setBoardItems] = useState(data);
    // const columns = ['todo', 'inprogress', 'complete']

    const [boardItem, setBoardItems] = useState(kanbanData);



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

        // Note: `its seem's like we need to do api calls inside parent component for better management`

        const { source, destination } = result;

        if (!destination) {
            return;
        }

        const sourceDroppableId = source?.droppableId;
        const destinationDroppableId = destination?.droppableId;

        if (sourceDroppableId === destinationDroppableId) {

            const items = reorder(boardItem[sourceDroppableId], source?.index, destination?.index);
            const newState = { ...boardItem };
            newState[sourceDroppableId] = items;
            setBoardItems(newState);

            /** Note : While do DB operation update sequence of record only */
            reOrderElement();

        } else {

            const result = move(boardItem[sourceDroppableId], boardItem[destinationDroppableId], source, destination);
            const newState = { ...boardItem };
            newState[sourceDroppableId] = result[sourceDroppableId];
            newState[destinationDroppableId] = result[destinationDroppableId];
            setBoardItems(newState);

            /** Note : While do DB operation update sequence and status of record */
            moveElement();
        }

    }

    const deleteHandler = (column, data) => {
        const boardItemCopy = { ...boardItem }
        const columnData = boardItemCopy[column];
        const newList = columnData?.filter(colData => colData?.id !== data?.id)
        boardItemCopy[column] = newList;
        setBoardItems(boardItemCopy);

        /** Note - next step will be api call from QuickLeads - Page */
    }

    const convertHandler = (column, data) => {

        const sourceClone = [...boardItem[column]]
        const destClone = [...boardItem['opportunity']];

        const droppableSourceIndex = sourceClone?.findIndex(item => item?.id === data?.id);
        const droppableDestinationIndex = 0;

        const [removed] = sourceClone.splice(droppableSourceIndex, 1);

        destClone.splice(droppableDestinationIndex, 0, removed);

        const result = {};
        result[column] = sourceClone;
        result['opportunity'] = destClone;

        setBoardItems(result);

        /** Note - next step will be api call from QuickLeads - Page */
    }


    const handleThreeDotClick = (column, data, actionType) => {
        const actionMapper = {
            convert: convertHandler,
            // edit: editHandler,
            delete: deleteHandler
        };

        if (actionMapper[actionType]) {
            actionMapper[actionType](column, data);
        }
    };

    return (
        <React.Fragment>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="row">
                    {columns?.map((column, index) => {
                        return (
                            <div className="col col-md-4">
                                <DroppableSection
                                    column={column?.columnName}
                                    items={boardItem?.[column?.columnName]}
                                    header={column?.setting}
                                    handleThreeDotClick={handleThreeDotClick}
                                />
                            </div>
                        )
                    })}
                </div>
            </DragDropContext>
        </React.Fragment>
    )
}

export default KanbanView
