import React from 'react';

const brands = ["Toyota", "Honda", "Ford", "Chevy", "Audi", "other"];

function ChooseBrand({ updateBrand, goBack }) {
    return (
            <div className="container">
                <div className="row">
                    {
                        brands.map((brand, index) => (
                        <div className="col-xs-6 col-sm-4 p-3" key={index}>
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">{brand}</h5>
                                    <button className="stretched-link btn btn-primary" onClick={() => updateBrand(brand)}>{brand}</button>
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

export default ChooseBrand
