export const PageConfig = {
    'lead': {
        header: {
            isVisible: true,
            headerComponents: {
                left: [
                    {
                        type: 'autoComplete',
                        name: 'leadBy',   // Note :  this name should unique base on this name action will be trigger
                        optionKey: 'leadByOptions',

                        dependency: {
                            isDependentField: false,
                            hasSelectedValue: false
                        },

                        fillOptions: {
                            byApi: true,
                            apiConfig: {
                                url: 'https://jsonplaceholder.typicode.com/users',
                                method: 'get',
                                body: {},
                                label: 'name', /* Note : here (name, id) are field name from user api */
                                value: 'id'
                            },
                            options: [],
                        },

                        isMultiple: false,
                        isVisible: true,
                        className: 'col-md-5 w-150',
                    },

                    {
                        type: 'autoComplete',
                        optionKey: 'leadTypeOptions',
                        name: 'leadType',

                        dependency: {
                            isDependentField: true,
                            dependentOnField: 'leadBy',
                            dependentOn: ['usreId', 'postId'],
                            filterBy: { userId: null }, /** here userId is field inside the dependent dropdown api call */
                            hasSelectedValue: false
                        },

                        fillOptions: {
                            byApi: true,
                            apiConfig: {
                                url: 'https://jsonplaceholder.typicode.com/posts',
                                method: 'get',
                                body: {},
                                label: 'title',
                                value: 'id'
                            },
                            options: [],

                            // options: [
                            //     { label: 'List View', value: 1, icon: 'list' },
                            //     { label: 'Kanban View', value: 2, icon: 'bar-chart-2' },
                            //     { label: 'Canvas View', value: 3, icon: 'box' }
                            // ],
                        },

                        isMultiple: false,
                        className: 'col-md-5 w-150',
                        isVisible: true,
                    },

                    {
                        type: 'autoComplete',
                        optionKey: 'leadCommentOptions',
                        name: 'leadComment',

                        dependency: {
                            isDependentField: true,
                            dependentOnField: 'leadType',
                            filterBy: { postId: null }, /** here postId is field inside the dependent dropdown api call */
                            hasSelectedValue: false
                        },

                        fillOptions: {
                            byApi: true,
                            apiConfig: {
                                url: 'https://jsonplaceholder.typicode.com/comments',
                                method: 'get',
                                body: {},
                                label: 'body',
                                value: 'id'
                            },
                            options: [],
                        },

                        isMultiple: false,
                        className: 'col-md-5 w-150',
                        isVisible: true,
                    },

                    {
                        type: 'iconButton',
                        icon: 'refresh-cw',
                        name: 'refresh',
                        className: 'col-md-2',
                        isVisible: true
                    },
                ],
                center: [
                    {
                        type: 'textField',
                        name: 'search',
                        isVisible: false,
                        className: 'col-md-12',
                    }
                ],
                right: [
                    {
                        type: 'button',
                        btnText: 'Add New',
                        icon: 'plus',
                        name: 'add',
                        className: 'col-md-12',
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
                        title: 'Quick Links',
                        name: 'title',
                        className: 'col-md-12',
                        isVisible: true
                    },
                    {
                        type: 'textField',
                        name: 'search2',
                        className: 'col-md-7',
                        isVisible: false
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
                        type: 'viewType',
                        optionKey: 'viewTypeOptions',
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
                        className: 'col-md-2',
                    },
                    {
                        type: 'button',
                        btnText: 'Manage Column',
                        name: 'manageColumn',
                        isVisible: true,
                        className: 'col-md-auto',
                    },
                    {
                        type: 'autoComplete',
                        optionKey: 'sortByOptions',
                        name: 'sortByAvailability',

                        fillOptions: {
                            byApi: false,
                            apiConfig: {},
                            options: [
                                { label: 'Oldest 1', value: 'old' },
                                { label: 'Newest 2', value: 'new' }
                            ],
                        },

                        className: 'col-md-4 me-2',
                        isVisible: true
                    },
                ]
            }
        },
    }
}