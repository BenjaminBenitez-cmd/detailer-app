import React, { useCallback, useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { getCurrentUser, logout } from '../../services/auth.service'
import DetailerUser from '../dashboard/DetailerUser'
import Profile from '../profile/Profile'
import Schedule from '../schedule/Schedule'
import { ViewWash } from '../washes'

function Application() {
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
        <>
        <div className="inner-body">
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/dashboard">
                <DetailerUser notifications={notification}/>
            </Route>
            <Route exact path="/schedule"> 
                <Schedule updateNotification={updateNotification} />
            </Route>
            <Route exact path="/washes">
                <ViewWash updateNotification={updateNotification} />
            </Route>
            <Route exact path="/washes/:id" component={ViewWash} />
        </div>
        </>
    )
}

export default Application;
