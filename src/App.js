import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import  { getCurrentUser, logout } from './services/auth.service';


import { Authenticate, Signin, Register, ResetRequest, ResetPassword} from './components/auth';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import DetailerUser from './pages/dashboard/DetailerUser';
import GuardedRoute from './components/navigation/GuardedRoute';
import Schedule from './pages/schedule/Schedule';
import { ViewWash, ViewWashes } from './pages/washes';

import Navbar from './components/ui-components/navbar/Navbar';


function App(){
  const [currentUser, setCurrentUser] = useState(undefined);
  const [notification, setNotification] = useState(null);
  const [navColor, setNavColor] = useState(true);

  const updateNotification = useCallback(
    (num) => {
      setNotification(num);
    },
    [],
  );
  // const navbarColor = () => {
  //   const path = window.location.pathname;
  //   if(path !== '/' || path !== '/home'){
  //       setNavColor('dark')
  //   } else {
  //     setNavColor('light');
  //   }
  // }
  const setColor = (color) => color ? setNavColor(true) : setNavColor(false);

  useEffect(() => {
    const user = getCurrentUser();
    if(user){
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    logout();
    window.location.reload();
  };
  // console.log(navbarColor());

  return (
    <>
      <Navbar logout={logOut} currentUser={currentUser} navColor={navColor}/>
      <div className="inner-body">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/resetrequest" component={ResetRequest} />
            <Route exact path="/resetpassword/:token" component={ResetPassword} />
            <Route exact path="/authenticate/:token" component={Authenticate}/>
            <GuardedRoute exact path="/profile" component={Profile}/>
            <GuardedRoute path='/dashboard'>
              <DetailerUser notification={notification}/>
            </GuardedRoute>
            <GuardedRoute exact path="/schedule"> 
              <Schedule updateNotification={updateNotification}/>
            </GuardedRoute>
            <GuardedRoute exact path="/washes">
              <ViewWashes updateNotification={updateNotification}/>
            </GuardedRoute>
            <GuardedRoute exact path="/washes/:id" component={ViewWash} />
          </Switch>
      </div>
    </>
  )
}

export default App;