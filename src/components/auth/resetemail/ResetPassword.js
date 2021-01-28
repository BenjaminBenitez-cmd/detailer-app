import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { resetPassword } from '../../../services/auth.service';
import { checkForPassword } from '../../../services/auth.validators';

function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const { token } = useParams();

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangePasswordConfirm = (e) => {
        setConfirmPass(e.target.value);
    }

    const SuccessMessage = () => (
        <p className="position-absolute" style={{ top: '50%'}} >Password successfully changed <Link to='/signin'>Sign in</Link></p>
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setIsLoading(true);

        const isValid = checkForPassword(confirmPass);
        console.log(isValid);
        if(isValid !== 'valid'){
            setMessage(isValid);
            return;
        }
        if(password !== confirmPass){
            setMessage("Passwords do not match")
            return;
        }
        resetPassword(token, confirmPass)
        .then((response) => {
            if(response.status === 201){
                setSuccess(true);
            } else if (response.status === 401) {
                setMessage(response.data.message);
            }
        },() => {
            setMessage("Unable to process request");
        })
        .catch((error) => {
            console.error(error);
            setMessage("Unable to process request");
        })
        setIsLoading(false);
    }


 
    return (
        <div className="d-flex align-items-center flex-column">
            {
                success ? (
                    <SuccessMessage />
                ) : (
                   <>
                        <div style={{height: '100px'}}/>
                        <div className="card card-container p-3 mt-lg-5" style={{ width: '30rem'}}>
                            <div className="h5">Enter new Password</div>
                            <form onSubmit={ handleSubmit }>
                                <div className="form-group">
                                    <label htmlFor="password">New Password</label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={confirmPass}
                                    onChange={onChangePasswordConfirm}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    {isLoading && (
                                        <span className="spinner-bordet spinner-border-sm"></span>
                                    )}
                                    <span>Submit</span>
                                </button>
                                {
                                    message && (
                                        <div className="form-group mt-3">
                                            <div className="alert alert-danger" role="alert">
                                                {message}
                                            </div>
                                        </div>
                                    )
                                }
                            </form>
                        </div>
                   </> 
                )
            }
           
        </div>
    )
}

export default ResetPassword;
