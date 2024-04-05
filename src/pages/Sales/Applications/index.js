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
import { quickLeadsData, applicationForm } from 'constant/MockData';
import Breadcrumb from 'components/Common/Breadcrumb';

const pageSlug = 'lead';

const Applications = () => {

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
        { path: "/applications", heading: "Applications" }
    ]

    /*------------------------*/

    useEffect(() => {
        setQuickLeads(quickLeadsData)
    }, [])

    useEffect(() => {

        const data = {};
        const kanbanCols = [];


        QUICK_LEADS_STATUS?.map((status) => {
            /** Filter records by leadStatus */
            data[status.name] = quickLeadsData?.filter(record => record?.leadStatus === status?.value);

            /** Note : do calculation here in case header , subheader want dynamic value */

            /**Prepare Kanban boards columns */
            kanbanCols.push({
                columnName: status?.name,
                setting: { header: status?.text, backgroundColor: status?.backgroundColor, borderTopColor: status?.borderTopColor }
            })
        })

        setKanbanColumns(kanbanCols)


        // const data = {
        //     quickLeads: quickLeadsData,
        //     opportunity: [],
        // }

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
        AddHandler();
    }
    const AddHandler = () => {
        setIsModelOpen1(!isModelOpen1);
    }
    const handleRecordViewType = (name, val) => {
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



    const columns = [
        {
            id: 'leadId',
            name: 'Application ID',
            cell: (row) => row?.id,
            isVisible: true,
        },
        {
            id: 'leadName',
            name: 'Project Name',
            cell: (row) => row?.name,
            isVisible: true,
        },
        {
            id: 'primarySource',
            name: 'Primary Source',
            cell: (row) => row?.primarySource,
            isVisible: true,
        },
        // {
        //     id: 'jobLink',
        //     name: 'Job Link',
        //     cell: (row) => row?.jobLink,
        //     isVisible: true,
        // },
        {
            id: 'jobType',
            name: 'Job Type',
            cell: (row) => row?.jobType,
            isVisible: true,
        },
        {
            id: 'price',
            name: 'Price/Currency',
            cell: (row) => row?.price,
            isVisible: true,
        },
        {
            id: 'bidDate',
            name: 'Bid Date',
            cell: (row) => row?.bidDate,
            isVisible: true,
        },
        {
            id: 'applicationOwner',
            name: 'Application Owner',
            cell: (row) => row?.applicationOwner,
            isVisible: true,
        },
        {
            id: 'technology',
            name: 'Technology',
            cell: (row) => row?.technology,
            isVisible: true,
        },
        {
            id: 'weightage',
            name: 'Weightage',
            cell: (row) => row?.weightage,
            isVisible: true,
        },
        {
            id: 'details',
            name: 'Details',
            cell: (row) => row?.detail,
            isVisible: true,
        },
        {
            id: 'leadDate',
            name: 'Lead date',
            cell: (row) => row?.leadDate,
            isVisible: true,
        },
        {
            id: 'skill',
            name: 'Skill',
            cell: (row) => row?.skill,
            isVisible: true,
        },
        {
            id: "actions",
            name: "Actions",
            isVisible: true,
            cell: (row) => {
                return (
                    <ActionButtons
                        convert={{
                            handleClick: () => handleActionButtonClick(row, 'convert'),
                            tooltip: 'Convert to Inquiry'
                        }}
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
            <Breadcrumb title="Applications" breadcrumbItems={breadcrumbItems} />

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
                            tableDATA={quickLeadsData}
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
                    form_section={applicationForm}
                    title='Add Application'
                    modelSize='lg'
                    allColumns={columnOptions}
                    handleModelToggle={AddHandler}
                    getFilteredValues={getFilteredValues}
                />
            }
        </div>
    )
}

export default Applications