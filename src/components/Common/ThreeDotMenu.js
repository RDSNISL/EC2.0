import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

const ThreeDotMenu = ({ items = [], onClick = () => { }, className, ...args }) => {
    const [singlebtn, setSinglebtn] = useState(false)
    return (
        <Dropdown
            isOpen={singlebtn}
            toggle={() => setSinglebtn(!singlebtn)}
        // direction='start'
        >
            {/* <span onClick={() => setSinglebtn(!singlebtn)} style={{ cursor: "pointer" }}>
                <FeatherIcon icon='more-vertical' size="20" />
            </span> */}

            <DropdownToggle tag="i" style={{ cursor: "pointer" }}>
                <FeatherIcon icon='more-vertical' size="20" />
            </DropdownToggle>

            <DropdownMenu {...args} id="customDropdown5" end={true}>
                {items?.map(item =>
                    <DropdownItem onClick={() => onClick(item?.value)}>
                        <FeatherIcon icon={item.icon} size="18" />&nbsp;&nbsp;<span className='text-muted'>{item?.label}</span>
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown >
    )
}

export default ThreeDotMenu