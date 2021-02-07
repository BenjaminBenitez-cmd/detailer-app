import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ScheduleSteps from '../../components/ui-components/ScheduleSteps';
import { getUserLocation, getUserWash } from '../../services/user.service';

function ViewWash(){
    const { id } = useParams();
    const [content, setContent ] = useState({});
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');
    
    const progressConverter = (condition) => {
        switch (condition) {
            case "just started":
                return 20;
            case "washing":
                return 40;
            case "waxing car":
                return 60;
            case "drying":
                return 80;
            case "finished":
                return 100;
        
            default:
                return 100;
        }
    };
    const isPaid = (condition) => {
        if(condition){
            return "paid"
        } 
        return "Pending"
    }
    

    useEffect(() => {
        getUserWash(id)
        .then((response) => {
            setContent(response.data.data);
            getUserLocation(response.data.data.longitude, response.data.data.latitude)
            .then((response) => setLocation(response.data.features[0].place_name))
        })
        .catch(() => {
            setError(true);
        })
    }, [id]);  
    
    return (
        <div className="add_margin position-relative" style={{height: 'inherit'}}>
            {
                error ? (
                    <div className="center_space d-flex justify-content-center align-items-center">Unable to fetch details <Link to="/washes">return</Link></div>
                ) : (
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="col-12">
                                <h1>{content.carType} {content.name}</h1>
                                <ScheduleSteps valueNow={progressConverter(content.work)} progress={content.work}/>
                                <p className="h6 font-weight-light py-2"><span className="font-weight-normal">Scheduled for:</span> {content.due}</p>
                                <p className="h6 font-weight-light py-2"><span className="font-weight-normal">Location:</span> {location}</p>
                                <p className="h6 font-weight-light py-2"><span className="font-weight-normal">Status:</span> {content.status}</p>
                                <p className="h6 font-weight-light py-2"><span className="font-weight-normal">Paid:</span> {isPaid(content.paid)}</p>
                            </div>
                        </div>
                        
                        <div className="container-fluid py-3 d-flex justify-content-center">
                            <Link className="btn btn-primary" to='/washes'>Return</Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
    
};

export default ViewWash;