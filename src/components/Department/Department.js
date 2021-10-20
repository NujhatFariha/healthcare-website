import React from 'react';
import primaryHealth from '../../images/primary-healthcare.png';
import diagnostic from '../../images/diagnostic.png';
import cardiacCare from '../../images/cardiac-care.png';
import mentalCare from '../../images/mental-care.png';
import gynecologic from '../../images/gynecologic.png';
import dentalCare from '../../images/dental-care.png';
import './Department.css';

const Department= () => {
    return (
        // Details in the homepage
        <div className="pt-5 mt-5 mb-3">
            <h1 className="text-center fw-bold" style={{color: 'rgb(46, 140, 163)'}}>Our Healthcare Department</h1>
            <p className="text-center fs-5 px-5 py-2">These are the available department of our healthcare center and we try to provide best facilities and care for you.<br/>Together we are working for creating a better healthcare community.</p>
            <div>
                <div className="department-container container mb-5 mt-4">
                    <div className=" p-1 border rounded-3 m-4" style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="primaryHealth p-2" src={primaryHealth} alt="" style={{width: '160px', height:'150px'}}/>
                        </div>
                        <div className="p-2">
                            <h3>Primary Health Care</h3>
                        </div>

                    </div>
                    <div className="p-1  border rounded-3 m-4" style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="diagnostic  p-2" src={diagnostic} alt="" style={{width: '150px', height:'150px'}}/>
                        </div>
                        <div className="p-2">
                            <h3>Diagnostic Center</h3>
                        </div>

                    </div>
                    <div className="p-1 border rounded-3 m-4 "style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="cardiacCare p-2" src={cardiacCare} alt="" style={{width: '150px', height:'150px'}}/>
                        </div>
                        <div className="p-2">
                            <h3>Cardiac Clinic</h3>
                        </div>

                    </div>

                    <div className="p-1 border rounded-3 m-4 "style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="mentalCare p-2" src={mentalCare} alt="" style={{width: '150px', height:'150px'}}/>
                        </div>
                        <div className="p-2">
                            <h3>Mental Health Care</h3>
                        </div>

                    </div>
                    <div className="p-1 border rounded-3 m-4" style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="gynecologic p-2" src={gynecologic} alt="" style={{width: '150px', height:'150px'}}/>
                        </div>
                        <div className="p-2">
                            <h3>Gynecological Clinic</h3>
                        </div>

                    </div>
                    <div className="p-1 border rounded-3 m-4" style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="dentalCare p-2" src={dentalCare} alt="" style={{width: '160px', height:'150px'}}/>
                        </div>
                        <div className="p-2">
                            <h3>Dental Clinic</h3>
                        </div>

                    </div>
                    </div>

                    </div>
                    

                    
                </div>
    );
};

export default Department;