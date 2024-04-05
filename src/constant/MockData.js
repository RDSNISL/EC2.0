/* Application */
export const quickLeadsData = [
    {
        id: 1,
        name: 'Ri-Discovery',
        primarySource: 'upwork',
        email: 'dm@narola.email',
        jobLink: 'www.google.com',
        price: '15 USD',
        jobType: 'Fix Time',
        weightage: 'S',
        bidDate: 'Feb 11, 2021',
        technology: 'React JS',
        applicationOwner: 'Bhumi Rushab Shah',
        detail: 'lorem Ipsum',
        leadDate: 'Feb 11, 2024',
        skill: 'iOS Development',
        leadStatus: 1
    },
    {
        id: 2,
        name: 'Writi2.0',
        primarySource: 'website',
        email: 'dm@narola.email',
        jobLink: 'www.google.com',
        price: '25 USD',
        jobType: 'Fix Time',
        weightage: 'L',
        bidDate: 'Sep 15, 2019',
        technology: 'PHP',
        applicationOwner: 'Vishalkumar Maheshbhai Patel	',
        detail: '',
        leadDate: 'April 11, 2024',
        skill: 'CSS,HTML,JavaScript,PHP	',
        leadStatus: 1,
    },
    {
        id: 3,
        name: 'Posh Market',
        primarySource: 'upwork',
        email: 'dm@narola.email',
        jobLink: 'www.google.com',
        price: '15 USD',
        jobType: 'Fix Time',
        weightage: 'S',
        bidDate: 'Feb 11, 2021',
        technology: 'Angular',
        applicationOwner: 'Mohammed Uvais Abbas Saiyed',
        detail: '',
        leadDate: 'Feb 11, 2024',
        skill: 'Squarespace,Web Development',
        leadStatus: 1
    },
    {
        id: 4,
        name: 'EasyCallab',
        primarySource: 'website',
        email: 'dm@narola.email',
        jobLink: 'www.google.com',
        price: '25 USD',
        jobType: 'Fix Time',
        weightage: 'L',
        bidDate: 'Sep 15, 2019',
        technology: 'React js',
        applicationOwner: 'Mahir Mehboob Shaikh',
        detail: '',
        leadDate: 'Feb 10, 2021',
        skill: '',
        leadStatus: 2
    },
    {
        id: 5,
        name: 'Upscoding',
        primarySource: 'upwork',
        email: 'dm@narola.email',
        jobLink: 'www.google.com',
        price: '15 USD',
        jobType: 'Fix Time',
        weightage: 'S',
        bidDate: 'Feb 11, 2021',
        technology: 'Vue js',
        applicationOwner: 'Mahir Mehboob Shaikh',
        detail: '',
        leadDate: 'March 11, 2024',
        skill: 'CSS,HTML,JavaScript,WordPress',
        leadStatus: 2
    },
    {
        id: 6,
        name: 'Interstride',
        primarySource: 'website',
        email: 'dm@narola.email',
        jobLink: 'www.google.com',
        price: '25 USD',
        jobType: 'Fix Time',
        weightage: 'L',
        bidDate: 'Sep 15, 2019',
        technology: 'React js',
        applicationOwner: 'Sanskruti Chandresh Bhavsar',
        detail: '',
        leadDate: '',
        skill: 'iOS Development',
        leadStatus: 3
    }
];

