import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function GuardedRoute({
    component: Component,
    isAuthenticated,
    ...rest
}){
    return (
        <Route {...rest} render={(props) => (
            isAuthenticated !== undefined
                ? <Component {...props}/>
                : <Redirect to='/signin' />
        )}/>
    )
   
}

export default GuardedRoute;