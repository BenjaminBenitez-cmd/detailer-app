import React from 'react';
import ScheduleSteps from '../ui-components/ScheduleSteps';
import CardSched from '../ui-components/CardSched';
import { Link, useHistory } from 'react-router-dom';

function Schedule(){
    // const [step, setStep] = useState("");
    // const history = useHistory();
    // const handleRedirect = (parameter) => {
    //     history.push(`/schedule/car/${parameter}`);
    // }
  
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ScheduleSteps valueNow={"25"}/>
                    <h3 className="text-center pt-3 pb-3">Step 1</h3>
                    <p className="text-center">Choose your vehicle type</p>
                </div>
                <CardSched 
                    src={"https://images.unsplash.com/photo-1537126322380-e757d7feb2f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"}
                    title={"Coop"}
                    alt={"Silver Audi"}
                >
                    <Link to="/schedule"className="btn btn-primary">Test</Link>
                </CardSched>
                <CardSched 
                    src={"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
                    title={"SUV"}
                    alt={"Ford Explorer"}
                />
                <CardSched 
                    src={"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
                    title={"Car"}
                    alt={"Green Audi Sports car"}
                />
                <CardSched 
                    src={"https://images.unsplash.com/photo-1603598154505-0192e5365a35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"}
                    title={"Truck"}
                    alt={"Red Toyota Tacoma"}
                />
            </div>
        </div>
    )
}

export default Schedule;