import React, { useEffect, useCallback, useState } from 'react';
import { Button, Card, CardBody } from 'reactstrap';
import { PageConfig } from 'constant/PageConfig';
import Table from 'components/Table/Table';
import Step1 from './View';
import PageHeaderSubHeaderConfig from 'components/Common/PageHeaderSubHeaderConfig';
import ActionButtons from 'components/FormControls/ActionButtons';
import { QUICK_LEADS_STATUS, SECTIONS } from 'constant/Constant';
import ManageColumn from 'components/Common/ManageColumn';
import PopupForm from 'components/FormBuilder/PopupForm';
import KanbanView from 'components/KanbanView';
import { InquiryData, opportunitiesDeatil, opportunitiesForm } from 'constant/MockData';
import Breadcrumb from 'components/Common/Breadcrumb';
// import Drawer from 'components/Common/Drawer';



const pageSlug = 'opportunities';

const Inquiries = () => {
    const [pageConfigFilled, setPageConfigFilled] = useState(false);
    const [pageConfig, setPageConfig] = useState(null);
    const [filterObj, setFilterObj] = useState(null);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isModelOpen1, setIsModelOpen1] = useState(false);
    const [isModelOpen2, setIsModelOpen2] = useState(false);

    const [quickLeadList, setQuickLeads] = useState([]);
    const [dataViewType, setDataViewType] = useState(1);

    const [filterColumns, setFilterColumns] = useState([]);
    const [columnOptions, setColumnOption] = useState([]);

    const [kanbanData, setKanbanViewData] = useState(null);
    const [kanbanColumns, setKanbanColumns] = useState(null);
    const [OpportunityView, setOpportunityView] = useState(null);
    const [showDrawer, setShowDrawer] = useState(false);
    const [OpportunityId, setOpportunityId] = useState(null);

    const closeDrawer = () => {
        console.log("CloseDrawer");
        setShowDrawer(false);
    };

    const openDrawer = (id) => {
        setShowDrawer(!showDrawer);
        setOpportunityId(id);
    };

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

    const breadcrumbItems = [
        { path: "/dashboard", heading: "Home" },
        { path: "/applications", heading: "Sales" },
        { path: "/inquiries", heading: "Inquiry" }
    ]

    /*------------------------*/

    useEffect(() => {
        setQuickLeads(InquiryData)
    }, [])

    useEffect(() => {

        const data = {};
        const kanbanCols = [];


        QUICK_LEADS_STATUS?.map((status) => {
            /** Filter records by leadStatus */
            data[status.name] = InquiryData?.filter(record => record?.leadStatus === status?.value);

            /** Note : do calculation here in case header , subheader want dynamic value */

            /**Prepare Kanban boards columns */
            kanbanCols.push({
                columnName: status?.name,
                setting: { header: status?.text, backgroundColor: status?.backgroundColor, borderTopColor: status?.borderTopColor }
            })
        })

        setKanbanColumns(kanbanCols)
        setKanbanViewData(data)
    }, [])

    useEffect(() => {
        const columnFilter = [...columns];
        setColumnOption([...columns]);
        setFilterColumns(columnFilter.filter(o => o.isVisible && o));
    }, [quickLeadList])

    const getFilteredValues = (cols) => {
        setColumnOption(cols);
        setFilterColumns(cols.filter(o => o.isVisible && o));
    }

    /*------------------------*/

    const setFilterValues = (field) => {
        setFilterObj(prev => {
            return {
                ...prev,
                ...field
            }
        })
    }

    const optimizedFn = useCallback(debounce((name, val) => setFilterValues({ [name]: val })), []);

    const handleSearchBox = (name, val) => {
        optimizedFn(name, val)
    }

    const handleManageColumn = () => {
        console.log("DM Manage Column =>")
        setIsModelOpen(!isModelOpen);
    }

    const sortByAvailability = (name, val) => {
        console.log("DM Sort By =>", val)
    }

    const handlefilter = (name, val) => {
        console.log('name - val', name, val)

        setFilterObj((prev) => ({
            ...prev,
            [name]: val?.value
        }))

        if (!val) {
            let headerConfigData = {};
            SECTIONS?.forEach((key, i) => {
                headerConfigData[key] = PageConfig[pageSlug]?.header?.headerComponents?.[key]?.map((headerComponent) => {
                    if (headerComponent?.type === 'autoComplete') {
                        if (headerComponent?.dependency?.dependentOn?.includes(name)) {
                            setFilterObj((prev) => ({ ...prev, [headerComponent.name]: null }));
                        }
                        return headerComponent
                    } else {
                        return headerComponent
                    }
                })
            })
            setPageConfig({
                ...PageConfig[pageSlug],
                header: { ...PageConfig[pageSlug]?.header, headerComponents: headerConfigData },
                // subHeader: { ...PageConfig[pageSlug]?.subHeader, subHeaderComponents: subHeaderConfigData }
            });
        }
    }

    const handleRefresh = () => {
        console.log("Page refresh =>")

    }
    const handleAdd = () => {
        console.log("Add new .... =>")
        AddHandler();
    }
    const handleView = () => {
        ViewHandler();
    }
    const handleRecordViewType = (name, val) => {
        console.log("view Type =>", val)
        setDataViewType(val);
    }

    const AddHandler = () => {
        setIsModelOpen1(!isModelOpen1);
    }
    const ViewHandler = () => {
        setIsModelOpen2(!isModelOpen2);
    }
    const convertHandler = () => {
        alert('Convert Soon')
    }
    const view_details_Handler = () => {
        //alert('View Soon')
        setIsModelOpen2(!isModelOpen2);
    }
    const editHandler = () => {
        // alert('Edit Soon')
        setIsModelOpen1(!isModelOpen1);
    }

    const deleteHandler = () => {
        alert('Delete Soon')
    }

    const handleModelToggle = () => {
        setIsModelOpen(!isModelOpen);
    };

    const reOrderElement = () => {
        /** Note : This method will execute from kanban board */
        console.log('Element - Re-Odered')
    }

    const moveElement = () => {
        /** Note : This method will execute from kanban board */
        console.log('Element - Moves')
    }

    const handleActionButtonClick = (payload, actionType) => {
        const actionMapper = {
            view: view_details_Handler,
            edit: editHandler,
            delete: deleteHandler
        };

        if (actionMapper[actionType]) {
            actionMapper[actionType](payload);
        }
    };

    const commonCallBack = (name, val) => {
        const actionMapper = {
            country_id: handlefilter,
            state_id: handlefilter,
            city_id: handlefilter,
            refresh: handleRefresh,
            search: handleSearchBox,
            add: handleAdd,

            manageColumn: handleManageColumn,
            sortByAvailability: sortByAvailability,
            search2: handleSearchBox,
            viewType: handleRecordViewType
        }

        if (actionMapper[name]) {
            actionMapper[name](name, val)
        }
    }

    useEffect(() => {
        let headerConfigData = {};
        let subHeaderConfigData = {};
        SECTIONS?.forEach((key, i) => {
            headerConfigData[key] = PageConfig[pageSlug]?.header?.headerComponents?.[key]?.map((headerComponent) => {
                if (headerComponent?.type === 'autoComplete') {
                    setFilterObj((prev) => ({ ...prev, [headerComponent?.name]: null }));
                    // return { ...headerComponent, options: dropdownOptions[headerComponent.optionKey] }
                    return headerComponent
                } else {
                    return headerComponent
                }
            })
        })

        SECTIONS?.forEach((key, i) => {
            subHeaderConfigData[key] = PageConfig[pageSlug]?.subHeader?.subHeaderComponents?.[key]?.map((subHeaderComponent) => {
                if (subHeaderComponent?.type === 'autoComplete') {
                    setFilterObj((prev) => ({ ...prev, [subHeaderComponent?.name]: null }));
                    return subHeaderComponent
                } else {
                    return subHeaderComponent
                }
            })
        })

        setPageConfig({
            ...PageConfig[pageSlug],
            header: { ...PageConfig[pageSlug]?.header, headerComponents: headerConfigData },
            subHeader: { ...PageConfig[pageSlug]?.subHeader, subHeaderComponents: subHeaderConfigData }
        });

        setPageConfigFilled(true);

    }, [])

    const columns = [
        {
            id: 'inquiries',
            name: 'Inquiry',
            cell: (row) => {
                return (<div><span><a href='#'
                    onClick={() => { openDrawer(row?.prod_name); }} style={{ fontWeight: 'bold' }}>{row?.prod_id}</a></span><div><span className="badge opportunities-soft-primary font-size-12 mt-1"> {row?.tech}</span><span className="badge opportunities-soft-warning font-size-12 ms-2 mt-1"> {row?.proj_size}</span></div></div >);
            },
            isVisible: true,
        },
        {
            id: 'project_name',
            name: 'Project Name',
            cell: (row) => row?.prod_name,
            isVisible: true,
        },
        {
            id: 'client_name',
            name: 'Client Name',
            //cell: (row) => row?.client_name,
            cell: (row) => {
                return (<div><span><a style={{ fontWeight: 'bold' }} href='#'>{row?.client_name}</a></span></div>);
            },
            isVisible: true,
        },
        {
            id: 'price',
            name: 'Price',
            cell: (row) => row?.price,
            isVisible: true,
        },
        {
            id: 'primarysource',
            name: 'Primary Source',
            cell: (row) => row?.primary_source,
            isVisible: true,
        },
        {
            id: 'Date',
            name: 'Date',
            cell: (row) => {
                return (<div style={{ whiteSpace: 'pre-line' }}>{row?.dates}</div>);
            },
            isVisible: true,
        },
        {
            id: 'meeting_with',
            name: 'Meeting With',
            cell: (row) => row?.meeting_with,
            isVisible: true,
        },
        {
            id: 'assign_to',
            name: 'Assign To',
            cell: (row) => {
                return (<div style={{ whiteSpace: 'pre-line' }}>{row?.assign_to}</div>);
            },
            isVisible: true,
        },
        {
            id: 'details',
            name: 'Details',
            cell: (row) => row?.details,
            isVisible: true,
        },
        {
            id: 'proposedhours',
            name: 'Proposed Hours',
            cell: (row) => row?.Estimated_hrs,
            isVisible: true,
        },
        {
            id: 'rejectreason',
            name: 'Reject Reason',
            cell: (row) => row?.rejectreason,
            isVisible: true,
        },
        // {
        //     id: 'opportunities_flag',
        //     name: '',
        //     cell: (row) => {
        //         return (row?.opportunities_flag ? <div><i className={row?.opportunities_icon} style={{ fontSize: '1.5rem', paddingRight: '1.5px' }}></i><span className="badge opportunities-soft-danger font-size-12 mt-1"> {row?.opportunities_flag}</span></div> : "");
        //     },
        //     isVisible: true,
        // },
        // {
        //     id: 'phone',
        //     name: 'Phone | Email | Mobile',
        //     cell: (row) => {
        //         return (<div><a title={row?.phone}><i className="mdi mdi-cellphone" style={{ fontSize: '1.2rem' }}></i></a> <span style={{ fontSize: '1.2rem' }}>|</span> <a title={row?.email}><i className="mdi mdi-email" style={{ fontSize: '1.2rem' }} ></i></a> <span style={{ fontSize: '1.2rem' }}>|</span> <a title={row?.mobile}><i className="mdi mdi-phone" style={{ fontSize: '1.2rem' }}></i></a></div >);
        //     },
        //     isVisible: true,
        // },

        // {
        //     id: 'primary_source',
        //     name: 'Primary Source',
        //     cell: (row) => row?.primary_source,
        //     isVisible: false,
        // },
        // {
        //     id: 'estimated_hours',
        //     name: 'Estimated Hours',
        //     cell: (row) => row?.Estimated_hrs,
        //     isVisible: true,
        // },
        {
            id: "actions",
            name: "Actions",
            isVisible: true,
            cell: (row) => {
                return (
                    <ActionButtons
                        convert={{
                            handleClick: () => handleActionButtonClick(row, 'convert'),
                            tooltip: 'Convert to Project'
                        }}
                        view={{
                            handleClick: () => handleActionButtonClick(row, 'view'),
                            tooltip: 'View All Details'
                        }}
                        edit={{
                            handleClick: () => handleActionButtonClick(row, 'edit'),
                        }}
                        delete={{
                            handleClick: () => handleActionButtonClick(row, 'delete'),
                        }}
                        popUpId={row?.prod_id}
                    />
                );
            },
        }

    ];
    // <Drawer Title="Summary" content={opportunitiesDeatil} show={showDrawer} onClose={closeDrawer} />
    return (
        <div className="page-content">
            <Breadcrumb title="Inquiry" breadcrumbItems={breadcrumbItems} />

            {pageConfigFilled &&
                <PageHeaderSubHeaderConfig
                    {...pageConfig}
                    filterObj={filterObj}
                    commonCallBack={commonCallBack}
                />
            }


            {dataViewType === 1 &&
                <Card>
                    <CardBody className="table-responsive">
                        <Table
                            columns={filterColumns}
                            tableDATA={InquiryData}
                            isRefresh={false}
                        // filter={filterObj}
                        />
                    </CardBody>
                </Card>
            }

            {dataViewType === 2 &&
                <Card className='mt-4'>
                    <CardBody>
                        <KanbanView
                            kanbanData={kanbanData}
                            reOrderElement={reOrderElement}
                            moveElement={moveElement}
                            columns={kanbanColumns}
                        />
                    </CardBody>
                </Card>
            }

            {isModelOpen &&
                <ManageColumn
                    isModelOpen={isModelOpen}
                    title='List View Settings'
                    modelSize='lg'
                    allColumns={columnOptions}
                    handleModelToggle={handleModelToggle}
                    getFilteredValues={getFilteredValues}
                />
            }

            {isModelOpen1 &&
                <PopupForm
                    isModelOpen={isModelOpen1}
                    form_section={opportunitiesForm}
                    title='Add Opportunities'
                    modelSize='lg'
                    allColumns={columnOptions}
                    handleModelToggle={AddHandler}
                    getFilteredValues={getFilteredValues}
                />
            }

            {isModelOpen2 &&
                <Step1
                    isModelOpen={isModelOpen2}
                    title='View Opportunities'
                    modelSize='xl'
                    handleModelToggle={ViewHandler}
                />
            }
        </div>
    )
}

export default Inquiries