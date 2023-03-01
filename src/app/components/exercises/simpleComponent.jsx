import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogout, isAuth }) => {
    if (isAuth) {
        return <button onClick={onLogout}>Выйти из системы</button>;
    }
    return <button onClick={onLogin}>Войти в систему</button>;
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
