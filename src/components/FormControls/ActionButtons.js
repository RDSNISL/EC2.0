import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import { DropdownItem, PopoverBody, Popover, UncontrolledPopover, DropdownMenu } from 'reactstrap';

const ActionButtons = (props) => {
    const {
        convert: { handleClick: handleConvert, tooltip: convertTooltip = 'Convert', } = {},
        view: { handleClick: handleview, tooltip: viewTooltip = 'View', } = {},
        edit: { handleClick: handleEdit, tooltip: editTooltip = 'Edit', } = {},
        delete: { handleClick: handleDelete, tooltip: deleteTooltip = 'Delete', } = {},
        actionIcon = 'more-vertical'
    } = props;

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => {
        setDropdownOpen((prevState) => !prevState);
    }


    const loadConvertAction = (index) => {
        return (
            <div key={index} style={{ cursor: 'pointer' }} onClick={handleConvert} className='d-flex align-items-center popover-item'>
                <FeatherIcon
                    icon="refresh-cw"
                    size="18"
                />
                <span className='text-muted fw-normal fs-6 ms-2'>{convertTooltip}</span>
            </div>
        )
    }

    const loadViewAction = (index) => {
        return (
            <div key={index} style={{ cursor: 'pointer' }} onClick={handleview} className='d-flex align-items-center popover-item'>
                <FeatherIcon
                    icon="eye"
                    size="18"
                />
                <span className='text-muted fw-normal fs-6 ms-2'>{viewTooltip}</span>
            </div>
        )
    }

    const loadEditAction = (index) => {
        return (
            <div key={index} style={{ cursor: 'pointer' }} onClick={handleEdit} className='d-flex align-items-center popover-item'>
                <FeatherIcon
                    icon="edit"
                    size="18"
                />
                <span className='text-muted fw-normal fs-6 ms-2'>{editTooltip}</span>
            </div>
        )
    }

    const loadDeleteAction = (index) => {
        return (
            <div key={index} style={{ cursor: 'pointer' }} onClick={handleDelete} className='d-flex align-items-center popover-item'>
                <FeatherIcon
                    icon="trash-2"
                    size="18"
                />
                <span className='text-muted fw-normal fs-6 ms-2'>{deleteTooltip}</span>
            </div>
        )
    }


    const actionMapper = {
        'convert': loadConvertAction,
        'view': loadViewAction,
        'edit': loadEditAction,
        'delete': loadDeleteAction,
    }

    return (
        <>
            <div
                id={`popover_${props?.popUpId}`}
                type="button"
                onClick={() => toggle()}
            >
                {/* <i className="mdi mdi-dots-vertical m-0 text-muted h5" /> */}
                <FeatherIcon
                    icon={actionIcon}
                    size="18"
                />
            </div>

            <Popover
                placement="left"
                isOpen={dropdownOpen}
                target={`popover_${props?.popUpId}`}
                toggle={toggle}
                trigger="legacy"
            >
                <PopoverBody>
                    {Object.keys(actionMapper).map((action, index) => props[`${action}`] && actionMapper[`${action}`] && actionMapper[`${action}`](index))}
                </PopoverBody>
            </Popover>

        </>
    )
};

ActionButtons.propTypes = {
    edit: PropTypes.object,
    delete: PropTypes.object,
};

export default ActionButtons;
