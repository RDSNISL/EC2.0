import React, { useCallback, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import FeatherIcon from "feather-icons-react";

import RHFTextField from 'components/FormControls/RHFTextField'
import Table from 'components/Table/Table'
import Breadcrumb from 'components/Common/Breadcrumb'
import RHFButton from 'components/FormControls/RHFButton'

const data = [
    {
        id: 1,
        name: 'RDS Test1',
        description: 'Demo Text',
        startDate: '10-Nov-2022',
        endDate: '10-Feb-2023',
    },
    {
        id: 2,
        name: 'RDS Test2',
        description: 'Demo text123',
        startDate: '05-Sep-2021',
        endDate: 'No End',
    }
]

const columns = [
    {
        name: '#TID',
        cell: (row) => row?.id
    },
    {
        name: 'Task Name',
        cell: (row) => row?.name
    },
    {
        name: 'Description',
        cell: (row) => row?.description
    },
    {
        name: 'Start Date',
        cell: (row) => row?.startDate
    },
    {
        name: 'End Date',
        cell: (row) => row?.endDate
    },
]

const MyExpandedComponent = () => {
    return (
        <div>
            <p>Developed By - RDS NISL</p>
        </div>
    )
}
function index() {

    const [filterFields, setFilterFields] = useState({
        'search': null,
    });

    const setFilterValues = (field) => {
        setFilterFields(prev => {
            return {
                ...prev,
                ...field
            }
        })
    }

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500);
        };
    };

    const optimizedFn = useCallback(debounce((val) => setFilterValues({ search: val })), []);

    const breadcrumbItems = [{ path: "/dashboard", heading: "Home" },
    { path: "/tasks", heading: "Tasks" }]

    return (
        <div className="page-content">
            <Breadcrumb title="Tasks" breadcrumbItems={breadcrumbItems} />
            <Card>
                <CardHeader>
                    <Row>
                        <Col md="3">
                            <RHFTextField
                                id="search"
                                name="search"
                                placeholder="Search here"
                                isController={false}
                                handleOnChange={optimizedFn}
                            />
                        </Col>
                        <Col>

                            <div className="d-flex align-items-center justify-content-end">
                                <FeatherIcon icon="settings" size="28" />
                                <RHFButton
                                    btnName="Create New"
                                    icon="plus"
                                    onClick={() => alert('you clicked ')}
                                    className="ms-2"
                                />
                                <RHFButton
                                    btnName="Clone Tasks"
                                    icon="plus"
                                    onClick={() => alert('you clicked ')}
                                    className="ms-2"
                                />
                            </div>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody className="table-responsive">
                    <Table
                        columns={columns}
                        // dataURL={APPLICATION.listAllBu}
                        tableDATA={data}
                        isRefresh={false}
                        isRowExanded={false}
                        expandedComponent={<MyExpandedComponent />}
                        filter={filterFields}
                    />
                </CardBody >
            </Card>
        </div>
    )
}

export default index
