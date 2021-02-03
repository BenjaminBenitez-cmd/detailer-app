import React from 'react';
import { Link } from 'react-router-dom';
import CardSched from './CardSched';
import redCar from '../../../assets/img/red-mustang.jpg';
import blueCar from '../../../assets/img/audi-blue.jfif';
import whiteCar from '../../../assets/img/white-car.jfif';
import redTruck from '../../../assets/img/toyota-img.jfif';


const cars = [ 
    { 
     title: "Coop",
     alt: "Silver audi", 
     image: blueCar 
    },
    { 
     title: "SUV",
     alt: "Ford Explorer", 
     image:  whiteCar
    },
    { 
     title: "Car",
     alt: "Lamborghini", 
     image: redCar 
    },
    { 
     title: "Truck",
     alt: "Red Toyota Tacoma", 
     image: redTruck
    },
]

function ChooseCar({ updateCar }) {
    return (
        <div className="container">
            <div className="row">           
                {   
                    cars.map((car, index) => (
                        <div className="col-sm-3 mb-3" key={index}>
                            <CardSched image={car.image} alt={car.alt} title={car.title} updateCar={updateCar}/>
                        </div> 
                    ))
                }
            </div>
            <br /> <br />
            <div className="col-sm-12 d-flex justify-content-center">
                <Link to='/dashboard' className="btn btn-primary">Return</Link>
            </div>
        </div>
    )
}

export default ChooseCar;
