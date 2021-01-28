import React from 'react';

const types = [ 
    {
        title: "Schedule now", 
        text: "Your car will be washed as soon as possible",
        type: "now"
    }, 
    {
        title: "Schedule later",
        text: "your car will be washed on a set schedule",
        type: "later"
    }

]

function ChooseSchedule({ updateSchedule, goBack }) {
    return (
        <div className="container">
            <div className="row">
               
                {
                    types.map((card, index) => (
                        <div className="col-md-12 mb-3" key={index}> 
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <button className="stretched-link btn btn-primary" onClick={() => updateSchedule(card.type)}>{card.type}</button>
                            </div>
                        </div>
                    </div>
                    ))
                }
                <div className="col-sm-12 d-flex justify-content-center mt-lg-5">
                    <button className="btn btn-primary" onClick={goBack}>Return</button>
                </div>
            </div>
        </div>
    )
}

export default ChooseSchedule;
