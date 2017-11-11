import React, {PropTypes} from 'react';

const Quality = ({label}) => {
    return (
        <label>{label}</label>
    );
};
Quality.propTypes = {
    label: PropTypes.string.isRequired
};
export default Quality;