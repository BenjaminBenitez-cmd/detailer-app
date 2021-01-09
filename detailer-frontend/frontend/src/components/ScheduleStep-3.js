import React from 'react';
import ScheduleSteps from '../ui-components/ScheduleSteps';
import { mapboxBoxToken } from '../config';
import mapboxgl from "mapbox-gl";
import { Link } from 'react-router-dom';

mapboxgl.accessToken = mapboxBoxToken;

function ScheduleStepThree(props){
    
     const { car, typeOfWash } =  props.location.state;
     const longitude = "89.8983";
     const latitude = "-89";

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ScheduleSteps valueNow={"75"} />
                    <h1 className="text-center">Confirm Location</h1>
                    <p className="text-center">This is the location where we will wash your car</p>
                </div>
                <div className="col-md-12">
                    
                </div>
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <Link to="/" className="btn btn-danger  mr-2">Cancel</Link>
                    <Link 
                     to={{
                         pathname:"/schedule/order",
                         state:{
                             car: car,
                             typeOfWash: typeOfWash,
                             latitude: latitude,
                             longitude: longitude
                         }
                     }}
                     className="btn btn-primary"
                     >
                    Confirm
                    </Link>
                </div>
            </div>
        </div> 
    )
}

export default ScheduleStepThree;