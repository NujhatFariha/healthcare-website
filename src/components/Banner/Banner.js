import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="banner d-flex  align-items-center">
                <div className="row container mt-5">
                    <div className="col-md-7 col-sm-9 text-center">
                        <h1 className="text-light fw-bolder mb-3" style={{fontSize:'50px'}}>Welcome to <span style={{color:'rgb(126, 70, 145)', fontSize:'55px'}}> MediGlow</span></h1>
                        <h2 className="fw-bolder mb-3" style={{fontSize:'35px', color:'rgb(71, 76, 112)'}}>Access to Quality Healthcare</h2>
                        <p className="fs-5 text-light">Our Mission is to Heal and Our Passion is to Care. We are Here to Help you Live Longer, not Just Treat Your Disease. We are Just Better at Making you Feel Better.</p>
                        <button className="visit-btn">Visit Us</button>
                    </div>
                    <div className="col-md-3 col-sm-1"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;