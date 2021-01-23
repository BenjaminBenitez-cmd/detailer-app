import React, { useState } from 'react';
import { checkForBoth } from '../../services/auth.validators';

import { register }  from '../../services/auth.service';
import { Link } from 'react-router-dom';

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
        const password = e.target.value;
        setPassword(password);
    };

    const SuccessScreen = () => (
        <div className="container h-100 justify-content-center">
            <p className="h3">Account created you can now <Link to="signin">Signin</Link></p>
        </div>
    )

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        const isValid = checkForBoth(email, password);

        if(isValid.length === 0){
            register(email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    console.log(response.data.message)
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
            )
        } else {
            setMessage(isValid.join());
        }
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
                        <p className="display-4">Sign in to detail your car with one click</p>
                    </div>
                    <div className="col-md-6 d-flex align-content-center">
                        <div className="card card-container p-3 mt-lg-5" style={{ width: '30rem'}}>
                            <form onSubmit={handleRegister}>
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