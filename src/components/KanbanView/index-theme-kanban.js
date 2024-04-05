import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
// import Board from "@lourenci/react-kanban"
import Board from '@asseinfo/react-kanban'
import { tasks } from 'common/data'
import RenderCardTitle from './render-card-title'
import CardTaskBox from './card-task-box'


import "@lourenci/react-kanban/dist/styles.css";


const KanbanView = (props) => {


    const data2 = tasks?.map((task) => ({ ...task, cards: task?.tasks }))
    console.log('kanbanData =>', data2);

    const [boardData, setBoardData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    // useEffect(() => {
    //     let data = tasks?.map((task) => ({ ...task, cards: task?.tasks }))
    //     setBoardData(data);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 1500)
    // }, [])


    const board = {
        columns: [
            {
                id: 1,
                title: 'Backlog',
                cards: [
                    {
                        id: 1,
                        title: 'Add card',
                        description: 'Add capability to add a card in a column'
                    },
                ]
            },
            {
                id: 2,
                title: 'Doing',
                cards: [
                    {
                        id: 2,
                        title: 'Drag-n-drop support',
                        description: 'Move a card between the columns'
                    },
                ]
            }
        ]
    }


    // console.log('tasks =>', boardData);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className=''>
            <React.Fragment>
                <Row className="mb-4">
                    <Col>

                        {data2?.length > 0 ?
                            <Board
                                initialBoard={data2}

                                renderColumnHeader={({ title }) => (
                                    <RenderCardTitle title={title} />
                                )}
                                renderCard={(data, { dragging }) => (
                                    <CardTaskBox data={data} dragging={dragging}>
                                        {data}
                                    </CardTaskBox>

                                )}
                                onNewCardConfirm={draftCard => ({
                                    id: new Date().getTime(),
                                    ...draftCard,
                                })}
                            /> : 'No data'
                        }
                    </Col>
                </Row>
            </React.Fragment>
        </div>
    )
}

export default KanbanView
