import React, { useEffect, useState } from 'react';
import API from '../FakeAPI';
import CardWash from '../ui-components/CardWash';

function ViewWashes(){
    const [results, setResults ] = useState("pending");
    const [content, setContent ] = useState([]);

    const handleNavClick = (e) => {
        const typeResult = e.target;
        const activeNav = document.querySelector('.active');
        activeNav.classList.remove("active");
        typeResult.classList.add("active");
        setResults(typeResult.id);
    };

    useEffect(() => {
        const data = API.data;
        let newData = [];
        data.forEach((element) => {
            if(element.list === results){
                newData.push(element);
            }
        })
        setContent(newData);
    }, [results]);

    return (
        <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <a className="nav-link active" id="pending" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" onClick={handleNavClick}>Pending</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="completed" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" onClick={handleNavClick}>Completed</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="archive" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" onClick={handleNavClick}>Archive</a>
            </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    {
                        content.map((element) => (
                            <CardWash 
                                key={element.id}
                                id={element.id} 
                                list={element.list} 
                                carType={element.carType} 
                                time={element.time}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewWashes;