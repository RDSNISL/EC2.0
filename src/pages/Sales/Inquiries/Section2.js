import React from 'react';
import { Card, CardBody } from 'reactstrap';
import Expander from 'components/Modals/Expander';
import Badge from 'components/Modals/Badge';
import FormGenerater from 'components/FormBuilder/FormGenerater'

const Section2 = ({ items }) => {

    const form_section1 = [
        {
            "isEditable": true,
            "name": "description",
            "label": "",
            "placeholder": "Please enter description.",
            "type": "ckEditor",
            "validationType": "string",
            "sectionName": "Opportunity",
            "sectionHeading": "Opportunity",
            "rows": 0,
            "disabledField": false,
            "disabled": false,
            "validations": [

            ],
            "selectPluginConfig": {
                "isClearable": false,
                "isSearchable": false,
                "isMulti": false,
                "isRtl": false
            },
            "dependency": {
                "isDependentField": false,
                "dependentOn": []
            },
            "fillOptions": {
                "byApi": "",
                "apiConfig": {
                    "url": "",
                    "method": "",
                    "body": "{}",
                    "labelField": "",
                    "valueField": ""
                },
                "options": [
                    {
                        "label": "",
                        "value": ""
                    }
                ]
            },
            "fileConfig": {
                "multiple": false,
                "filePreview": false,
                "imageDisplayType": {
                    "label": "Rounded",
                    "value": "round"
                },
                "maxSize": 0,
                "maxFiles": 0,
                "accept": ""
            },
            "classes": {
                "wrapper": "",
                "label": "",
                "field": "",
                "error": ""
            }
        }];

    const pull_right = {
        float: 'right'
    };

    const planned_css = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '5px 10px',
        fontWeight: 'bold',
    };

    const today_css = {
        backgroundColor: 'green',
        color: 'white',
        padding: '5px 10px',
        fontWeight: 'bold',
    };

    const tag_css = {
        backgroundColor: 'lightgrey',
        color: 'black',
        padding: '5px 10px',
    };

    const tag_css1 = {
        backgroundColor: 'lightgrey',
        color: 'black',
        padding: '5px 10px',
        fontWeight: 'bold',
    };

    const hr_css = {
        margin: '-10px 0px 25px 0px'
    };

    return (
        <div>

            <Expander title="Notes" icon_name="mdi mdi-pin">
                <FormGenerater
                    formFields={form_section1} // pass sample json data here
                />
            </Expander>

            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Notes 1 <small> March 07, 2021 11:12 AM</small> <a href="#" style={pull_right}><i className='mdi mdi-grease-pencil'></i></a><a href="#" style={pull_right}><i className='mdi mdi-delete'></i></a> <a href="#" style={pull_right}><i className='mdi mdi-account-circle'></i></a> </h5>
                    <br />
                    <p className="card-text">
                        <b>Note:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil totam beatae molestias omnis eaque libero quisquam illo quos, doloremque delectus et dolorem nostrum nulla a. Temporibus corporis accusamus quos!
                    </p>
                </CardBody>
            </Card>

            <Expander title="Task" icon_name="mdi mdi-pin">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed excepturi provident nesciunt nam pariatur unde esse iure ipsa molestias iusto quibusdam dolorum eligendi quam eveniet eos cupiditate, atque tempora.</p>
            </Expander>

            <center><Badge count="Planned" color_name={planned_css} /></center>
            <hr style={hr_css} />

            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">
                        <input type='checkbox'></input>
                        &nbsp; Task
                        <small> Feb 27, 2023 11:12 AM</small>
                        <a href="#" style={pull_right}><i className='mdi mdi-grease-pencil'></i></a>
                        <a href="#" style={pull_right}><i className='mdi mdi-delete'></i></a>
                        <a href="#" style={pull_right}><i className='mdi mdi-account-circle'></i></a>
                    </h5>
                    <br />
                    <p className="card-text">
                        <b>CRM:</b> Setup ActBlue Clone
                        <br />
                        <b>With:</b> Jason Luise
                        <br />
                        <b>Description:</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, accusamus? Eius inventore nesciunt aut nobis numquam id! Suscipit porro, vero ipsum in quas harum, pariatur, ratione placeat fugit mollitia culpa!
                        Aut, debitis et. Dolores qui aperiam adipisci, necessitatibus illo ex consequatur molestiae culpa tempora, obcaecati temporibus recusandae suscipit praesentium unde eos enim earum tenetur neque atque eum eligendi repellat ad.
                        Consectetur, quo molestiae.
                    </p>
                </CardBody>
            </Card>


            <center><Badge count="Today" color_name={today_css} /></center>
            <hr style={hr_css} />

            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Task Created CRM: Setup ActBlue Clone <small>10:02 AM</small> <i style={pull_right} className='mdi mdi-account-circle'></i></h5>
                    <p className="card-text">
                        <small>Description:</small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illum unde voluptatum possimus ipsum in iusto suscipit eos et ad? Ipsa, possimus quasi! Nesciunt eum, illum distinctio maxime ab accusamus.
                    </p>
                </CardBody>
            </Card>
            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Task Completed <small>09:58 AM</small> <i style={pull_right} className='mdi mdi-account-circle'></i></h5>
                    <p className="card-text">
                        <small>CRM:</small> Lead1
                    </p>
                </CardBody>
            </Card>
            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Status Changed <small>05:56 PM</small> <i style={pull_right} className='mdi mdi-account-circle'></i></h5>
                    <p className="card-text">
                        <br />
                        <Badge count="Processed" color_name={tag_css} />
                        <i className='mdi mdi-arrow-right'></i>
                        <Badge count="Unassigned" color_name={tag_css} />
                    </p>
                </CardBody>
            </Card>
            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Status Changed <small>04:32 PM</small> <i style={pull_right} className='mdi mdi-account-circle'></i></h5>
                    <p className="card-text">
                        <br />
                        <Badge count="In Progress" color_name={tag_css} />
                        <i className='mdi mdi-arrow-right'></i>
                        <Badge count="Processed" color_name={tag_css} />
                    </p>
                </CardBody>
            </Card>
            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Meeting <small>04:21 PM</small> <i style={pull_right} className='mdi mdi-account-circle'></i></h5>
                    <p className="card-text">
                        <br />
                        <small>With:</small> Jason Luise
                        <br />
                        <small>Subject:</small> Payment Method
                        <br />
                        <small>Description:</small> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, accusamus? Eius inventore nesciunt aut nobis numquam id! Suscipit porro, vero ipsum in quas harum, pariatur, ratione placeat fugit mollitia culpa!
                        Aut, debitis et. Dolores qui aperiam adipisci, necessitatibus illo ex consequatur molestiae culpa tempora, obcaecati temporibus recusandae suscipit praesentium unde eos enim earum tenetur neque atque eum eligendi repellat ad.
                        Consectetur, quo molestiae.
                    </p>
                </CardBody>
            </Card>

            <center><Badge count="26 Fabruary" color_name={tag_css1} /></center>
            <hr style={hr_css} />

            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Status Changed <small>04:32 PM</small> <i style={pull_right} className='mdi mdi-account-circle'></i></h5>
                    <p className="card-text">
                        <br />
                        <Badge count="Processed" color_name={tag_css} />
                        <i className='mdi mdi-arrow-right'></i>
                        <Badge count="Unassigned" color_name={tag_css} />
                    </p>
                </CardBody>
            </Card>

            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Call <small>12:32 PM</small> <i style={pull_right} className='mdi mdi-account-circle'></i></h5>
                    <p className="card-text">
                        <br />
                        <small>With:</small> Jason Luise
                        <br />
                        <small>Subject:</small> Payment Method
                        <br />
                        <small>Description:</small> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                </CardBody>
            </Card>

            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Status Changed <small>10:21 PM</small> <i style={pull_right} className='mdi mdi-account-circle'></i></h5>
                    <p className="card-text">
                        <br />
                        <Badge count="Unassigned" color_name={tag_css} />
                        <i className='mdi mdi-arrow-right'></i>
                        <Badge count="In Progress" color_name={tag_css} />
                    </p>
                </CardBody>
            </Card>

            <center><Badge count="25 Fabruary" color_name={tag_css1} /></center>
            <hr style={hr_css} />

            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Status Changed <small>01:32 PM</small> <i style={pull_right} className='mdi mdi-account-circle'></i></h5>
                    <p className="card-text">
                        <br />
                        <Badge count="Processed" color_name={tag_css} />
                        <i className='mdi mdi-arrow-right'></i>
                        <Badge count="Unassigned" color_name={tag_css} />
                    </p>
                </CardBody>
            </Card>
            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Status Changed <small>10:20 AM</small> <i style={pull_right} className='mdi mdi-account-circle'></i></h5>
                    <p className="card-text">
                        <br />
                        <Badge count="In Progress" color_name={tag_css} />
                        <i className='mdi mdi-arrow-right'></i>
                        <Badge count="Processed" color_name={tag_css} />
                    </p>
                </CardBody>
            </Card>
            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Status Changed <small>09:56 AM</small> <i style={pull_right} className='mdi mdi-account-circle'></i></h5>
                    <p className="card-text">
                        <br />
                        <Badge count="Unassigned" color_name={tag_css} />
                        <i className='mdi mdi-arrow-right'></i>
                        <Badge count="In Progress" color_name={tag_css} />
                    </p>
                </CardBody>
            </Card>
            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Task Created: Lead #1 <small>09:41 AM</small> <i style={pull_right} className='mdi mdi-account-circle'></i></h5>
                </CardBody>
            </Card>
            <Card className="col-md-12">
                <CardBody>
                    <h5 className="card-title">Lead Created <small>09:02 AM</small> <i style={pull_right} className='mdi mdi-account-circle'></i></h5>
                    <p className="card-text">
                        Setup ActBlue Clone
                        <br />
                        <small>Source:</small> Call
                    </p>
                </CardBody>
            </Card>
        </div>
    );
};

export default Section2;