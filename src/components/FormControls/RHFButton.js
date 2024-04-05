import React from "react";
import { Button, Spinner } from "reactstrap";
import FeatherIcon from "feather-icons-react";

const RHFButton = (props) => {
    const {
        type = "button",
        btnName = "Submit",
        color = "primary",
        icon = "",
        size = "",
        iconPlacement = "start",
        outline = false,
        onClick = () => { },
        className,
        isLoading = false
    } = props;

    return (
        isLoading ?
            <Button color={color} outline={outline} className={className} size={size}>
                <span>Loading</span> &nbsp;<Spinner
                    color="light"
                    size="sm"
                />
            </Button> :
            <Button color={color} outline={outline} type={type} onClick={onClick} className={className} size={size}>
                {icon && iconPlacement === 'start' && (
                    <>
                        <FeatherIcon icon={icon} size="22" />{" "}
                    </>
                )}
                {btnName}
                {icon && iconPlacement === 'end' && (
                    <>
                        <FeatherIcon icon={icon} size="22" />{" "}
                    </>
                )}
            </Button>
    );
};
export default RHFButton;
