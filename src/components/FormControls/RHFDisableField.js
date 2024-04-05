import React from "react";
import { Label } from "reactstrap";

const RHFDisableField = ({ ...props }) => {
    const {
        fieldValue = "",
        bsSize = "md"
    } = props;

    return (
        <Label className={bsSize === 'sm' ? "form-control-sm disabled" : "form-control disabled"} style={{ backgroundColor: "#eff2f7" }}>
            {fieldValue ? fieldValue : <>&nbsp;</>}
        </Label>
    );
};

export default RHFDisableField;
