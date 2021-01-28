import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { registerAuth } from '../../services/auth.service';


function Authenticate() {
    const { token } = useParams();
    const [message, setMessage] = useState("");

    useEffect(() => {
        registerAuth(token)
        .then((response) => {
            if(response.status === 201){
                setMessage("Successfully created account");
            }
        }, 
        () => {
            setMessage("Invalid or Expired Token");
        }
        )
        .catch(e => {
            setMessage("Unable to connect to server");
        })
    }, [token])
    return (
        <div className="d-flex justify-content-center align-items-center h-100 w-100">
            <p>
            {message}, <Link to="/signin">Sign in</Link>
            </p>
        </div>
    )
}

export default Authenticate
