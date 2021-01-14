import React from 'react';
import { Link } from 'react-router-dom';

function CardWash(props){
    return (
        <div className="card" >
            <div className="card-header">
                {props.carType}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.carType}</h5>
                <p className="card-text">Scheduled for: {props.time}</p>
                <Link to={"washes/" + props.id} className="btn btn-primary">view more</Link>
            </div>
        </div>
    )
}

export default CardWash;