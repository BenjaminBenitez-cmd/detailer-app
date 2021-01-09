import React from 'react';
import { Link } from 'react-router-dom';


function ScheduleOrder(props){    
    const { car, typeOfWash, latitude, longitude } = props.location.state;
    console.log(car, typeOfWash, latitude, longitude);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p><strong>Car </strong> {car}</p>
                    <p><strong>Type of wash </strong>{typeOfWash}</p>
                    <p><strong>Location </strong> San Lazaro Village, Orange Walk Town</p>
                </div>
                <div className="col-md-12 d-flex justify-content-center align-items-vertical">
                    <Link className="btn btn-primary mr-2" to="/dashboard">Confirm</Link>
                    <Link className="btn btn-danger" to="/dashboard">Cancel</Link>
                </div>
            </div>
        </div>

    )
}

export default ScheduleOrder;