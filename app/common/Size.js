import React, {PropTypes} from 'react';

const Size = ({label}) => {
    return (
        <label>{label}</label>
    );
};
Size.propTypes = {
    label: PropTypes.string.isRequired
};
export default Size;