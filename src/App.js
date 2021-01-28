import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import  { getCurrentUser, logout } from './services/auth.service';


import { Authenticate, Signin, Register, ResetRequest, ResetPassword} from './components/auth';
import Home from './components/Home';
import Profile from './components/profile/Profile';
import DetailerUser from './components/DetailerUser';
import GuardedRoute from './navigation/GuardedRoute';
import Schedule from './components/schedule/Schedule';
import { ViewWash, ViewWashes } from './components/washes';

import logo from './assets/img/logo.png'


function App(){
  const [currentUser, setCurrentUser] = useState(undefined);
  const [notification, setNotification] = useState(null);

  const updateNotification = useCallback(
    (num) => {
      setNotification(num);
    },
    [],
  );

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
    <div>
        <header>
          <nav className="add_margin">
            <div className="container">
              <div className="row">
                <div id="left_nav" className="col-xs-12 col-sm-6 mt-2">
                  <Link to='/'><img src={logo} alt="Detailer logo"/></Link>
                </div>
                <div id="right_nav" className="col-xs-12 col-sm-6 mt-2">
                  <ul>
                    {currentUser ? (
                      <>
                        <li>
                          <Link to={"/profile"}>
                            {currentUser.user.email}
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={logOut}>
                            Logout
                          </Link>
                        </li>
                      </>
                    ):(
                      <>
                        <li>
                          <Link to={"/signin"}>
                            Sign In
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to={"/register"}>
                            Register
                          </Link>
                        </li>
                      </>
                    )}
                </ul>
                </div>
              </div>
            </div>
          </nav>
      </header>
      
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
    </div>
  )
}

export default App;