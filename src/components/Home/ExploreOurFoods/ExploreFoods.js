import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './ExploreFoodBg.css';
import FoodsData from './FoodsData';

const ExploreFoods = () => {
const [foods, setFoods] = useState([]);

const first8Food = foods.slice(0, 8);

useEffect(()=>{
    fetch('https://hot-onion.herokuapp.com/api/v1/foods')
    .then(res => res.json())
    .then(data => {
        setFoods(data.data.foods);
    })
},[])

    return (
        <div className="exploreFoodBg pb-5 text-white">
            <div className="container pt-5">
                <h4>Explore Our Foods</h4>
                <div className="row mt-5 ">
                    <button className="btn px-3 px-md-3 ml-3 foodExploreBtn">All</button>
                    <button className="btn px-2 px-md-3 ml-3 foodExploreBtn">Lunch</button>
                    <button className="btn px-1 px-md-3 ml-3 foodExploreBtn">Dinner</button>
                     <button className="btn px-1 px-md-3 ml-3 foodExploreBtn">Snacks</button>
                    <button className="btn px-1 px-md-3 ml-3 foodExploreBtn">Drink</button>
                   <input type="text" className="form-control ml-auto searchBar mt-5 mt-md-0 mr-md-0 mr-5 mr-sm-5" placeholder="Search Your Food" />
                   {/* <span className="mt-md-2 mr-5"><FontAwesomeIcon icon={faSearch}/></span> */}
                </div>
            </div>
                <div className="container">
                <div className="row justify-content-center pb-5">
                    {
                        first8Food.map(data => <FoodsData data={data} key={data._id}/>)
                    }
                </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-5 text-center">
                     <button className="btn btn-light rounded-pill text-danger px-4">See All</button>
                    </div>
                </div>
        </div>
    );
};

export default ExploreFoods;