export const applicationForm = [
    {
        "isEditable": true,
        "name": "primary_source_id",
        "label": "Primary Source",
        "placeholder": "--select Option--",
        "type": "select",
        "validationType": "object",
        "sectionName": "applications",
        "sectionHeading": "applications",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select primary source."
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": true,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "value": "1",
                    "label": "UpWork"
                },
                {
                    "value": "2",
                    "label": "Freelancer"
                },
                {
                    "value": "3",
                    "label": "Guru"
                }
            ]
        },
        "classes": {
            "wrapper": "col-md-3",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "project_name",
        "label": "Project Name",
        "placeholder": "enter project name.",
        "type": "text",
        "validationType": "string",
        "sectionName": "applications",
        "sectionHeading": "applications",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please enter Project Name."
                ]
            }
        ],
        "classes": {
            "wrapper": "col-md-3",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "job_link",
        "label": "Job Link",
        "placeholder": "enter job link",
        "type": "text",
        "validationType": "string",
        "sectionName": "applications",
        "sectionHeading": "applications",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
        "classes": {
            "wrapper": "col-md-3",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "job_type",
        "label": "Job Type",
        "placeholder": "--select Option--",
        "type": "select",
        "validationType": "object",
        "sectionName": "applications",
        "sectionHeading": "applications",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Job Type."
                ]
            }
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "Fix Time",
                    "value": "Fix Time"
                },
                {
                    "label": "Hourly",
                    "value": "Hourly"
                },
                {
                    "label": "Monthly",
                    "value": "Monthly"
                },
                {
                    "label": "Fix Hours",
                    "value": "Fix Hours"
                }
            ]
        },
        "classes": {
            "wrapper": "col-md-3",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "currency_id",
        "label": "Currency",
        "placeholder": "--select Option--",
        "type": "select",
        "validationType": "object",
        "sectionName": "applications",
        "sectionHeading": "applications",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Currency."
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": true,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "value": "1",
                    "label": "INR"
                },
                {
                    "value": "2",
                    "label": "USD"
                },
                {
                    "value": "3",
                    "label": "GBP"
                }
            ]
        },
        "classes": {
            "wrapper": "col-md-3",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "price",
        "label": "Price",
        "placeholder": "enter price.",
        "type": "text",
        "validationType": "string",
        "sectionName": "applications",
        "sectionHeading": "applications",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please enter Price."
                ]
            }
        ],
        "classes": {
            "wrapper": "col-md-3",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "weightage_id",
        "label": "Weightage",
        "placeholder": "--select Option--",
        "type": "select",
        "validationType": "object",
        "sectionName": "applications",
        "sectionHeading": "applications",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Weightage."
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": true,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "value": "1",
                    "label": "S"
                },
                {
                    "value": "2",
                    "label": "M"
                },
                {
                    "value": "3",
                    "label": "L"
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
            "wrapper": "col-md-3",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "bid_date",
        "label": "Bid Date",
        "placeholder": "enter bid date",
        "value": "03-04-2024",
        "type": "text",
        "validationType": "string",
        "sectionName": "applications",
        "sectionHeading": "applications",
        "rows": 0,
        "disabledField": false,
        "disabled": true,
        "validations": [],
        "classes": {
            "wrapper": "col-md-3",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "skill_id",
        "label": "Skill",
        "placeholder": "--select Option--",
        "type": "select",
        "validationType": "object",
        "sectionName": "applications",
        "sectionHeading": "applications",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Skill."
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": true,
            "isMulti": true,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "value": "1",
                    "label": "MVC Dotnet"
                },
                {
                    "value": "2",
                    "label": "WordPress"
                },
                {
                    "value": "3",
                    "label": "Joomla"
                }
            ]
        },
        "classes": {
            "wrapper": "col-md-3",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "domain_id",
        "label": "Domain",
        "placeholder": "--select Option--",
        "type": "select",
        "validationType": "object",
        "sectionName": "applications",
        "sectionHeading": "applications",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Domain."
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": true,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "value": "1",
                    "label": "Art & Design & Graphics"
                },
                {
                    "value": "2",
                    "label": "Augmented reality"
                },
                {
                    "value": "3",
                    "label": "Auto & Vehicles"
                }
            ]
        },
        "classes": {
            "wrapper": "col-md-3",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "subdomain_id",
        "label": "SubDomain",
        "placeholder": "--select Option--",
        "type": "select",
        "validationType": "object",
        "sectionName": "applications",
        "sectionHeading": "applications",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select SubDomain."
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": true,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "value": "1",
                    "label": "Mining"
                },
                {
                    "value": "2",
                    "label": "Agriculture, Forestry, Fishing"
                },
                {
                    "value": "3",
                    "label": "Construction"
                }
            ]
        },
        "classes": {
            "wrapper": "col-md-3",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "technology_id",
        "label": "Technology",
        "placeholder": "--select Option--",
        "type": "select",
        "validationType": "object",
        "sectionName": "applications",
        "sectionHeading": "applications",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Technology."
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": true,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "value": "1",
                    "label": "PHP"
                },
                {
                    "value": "2",
                    "label": "Mobile"
                },
                {
                    "value": "3",
                    "label": "ASP.NET"
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
            "wrapper": "col-md-3",
            "label": "",
            "field": "",
            "error": ""
        }
    },

];

