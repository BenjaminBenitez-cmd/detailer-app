import React, { useEffect, useState } from 'react';
import { getUserWashes } from '../../services/user.service';
import CardWash from './CardWash';

function ViewWashes({ updateNotification }){
    const [results, setResults] = useState("active");
    const [content, setContent] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const handleNavClick = (e) => {
        const typeResult = e.target;
        const activeNav = document.querySelector('.active');
        activeNav.classList.remove("active");
        typeResult.classList.add("active");
        setResults(typeResult.id);
    };

    useEffect(() => {
    updateNotification(null);   
        let newData = [];
        getUserWashes()
        .then((response) => {
            console.log(response.data.data);
            response.data.data.forEach((element) => {
              if(element.status === results){
                newData.push(element);
              }
            })
        })
        .then(() => {
            setContent(newData)
            setLoading(false);
        })
        .catch((e) => {
            setLoading(false);
        })
    }, [results, updateNotification]);

    return (
        <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="active" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" onClick={handleNavClick}>Pending</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="completed" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" onClick={handleNavClick}>Completed</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="archive" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" onClick={handleNavClick}>Archive</a>
                </li>
            </ul>
            {
                isLoading ? (
                        <div className="spinner-border text-primary position-absolute m-auto" style={{ top: 0, left: 0,  bottom: 0, right: 0}} role="status">
                            <span className="visually-hidden"></span>
                        </div>
                ) : (
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            {
                                content.map((element) => (
                                    <CardWash 
                                        key={element._id}
                                        id={element._id}
                                        name={element.name} 
                                        list={element.list} 
                                        carType={element.carType} 
                                        time={element.due}
                                        work={element.work}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}

export default ViewWashes;