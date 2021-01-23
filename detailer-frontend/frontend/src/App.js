import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import  { getCurrentUser, logout } from './services/auth.service';

import Signin from './components/auth/Signin';
import Register from './components/auth/Register';
import Home from './components/Home';
import Profile from './components/profile/Profile';
import DetailerUser from './components/DetailerUser';
import GuardedRoute from './navigation/GuardedRoute';
import Schedule from './components/schedule/Schedule';
import { ViewWash, ViewWashes } from './components/washes';


function App(){

  const [currentUser, setCurrentUser] = useState(undefined);
  const [notification, setNotification] = useState(null);

  const updateNotification = (num) =>{
    setNotification(num);
  }

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

  return (
    <div className="outerContainer">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="nav-brand">
          Detailer
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
          </li>

          {currentUser && (
            <li className="nav-item">
              <Link to={"/dashboard"} className="nav-link">
                Dashboard
              </Link>
            </li>
          )}
        </div>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.user.email}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={logOut}>
                Logout
              </Link>
            </li>
          </div>
        ):(
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/signin"} className="nav-link">
                Sign In
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Register
              </Link>
            </li>
          </div>
        )}
      </nav>
      <div className="inner-body">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/register" component={Register}/>
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
    </div>
  )
}

export default App;