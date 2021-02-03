import React from 'react';
import whiteCar from '../../assets/img/white-car.jfif';
import blueCar from '../../assets/img/sport-car.jfif';
import leatherSeat from '../../assets/img/leather-seat.jfif';
import Card from '../../components/ui-components/Card';
import'./style.css';


function DetailerUser({ notification }){
    return (
        <div className="add_margin">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Card 
                            image={whiteCar}
                            title={"Schedule a wash"}
                            paragraph={"Schedule wash for now or later."}
                            link={"schedule"}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card 
                            image={blueCar}
                            title={"View washes"}
                            paragraph={"Make payment and view progress"}
                            link={"washes"}
                            notification={notification}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card 
                            image={leatherSeat}
                            title={"Profile"}
                            paragraph={"Your profile settings"}
                            link={"profile"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailerUser;