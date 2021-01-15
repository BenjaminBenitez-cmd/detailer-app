import React from 'react';
import { NavLink } from 'react-router-dom';
import ScheduleSteps from '../ui-components/ScheduleSteps';

function ScheduleStepTwo(props){
    const information = props.location.state;
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ScheduleSteps valueNow={"50"}/>
                    <h1>Choose the time</h1>
                    <p>What time do you want us to detail your car</p>
                </div>
                <div className="col-md-12 mb-3"> 
                     <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Schedule Now</h5>
                            <p className="card-text">Your car will be washed as soon as possible</p>
                            <NavLink 
                            to={{
                                pathname: "/schedule/location",
                                state: {
                                    ...information,
                                    due: "now"
                                }
                            }} 
                            className="btn btn-primary"
                            >Now
                            </NavLink>
                        </div>
                    </div>
                </div>
                 <div className="col-md-12"> 
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Schedule Later</h5>
                            <p className="card-text">Your car will be washed at a specified time</p>
                            <NavLink 
                            to={{
                                pathname: "/schedule/location",
                                state: {
                                    ...information,
                                    due: "now"
                                }
                            }} 
                            className="btn btn-primary"
                            >Now
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleStepTwo;