import React, { useState } from 'react';
import { validateThree } from '../../services/auth.validators';

import { register }  from '../../services/auth.service';

function Register(){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    
    const onChangeUser = (e) => {
        const user = e.target.value;
        setUsername(user);
    };
    
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const SuccessScreen = () => (
        <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column">
            <p>Email sent! Activate your account with email</p>
            <p className="text-primary" onClick={handleRegister} style={{ cursor: 'pointer'}}>Click to resend email</p>
        </div>
    )

    const handleRegister = (e) => {
        e.preventDefault();

        setLoading(true)
        setMessage("");
        setSuccessful(false);

        const obj = {
            email: email,
            username: username,
            password: password
        }

        const isValid = validateThree(obj);
        if(isValid.length > 0){
            setLoading(false);
            setMessage(isValid[0]);
            return;
        }

        
        register(username, email, password)
        .then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                setLoading(false);
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
                setLoading(false);
            }
        ).catch((err) => {
            setMessage("Opps, it appears we have a network error");
            setSuccessful(false);
            setLoading(false);
        })
    };
    return (
        <>
        {
            successful ? ( <SuccessScreen /> )
            : (
                <div className="container">
                <div style={{height: '100px'}}></div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="h3 p-3"><span className="display-4">Register</span> to start detailing your car with one click.</p>
                    </div>
                    <div className="col-md-6 d-flex align-content-center">
                        <div className="card card-container p-3 mt-lg-5" style={{ width: '30rem'}}>
                            <form onSubmit={handleRegister}>
                                <div>
                                    <div className="form-group">        
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            value={username}
                                            onChange={onChangeUser}
                                        />
                                    </div>
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
                                        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                                            Sign up
                                            {loading && (
                                                <span class="spinner-border spinner-border-sm ml-2" role="status" aria-hidden="true"></span>
                                            )}
                                        </button>
                                    </div>
                                </div>            
                                {message && (
                                <div className="form-group">
                                    <div className= "alert alert-danger" role="alert">
                                        {message}
                                    </div>
                                </div>
                                )}
                            </form>
                        </div>
                    </div>
                  </div>
              </div>
            )
        }
       </>
        );
};

export default Register;