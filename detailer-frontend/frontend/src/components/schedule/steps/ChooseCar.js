import React from 'react';
import { Link } from 'react-router-dom';
import CardSched from './CardSched';

const cars = [ 
    { 
     title: "Coop",
     alt: "Silver audi", 
     image: "https://images.unsplash.com/photo-1537126322380-e757d7feb2f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80" 
    },
    { 
     title: "SUV",
     alt: "Ford Explorer", 
     image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
    },
    { 
     title: "Car",
     alt: "Lamborghini", 
     image: "https://cdn.pixabay.com/photo/2017/05/23/20/08/mustang-2338377_1280.jpg" 
    },
    { 
     title: "Truck",
     alt: "Red Toyota Tacoma", 
     image: "https://images.unsplash.com/photo-1603598154505-0192e5365a35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" 
    },
]

function ChooseCar({ updateCar }) {
    return (
       <div className="container">
           <div className="row">           
            {   
                cars.map((car, index) => (
                    <div className="col-sm-3" key={index}>
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