/* Opportunity */
export const InquiryData = [
    {
        prod_id: 426510,
        tech: 'PHP',
        proj_size: 'S',
        prod_name: 'setup ActBlue Clone',
        client_name: 'William F. Bishop',
        opportunities_icon: '',
        opportunities_flag: '',
        phone: '7079213469',
        email: 'williamFBishop@dayrep.com',
        mobile: '+16422352541',
        price: '10.00 USD/Fix Time',
        primary_source: 'UpWork',
        dates: 'FR - Feb 11, 2021 \n LR - Feb 11, 2021 \n LF - Feb 11, 2021 \n Due -',
        meeting_with: 'Paneri Dhanesh Shah',
        assign_to: 'Chirag Pravinbhai Limbachiya\n(Feb 11,2021)',
        Estimated_hrs: '58.00',
        details: "-Signed NDA",
        rejectreason: ""

    }, {
        prod_id: 426511,
        tech: 'Salesforce',
        proj_size: 'XS',
        prod_name: 'Need Salesforce Developer',
        client_name: 'Camille Benoit',
        phone: '1555486985',
        email: 'camille.benoit@gmail.com',
        mobile: '+11242646587',
        price: '12.00 USD/Fix Time',
        primary_source: 'Website',
        dates: 'FR - Jan 27, 2021 \n LR - Jan 27, 2021 \n LF - Jan 27, 2021 \n Due - Jan 27, 2021',
        meeting_with: 'Akshay Deepak Kolte',
        assign_to: 'Sunil Vaghela\n(Jan 27,2021)',
        Estimated_hrs: '94.00',
        details: "-Need to review details.",
        rejectreason: ""
    }, {
        prod_id: 426512,
        tech: 'ASP.NET',
        proj_size: 'L',
        prod_name: 'Bhupendra-2nd-Dev-Asp.Net-core',
        client_name: 'Randolph Torian',
        opportunities_icon: 'bx bx-calendar-check',
        opportunities_flag: 'Fab 11',
        phone: '2549655964',
        email: 'Randolph.Torian@yahoo.com',
        mobile: '+12347849542',
        price: '11.49 USD/Hourly',
        primary_source: 'Repeat',
        dates: 'FR - Jan 25, 2021 \n LR - Jan 25, 2021 \n LF - Jan 25, 2021 \n Due - Jan 25, 2021',
        meeting_with: 'Jigar Arjanbhai kakadiya \n Paneri Dhanesh Shah',
        assign_to: 'Shivlal Sheladiya\n(27-Jan -2021)',
        Estimated_hrs: '23.00',
        details: "-Need to review details.",
        rejectreason: ""
    }, {
        prod_id: 426513,
        tech: 'Python',
        proj_size: 'M',
        prod_name: 'Need to Build a handwritten text recognition system using Tensorflow',
        client_name: 'Desmond Simmons',
        phone: '3569847548',
        email: 'Desmond.simmons@gmail.com',
        mobile: '+12847546587',
        price: '0.00 USD/Fix Time',
        primary_source: 'Freelancer',
        dates: 'FR - Jan 23, 2021 \n LR - Jan 23, 2021 \n LF - Jan 23, 2021 \n Due - Jan 23,2021',
        meeting_with: '',
        assign_to: 'Prerna Gupta\n(25-Jan-2021)',
        Estimated_hrs: '16.00',
        details: "-Scheduling Meeting",
        rejectreason: ""
    }, {
        prod_id: 426514,
        tech: 'Mobile',
        proj_size: 'M',
        prod_name: 'Website and Mobile app for IT ticketing system',
        client_name: 'Ethel A. Salas',
        opportunities_icon: 'mdi mdi-calendar',
        opportunities_flag: 'Fab 9',
        phone: '4876585681',
        email: 'Ethel.a.salas@yahoo.com',
        mobile: '+14089291234',
        price: '11.00 USD/Hourly',
        primary_source: 'PPH',
        dates: 'FR - Feb 11, 2021 \n LR - Feb 11, 2021 \n LF - Feb 11, 2021 \n Due -',
        meeting_with: 'Milan Gupta',
        assign_to: '',
        Estimated_hrs: '08.00',
        details: "-Scheduling Meeting",
        rejectreason: ""
    },

];

