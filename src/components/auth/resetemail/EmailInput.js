import React, { useState } from 'react';
import { resetRequest } from '../../../services/auth.service';
import { CheckForEmail } from '../../../services/auth.validators';

function EmailInput() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = CheckForEmail(email);
        if(!isValid){
            setMessage("Enter valid Email");
        } 
        resetRequest(email)
        .then((response) => {
            console.log(response);
        })
        .catch((e) => console.log(e));
    }

    return (
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
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>          
    )
}

export default EmailInput;
