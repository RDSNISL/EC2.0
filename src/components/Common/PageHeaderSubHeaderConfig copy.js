import RHFAutoCompleteSelect from 'components/FormControls/RHFAutoCompleteSelect'
import RHFButton from 'components/FormControls/RHFButton'
import RHFTextField from 'components/FormControls/RHFTextField'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import React from 'react'
import { Card, CardHeader, Col, Row } from 'reactstrap'
import ViewTypeDropdown from './ViewTypeDropdown'

const PageHeaderSubHeaderConfig = (props) => {

    const {
        header: {
            filter1: { handleClick: handlefilter1, options: filter1Options = [] } = {},
            filter2: { handleClick: handlefilter2, options: filter2Options = [] } = {},
            refresh: { handleClick: handleRefresh } = {},
            viewType: { handleClick: handleViewType, options: viewTypeOptions = [] } = {},
            add: { handleClick: handleAdd } = {},
        } = {},
        subHeader: {
            pageTitle: { title: pageTitle } = {},
            search: { handleClick: handleSearch } = {},
            manageColumn: { handleClick: handleManageColumn } = {},
            sortBy: { handleClick: handleSortBy, options: sortOptions = [] } = {}
        } = {}
    } = props;

    const loadFilter1 = () => {
        return (

            <RHFAutoCompleteSelect
                id="filter1"
                name="filter1"
                options={filter1Options}
                isMultiple={false}
                isController={false}
                handleOnChange={handlefilter1}
            />
        )
    }

    const loadFilter2 = () => {
        return (
            <RHFAutoCompleteSelect
                id="filter2"
                name="filter2"
                options={filter2Options}
                isMultiple={false}
                isController={false}
                handleOnChange={handlefilter2}
                className="ms-2"
            />

        )
    }

    const loadRefresh = () => {
        return (
            <FeatherIcon icon="refresh-cw" size="20" onClick={handleRefresh} className="ms-2" />
        )

    }

    const loadAdd = () => {
        return (
            <RHFButton
                btnName="Add New"
                icon="plus"
                onClick={handleAdd}
            />
        )
    }

    const loadRecordViewType = () => {
        return (
            <ViewTypeDropdown onClick={handleViewType} items={viewTypeOptions} className="me-2" />
        )
    }

    const loadSearchBox = () => {
        return (
            <RHFTextField
                id="search"
                name="search"
                placeholder="Search here"
                isController={false}
                handleOnChange={handleSearch}
            />
        )
    }

    const loadManageColumns = () => {
        return (
            // <FeatherIcon icon="settings" size="28" onClick={handleManageColumn} />
            <RHFButton
                btnName="Manage Column"
                onClick={handleManageColumn}
                className="me-2"
            />
        )
    }

    const loadSortBy = () => {
        return (
            <RHFAutoCompleteSelect
                id="sortBy"
                name="sortBy"
                options={sortOptions}
                isMultiple={false}
                isController={false}
                handleOnChange={handleSortBy}
            />
        )
    }

    const actionMapper = {
        filter1: loadFilter1,
        filter2: loadFilter2,
        refresh: loadRefresh,
        viewType: loadRecordViewType,
        add: loadAdd,

        search: loadSearchBox,
        manageColumn: loadManageColumns,
        sortBy: loadSortBy,
    }

    return (
        <React.Fragment>
            {props?.header &&
                <Card>
                    <CardHeader>
                        <Row>
                            <Col lg={6}>
                                <div className='d-flex justify-content-start align-items-center'>
                                    {props?.header['filter1'] && actionMapper['filter1']()}
                                    {props?.header['filter2'] && actionMapper['filter2']()}
                                    {props?.header['refresh'] && actionMapper['refresh']()}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='d-flex justify-content-end align-items-center'>
                                    {props?.header['viewType'] && actionMapper['viewType']()}
                                    {props?.header['add'] && actionMapper['add']()}
                                </div>
                            </Col>
                        </Row>
                    </CardHeader>
                </Card>
            }
            {props?.subHeader &&
                <Card className='m-0'>
                    <CardHeader>
                        <Row>
                            <Col md="3">
                                <h4>{pageTitle}</h4>
                                {/* {actionMapper['search']()} */}
                            </Col>
                            <Col>
                                <div className="d-flex align-items-center justify-content-end">
                                    {props?.subHeader['manageColumn'] && actionMapper['manageColumn']()}
                                    {props?.subHeader['sortBy'] && actionMapper['sortBy']()}
                                </div>
                            </Col>
                        </Row>
                    </CardHeader>
                </Card>
            }
        </React.Fragment>
    )
}

export default PageHeaderSubHeaderConfig