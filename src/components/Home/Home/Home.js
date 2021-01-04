import React from 'react';
import ExploreFoods from '../ExploreOurFoods/ExploreFoods';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <ExploreFoods/>
        </div>
    );
};

export default Home;