import React from 'react';
import './ExploreFoodBg.css';

const ExploreFoods = () => {
    return (
        <div className="exploreFoodBg text-white">
            <div className="container pt-5">
                <h4>Explore Our Foods</h4>
                <div className="row mt-5 ">
                   <button className="btn ml-2 foodExploreBtn">All</button>
                   <button className="btn ml-2 foodExploreBtn">Lunch</button>
                   <button className="btn ml-2 foodExploreBtn">Dinner</button>
                   <button className="btn ml-2 foodExploreBtn">Snacks</button>
                   <button className="btn ml-2 foodExploreBtn">Drink</button>
                   <input type="text" className="form-control ml-auto searchBar " placeholder="Search Your Food" />
                </div>
            </div>
        </div>
    );
};

export default ExploreFoods;