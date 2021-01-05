import React from 'react';
import AuthService from '../services/auth.service';

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();
    console.log(currentUser.token);   

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>Testing Text</strong> Profile
                </h3>
            </header>
            <p>
                <strong>Token:</strong>{currentUser.token.substring(0, 20)} ...{" "}
                {currentUser.token.substr(currentUser.token.length - 20)}
            </p>
            <p>
                <strong>ID:</strong>{currentUser.id} || Testing ID
            </p>
        </div>
    );
};

export default Profile;