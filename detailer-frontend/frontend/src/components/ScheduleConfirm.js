import React, { useState } from 'react';
import ScheduleSteps from '../ui-components/ScheduleSteps';
import { Link } from 'react-router-dom';
import { postUserWash } from '../services/user.service';


function ScheduleOrder(props){    
    const information = props.location.state;
    const [value, setValue] = useState(0);
    const [message, setMessage] = useState("");
    const [successful, SetSuccessful] = useState(false);
   
   
    async function openModal() {
        document.getElementById("staticBackdrop").style.display = "block";
        document.getElementById("staticBackdrop").className += "show";
        try {
            // let response = await fakeApi(500, "Finding nearest detailer");
            // setMessage(response);
            // setValue(30); 
            // response = await fakeApi(1000, "Scheduled successfully");
            // setMessage(response);
            // setValue(100);
            // SetSuccessful(true);
            
            postUserWash(information)
            .then(response => {
                console.log(response);
            })
        } catch(err) {
            setMessage(err);
        }
    };
  
    function closeModal() {
        // document.getElementById("backdrop").style.display = "none"
        setValue(0);
        setMessage("");
        document.getElementById("staticBackdrop").style.display = "none";
        document.getElementById("staticBackdrop").className += document.getElementById("staticBackdrop").className.replace("show", "");
    };
    // Get the modal
    var modal = document.getElementById('staticBackdrop');
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal()
        };
    };
    
    
  
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p><strong>Car </strong>{information.name}</p>
                    <p><strong>Brand </strong>{information.carType}</p>
                    <p><strong>Due </strong>{information.due}</p>
                    <p><strong>Latitude </strong>{information.latitude}</p>
                    <p><strong>longitude </strong>{information.longitude}</p>
                </div>
                <div className="col-md-12 d-flex justify-content-center align-items-vertical">
                    <button type="button" className="btn btn-primary mr-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => openModal()}>
                        Confirm
                    </button>
                    <Link className="btn btn-danger" to="/dashboard">Cancel</Link>
                </div>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Scheduling</h5>
                        </div>
                        <div className="modal-body">
                            <p>{message}</p>
                            <ScheduleSteps valueNow={value}/>
                        </div>
                        <div className="modal-footer">
                            {            
                                successful ? 
                                <Link className="btn btn-primary" to="/dashboard" data-bs-dismiss="modal">Proceed</Link>
                                :(
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => closeModal()}>Cancel</button>
                                ) 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

    )
}

export default ScheduleOrder;