export const opportunitiesDeatil = [{
    "OpportunityId": "1",
    "OpportunityTitle": "Your Opportunity ID Here",
    "UserSections": [
        {
            "title": "Jhon deo",
            "details": [
                {
                    "icon": "mdi mdi-account",
                    "text": "Jhon deo"
                },
                {
                    "icon": "mdi mdi-circle mdi-16px",
                    "text": "8 Hours"
                },
                {
                    "icon": "mdi mdi-circle mdi-16px",
                    "text": "$ 7000"
                }
            ]
        }],
    "NoteSection": [
        {
            "title": "Notes",
            "icon": "mdi mdi-marker",
            "formFields": [
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
                }]
        },
        {
            "title": "Save",
            "icon": "mdi mdi-link",
            "link": "#"
        }
    ],
    "CommentSection": [{
        "title": "Comments",
        "comments": [
            {
                "comment_id": 1,
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
                "user": "Jhon deo",
                "comment_time": 'Jan 25, 2021',
                "details": [
                    {
                        "icon": "mdi mdi-account",
                        "text": "Jhon deo"
                    },
                    {
                        "icon": "mdi mdi-circle mdi-16px",
                        "text": "8 Hours"
                    },
                    {
                        "icon": "mdi mdi-circle mdi-16px",
                        "text": "$ 7000"
                    }
                ]
            },
            {
                "comment_id": 2,
                "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                "user": "Jhon deo",
                "comment_time": 'Jan 25, 2021',
                "details": [
                    {
                        "icon": "mdi mdi-account",
                        "text": "Jhon deo"
                    },
                    {
                        "icon": "mdi mdi-circle mdi-16px",
                        "text": "8 Hours"
                    },
                    {
                        "icon": "mdi mdi-circle mdi-16px",
                        "text": "$ 7000"
                    }
                ]
            },
            {
                "comment_id": 3,
                "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
                "user": "Jhon deo",
                "comment_time": 'April 1, 2024',
                "details": [
                    {
                        "icon": "mdi mdi-account",
                        "text": "Jhon deo"
                    },
                    {
                        "icon": "mdi mdi-circle mdi-16px",
                        "text": "8 Hours"
                    },
                    {
                        "icon": "mdi mdi-circle mdi-16px",
                        "text": "$ 7000"
                    }
                ]
            }
        ]
    }
    ]
}];

