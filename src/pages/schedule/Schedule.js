import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { postUserWash } from '../../services/user.service';
import ScheduleSteps from '../../components/ui-components/ScheduleSteps';
import { ChooseBrand, ChooseCar, ChooseSchedule, ChooseLocation, Confirm } from './steps';

const array = [
    {
        main: "Step 1",
        subtitle: "Pick Your Car Type",
    },
    {
        main: "Step 2",
        subtitle: "Pick Your Car Brand",
    },
    {
        main: "Step 3",
        subtitle: "Choose Your Schedule",
    },
    {
        main: "Step 4",
        subtitle: "Choose Your Location",
    },
    {
        main: "Confirmation",
        subtitle: "Schedule your wash"
    }
]

function Schedule({ updateNotification }){
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [title, setTitle] = useState({ main: "Step 1", subtitle: "Select the type of vehicle"});
    const [car, setCar] = useState('');
    const [brand, setBrand] = useState('');
    const [schedule, setSchedule] = useState('');
    const [location, setLocation] = useState({});
    const [message, setMessage] = useState('');

    //The add step and minus step control the flow of the checkout
    const addStep = () => {
        setActiveStep((prevStep) => prevStep + 1);
        setProgress((prevNumber) => prevNumber + 25);
    }
    const minusStep = () => {
        setActiveStep((prevStep) => prevStep - 1);
        setProgress((prevNumber) => prevNumber - 25);
    }

    //The following functions return the state the schedule
    const updateCar = (car) => {
        addStep();
        setTitle({...array[1]});
        setCar(car);
    }

    const updateBrand = (brand) => {
        addStep();
        setTitle({...array[2]});
        setBrand(brand);
    }
    const updateSchedule = (schedule) => {
        addStep();
        setTitle({...array[3]})
        setSchedule(schedule)
    }

    const updateLocation = (location) => {
        addStep();
        setTitle({...array[4]});
        setLocation(location);
    }

    const submitWash = async (details) => {
        addStep();  
        try {
          const message = await postUserWash(details);
          setMessage(message.statusText);
          updateNotification(1);
        } catch (e) {
            setMessage("Opps, this is embarassing we could not schedule your request");
        }
    }

    const Response = () => message ? (
        <div className="d-flex justify-content-center align-items-center center_space text-center">
            <p className="h5 add_margin">{message}, return to <Link to="/dashboard">home</Link></p>
        </div>

    ) : (
      <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '80vh', width: '100%'}}>
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
        </div>
        <p className="h5 mt-3">Scheduling</p>
      </div>
    )

    let information = {
        name: car,
        carType: brand,
        due: schedule,
        ...location
    }

    //determines in which step the user is located
    const stepChecker = (step) => {
        switch(step){
            case 0:
               return <ChooseCar updateCar={updateCar}/>
            case 1: 
                return <ChooseBrand updateBrand={updateBrand} goBack={minusStep}/>
            case 2:
                return <ChooseSchedule updateSchedule={updateSchedule} goBack={minusStep} />
            case 3: 
                return <ChooseLocation updateLocation={updateLocation} goBack={minusStep} />
            case 4:
                return <Confirm information={information} submitWash={submitWash} minusStep={minusStep}/>   
            case 5: 
                return <Response />
            default: 
                return <ChooseCar />
        }
    }

    return (
        <>
            { activeStep < 5 && (<div className="container">
                <ScheduleSteps valueNow={`${progress}`}/>
                <h3 className="text-center pt-3 pb-3">{title.main}</h3>
                <p className="text-center">{title.subtitle}</p>
            </div>)
            }
            {
                stepChecker(activeStep)
            }
        </>
    )
}

export default Schedule;