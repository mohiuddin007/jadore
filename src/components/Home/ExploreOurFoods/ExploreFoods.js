import React, { useEffect, useState } from 'react';
import './ExploreFoodBg.css';
import FoodsData from './FoodsData';

const ExploreFoods = () => {
const [foods, setFoods] = useState([]);

const first6Food = foods.slice(0, 6);

useEffect(()=>{
    fetch('https://hot-onion.herokuapp.com/api/v1/foods')
    .then(res => res.json())
    .then(data => {
        setFoods(data.data.foods);
    })
},[])

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
                <div className="row justify-content-center">
                    {
                        first6Food.map(data => <FoodsData data={data} key={data._id}/>)
                    }
                </div>
        </div>
    );
};

export default ExploreFoods;