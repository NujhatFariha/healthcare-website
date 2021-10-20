import React from 'react';
import './Help.css';

const Help = () => {
    return (
       <div>
            <div className="help">
        </div>
        <div className="my-5">
        <h1 className="fw-bold mb-3 text-center" style={{color: 'rgb(94, 116, 171)'}}>Join Our Help Club</h1>
        </div>
        <div className=" p-3 m-5" style={{backgroundColor: 'rgb(169, 199, 181)'}}>
            <div>
                <h3 className="mb-3 fw-bold">Why You Should Join Our Help Club ?</h3>
                <p className="fs-5 mb-5">
                    Our HelpClub is specially made for the patients who are suffering from trauma and depression. Everyone can join our help club while staying in the hospital. Our experts provide special guidelines and counselling to the member of the help club. Also we provide emergency support and facilities to our patients 
                </p>
            </div>
        </div>
        <div className=" p-3 m-5" style={{backgroundColor: 'rgb(176, 185, 209)'}}>
            <div>
                <h3 className="mb-3 fw-bold">How To Become Our Club Member ?</h3>
                <p className="fs-5 mb-5">
                    You can become our help club member by providing your required medical documents and reports . You dont have to pay any extra fees for that. It is completely free. We genuinely care about you and promise to give better care and services.
                </p>
            </div>
        </div>
        <div className="text-center mb-5">
            <button className="join-btn">Join Now</button>
        </div>
       </div>
    );
};

export default Help;