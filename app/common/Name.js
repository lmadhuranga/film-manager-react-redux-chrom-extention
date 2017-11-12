import React, {PropTypes} from 'react';

const Name = ({label, onClick}) => {
    return (
        <label onClick={onClick}>{label}</label>
    );
};
Name.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
export default Name;