import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Department from '../Department/Department';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
             <Banner/>
             <Services/>
             <Department/>  
             <Doctors/>
        </div>
    );
};

export default Home;