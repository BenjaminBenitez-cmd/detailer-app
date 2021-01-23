import React from 'react';

const brands = ["Toyota", "Honda", "Ford", "Chevy", "Audi", "other"];

function ChooseBrand({ updateBrand, goBack }) {
    return (
        <div className="container">
            <div className="row">
                <div className="card-columns">
                {
                    brands.map((brand, index) => (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">{brand}</h5>
                            <button className="stretched-link btn btn-primary" onClick={() => updateBrand(brand)}>{brand}</button>
                        </div>
                    </div>
                    ))
                }
                </div>
                <div className="col-sm-12 d-flex justify-content-center mt-lg-5">
                    <button className="btn btn-primary" onClick={goBack}>Return</button>
                </div>
            </div>
        </div>
    )
}

export default ChooseBrand
