import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, authed, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            authed === 'admin'
                ? <Component {...props} />
                : <Redirect to="/signIn" />
        )}
    />
);
export default ProtectedRoute;