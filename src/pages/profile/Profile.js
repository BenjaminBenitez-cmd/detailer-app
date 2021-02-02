import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../../services/auth.service';

const Profile = () => {
    const [content, setContent] = useState({});
  
    useEffect(() => {
        const user = getCurrentUser();
        setContent(user.user);
    }, []);

    return (
        <div className="add_margin">
            <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Profile</h1>
            </div>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    <p className="h6">ID <span className="text-muted">{content.id}</span></p>
                </li>
                <li className="list-group-item">
                    <p className="h6">Email <span className="text-muted">{content.email}</span></p>
                </li>
                <li className="list-group-item">
                    <p className="h6">Location <span className="text-muted"> San Lazaro Village, Orange Walk Belize</span></p>
                </li>
            </ul> 
        </div>
     
    );
};

export default Profile;