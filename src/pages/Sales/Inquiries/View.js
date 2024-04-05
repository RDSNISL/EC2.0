import React, { useState, useEffect } from 'react';
import DialogBox from 'components/Modals/DialogBox';
import { Card, CardBody } from 'reactstrap'
import Section1 from './Section1';
import Section2 from './Section2';


const View = (props) => {

    const {
        handleModelToggle,
        isModelOpen,
        title,
        actions = null,
        modelSize,
    } = props;

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const basic_info = [
        { id: 1, label: 'First Name', name: 'William' },
        { id: 2, label: 'Last Name', name: 'Bishop' },
        { id: 3, label: 'Company', name: 'Rangoni Of Florence' },
        { id: 4, label: 'Position', name: 'Executive Secretary' },
    ];

    const source_info = [
        { id: 1, label: 'Primary Source', name: 'Up Work' },
        { id: 2, label: 'Job Type', name: 'Fix Time' },
    ];

    const more_info = [
        { id: 1, label: 'Technology', name: 'PHP' },
        { id: 2, label: 'Framework', name: 'Codeigniter' },
        { id: 3, label: 'Domain/Category', name: 'Corporate, Digital Marketing, Online Review' },
    ];
    const desc = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

    const greyStyle = {
        backgroundColor: '#efeeee',
        padding: '20px', // Optional: Add more styles as needed
    };

    const order_info = [
        { id: 1, label: 'Title', name: 'Hard Ware' },
        { id: 2, label: 'Client Name', name: 'Randall l. Hurtado' },
        { id: 3, label: 'Company Name', name: 'IBL' },
        { id: 4, label: 'Source', name: 'UpWork' },
        { id: 5, label: 'Assign To', name: 'Patsy F. Ayres' },
        { id: 6, label: 'Order Status', name: 'New' },
        { id: 7, label: 'Order Date', name: 'Mar 26,2021' },
        { id: 8, label: 'Source', name: 'UpWork' },
    ];

    const invoice_info = [
        { id: 1, label: 'Title', name: 'Invoice 1' },
        { id: 2, label: 'Client Name', name: 'Petey Cruiser' },
        { id: 3, label: 'Company Name', name: 'IBL' },
        { id: 4, label: 'Source', name: 'UpWork' },
        { id: 5, label: 'Assign To', name: 'Patsy F. Ayres' },
        { id: 6, label: 'Invoice Status', name: 'New' },
        { id: 7, label: 'create Date', name: 'Mar 26,2021' },
        { id: 8, label: 'End Date', name: 'Mar 27,2021' },
    ];

    return (
        <DialogBox className='mt-9'
            isModelOpen={isModelOpen}
            handleToggle={handleModelToggle}
            modelSize={modelSize}
            title={title}
            actions={actions}
            style={greyStyle}
        >
            <div>
                <div className="tab-header">
                    <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'btn btn-warning active' : 'btn btn-primary'}>
                        General
                    </button>
                    <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'btn btn-warning active' : 'btn btn-primary'}>
                        Quote
                    </button>
                    <button onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'btn btn-warning active' : 'btn btn-primary'}>
                        Order
                    </button>
                    <button onClick={() => handleTabClick(4)} className={activeTab === 4 ? 'btn btn-warning active' : 'btn btn-primary'}>
                        Invoice
                    </button>
                </div>
                <div className="tab-content">
                    {activeTab === 1 &&
                        <div className="row">
                            <div className="col-md-6" style={greyStyle}>
                                <Section1 label='Opportunity Basic Information' items={basic_info} />
                                <Section1 label='Opportunity Source Information' items={source_info} />
                                <Section1 label='Opportunity More Information' items={more_info} />
                                <Card className="col-md-12">
                                    <CardBody>
                                        <h5 className="card-title">Opportunity Description <a href="#" className="btn btn-primary"><i className='mdi mdi-pencil'></i> Edit</a></h5>
                                        <p className="card-text">{desc}</p>

                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-md-6" style={greyStyle}>
                                <Section2></Section2>
                            </div>
                        </div>
                    }
                    {activeTab === 2 &&
                        <div className="row">
                            <br />
                            <h1>Quote</h1>
                            <div className="col-md-6" style={greyStyle}>
                                <Section1 label='Quote 1 Information' items={order_info} />
                                <Card className="col-md-12">
                                    <CardBody>
                                        <h5 className="card-title">Quote 2 Information <a href="#" className="btn btn-primary"><i className='mdi mdi-pencil'></i> Edit</a></h5>
                                    </CardBody>
                                </Card>
                                <Card className="col-md-12">
                                    <CardBody>
                                        <h5 className="card-title">Quote 3 Information <a href="#" className="btn btn-primary"><i className='mdi mdi-pencil'></i> Edit</a></h5>
                                    </CardBody>
                                </Card>

                            </div>
                            <div className="col-md-6" style={greyStyle}>
                                <Section2></Section2>
                            </div>
                        </div>
                    }
                    {activeTab === 3 &&
                        <div className="row">
                            <br />
                            <h1>Order</h1>
                            <div className="col-md-6" style={greyStyle}>
                                <Section1 label='Order 1 Information' items={order_info} />
                                <Card className="col-md-12">
                                    <CardBody>
                                        <h5 className="card-title">Order 2 Information <a href="#" className="btn btn-primary"><i className='mdi mdi-pencil'></i> Edit</a></h5>
                                    </CardBody>
                                </Card>

                                <Card className="col-md-12">
                                    <CardBody>
                                        <h5 className="card-title">Order 3 Information <a href="#" className="btn btn-primary"><i className='mdi mdi-pencil'></i> Edit</a></h5>
                                    </CardBody>
                                </Card>

                            </div>
                            <div className="col-md-6" style={greyStyle}>
                                <Section2></Section2>
                            </div>
                        </div>
                    }
                    {activeTab === 4 &&
                        <div className="row">
                            <br />
                            <h1>Invoice</h1>
                            <div className="col-md-6" style={greyStyle}>
                                <Section1 label='Invoice Information' items={invoice_info} />
                            </div>
                            <div className="col-md-6" style={greyStyle}>
                                <Section2></Section2>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </DialogBox>
    )
}

export default View;