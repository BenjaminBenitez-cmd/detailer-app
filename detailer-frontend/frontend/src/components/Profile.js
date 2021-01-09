import React from 'react';
import { getCurrentUser } from '../services/auth.service';

const Profile = () => {
    // const currentUser = getCurrentUser();

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>Benjamin</strong> Benitez
                </h3>
            </header>
            <p><strong>ID </strong>Testing ID</p>
            <p><strong>Email </strong>test@test.com</p>
            <p><strong>Location </strong>San Lazaro Village, Orange Walk Belize</p>
            <div className="d-flex align-items-baseline">
                <p className="mr-2"><strong>Darkmode </strong></p>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
};

export default Profile;