export const opportunitiesForm = [
    {
        "isEditable": true,
        "name": "id",
        "label": "ID",
        "placeholder": "Please enter ID",
        "type": "text",
        "validationType": "string",
        "sectionName": "opportunities",
        "sectionHeading": "Opportunities",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please enter opportunity Id."
                ]
            }
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "opportunity_owner",
        "label": "Opportunity Owner",
        "placeholder": "Please select Opportunity Owner.",
        "type": "select",
        "validationType": "object",
        "sectionName": "opportunities",
        "sectionHeading": "Opportunities",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select opportunity owner."
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": true,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "Patric Becker",
                    "value": "Patric Becker"
                },
                {
                    "label": "Roshni Salmawala",
                    "value": "Roshni Salmawala"
                },
                {
                    "label": "John Doe",
                    "value": "John Doe"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "opportunity_name",
        "label": "Opportunity Name",
        "placeholder": "Please select Opportunity Name.",
        "type": "text",
        "validationType": "string",
        "sectionName": "opportunities",
        "sectionHeading": "Opportunities",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please enter Opportunity Name."
                ]
            }
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "nda",
        "label": false,
        "placeholder": "please add value in NDA",
        "type": "checkbox",
        "validationType": "array",
        "sectionName": "opportunities",
        "sectionHeading": "Opportunities",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "NDA",
                    "value": "NDA"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "attachment",
        "label": "Attachment",
        "placeholder": "Please select file",
        "type": "file",
        "validationType": "array",
        "sectionName": "opportunities",
        "sectionHeading": "Opportunities",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "filePreview": true,
            "imageDisplayType": {
                "value": "round",
                "label": "Rounded"
            },
            "maxSize": 250000,
            "maxFiles": 0,
            "accept": "image/jpg"
        },
        "classes": {
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "client_name",
        "label": "Client Name",
        "placeholder": "Please select Client Name",
        "type": "select",
        "validationType": "object",
        "sectionName": "opportunities",
        "sectionHeading": "Opportunities",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": true,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "Test",
                    "value": "Test"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "primary_source",
        "label": "Primary Source",
        "placeholder": "Please select primary source.",
        "type": "select",
        "validationType": "object",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Primary Source."
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": true,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "Website",
                    "value": "Website"
                },
                {
                    "label": "UpWork",
                    "value": "UpWork"
                },
                {
                    "label": "Twago",
                    "value": "Twago"
                },
                {
                    "label": "Repeat",
                    "value": "Repeat"
                },
                {
                    "label": "LinkedIn",
                    "value": "LinkedIn"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "potential",
        "label": "Potential",
        "placeholder": "Please select potential.",
        "type": "select",
        "validationType": "object",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Potential."
                ]
            }
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "High",
                    "value": "High"
                },
                {
                    "label": "Medium",
                    "value": "Medium"
                },
                {
                    "label": "Low",
                    "value": "Low"
                },
                {
                    "label": "CantSay",
                    "value": "CantSay"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "job_type",
        "label": "Job Type",
        "placeholder": "Please select job type.",
        "type": "select",
        "validationType": "object",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Job Type."
                ]
            }
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "Fix Time",
                    "value": "Fix Time"
                },
                {
                    "label": "Hourly",
                    "value": "Hourly"
                },
                {
                    "label": "Monthly",
                    "value": "Monthly"
                },
                {
                    "label": "Fix Hours",
                    "value": "Fix Hours"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "job_link",
        "label": "Job Link",
        "placeholder": "Please enter job link.",
        "type": "text",
        "validationType": "string",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "currency",
        "label": "Currency",
        "placeholder": "Please select Currency.",
        "type": "select",
        "validationType": "object",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Currency."
                ]
            }
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "USD",
                    "value": "USD"
                },
                {
                    "label": "INR",
                    "value": "INR"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "price",
        "label": "Price",
        "placeholder": "Please enter Price.",
        "type": "number",
        "validationType": "number",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "primary_source",
        "label": "Primary Source",
        "placeholder": "Please select primary source.",
        "type": "select",
        "validationType": "object",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Primary Source."
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": true,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "Website",
                    "value": "Website"
                },
                {
                    "label": "UpWork",
                    "value": "UpWork"
                },
                {
                    "label": "Twago",
                    "value": "Twago"
                },
                {
                    "label": "Repeat",
                    "value": "Repeat"
                },
                {
                    "label": "LinkedIn",
                    "value": "LinkedIn"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "potential",
        "label": "Potential",
        "placeholder": "Please select potential.",
        "type": "select",
        "validationType": "object",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Potential."
                ]
            }
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "High",
                    "value": "High"
                },
                {
                    "label": "Medium",
                    "value": "Medium"
                },
                {
                    "label": "Low",
                    "value": "Low"
                },
                {
                    "label": "CantSay",
                    "value": "CantSay"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "job_type",
        "label": "Job Type",
        "placeholder": "Please select job type.",
        "type": "select",
        "validationType": "object",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Job Type."
                ]
            }
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "Fix Time",
                    "value": "Fix Time"
                },
                {
                    "label": "Hourly",
                    "value": "Hourly"
                },
                {
                    "label": "Monthly",
                    "value": "Monthly"
                },
                {
                    "label": "Fix Hours",
                    "value": "Fix Hours"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "job_link",
        "label": "Job Link",
        "placeholder": "Please enter job link.",
        "type": "text",
        "validationType": "string",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "currency",
        "label": "Currency",
        "placeholder": "Please select Currency.",
        "type": "select",
        "validationType": "object",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Currency."
                ]
            }
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "USD",
                    "value": "USD"
                },
                {
                    "label": "INR",
                    "value": "INR"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "price",
        "label": "Price",
        "placeholder": "Please enter Price.",
        "type": "number",
        "validationType": "number",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "budget_price",
        "label": "Budget Price",
        "placeholder": "Please enter Budget Price",
        "type": "text",
        "validationType": "string",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "weightage",
        "label": "Weightage",
        "placeholder": "Please select weightage.",
        "type": "select",
        "validationType": "object",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select Primary Source."
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": true,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "S",
                    "value": "S"
                },
                {
                    "label": "M",
                    "value": "M"
                },
                {
                    "label": "L",
                    "value": "L"
                },
                {
                    "label": "XL",
                    "value": "XL"
                },
                {
                    "label": "XXL",
                    "value": "XXL"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "observer",
        "label": "Observer",
        "placeholder": "Please select Observer.",
        "type": "select",
        "validationType": "object",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "TEST",
                    "value": "TEST"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "fr_date",
        "label": "FR Date",
        "placeholder": "Please enter FR Date",
        "type": "date",
        "validationType": "string",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "lr_date",
        "label": "LR Date",
        "placeholder": "Please enter LR Date",
        "type": "date",
        "validationType": "string",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "lf_date",
        "label": "LF Date",
        "placeholder": "Please enter LF Date",
        "type": "date",
        "validationType": "string",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "skill",
        "label": "Skill",
        "placeholder": "Please select skill",
        "type": "select",
        "validationType": "object",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "PHP",
                    "value": "php"
                },
                {
                    "label": "test",
                    "value": "test"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "technology",
        "label": "Technology",
        "placeholder": "Please select Technology",
        "type": "select",
        "validationType": "object",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "label": "PHP",
                    "value": "PHP"
                },
                {
                    "label": "Wordpress",
                    "value": "Wordpress"
                },
                {
                    "label": "ASP.NET",
                    "value": "ASP.NET"
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
            "wrapper": "col-md-6",
            "label": "",
            "field": "",
            "error": ""
        }
    }, {
        "isEditable": true,
        "name": "description",
        "label": "Description",
        "placeholder": "Please enter description.",
        "type": "ckEditor",
        "validationType": "string",
        "sectionName": "Opportunity",
        "sectionHeading": "Opportunity",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please enter description."
                ]
            }
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
    }
];

