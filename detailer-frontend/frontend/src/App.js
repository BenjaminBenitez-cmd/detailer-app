import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AuthService from './services/auth.service';

import Signin from './components/Signin';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
import DetailerUser from './components/DetailerUser';
import Schedule from './components/ScheduleUser';
import GuardedRoute from './components/GuardedRoute';

function App(){
  const [currentUser, setCurrentUser] = useState(undefined);
  
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if(user){
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
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
                dashboard
              </Link>
            </li>
          )}
        </div>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username} || Test name
              </Link>
            </li>
            <li className="nav-item">
              {/* <a href="/" className="nav-link" onClick={logOut}>
                Logout
              </a> */}
              <Link to={"/"} className="nav-link" onClick={logOut}>
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
      <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/profile" component={Profile}/>
            {/* <Route exact path="/dashboard" component={DetailerUser}/> */}
            <GuardedRoute path='/dashboard' component={DetailerUser} />
            <Route exact path="/schedule" component={Schedule} />
          </Switch>
      </div>
    </div>
  )
}

export default App;