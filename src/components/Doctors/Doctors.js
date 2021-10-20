import React from 'react';
import Pediatrician from '../../images/doctor-1.png';
import Neurologist from '../../images/doctor-2.png';
import Psychiatrist from '../../images/doctor-3.png';
import Surgeon from '../../images/doctor-4.png';
import Gynecologist from '../../images/doctor-5.png';
import Cardiologist from '../../images/doctor-6.png';
import './Doctors.css';

const Doctors = () => {
    return (
        <div className = "container">
            <div className="pt-5 mt-5 mb-3">
            <h1 className="text-center fw-bold my-5" style={{color: 'rgb(61, 56, 122)'}}>Meet Some of Our Specialists Doctors</h1>
            <div>
                <div className="department-container">
                    <div className=" p-1 border rounded-3" style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="pediatrician p-2" src={Pediatrician} alt="" style={{width: '350px', height:'350px'}}/>
                        </div>
                        <div className="p-2 text-center" style={{backgroundColor: 'rgb(132, 141, 184)'}}>
                            <h3>Dr. Ammilee Watson</h3>
                            <h6 style={{color: 'rgb(97, 50, 91)'}}>Pediatrician</h6>
                        </div>

                    </div>
                    <div className="p-1  border rounded-3" style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="neurologist p-2" src={Neurologist} alt="" style={{width: '350px', height:'350px'}}/>
                        </div>
                        <div className="p-2 text-center" style={{backgroundColor: 'rgb(132, 141, 184)'}}>
                            <h3>Dr. Sashant Roy</h3>
                            <h6 style={{color: 'rgb(97, 50, 91)'}}>Neurologist</h6>
                        </div>

                    </div>
                    <div className="p-1 border rounded-3"style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="psychiatrist p-2" src={Psychiatrist} alt="" style={{width: '350px', height:'350px'}}/>
                        </div>
                        <div className="p-2 text-center" bg-primary style={{backgroundColor: 'rgb(132, 141, 184)'}}>
                            <h3>Dr. Ema Jenny</h3>
                            <h6 style={{color: 'rgb(97, 50, 91)'}}>Psychiatrist</h6>
                        </div>

                    </div>

                    <div className="p-1 border rounded-3"style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="surgeon p-2" src={Surgeon} alt="" style={{width: '350px', height:'350px'}}/>
                        </div>
                        <div className="p-2 text-center" style={{backgroundColor: 'rgb(132, 141, 184)'}}>
                            <h3>Dr. James Bond</h3>
                            <h6 style={{color: 'rgb(97, 50, 91)'}}>Surgeon</h6>
                        </div>

                    </div>
                    <div className="p-1 border rounded-3" style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="gynecologist p-2" src={Gynecologist} alt="" style={{width: '350px', height:'350px'}}/>
                        </div>
                        <div className="p-2 text-center" style={{backgroundColor: 'rgb(132, 141, 184)'}}>
                            <h3>Dr. Jenifer Laura</h3>
                            <h6 style={{color: 'rgb(97, 50, 91)'}}>Gynecologist</h6>
                        </div>

                    </div>
                    <div className="p-1 border rounded-3" style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="Cardiologist p-2" src={Cardiologist} alt="" style={{width: '350px', height:'350px'}}/>
                        </div>
                        <div className="p-2 text-center" style={{backgroundColor: 'rgb(132, 141, 184)'}}>
                            <h3>Dr. Thomas Alvin</h3>
                            <h6 style={{color: 'rgb(97, 50, 91)'}}>Cardiologist</h6>
                        </div>

                    </div>
                    </div>

                    </div>
                    

                    
                </div> 
        </div>
    );
};

export default Doctors;