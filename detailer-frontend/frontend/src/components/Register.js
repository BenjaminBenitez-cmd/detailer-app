import React, { useState } from 'react';
import validate from '../services/auth.validators';

import AuthService from '../services/auth.service';

function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    
    const onChangePassword = (e) => {
        const password = e.target.password;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.prevent.default();

        setMessage("");
        setSuccessful(false);

        const isValid = validate.checkForBoth(email, password);

        if(isValid.length === 0){
            AuthService.register(email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                }, 
                (error) => {
                    const resMessage = 
                      (error.response && 
                        error.response.data && 
                        error.response.data.message) ||
                        error.response.data ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };
    return (
        <div className="container d-flex justify-content-center">
            <div className="col-md-5">
                <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />
        
                <form onSubmit={handleRegister}>
                    {!successful && (
                    <div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                        />
                        </div>
        
                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                        />
                        </div>
        
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                        </div>
                    </div>
                    )}
        
                    {message && (
                    <div className="form-group">
                        <div
                        className={ successful ? "alert alert-success" : "alert alert-danger" }
                        role="alert"
                        >
                        {message}
                        </div>
                    </div>
                    )}
                </form>
                </div>
            </div>
          </div>
        );
};

export default Register;