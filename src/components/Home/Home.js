import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';
import SingleService from '../SingleService/SingleService';

const Home = () => {
    return (
        <div>
             <Banner/>
             <Details/>  
             <SingleService/>
        </div>
    );
};

export default Home;