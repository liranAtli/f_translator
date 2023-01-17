import React from "react";
import {Navigate, Route} from "react-router-dom";


export const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
    const auth = localStorage.getItem('access_token');
    return auth ? children : <Navigate to="/login" replace />;
};