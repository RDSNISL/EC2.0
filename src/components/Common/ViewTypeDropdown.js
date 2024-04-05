import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const ViewTypeDropdown = ({ items = [], onClick = () => { }, className, ...args }) => {
    const [singlebtn, setSinglebtn] = useState(false);
    const [selecetdViewType, setSelecetdViewType] = useState(1);
    return (
        // <div className={className}>
        <Dropdown
            isOpen={singlebtn}
            toggle={() => setSinglebtn(!singlebtn)}
            direction='down'
            className={className}
        >
            <div onClick={() => setSinglebtn(!singlebtn)} style={{ cursor: "pointer" }}>
                <FeatherIcon icon={items[selecetdViewType - 1]?.icon} size="20" />
                <i className="mdi mdi-chevron-down" />
            </div>
            <DropdownMenu {...args} id="customDropdown">
                {items?.map(item =>
                    <DropdownItem
                        onClick={() => { onClick(item?.value); setSelecetdViewType(item?.value) }}
                    >
                        <FeatherIcon icon={item.icon} size="20" />&nbsp;&nbsp;<span className='text-muted'>{item?.label}</span>
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
        // </div>
    )
}

export default ViewTypeDropdown;