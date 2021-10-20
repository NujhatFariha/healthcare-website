import React from 'react';
import './About.css';

const About = () => {
    return (
       <div>
            <div className="p-5 about text-light">
            <h1 className="header-font">About MediGlow <br/> and Our Services</h1>
            <p>We provide quality service to our patients and treat them with care.</p>
            <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="p-5 m-5" style={{backgroundColor: 'rgb(238, 210, 252)', borderRadius:'15px'}}>
            <h1 className="fw-bold mb-3" style={{color: 'rgb(84, 25, 97)'}}>Our Mission : </h1>
            <div>
                <p className="fs-4 mb-5">
                    Our Mission is to Provide high quality services to the patients and treat them with care. Care is the most important thing a patient need during treatment and our experts treat the patients with intense care nd support.We have specialist doctors who treat the patient with intensive care and support. Our mission is to treat patients with care and support and make them feel lively and healthy again.
                </p>
            </div>
        </div>
       </div>
    );
};

export default About;