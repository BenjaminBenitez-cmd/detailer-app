import React from 'react';


function Home(){

    let sampleData = [
        {
            title: "Detailer is coming soon",
            subTitle: "Enabling the detailing of your car with only one button"
        },
        {
            title: "Latest on news about cards"
        }
    ];

    return (
        <div className="container">
            <header className="jumbotron">
                <h2>{sampleData[0].title}</h2>
                <p>{sampleData[0].subTitle}</p>
            </header> 
        </div>
    )
}

export default Home;