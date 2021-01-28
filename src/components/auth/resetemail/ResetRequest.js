import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { resetRequest } from '../../../services/auth.service';
import { CheckForEmail } from '../../../services/auth.validators';



function ResetRequest() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const SuccessMessage = () => (
        <p className="position-absolute" style={{ top: '50%'}} >Email sent ! Please check your inbox <Link to='/signin'>Sign in</Link></p>
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        const isValid = CheckForEmail(email);
        if(!isValid){
            setMessage("Enter valid Email");
            return;
        } 
        resetRequest(email)
        .then((response) => {
            if(response.status === 201){
                setSuccess(true);
            } else if (response.status === 401) {
                setMessage(response.message);
                console.log(response)
            } else {
                setMessage("Unable to process request");
            }
        }, (error) => {
            setMessage("Unable to process request");
        })
        .catch((e) =>{
            console.log(e);
            setMessage("Unable to send request");
        });
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
                    <p className="h5">Enter email</p>
                    <form onSubmit={ handleSubmit }>
                        <input  
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                        />
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
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


export default ResetRequest;
