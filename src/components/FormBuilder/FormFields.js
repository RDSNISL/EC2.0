import TextChip from 'components/Common/TextChip';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';

const FormFields = (props) => {
    const {
        fields,
        handleEditClick = () => { },
        handleDeleteClick = () => { }
    } = props;

    return (
        fields?.map((field, index) =>
            <Row key={field?.name}>
                <Col md={12}>
                    <Card className='card-shadow'>
                        <CardBody className='p-2'>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <p className='mb-0 fw-bold fs-6'>{field?.labelField}</p>
                                    <TextChip
                                        text={field?.type?.label}
                                        bgColor="#eb9e2c"
                                        className="ms-1"
                                    />
                                </div>
                                <span>
                                    <FeatherIcon
                                        icon="edit-3"
                                        size="20"
                                        className='me-2'
                                        cursor="pointer"
                                        onClick={() => handleEditClick(field, index)}
                                    />
                                    <FeatherIcon
                                        icon="x-circle"
                                        size="20"
                                        stroke="#FF0000"
                                        cursor="pointer"
                                        onClick={() => handleDeleteClick(index)}
                                    />
                                </span>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    )
}

export default FormFields