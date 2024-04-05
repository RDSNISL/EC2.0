import React, { useEffect, useCallback, useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import { PageConfig } from 'constant/PageConfig'
import axios from 'axios';
import DataTable from "react-data-table-component";
import HolidayView from './View'
import PageHeaderSubHeaderConfig from 'components/Common/PageHeaderSubHeaderConfig';
import ActionButtons from 'components/FormControls/ActionButtons';
import { QUICK_LEADS_STATUS, SECTIONS } from 'constant/Constant';
import ManageColumn from 'components/Common/ManageColumn';
import DialogBoxForm from 'components/FormBuilder/DialogBoxForm';

import KanbanView from 'components/KanbanView';
import Breadcrumb from 'components/Common/Breadcrumb';

const pageSlug = 'holiday';

const Holiday = () => {
    const [pageConfigFilled, setPageConfigFilled] = useState(false);
    const [pageConfig, setPageConfig] = useState(null);
    const [filterObj, setFilterObj] = useState(null);

    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isModelOpen1, setIsModelOpen1] = useState(false);
    const [isModelOpen2, setIsModelOpen2] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    const [isholidaydata, setIsholidaydata] = useState(false);

    const [quickLeadList, setQuickLeads] = useState([]);
    const [dataViewType, setDataViewType] = useState(1);

    const [filterColumns, setFilterColumns] = useState([]);
    const [columnOptions, setColumnOption] = useState([]);

    const [kanbanData, setKanbanViewData] = useState(null);
    const [kanbanColumns, setKanbanColumns] = useState(null);

    const [data, setData] = useState([]);
    const [isfetch_data, setFetchData] = useState([]);

    var HolidayList;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/holidaies');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Set up a timer to fetch data periodically (e.g., every 5 seconds)
        const intervalId = setInterval(fetchData, 5000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    HolidayList = data;

    const holida_form = [
        {
            "isEditable": true,
            "name": "holiday_name",
            "label": "Holiday Name",
            "placeholder": "Please select Holiday Name.",
            "type": "text",
            "field_name": "name",
            "validationType": "string",
            "sectionName": "Holiday",
            "sectionHeading": "Holiday",
            "rows": 0,
            "disabledField": false,
            "disabled": false,
            "validations": [
                {
                    "type": "required",
                    "params": [
                        "Please enter Holiday Name."
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
            "name": "holiday_date",
            "label": "Holiday Date",
            "placeholder": "Please enter Holiday Date",
            "type": "date",
            "field_name": "holiday_date",
            "validationType": "string",
            "sectionName": "Holiday",
            "sectionHeading": "Holiday",
            "rows": 0,
            "disabledField": false,
            "disabled": false,
            "validations": [
                {
                    "type": "required",
                    "params": [
                        "Please enter Holiday Date."
                    ]
                }
            ],
            "selectPluginConfig": {
                "isClearable": false,
                "isSearchable": false,
                "isMulti": false,
                "isRtl": false
            },
            "classes": {
                "wrapper": "col-md-9",
                "label": "",
                "field": "",
                "error": ""
            }
        },
        {
            "isEditable": true,
            "name": "working_hours",
            "label": "Working Hours(Hours)",
            "placeholder": "Please enter Working Hours",
            "type": "number",
            "field_name": "working_hours",
            "validationType": "string",
            "sectionName": "Holiday",
            "sectionHeading": "Holiday",
            "rows": 0,
            "disabledField": false,
            "disabled": false,
            "validations": [
                {
                    "type": "required",
                    "params": [
                        "Please enter Working Hours."
                    ]
                }
            ],
            "selectPluginConfig": {
                "isClearable": false,
                "isSearchable": false,
                "isMulti": false,
                "isRtl": false
            },
            "classes": {
                "wrapper": "col-md-9",
                "label": "",
                "field": "",
                "error": ""
            }
        },
    ];

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
        { path: "/", heading: "Master" },
        { path: "/holidays", heading: "Holiday" }
    ]

    /*------------------------*/

    useEffect(() => {
        setQuickLeads(HolidayList)
    }, [])

    useEffect(() => {

        const data = {};
        const kanbanCols = [];


        QUICK_LEADS_STATUS?.map((status) => {
            /** Filter records by leadStatus */
            data[status.name] = HolidayList?.filter(record => record?.leadStatus === status?.value);

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
        //console.log("DM Manage Column =>")
        setIsModelOpen(!isModelOpen);
    }

    const sortByAvailability = async (name, val) => {
        //console.log("DM Sort By =>", val.value)
        const order = val.value;
        const response = await axios.get(`http://localhost:3001/holidaies_order/${order}`);
        setData(response.data);
    }

    const handlefilter = (name, val) => {

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
        // console.log("Page refresh =>")
        Windows.location.reload();

    }
    const handleAdd = () => {
        setIsModelOpen1(!isModelOpen1);
        setIsUpdate('add');
    }

    const handleRecordViewType = (name, val) => {
        // console.log("view Type =>", val)
        setDataViewType(val);
    }

    const handleAddData = async (data) => {
        const name = data.holiday_name;
        const holiday_date = data.holiday_date;
        const working_hours = data.working_hours;
        try {
            const response = await axios.post('http://localhost:3001/holidaies', { name, holiday_date, working_hours });
            setIsModelOpen1(!isModelOpen1);
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    const ViewHandler = () => {
        setIsModelOpen2(!isModelOpen2);
    }

    const view_details_Handler = async (payload) => {
        const holiday_id = payload.id;
        try {
            if (holiday_id) {
                const response = await axios.get(`http://localhost:3001/holidaies/${holiday_id}`);
                setIsModelOpen2(!isModelOpen2);
                setIsholidaydata(response);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const editHandler = async (payload) => {
        const holiday_id = payload.id;

        if (holiday_id) {
            const response = await axios.get(`http://localhost:3001/holidaies/${holiday_id}`);
            if (response.data) {
                // console.log(response.data);
                setIsModelOpen1(!isModelOpen1);
                setIsUpdate('edit');
                setFetchData(response.data);
            }
        }
    }

    const edit_holida_form = [
        {
            "isEditable": true,
            "name": "id",
            "label": "Holiday Id",
            "value": isfetch_data.id,
            "placeholder": "",
            "type": "text",
            "field_name": "id",
            "validationType": "string",
            "sectionName": "Holiday",
            "sectionHeading": "Holiday",
            "rows": 0,
            "disabledField": false,
            "disabled": false,
            "validations": [
                {
                    "type": "required",
                    "params": [
                        "Please enter Holiday Id."
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
            "name": "holiday_name",
            "label": "Holiday Name",
            "placeholder": "Please select Holiday Name.",
            "value": isfetch_data.name,
            "type": "text",
            "field_name": "name",
            "validationType": "string",
            "sectionName": "Holiday",
            "sectionHeading": "Holiday",
            "rows": 0,
            "disabledField": false,
            "disabled": false,
            "validations": [
                {
                    "type": "required",
                    "params": [
                        "Please enter Holiday Name."
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
            "name": "holiday_date",
            "label": "Holiday Date",
            "placeholder": "Please enter Holiday Date",
            "value": isfetch_data.holiday_date,
            "type": "date",
            "field_name": "holiday_date",
            "validationType": "string",
            "sectionName": "Holiday",
            "sectionHeading": "Holiday",
            "rows": 0,
            "disabledField": false,
            "disabled": false,
            "validations": [
                {
                    "type": "required",
                    "params": [
                        "Please enter Holiday Date."
                    ]
                }
            ],
            "selectPluginConfig": {
                "isClearable": false,
                "isSearchable": false,
                "isMulti": false,
                "isRtl": false
            },
            "classes": {
                "wrapper": "col-md-9",
                "label": "",
                "field": "",
                "error": ""
            }
        },
        {
            "isEditable": true,
            "name": "working_hours",
            "label": "Working Hours(Hours)",
            "placeholder": "Please enter Working Hours",
            "value": isfetch_data.working_hours,
            "type": "number",
            "field_name": "working_hours",
            "validationType": "string",
            "sectionName": "Holiday",
            "sectionHeading": "Holiday",
            "rows": 0,
            "disabledField": false,
            "disabled": false,
            "validations": [
                {
                    "type": "required",
                    "params": [
                        "Please enter Working Hours."
                    ]
                }
            ],
            "selectPluginConfig": {
                "isClearable": false,
                "isSearchable": false,
                "isMulti": false,
                "isRtl": false
            },
            "classes": {
                "wrapper": "col-md-9",
                "label": "",
                "field": "",
                "error": ""
            }
        },
    ];

    const handleEditData = async (data) => {
        const id = data.id;
        const name = data.holiday_name;
        const holiday_date = data.holiday_date;
        const working_hours = data.working_hours;
        try {
            const response = await axios.put(`http://localhost:3001/holidaies/${id}`, { name, holiday_date, working_hours });
            setIsModelOpen1(!isModelOpen1);
            setData('');
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    const deleteHandler = async (payload) => {
        const holiday_id = payload.id;
        try {
            if (holiday_id) {
                const response = await axios.delete(`http://localhost:3001/holidaies/${holiday_id}`);
                alert("Record Deleted.");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
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
            edit: editHandler,
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
            id: 'name',
            name: 'Holiday Name',
            cell: (row) => row?.name,
            isVisible: true,
        },
        {
            id: 'holiday_date',
            name: 'Date',
            cell: (row) => {
                return (<div>{row?.holiday_date}</div>);
            },
            isVisible: true,
        },
        {
            id: 'working_hours',
            name: 'Hours',
            cell: (row) => row?.working_hours,
            isVisible: true,
        },
        {
            id: "actions",
            name: "Actions",
            isVisible: true,
            cell: (row) => {
                return (
                    <ActionButtons
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
                        popUpId={row?.id}
                    />
                );
            },
        }
    ];

    return (
        <div className="page-content">
            <Breadcrumb title="Holiday" breadcrumbItems={breadcrumbItems} />

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
                        <DataTable
                            columns={filterColumns}
                            data={HolidayList}
                            pagination
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

            {isModelOpen1 && isUpdate !== 'edit' &&
                <DialogBoxForm
                    isModelOpen={isModelOpen1}
                    title='Add Holiday'
                    modelSize='lg'
                    allColumns={columnOptions}
                    handleModelToggle={handleAdd}
                    getFilteredValues={getFilteredValues}
                    fields_list={holida_form}
                    form_action={handleAddData}
                />
            }


            {isModelOpen1 && isUpdate === 'edit' &&
                <DialogBoxForm
                    isModelOpen={isModelOpen1}
                    title='Edit Holiday'
                    modelSize='lg'
                    allColumns={columnOptions}
                    handleModelToggle={editHandler}
                    getFilteredValues={getFilteredValues}
                    fields_list={edit_holida_form}
                    form_action={handleEditData}

                />
            }

            {isModelOpen2 &&
                <HolidayView
                    isModelOpen={isModelOpen2}
                    title='View Holiday'
                    modelSize='xl'
                    handleModelToggle={ViewHandler}
                    details={isholidaydata}
                />
            }

        </div>
    )
}

export default Holiday