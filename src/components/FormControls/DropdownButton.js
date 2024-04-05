import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import RHFTextField from 'components/FormControls/RHFTextField';

const DropdownButton = (props) => {
    const { menuItems = [], isSearchable = false, handleClick, heading, filterFields, ...args } = props;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuItemList, setMenuItemList] = useState(menuItems);

    const handleSearch = (val) => {
        setMenuItemList(menuItems?.filter(o => o?.name.toLowerCase()?.indexOf(val.toLowerCase()) > -1))
    }

    const manageHandleClick = (item) => {
        handleClick(item);
    }

    const toggle = () => {
        setDropdownOpen((prevState) => !prevState);
        setMenuItemList(menuItems)
    };


    return (

        <Dropdown isOpen={dropdownOpen} toggle={toggle}> {/* toggle={toggle} */}
            <DropdownToggle color='primary' caret>
                {heading}
            </DropdownToggle>
            <DropdownMenu {...args} className='p-2' style={{ maxHeight: "200px", overflowY: "auto", }}>
                {isSearchable &&
                    <RHFTextField
                        isController={false}
                        name="Search"
                        placeholder="Search"
                        className="form-control-sm"
                        handleOnChange={handleSearch}
                    />
                }
                <div className='column-list py-1'>
                    {menuItemList?.map(item => {
                        return (
                            <React.Fragment key={item?.id}>
                                <DropdownItem className='dropdown-item font-size-12 p-1' onClick={() => manageHandleClick(item)} key={item?.id} active={item?.id === filterFields?.buId}>
                                    {item?.name}
                                </DropdownItem>
                                <DropdownItem divider className='m-0' />
                            </React.Fragment>
                        )
                    })}
                </div>

            </DropdownMenu>
        </Dropdown>

    )
}

export default DropdownButton