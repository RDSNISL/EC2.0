export const PageConfig = {
    'lead': {
        header: {
            isVisible: true,
            headerComponents: [
                {
                    type: 'autoComplete',
                    optionKey: 'leadByOptions',
                    name: 'leadBy',   // Note :  this name should unique base on this name action will be trigger
                    display: {
                        position: 'left',
                        className: 'col-md-2'
                    },
                    isVisible: true
                },
                {
                    type: 'autoComplete',
                    optionKey: 'leadTypeOptions',
                    name: 'leadType',
                    display: {
                        position: 'left',
                        className: 'col-md-2'
                    },
                    isVisible: true,
                },
                {
                    type: 'iconButton',
                    icon: 'refresh-cw',
                    name: 'refresh',
                    display: {
                        position: 'left',
                        className: 'col-md-2'
                    },
                    isVisible: true
                },
                {
                    type: 'textField',
                    name: 'search',
                    isVisible: false,
                    display: {
                        position: 'center',
                        className: 'col-md-2'
                    },
                    // className: 'ms-auto'
                },
                {
                    type: 'button',
                    btnText: 'Add New',
                    icon: 'plus',
                    name: 'add',
                    display: {
                        position: 'right',
                        className: 'col-md-2'
                    },
                    isVisible: true,
                    // className: 'ms-auto'
                },
            ]
        },
        subHeader: {
            isVisible: true,
            subHeaderComponents: [
                {
                    type: 'pageTitle',
                    title: 'Quick Links',
                    name: 'title',
                    isVisible: true
                },
                {
                    type: 'textField',
                    name: 'search2',
                    isVisible: false
                },
                {
                    type: 'viewType',
                    optionKey: 'viewTypeOptions',
                    name: 'viewType',
                    isVisible: true,
                    className: 'ms-auto'
                },
                {
                    type: 'button',
                    btnText: 'Manage Column',
                    name: 'manageColumn',
                    isVisible: true,
                    className: 'ms-auto'
                },
                {
                    type: 'autoComplete',
                    optionKey: 'sortByOptions',
                    name: 'sortByAvailability',
                    isVisible: true
                },
            ]
        },
    }
}