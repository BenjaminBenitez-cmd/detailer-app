import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ScheduleSteps from '../ui-components/ScheduleSteps';
import { getUserWash } from '../services/user.service';

function ViewWash(){
    const { id } = useParams();
    const [content, setContent ] = useState({});
    
    const progressConverter = (condition) => {
        switch (condition) {
            case "washing":
                return 50;
            case "on the way":
                return 20;
            case "drying car":
                return 70;
            case "applying wax":
                return 80
            case "completed":
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
        })
    }, [id]);
    
    return (
        <div className="container">
            <h1>{content.name}</h1>
            <ScheduleSteps valueNow={progressConverter(content.status)}/>
            <p>
                <strong>Car Type: </strong>{content.name}
            </p>
            <p>
                <strong>Time: </strong>{content.due}
            </p>
            <p>
                <strong>Wash Type: </strong>{content.washType}
            </p>
            <p>
                <strong>Payment: </strong>{isPaid(content.paid)}
            </p>
            <p>
                <strong>Location: </strong> Placeholder location
            </p>
            <Link to="/washes" className="btn btn-primary">Go back</Link>
        </div>
    )
    
};

export default ViewWash;