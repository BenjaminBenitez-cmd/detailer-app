import React from 'react';  
import { Link } from 'react-router-dom';
import threeMockups from '../../assets/img/three-mockups-lg.png';
import twoMockups from '../../assets/img/two-mockups-lg.png';
import model from '../../assets/img/model-lg.png';
import FastForwardIcon from '@material-ui/icons/FastForward';
import HighQualityIcon from '@material-ui/icons/HighQuality';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import './home.css';

function Home(){
    return (
        <>
        <main>
        <article className="hero add_margin">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <img src={threeMockups} className="img-fluid hero_image pt-5 pb-5" alt="Images showing mockups of the app"/>
                    </div>  
                    <div className="col-xs-12 col-sm-6 d-flex align-items-center justify-content-center">
                        <h1>Detailing Made Easy and Fast</h1>
                    </div>
                </div>
            </div>
        </article>
        <article className="section_one add_margin">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-4 mb-5">
                        <div className="card">
                            <ul>
                                <li><FastForwardIcon/></li>
                                <li><p>Fast Action</p></li>
                                <li><p>Our professionals will be at your disposal as soon as you schedule</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 mb-5">
                        <div className="card">
                            <ul>
                                <li><HighQualityIcon/></li>
                                <li><p>Quality Not Quantity</p></li>
                                <li><p>Your Satisfaction is our priority we wont rush</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 mb-5">
                        <div className="card">
                            <ul>
                                <li><PhonelinkRingIcon/></li>
                                <li><p>At your service</p></li>
                                <li><p>Need your car clean this afternoon? You can count on us</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article className="section_two">
            <div className="container-fluid shape">
                <div className="container-fluid mx-0">
                    <div className="row add_margin">
                        <div className="col-sm-6 col-md-6">
                            <h3><q>Detailer has completely changed the way we maintain our cars</q></h3>
                            <p>Your car is in the best hands, our technicians will ensure you are satisfied and if you are not you get your money back.</p>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <img className="img-fluid" src={model} alt="Model wearing detailer shirt"/> 
                        </div>  
                    </div>
                </div>
            </div>
        </article>    
        <article className="section_three add_margin">
            <div className="container_fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <img className="img-fluid" src={twoMockups} alt="Smart phones with representation of app"/>
                    </div>          
                    <div className="col-xs-12 col-sm-6 col-md-6 section_three_p">
                        <h3>Payments and Tracking Made as Easy as One, Two, Three.</h3>
                    </div>          
                </div>
            </div>
        </article>   
    </main>
    <footer className="add_margin">
        <div className="container-fluid">
            <ul>
                <li>
                    <Link to='signin'>Sign in</Link>
                </li>
                <li>
                    <Link to='register'>Register</Link>
                </li>
            </ul>
            <p className="text-center">Copyright© bbenitez.tech 2021</p>
        </div>
    </footer>
    </>
    )
}

export default Home;