import React from 'react';
import CustomersReview from '../Carousel/CustomersReview';
import ExploreFoods from '../ExploreOurFoods/ExploreFoods';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <ExploreFoods/>
            <CustomersReview/>
        </div>
    );
};

export default Home;