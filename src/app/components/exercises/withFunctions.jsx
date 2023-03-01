/* eslint-disable */
import React from "react";
import CardWrapper from "../common/Card";

const WithFunctions = (Component) => () => {
    const token = localStorage.getItem("token");
    const handleLogin = () => {
        localStorage.setItem("token", true);
    };
    const handleLogout = () => {
        localStorage.removeItem("token");
    };
    return (
        <CardWrapper>
            <Component
                onLogin={handleLogin}
                onLogout={handleLogout}
                isAuth={token}
            />
        </CardWrapper>
    );
};

export default WithFunctions;
