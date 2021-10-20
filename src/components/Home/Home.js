import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import SingleService from '../SingleService/SingleService';
import Department from '../Department/Department';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
             <Banner/>
             <SingleService/>
             <Department/>  
             <Doctors/>
        </div>
    );
};

export default Home;