import React from 'react';
import LinkSched from '../ui-components/Link-Sched';


function ScheduleStepTwoHalf(props){
    return (
        <div className="card-columns">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Honda</h5>
                    <LinkSched car={props.car} brand={"Honda"}/>
                </div>
            </div>
            <div className="card p-3">
                <div className="card-body">
                    <h5 className="card-title">Ford</h5>
                    <LinkSched car={props.car} brand={"Ford"}/>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Toyota</h5>
                    <LinkSched car={props.car} brand={"Toyota"}/>
                </div>
            </div>
            <div className="card bg-primary text-white text-center p-3">
                <div className="card-body">
                    <h5 className="card-title">Chevy</h5>
                    <LinkSched car={props.car} brand={"Chevy"}/>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Audi</h5>
                    <LinkSched car={props.car} brand={"Audi"}/>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Other</h5>
                    <LinkSched car={props.car} brand={"Other"}/>
                </div>
            </div>
        </div>

    )
}
export default ScheduleStepTwoHalf;