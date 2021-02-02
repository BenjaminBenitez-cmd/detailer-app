import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import  { getCurrentUser }  from '../../services/auth.service';
import decode from 'jwt-decode';

const checkAuth = () => {
    const user = getCurrentUser();
    if(!user){
        return false;
    }
    try {
        const { exp } = decode(user.token);
        if (exp < new Date().getTime() / 1000){
            return false;
        }
    } catch (e) {
        return false;
    }

    return true;
}
const GuardedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    checkAuth() ? (
      <Component {...props} {...rest}/>
    ) : (
      <Redirect
        to={{
          pathname: "/signin",
          state: { from: props.location }
        }}
      />
    )
  )}/>
)

export default GuardedRoute;