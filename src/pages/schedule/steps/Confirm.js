import React, { useEffect, useState } from 'react'
import { getUserLocation } from '../../../services/user.service';

function Confirm({ information, submitWash, minusStep }) {
    const [location, setLocation] = useState('');
    useEffect(() => {
     const getLoc = async () => {
        const location = await getUserLocation(information.longitude, information.latitude);
        setLocation(location.data.features[0].place_name);
     } 
     getLoc();
    }, [information]);
    return (
       <div className="container">
           <ul className="list-group">
            <li className="list-group-item">Car: {information.name}</li>
            <li className="list-group-item">Brand: {information.carType}</li>
            <li className="list-group-item">Schedule: {information.due}</li>
            <li className="list-group-item">Location: {location}</li>
          </ul>
          <div className="row d-flex justify-content-center mt-3">
            <button className="btn btn-primary mr-3" onClick={() => submitWash(information)}>Schedule</button>
            <button className="btn btn-secondary" onClick={minusStep}>Return</button>
          </div>
       </div>
    )
}

export default Confirm;
