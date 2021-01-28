import React from 'react';

function CardSched({ image, title, alt, updateCar}){
    return (
        <div className="card" style={{width: "15rems"}}>
            <img className="card-img-top" src={image} alt={alt}/>
            <div className="card-body">
                <p className="card-title">{title}</p>
                <button className="stretched-link btn btn-primary" onClick={() => updateCar(title)}>{title}</button>
            </div>
        </div>
    )
}

export default CardSched;