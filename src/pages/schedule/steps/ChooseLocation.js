import React, { useEffect, useRef, useState } from 'react';
import { mapboxBoxToken } from '../../../config';
import mapboxgl from "mapbox-gl";
import axios from 'axios';
import { Link } from 'react-router-dom';

mapboxgl.accessToken = mapboxBoxToken;


function ChooseLocation({ updateLocation, goBack }){
    const mapContainerRef = useRef("");
    const [viewPort, setViewport] = useState({});
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    const getLocation = async (lng, lat) => {
        const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + lng + "," + lat + ".json?access_token=" + mapboxBoxToken;
        const response = await axios.get(url);
        setLocation(response.data.features[0].place_name);
    }

    const ErrorScreen = () => (
        <div className="position-absolute d-flex justify-content-center align-items-center" style={{top: 0, left: 0, backgroundColor: 'white', height: '100vh', width: '100%'}}>
            <p className="h4">{error}, <Link to='/dashboard'>return to home</Link></p>
        </div>
    )

     useEffect(() => {
        if ("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords; 
                console.log(latitude, longitude);             
                let map = new mapboxgl.Map({
                    container: mapContainerRef.current,
                    // See style options here: https://docs.mapbox.com/api/maps/#styles
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [longitude, latitude],
                    zoom: 12.5,
                  });
                  getLocation(longitude, latitude);
                  new mapboxgl.Marker()
                      .setLngLat([longitude, latitude])
                      .addTo(map);

                 setViewport({longitude, latitude});

                return () => map.remove();       
            }, (error) => {
                if(error.message === 'User denied Geolocation'){
                    setError('Please enable location tracking');
                }
                console.error(error);
            })
        }  else {
            setError('error');
        }
      
    }, [])
    

    return (
    <>
    {
        error ? <ErrorScreen /> 
        : (
            <>
               <div className="mapContainer" ref={(el) => (mapContainerRef.current = el)} /> 
               <div className="card fixed-bottom" style={{width: "30rem", margin: "0 auto"}}>
                    <div className="card-header">
                        Confirm Location
                    </div>  
                    <div className="card-body">
                        <h5 className="card-title">Location</h5>
                        <p className="card-text">{location}</p>
                    </div>
                    <div className="card-footer">
                        {
                            viewPort && (<button className="btn btn-primary mr-3" onClick={() => updateLocation(viewPort)}>Confirm</button>)
                        }
                    <button className="btn btn-primary" onClick={goBack}>Cancel</button>
                    </div>
                </div>
                {
                    error && <ErrorScreen />
                }
            </>
        )
    }
    </>
    )
}

export default ChooseLocation;