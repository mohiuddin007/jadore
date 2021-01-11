import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import ProductMap from './ProductMap';
import { PRODUCT_PER_PAGE } from '../Constents/Constents';
import Pagination from './Pagination';

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    
    useEffect(()=>{
    const fetchProducts = async () => {
        setLoading(true);

        const res = await axios.get('https://hot-onion.herokuapp.com/api/v1/foods')
        setLoading(false);
        setAllProducts(res.data.data.foods);

        setTotalPages(Math.ceil(res.data.data.foods.length / PRODUCT_PER_PAGE))
    }
    fetchProducts();
    },[])

    const handleClick = (num) => {
        setCurrentPage(num);
    }
    return (
        <div className="productsBg text-white">
            <Navbar/>
            <div className="container">
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
                loading ? <p>Loading...</p> : <>
                <ProductMap allProducts={allProducts} currentPage={currentPage}/>
                <Pagination totalPages={totalPages} handleClick={handleClick}/>
                </>
            }
                    {/* {
                        allProducts.map(data => <ProductsData data={data} key={data._id}/>)
                    } */}
                </div>
                </div>
            <Footer/>
        </div>
    );
};

export default Products;