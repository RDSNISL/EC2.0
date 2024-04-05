export const PageConfig = {
    'lead': {
        header: {
            isVisible: true,
            headerComponents: {
                left: [
                    {
                        type: 'autoComplete',
                        name: 'country_id', // countryId   // Note :  this name should unique base on this name action will be trigger
                        placeholder: 'Select Country',
                        dependency: {
                            isDependentField: false,
                        },
                        fillOptions: {
                            byApi: true,
                            apiConfig: {
                                url: 'http://192.168.100.89:4002/api/country',
                                method: "post",
                                body: "{}",
                                labelField: 'name', /* Note : here (name, id) are field name from user api */
                                valueField: '_id'
                            },
                            options: [],
                        },
                        selectPluginConfig: {
                            "isClearable": true,
                            "isSearchable": true,
                            "isMulti": false,
                            "isRtl": false
                        },
                        isVisible: true,
                        className: 'col-md-auto',
                    },
                    {
                        type: 'autoComplete',
                        name: 'state_id', //stateId
                        placeholder: 'Select State',
                        dependency: {
                            isDependentField: true,
                            dependentOn: ['country_id'], // ['countryId'],
                        },
                        fillOptions: {
                            byApi: true,
                            apiConfig: {
                                url: 'http://192.168.100.89:4002/api/states',
                                method: "post",
                                body: "{}",
                                labelField: 'name',
                                valueField: '_id'
                            },
                            options: [],
                        },
                        selectPluginConfig: {
                            "isClearable": true,
                            "isSearchable": true,
                            "isMulti": false,
                            "isRtl": false
                        },
                        className: 'col-md-auto',
                        isVisible: true,
                    },
                    {
                        type: 'autoComplete',
                        name: 'city_id',
                        placeholder: 'Select City',
                        dependency: {
                            isDependentField: true,
                            dependentOn: ['country_id', 'state_id'],  // ['countryId', 'stateId'],
                        },
                        fillOptions: {
                            byApi: true,
                            apiConfig: {
                                url: 'http://192.168.100.89:4002/api/city',
                                method: "post",
                                body: "{}",
                                labelField: 'name',
                                valueField: '_id'
                            },
                            options: [],
                        },
                        selectPluginConfig: {
                            "isClearable": true,
                            "isSearchable": true,
                            "isMulti": false,
                            "isRtl": false
                        },
                        className: 'col-md-auto',
                        isVisible: true,
                    },
                    {
                        type: 'iconButton',
                        icon: 'rotate-cw',
                        name: 'refresh',
                        isVisible: true,
                        className: 'col-md-auto',
                    },
                ],
                center: [
                    {
                        type: 'textField',
                        name: 'search',
                        isVisible: false,
                        className: 'col-md-auto',
                    },
                ],
                right: [
                    {
                        type: 'viewType',
                        name: 'viewType',

                        fillOptions: {
                            byApi: false,
                            apiConfig: {},
                            options: [
                                { label: 'List View', value: 1, icon: 'list' },
                                { label: 'Kanban View', value: 2, icon: 'bar-chart-2' },
                                { label: 'Canvas View', value: 3, icon: 'box' }
                            ],
                        },

                        isVisible: true,
                        className: 'col-md-auto',
                    },
                    {
                        type: 'button',
                        btnText: 'Add New ',
                        icon: 'plus',
                        name: 'add',
                        className: 'col-md-auto',
                        isVisible: true,
                    },
                ]
            }
        },
        subHeader: {
            isVisible: true,
            subHeaderComponents: {
                left: [
                    {
                        type: 'pageTitle',
                        title: 'Quick Leads',
                        name: 'title',
                        className: 'col-md-auto',
                        isVisible: false
                    },
                    {
                        type: 'textField',
                        name: 'search2',
                        className: 'col-md-auto',
                        isVisible: true
                    }
                ],
                center: [
                    {
                        type: 'textField',
                        name: 'search2',
                        className: 'col-md-12',
                        isVisible: false
                    }
                ],
                right: [
                    {
                        type: 'button',
                        btnText: 'Manage Column',
                        name: 'manageColumn',
                        isVisible: true,
                        className: 'col-md-auto',
                    },
                    {
                        type: 'autoComplete',
                        name: 'sortByAvailability',

                        fillOptions: {
                            byApi: false,
                            apiConfig: {},
                            options: [
                                { label: 'Oldest 1', value: 'old' },
                                { label: 'Newest 2', value: 'new' }
                            ],
                        },
                        selectPluginConfig: {
                            "isClearable": true,
                            "isSearchable": true,
                            "isMulti": false,
                            "isRtl": false
                        },

                        className: 'col-md-4 me-1',
                        isVisible: true
                    },
                ]
            }
        },
    },
    'opportunities': {
        header: {
            isVisible: true,
            headerComponents: {
                left: [],
                center: [],
                right: []
            }
        },
        subHeader: {
            isVisible: true,
            subHeaderComponents: {
                left: [],
                center: [],
                right: [
                    {
                        type: 'button',
                        btnText: 'Manage Column',
                        name: 'manageColumn',
                        isVisible: true,
                        className: 'col-md-auto',
                    },
                    {
                        type: 'autoComplete',
                        name: 'sortByAvailability',

                        fillOptions: {
                            byApi: false,
                            apiConfig: {},
                            options: [
                                { label: 'Oldest 1', value: 'old' },
                                { label: 'Newest 2', value: 'new' }
                            ],
                        },
                        selectPluginConfig: {
                            "isClearable": true,
                            "isSearchable": true,
                            "isMulti": false,
                            "isRtl": false
                        },

                        className: 'col-md-4 me-1',
                        isVisible: true
                    },
                ]
            }
        },
    },
    'customers': {
        header: {
            isVisible: true,
            headerComponents: {
                left: [],
                center: [],
                right: []
            }
        },
        subHeader: {
            isVisible: true,
            subHeaderComponents: {
                left: [],
                center: [],
                right: [
                    {
                        type: 'button',
                        btnText: 'Manage Column',
                        name: 'manageColumn',
                        isVisible: true,
                        className: 'col-md-auto',
                    },
                    {
                        type: 'button',
                        btnText: 'Add New',
                        icon: 'plus',
                        name: 'add',
                        className: 'col-md-auto',
                        isVisible: true,
                    },
                    {
                        type: 'autoComplete',
                        name: 'sortByAvailability',

                        fillOptions: {
                            byApi: false,
                            apiConfig: {},
                            options: [
                                { label: 'Oldest 1', value: 'old' },
                                { label: 'Newest 2', value: 'new' }
                            ],
                        },
                        selectPluginConfig: {
                            "isClearable": true,
                            "isSearchable": true,
                            "isMulti": false,
                            "isRtl": false
                        },

                        className: 'col-md-4 me-1',
                        isVisible: true
                    },
                ]
            }
        },
    },
    'holiday': {
        header: {
            isVisible: true,
            headerComponents: {
                right: [
                    {
                        type: 'button',
                        btnText: 'Add New',
                        icon: 'plus',
                        name: 'add',
                        className: 'col-md-auto',
                        isVisible: true,
                    },
                ]
            }
        },
        subHeader: {
            isVisible: true,
            subHeaderComponents: {
                left: [
                    {
                        type: 'pageTitle',
                        title: 'Quick Leads',
                        name: 'title',
                        className: 'col-md-auto',
                        isVisible: false
                    },
                    // {
                    //     type: 'textField',
                    //     name: 'search2',
                    //     className: 'col-md-auto',
                    //     isVisible: true
                    // }
                ],
                center: [
                    // {
                    //     type: 'textField',
                    //     name: 'search2',
                    //     className: 'col-md-12',
                    //     isVisible: false
                    // }
                ],
                right: [
                    {
                        type: 'button',
                        btnText: 'Manage Column',
                        name: 'manageColumn',
                        isVisible: true,
                        className: 'col-md-auto',
                    },
                    {
                        type: 'autoComplete',
                        name: 'sortByAvailability',

                        fillOptions: {
                            byApi: false,
                            apiConfig: {},
                            options: [
                                { label: 'Ascending ', value: 'ASC' },
                                { label: 'Descending', value: 'DESC' }
                            ],
                        },
                        selectPluginConfig: {
                            "isClearable": true,
                            "isSearchable": true,
                            "isMulti": false,
                            "isRtl": false
                        },

                        className: 'col-md-4 me-1',
                        isVisible: true
                    },
                ]
            }
        },
    }
}