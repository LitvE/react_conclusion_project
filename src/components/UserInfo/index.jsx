import React from "react";
import PropTypes from "prop-types";

function UserInfo ({user: {name, surname}}){
    return(
        <div>
            {name + ' ' + surname}
        </div>
    );
};

UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
};

UserInfo.defaultProps = {
    name: 'unknown',
    surname: 'unknown',
};

export default UserInfo;