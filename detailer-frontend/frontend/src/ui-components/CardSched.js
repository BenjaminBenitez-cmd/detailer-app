import React from 'react';

function CardSched(props){
    return (
       
        <div className="col-md-3" onClick={props.function}>
            <div className="card" style={{width: "15rems"}}>
                <img className="card-img-top" src={props.src} alt={props.alt}/>
                <div className="card-body">
                    <p className="card-title">{props.title}</p>
                </div>
            </div>
        </div>
        
    )
}

export default CardSched;