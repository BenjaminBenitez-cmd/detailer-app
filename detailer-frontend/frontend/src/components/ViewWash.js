import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ScheduleSteps from '../ui-components/ScheduleSteps';
import API from '../FakeAPI';

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

    useEffect(() => {
        const data = API.data;
        let newData = {};
        data.forEach((element) => {
            if(element.id === Number(id)){
                newData = element;
            }
        });
        setContent(newData);
    }, []);
    
    return (
        <div className="container">
            <h1>{content.carType}</h1>
            <ScheduleSteps valueNow={progressConverter(content.status)}/>
            <p>
                <strong>Car Type: </strong>{content.carType}
            </p>
            <p>
                <strong>Time: </strong>{content.time}
            </p>
            <p>
                <strong>Wash Type: </strong>{content.washType}
            </p>
            <p>
                <strong>Payment: </strong>{content.payment}
            </p>
        </div>
    )
    
};

export default ViewWash;