import React from "react";
import PropTypes from 'prop-types';
import FormGenerater from 'components/FormBuilder/FormGenerater';
import { Button, Card, CardBody } from 'reactstrap';

const Drawer = ({ Title, content, show, onClose }) => {
    const drawerStyle = {
        position: 'fixed',
        top: '0px',
        right: show ? '0px' : '-300px',
        height: '100%',
        width: '70%',
        background: '#f3f5f7',
        overflowX: 'hidden',
        overflowY: 'scroll',
        webkitOverflowScrolling: 'touch',
        zIndex: 10000,
    };

    return (
        <div>
            {show &&
                <div id="drawer" style={drawerStyle}>
                    <div className="container">
                        <Button className="btn btn-info ms-auto" onClick={onClose}>
                            {Title} <i className="mdi mdi-close noti-icon"></i>
                        </Button>
                        {content.map((section, index) => (
                            <div key={index}>
                                <h2>{section.OpportunityTitle}</h2>
                                {
                                    section.UserSections && section.UserSections.map((detail, idx) => (
                                        <>
                                            {detail.details && detail.details.map((data, idy) => (
                                                <small key={idy} >
                                                    <span><i className={data.icon}></i>{data.text}</span>
                                                    &nbsp; &nbsp;
                                                </small>
                                            ))}
                                            <hr />
                                        </>
                                    ))
                                }

                                {
                                    section.NoteSection[0].formFields && (
                                        <>
                                            <div>
                                                <span>{section.NoteSection[0].title}</span>
                                                <i className={section.NoteSection[0].icon}></i>
                                            </div>
                                            <FormGenerater
                                                formFields={section.NoteSection[0].formFields} // pass sample json data here
                                            />
                                        </>

                                    )
                                }
                                {
                                    section.NoteSection && (
                                        <>
                                            <div>
                                                <i className={section.NoteSection[1].icon}></i>
                                                <a href={section.NoteSection[1].link} style={{ float: 'right' }}>Save</a>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                }
                                {console.log(section.CommentSection)}
                                {
                                    section.comments && section.comments.map((comments, idx) => (
                                        <div key={idx}>
                                            <ul>
                                                {
                                                    comments && comments.map((comment, idx) => (
                                                        <>
                                                            <li>
                                                                <div className='col-md-12'>
                                                                    <div className='col-md-10'>
                                                                        {comment.content}
                                                                    </div>
                                                                    <div className='col-md-2'>
                                                                        <i className='mdi mdi-lead-pencil'></i>
                                                                        <i className='mdi mdi-delete'></i>
                                                                    </div>
                                                                </div>
                                                                <div className='mt-4'>
                                                                    {comment.details.map((detail, idx) => (
                                                                        <span key={idx}><i className={detail.icon}></i>{detail.text}</span>
                                                                    ))}
                                                                </div>
                                                            </li>
                                                        </>
                                                    ))
                                                }

                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div >
    );
}

Drawer.propTypes = {
    Title: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.object),
    show: PropTypes.bool,
    onClose: PropTypes.func
}

export default Drawer;
