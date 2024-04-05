import Step1 from "pages/Doc/WizardExample/Step1";
import Step2 from "pages/Doc/WizardExample/Step2";
import Step3 from "pages/Doc/WizardExample/Step3";
import Step4 from "pages/Doc/WizardExample/Step4";

export const ICON_SIZE = 20;
export const SECTIONS = ['left', 'center', 'right'];

export const QUICK_LEADS_STATUS = [
    {
        name: 'quickLeads',
        value: 1,
        text: 'Quick Leads',
        backgroundColor: '#d8dffa',
        borderTopColor: '#23388b',
    },
    {
        name: 'opportunity',
        value: 2,
        text: 'Opportunity',
        backgroundColor: '#daf5e7',
        borderTopColor: '#297a50',
    },
    {
        name: 'backLog',
        value: 3,
        text: 'Back Log',
        backgroundColor: '#ffe3de',
        borderTopColor: '#994437'
    }
];

const COMPONENT_MAPPER = {
    'basicInfo': <Step1 />,
    'additionalInfo': <Step2 />,
    'description': <Step3 />,
    'done': <Step4 />,
}

export const WIZARD_FORM_1 = [
    {
        id: 1,
        label: 'Step 1',
        name: 'basicInfo',
        component: COMPONENT_MAPPER['basicInfo']
    },
    {
        id: 2,
        label: 'Step 2',
        name: 'additionalInfo',
        component: COMPONENT_MAPPER['additionalInfo']
    },
    {
        id: 3,
        label: 'Step 3',
        name: 'description',
        component: COMPONENT_MAPPER['description']
    },
    {
        id: 4,
        label: 'Step 4',
        name: 'done',
        component: COMPONENT_MAPPER['done']
    }
]
