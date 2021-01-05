import React from 'react';
import { NavLink } from 'react-router-dom';

function Card(props){
    return (
        <div class="col-md-6 mb-3 mt-3 h-50">
        <div class="card">
            <img src={props.image} class="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.paragraph}</p>
                <NavLink to={`/${props.link}`} className="btn btn-primary">{props.link}</NavLink>
            </div>
        </div>
    </div>
    )
}
export default Card;