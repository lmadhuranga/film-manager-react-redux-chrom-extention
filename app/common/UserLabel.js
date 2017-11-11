import React, {PropTypes} from 'react';

const UserLabel = ({label}) => {
    return (
        <label>{label}</label>
    );
};
UserLabel.propTypes = {
    label: PropTypes.string.isRequired
};
export default UserLabel;