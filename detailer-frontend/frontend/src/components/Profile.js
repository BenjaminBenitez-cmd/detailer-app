import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../services/auth.service';

const Profile = () => {
    const [darkmode, setDarkmode] = useState(false);
    const [notifs, setNotifs] = useState(false);
    const [content, setContent] = useState({});
    

  
    useEffect(() => {
        const user = getCurrentUser();
        setContent(user.user);
        if(content.notifications === true){
            setNotifs(true);
        } else if (content.theme === "dark"){
            setDarkmode(true);
        }
    }, []);
    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{content.email}</strong>
                </h3>
            </header>
            <p><strong>ID </strong>{content.id}</p>
            <p><strong>Email </strong>{content.email}</p>
            <p><strong>Location </strong>San Lazaro Village, Orange Walk Belize</p>
            <div className="d-flex align-items-baseline">
                <p className="mr-2"><strong>Darkmode </strong></p>
                <label className="switch">
                    <input type="checkbox" checked={darkmode}/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="d-flex align-items-baseline">
                <p className="mr-2"><strong>Notifications</strong></p>
                <label className="switch">
                    <input type="checkbox" checked={notifs}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
};

export default Profile;