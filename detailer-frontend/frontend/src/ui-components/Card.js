import React from 'react';
import { NavLink } from 'react-router-dom';

function Card(props){
    return (
        <div className="mb-3 mt-3 h-50">
            <div className="card">
                <img src={props.image} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.paragraph}</p>
                    <NavLink to={`/${props.link}`} className="btn btn-primary">{props.link}</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Card;