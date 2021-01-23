import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../../services/auth.service';

const Profile = () => {
    const [content, setContent] = useState({});
  
    useEffect(() => {
        const user = getCurrentUser();
        setContent(user.user);
    }, []);

    return (
        <div className="container">
            <header className="jumbotron mt-3">
                <h3>
                    <strong>{content.email}</strong>
                </h3>
            </header>
            <ul class="list-group">
                <li class="list-group-item">
                    <p className="h6">ID <span className="text-muted">{content.id}</span></p>
                </li>
                <li class="list-group-item">
                    <p className="h6">Email <span className="text-muted">{content.email}</span></p>
                </li>
                <li class="list-group-item">
                    <p className="h6">Location <span className="text-muted"> San Lazaro Village, Orange Walk Belize</span></p>
                </li>
            </ul> 
        </div>
     
    );
};

export default Profile;