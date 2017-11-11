import React, {PropTypes} from 'react';

const Name = ({label}) => {
    return (
        <label>{label}</label>
    );
};
Name.propTypes = {
    label: PropTypes.string.isRequired
};
export default Name;