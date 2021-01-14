import React, { useEffect, useRef, useState } from 'react';
import { mapboxBoxToken } from '../config';
import mapboxgl from "mapbox-gl";
// import 'mapbox-gl/dist/mapbox-gl.css';
import { Link } from 'react-router-dom';

mapboxgl.accessToken = mapboxBoxToken;


function ScheduleStepThree(props){
    const {car, typeOfWash } = props.location.state;
    const mapContainerRef = useRef(null);
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");

     useEffect(() => {
        if ("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(position => {
                setLongitude(position.coords.longitude);
                setLatitude(position.coords.latitude);                
                const map = new mapboxgl.Map({
                    container: mapContainerRef.current,
                    // See style options here: https://docs.mapbox.com/api/maps/#styles
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [longitude, latitude],
                    zoom: 12.5,
                  });
                  
                //   var el = document.querySelector('.markerbox');
                //   el.classList.add('marker');

                  // make a marker for each feature and add to the map
                  new mapboxgl.Marker()
                      .setLngLat([longitude, latitude])
                      .addTo(map);
        
                 // Add geolocate control to the map.
                map.addControl(
                    new mapboxgl.GeolocateControl({
                        positionOptions: {
                        enableHighAccuracy: true
                        },
                        trackUserLocation: true,
                        showUserLocation:true
                    })
                );

                // add navigation control (the +/- zoom buttons)
                map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

                return () => map.remove();       
            })
        }  else {

        }
    }, [])
    

    return (
    <>
    <div className="mapContainer" ref={mapContainerRef}>
        <div className="markerbox"></div>
    </div> 
    <div className="card fixed-bottom" style={{width: "30rem", margin: "0 auto"}}>
        <div className="card-header">
            Confirm Location
        </div>  
        <div className="card-body">
            <h5 className="card-title">Location</h5>
            <p className="card-text">San Lazaro village, Orange Walk Belize</p>
            {
              longitude && <Link 
              to={{
                  pathname: "/schedule/order",
                  state:{
                      car: car,
                      typeOfWash: typeOfWash,
                      longitude: longitude,
                      latitude: latitude
                  }
              }}
              className="btn btn-primary"
              >Confirm</Link>
            }
            
        </div>
    </div>
    </>
    )
}

export default ScheduleStepThree;