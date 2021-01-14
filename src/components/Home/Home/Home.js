import React from 'react';
import FloatingCard from '../../FloatingCard/FloatingCard';
import CustomersReview from '../Carousel/CustomersReview';
import ExploreFoods from '../ExploreOurFoods/ExploreFoods';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Location from '../Location/Location';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <FloatingCard/>
            <ExploreFoods/>
            <CustomersReview/>
            <Location/>
            <Footer/>
        </div>
    );
};

export default Home;