import React, { useState, useEffect } from 'react';
import DialogBox from 'components/Modals/DialogBox';
import RHFCheckbox from 'components/FormControls/RHFCheckbox';
import RHFButton from 'components/FormControls/RHFButton';

const ManageColumn = (props) => {

    const {
        handleModelToggle,
        isModelOpen,
        title,
        actions = null,
        modelSize,
        allColumns,
        getFilteredValues,
    } = props;

    const [columnList, setColumnList] = useState(allColumns);

    const handleChange = (id, isChecked) => {
        const filterCols = columnList.map(o => o.id === id ? ({ ...o, isVisible: isChecked }) : o)
        setColumnList(filterCols)
    }


    const handleApply = () => {
        allColumns.map((t1, i) => {
            columnList.map(t2 => {
                if (t1.id === t2.id) {
                    allColumns[i] = t2
                }
            })
        })
        getFilteredValues(allColumns);
        handleModelToggle();
    }

    return (
        <DialogBox
            isModelOpen={isModelOpen}
            handleToggle={handleModelToggle}
            modelSize={modelSize}
            title={title}
            actions={actions}
        >
            <React.Fragment>
                <div className='text-center'>
                    <div className='row gap-1 align-items-center'>
                        {columnList?.map((col, colIndex) => {
                            return (
                                <>
                                    <div key={colIndex} className='col-md-3' style={{ width: "180px" }}>
                                        <div className='d-flex'>
                                            <RHFCheckbox
                                                name="chk"
                                                value={col?.isVisible}
                                                defaultChecked={col?.isVisible}
                                                isController={false}
                                                className='align-items-center'
                                                onChange={() => handleChange(col?.id, !col?.isVisible)}
                                            />
                                            <span className='fw-normal fs-6 ms-2'>{col?.name}</span>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

                {!actions &&
                    <div className="modal-footer" style={{ margin: "16px -16px 0px", paddingBottom: "0px" }}>
                        <RHFButton
                            btnName="Cancel"
                            outline={true}
                            onClick={handleModelToggle}
                        />
                        <RHFButton
                            btnName="Apply"
                            onClick={handleApply}
                        />
                    </div>
                }
            </React.Fragment>
        </DialogBox>
    )
}

export default ManageColumn;