/* Customers */

export const customerData = [
    {
        id: 1,
        name: 'A Iyer, Alpha Direct Insurance Company',
        tag: 'demop',
        phonenumber: '0000000000',
        email: 'test@narola.email',
        mobile: '9966857412',
        contactowner: 'Jhon deo',
        company: 'AGolden',
        websiteurl: 'https://www.alphadirect.africa/',
        source: 'upwork',
        nature: 'Angrey'
    },
    {
        id: 2,
        name: 'A Iyer, Alpha Direct Insurance Company',
        tag: '',
        phonenumber: '0000000000',
        email: 'test1@narola.email',
        mobile: '9966857413',
        contactowner: 'Jhon deo',
        company: 'TNY',
        websiteurl: 'https://naboerne.com/',
        source: 'Freelancer',
        nature: 'Choosy'
    },
];

export const customerForm = [
    {
        "isEditable": true,
        "name": "photo",
        "label": "Photo",
        "placeholder": "Please select file",
        "type": "file",
        "validationType": "array",
        "sectionName": "customers",
        "sectionHeading": "customers",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [],
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
            "filePreview": true,
            "imageDisplayType": {
                "value": "round",
                "label": "Rounded"
            },
            "maxSize": 250000,
            "maxFiles": 0,
            "accept": "image/jpg"
        },
        "classes": {
            "wrapper": "col-md-12",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "customer_id",
        "label": "ID",
        "placeholder": "enter Customer Id.",
        "type": "text",
        "validationType": "string",
        "sectionName": "customers",
        "sectionHeading": "customers",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please enter ID."
                ]
            }
        ],
        "classes": {
            "wrapper": "col-md-4",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "contact_owner_id",
        "label": "Contact Owner",
        "placeholder": "--select Option--",
        "type": "select",
        "validationType": "object",
        "sectionName": "customers",
        "sectionHeading": "customers",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please select primary source."
                ]
            }
        ],
        "selectPluginConfig": {
            "isClearable": false,
            "isSearchable": true,
            "isMulti": false,
            "isRtl": false
        },
        "dependency": {
            "isDependentField": false,
            "dependentOn": []
        },
        "fillOptions": {
            "byApi": false,
            "apiConfig": {
                "url": "",
                "method": "",
                "body": "{}",
                "labelField": "",
                "valueField": ""
            },
            "options": [
                {
                    "value": "1",
                    "label": "UpWork"
                },
                {
                    "value": "2",
                    "label": "Freelancer"
                },
                {
                    "value": "3",
                    "label": "Guru"
                }
            ]
        },
        "classes": {
            "wrapper": "col-md-5",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "contact_name",
        "label": "Contact Name",
        "placeholder": "enter Contact Name.",
        "type": "text",
        "validationType": "string",
        "sectionName": "customers",
        "sectionHeading": "customers",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please enter Contact Name."
                ]
            }
        ],
        "classes": {
            "wrapper": "col-md-9",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "customer_email",
        "label": "Email",
        "placeholder": "enter Email.",
        "type": "text",
        "validationType": "string",
        "sectionName": "customers",
        "sectionHeading": "customers",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please enter Email."
                ]
            }
        ],
        "classes": {
            "wrapper": "col-md-4",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "message",
        "label": "Message",
        "placeholder": "enter Message.",
        "type": "text",
        "validationType": "string",
        "sectionName": "customers",
        "sectionHeading": "customers",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please enter Message."
                ]
            }
        ],
        "classes": {
            "wrapper": "col-md-5",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "customer_phone",
        "label": "Phone",
        "placeholder": "enter Phone Number",
        "type": "text",
        "validationType": "string",
        "sectionName": "customers",
        "sectionHeading": "customers",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please enter Phone Number."
                ]
            }
        ],
        "classes": {
            "wrapper": "col-md-4",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "customer_mobile",
        "label": "Mobile",
        "placeholder": "enter Mobile",
        "type": "text",
        "validationType": "string",
        "sectionName": "customers",
        "sectionHeading": "customers",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please enter Mobile."
                ]
            }
        ],
        "classes": {
            "wrapper": "col-md-5",
            "label": "",
            "field": "",
            "error": ""
        }
    },
    {
        "isEditable": true,
        "name": "skype",
        "label": "Skype",
        "placeholder": "enter Skype.",
        "type": "text",
        "validationType": "string",
        "sectionName": "customers",
        "sectionHeading": "customers",
        "rows": 0,
        "disabledField": false,
        "disabled": false,
        "validations": [
            {
                "type": "required",
                "params": [
                    "Please enter Skype."
                ]
            }
        ],
        "classes": {
            "wrapper": "col-md-9",
            "label": "",
            "field": "",
            "error": ""
        }
    },
];

/* Holiday */
export const HolidayList = [
    { id: 1, name: 'Item 1', "holiday_date": "2024-11-09T18:30:00.000Z", "working_hours": "0" },
    { id: 2, name: 'Item 2', "holiday_date": "2024-11-10T18:30:00.000Z", "working_hours": "4" },
    { id: 3, name: 'Item 3', "holiday_date": "2024-11-11T18:30:00.000Z", "working_hours": "8" },
];