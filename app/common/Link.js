import React, {PropTypes} from 'react';

const Link = ({url, label}) => {
    return (
        <a href={url}>{label}</a>
    );
};
Link.propTypes = {
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};
export default Link;