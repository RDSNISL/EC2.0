import React, { useEffect, useCallback, useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import { PageConfig } from 'constant/PageConfig'

import Table from 'components/Table/Table'
import PageHeaderSubHeaderConfig from 'components/Common/PageHeaderSubHeaderConfig';
import ActionButtons from 'components/FormControls/ActionButtons';
import { QUICK_LEADS_STATUS, SECTIONS } from 'constant/Constant';
import ManageColumn from 'components/Common/ManageColumn';
import KanbanView from 'components/KanbanView';
import PopupForm from 'components/FormBuilder/PopupForm';
import { customerData, customerForm } from 'constant/MockData';
import Breadcrumb from 'components/Common/Breadcrumb';
import avatar2 from "../../../assets/images/users/avatar-2.jpg"

const pageSlug = 'customers';

const Customers = () => {
    const [pageConfigFilled, setPageConfigFilled] = useState(false);
    const [pageConfig, setPageConfig] = useState(null);
    const [filterObj, setFilterObj] = useState(null);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isModelOpen1, setIsModelOpen1] = useState(false);

    const [quickLeadList, setQuickLeads] = useState([]);
    const [dataViewType, setDataViewType] = useState(1);

    const [filterColumns, setFilterColumns] = useState([]);
    const [columnOptions, setColumnOption] = useState([]);

    const [kanbanData, setKanbanViewData] = useState(null);
    const [kanbanColumns, setKanbanColumns] = useState(null);

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
        { path: "/customers", heading: "Customer" }
    ]

    /*------------------------*/

    useEffect(() => {
        setQuickLeads(customerData)
    }, [])

    useEffect(() => {

        const data = {};
        const kanbanCols = [];


        QUICK_LEADS_STATUS?.map((status) => {
            /** Filter records by leadStatus */
            data[status.name] = customerData?.filter(record => record?.leadStatus === status?.value);

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
        console.log("Add new .... =>");
        AddHandler();
    }
    const AddHandler = () => {
        setIsModelOpen1(!isModelOpen1);
    }

    const handleRecordViewType = (name, val) => {
        console.log("view Type =>", val)
        setDataViewType(val);
    }

    const convertHandler = () => {
        alert('Convert Soon')
    }
    const editHandler = () => {
        alert('Edit Soon')
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
            convert: convertHandler,
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


    const tableStyle = {
        width: '100%', // Set the width of the table
    };
    const columns = [
        {
            id: 'customerimg',
            name: '#',
            cell: (row) => {
                return (<div>
                    <img src={avatar2} alt="" className="avatar-md mx-auto rounded-circle" />
                </div>);
            },
            isVisible: true,
        },
        {
            id: 'customername',
            name: 'Customer Name',
            cell: (row) => row?.name,
            isVisible: true,
        },
        {
            id: 'tag',
            name: '',
            cell: (row) => row?.tag,
            isVisible: true,
        },
        {
            id: 'conactdetails',
            name: 'Phone | Email | Mobile',
            //cell: (row) => row?.phonenumber + " | " + row?.email + " | " + row?.mobile,
            cell: (row) => {
                return (<div><a title={row?.phonenumber}><i className="mdi mdi-cellphone" style={{ fontSize: '1.2rem' }}></i></a> <span style={{ fontSize: '1.2rem' }}>|</span> <a title={row?.email}><i className="mdi mdi-email" style={{ fontSize: '1.2rem' }} ></i></a> <span style={{ fontSize: '1.2rem' }}>|</span> <a title={row?.mobile}><i className="mdi mdi-phone" style={{ fontSize: '1.2rem' }}></i></a></div >);
            },
            isVisible: true,
        },
        {
            id: 'contactowner',
            name: 'Contact Owner',
            cell: (row) => row?.contactowner,
            isVisible: true,
        },
        {
            id: 'company',
            name: 'Company',
            cell: (row) => row?.company,
            isVisible: true,
        },
        {
            id: 'websiteurl',
            name: 'Website Url',
            cell: (row) => row?.websiteurl,
            isVisible: true,
        },
        {
            id: 'source',
            name: 'Source',
            cell: (row) => row?.source,
            isVisible: true,
        },
        {
            id: 'nature',
            name: 'Nature',
            cell: (row) => row?.nature,
            isVisible: true,
        },
        {
            id: "actions",
            name: "Actions",
            isVisible: true,
            cell: (row) => {
                return (
                    <ActionButtons
                        edit={{
                            handleClick: () => handleActionButtonClick(row, 'edit'),
                        }}
                        delete={{
                            handleClick: () => handleActionButtonClick(row, 'delete'),
                        }}
                        popUpId={row?.id}
                    />
                );
            },
        }

    ];

    return (
        <div className="page-content">
            <Breadcrumb title="Customer" breadcrumbItems={breadcrumbItems} />

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
                        <Table style={tableStyle}
                            columns={filterColumns}
                            tableDATA={customerData}
                            isRefresh={false}
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
                            // columns={[
                            //     {
                            //         columnName: 'quickLeads',
                            //         setting: { header: 'Quick Leads', backgroundColor: '#daf5e7', borderTopColor: '#297a50' }
                            //     },
                            //     {
                            //         columnName: 'opportunity',
                            //         setting: { header: 'Opportunity', backgroundColor: '#ffe3de', borderTopColor: '#994437' }
                            //     }
                            // ]}
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
                    form_section={customerForm}
                    title='Add Customer'
                    modelSize='lg'
                    allColumns={columnOptions}
                    handleModelToggle={AddHandler}
                    getFilteredValues={getFilteredValues}
                />
            }
        </div>
    )
}

export default Customers