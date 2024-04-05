import PropTypes from "prop-types"
import React from 'react';
import { Progress } from "reactstrap"

const ProgressBar = (props) => {
    const { val = 1, symbol = '%' } = props;
    return (
        <Progress color="primary" value={val}>{`${val} ${symbol}`}</Progress>
    )
}

ProgressBar.propTypes = {
    symbol: PropTypes.string,
    val: PropTypes.number
}

export default ProgressBar;