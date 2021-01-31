import React from 'react';
import { Link } from 'react-router-dom';

function CardWash(props){
    return (
        <div className="card" >
            <div className="card-header">
                {props.carType}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Scheduled at: {props.time}</p>
                <p className="card-text">Status: {props.work}</p>
                <div class="progress" style={{height: '1px'}}>
                    <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <Link to={"washes/" + props.id} className="btn btn-primary">view more</Link>
            </div>
        </div>
    )
}

export default CardWash;