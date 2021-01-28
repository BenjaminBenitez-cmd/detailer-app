import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import  { getCurrentUser }  from '../../services/auth.service';

function GuardedRoute({
    component: Component,
    ...rest
}){
    const user = getCurrentUser();
    return (
        <Route {...rest} render={(props) => (
            user !== null
                ? <Component {...props}/>
                : <Redirect to='/signin' />
        )}/>
    )
}

export default GuardedRoute;