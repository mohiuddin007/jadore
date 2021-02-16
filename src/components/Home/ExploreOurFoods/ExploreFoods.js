import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ExploreFoodBg.css';
import FoodsData from './FoodsData';

const ExploreFoods = () => {
const [foods, setFoods] = useState([]);
// const first8Food = foods.slice(0, 8);

 //state for search and filter
 const [filter, setFilter] = useState('');
 const [searchItem, setSearchItem] = useState('');

const [searchResult, setSearchResult] = useState([]);


useEffect(()=>{
    fetch('https://backendjadore.softifydigital.com/api/showfeature')
    .then(res => res.json())
    .then(data => {
        setFoods(data.data);
    })
},[])

//specific catagories food filter
const filteredProduct = foods.filter( product => product.catagories == filter)
    
// search from input field
useEffect(() =>{
    setSearchResult(
        foods.filter(product => {
              return product.title.toLowerCase().includes(searchItem.toLowerCase())
           })
    )
  }, [searchItem])

    return (
        <div className="exploreFoodBg pb-5 text-white">
            <div className="container pt-5">
                <h4>Explore Our Foods</h4>
                <div className="row mt-5 ">
                    <Link to="/products">
                    <button className="btn px-3 px-md-3 ml-3 foodExploreBtn">All</button>
                    </Link>
                    <button className="btn px-2 px-md-3 ml-3 foodExploreBtn" onClick={ () => setFilter('lunch')}>Lunch</button>
                    <button className="btn px-1 px-md-3 ml-3 foodExploreBtn" onClick={ () => setFilter('dinner')}>Dinner</button>
                     <button className="btn px-1 px-md-3 ml-3 foodExploreBtn" onClick={() => setFilter('breakfast')}>Snacks</button>
                    <button className="btn px-1 px-md-3 ml-3 foodExploreBtn" onClick={ () => setFilter('lunch')}>Drink</button>
                   <input type="text" className="form-control ml-auto searchBar mt-5 mt-md-0 mr-md-0 mr-5 mr-sm-5" onChange={e => setSearchItem(e.target.value)}  placeholder="Search Your Food" />
                   {/* <span className="mt-md-2 mr-5"><FontAwesomeIcon icon={faSearch}/></span> */}
                </div>
            </div>
                <div className="container">
                <div className="row justify-content-center pb-5">
                    {
                        filteredProduct.length > 0 ?
                        filteredProduct.map(data => <FoodsData data={data} key={data._id}/> )
                            :
                            searchResult.map(data => <FoodsData data={data} key={data._id}/>)
                           
                    }
                    {
                       foods.map(data => <FoodsData data={data} key={data._id}/>)
                    }
                </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-5 text-center">
                        <Link to="/products">
                     <button className="btn btn-light rounded-pill text-danger px-4">See All</button>
                     </Link>
                    </div>
                </div>
        </div>
    );
};

export default ExploreFoods;