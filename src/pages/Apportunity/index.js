import React, { useCallback, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import Breadcrumb from 'components/Common/Breadcrumb';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Pie, Doughnut } from 'react-chartjs-2';

const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 40, 56]
        }
    ]
}

const state1 = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 2, 80, 20, 56]
        }
    ]
}

const state2 = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
            data: [65, 59, 80, 81, 56]
        }
    ]
}

const Projects = () => {
    const breadcrumbItems = [{ path: "/dashboard", heading: "Home" },
    { path: "/", heading: "Apportunity" }]

    return (
        <div className="page-content">
            <Breadcrumb title="Apportunity" breadcrumbItems={breadcrumbItems} />
            <Card>
                <CardBody className="table-responsive">
                    <Bar
                        data={state}
                        options={{
                            title: {
                                display: true,
                                text: 'Average Rainfall per month',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                    <Line
                        data={state1}
                        options={{
                            title: {
                                display: true,
                                text: 'Average Rainfall per month',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                    <Pie
                        data={state2}
                        options={{
                            title: {
                                display: true,
                                text: 'Average Rainfall per month',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />

                    <Doughnut
                        data={state2}
                        options={{
                            title: {
                                display: true,
                                text: 'Average Rainfall per month',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </CardBody>
            </Card>
        </div>
    )
}

export default Projects