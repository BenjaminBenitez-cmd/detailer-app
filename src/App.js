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
  const [navColor, setNavColor] = useState(false);

  //Manges the dashboard notifications
  const updateNotification = useCallback(
    (num) => {
      setNotification(num);
    },
    [],
  );
  //updates the navbar color
  const updateNav = (color) => color ? setNavColor(true) : setNavColor(false);

  
  //logs out user
  const logOut = () => {
    logout();
    window.location.reload();
  };

  useEffect(() => {
    const user = getCurrentUser();
    if(user){
      setCurrentUser(user);
    }
  }, []);

  return (
    <>
      <Navbar logout={logOut} currentUser={currentUser} navColor={navColor}/>
      <div>
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home updateNav={updateNav}/>
            </Route>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/resetrequest" component={ResetRequest} />
            <Route exact path="/resetpassword/:token" component={ResetPassword} />
            <Route exact path="/authenticate/:token" component={Authenticate}/>
            <GuardedRoute exact path="/profile" component={Profile}/>
            <GuardedRoute path='/dashboard' notification={notification} component={DetailerUser}/>
            <GuardedRoute exact path="/schedule" updateNotification={updateNotification} component={Schedule}/> 
            <GuardedRoute exact path="/washes" updateNotification={updateNotification} component={ViewWashes} />
            <GuardedRoute exact path="/washes/:id" component={ViewWash} />  
          </Switch>
      </div>
    </>
  )
}

export default App;