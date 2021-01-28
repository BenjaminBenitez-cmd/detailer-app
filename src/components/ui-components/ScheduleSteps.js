import React from 'react';

function ScheduleSteps(props){
    return (
        <div className="progress mt-3 mb-3">
            <div className="progress-bar" role="progressbar" style={{width: props.valueNow + "%"}} aria-valuenow={props.valueNow} aria-valuemin="0" aria-valuemax="100">{props.valueNow}%</div>
        </div>
    )
}

export default ScheduleSteps;