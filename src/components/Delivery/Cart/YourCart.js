import React from 'react';
import './YourCart.css';
import Navbar from '../../Home/Navbar/Navbar';
import Cart from './Cart';
import burger from '../../../images/HomePageResources/Burger2 1.png';
import ReactStars from "react-rating-stars-component";

const YourCart = () => {

    const rating = {
        size: 20,
        value: 5,
        activeColor: "red",
        edit: true
    };
    return (
        <div className="exploreFoodBg text-white pb-5">
            <Navbar />
            <div className="container pb-5">
                <h1 className="mt-5">Your Cart</h1>
                <div className="row justify-content-between pb-5">
                    <div className="col-md-8">
                        <div className="row mt-3 yourCart">
                            <div className="col-4 bg-warning cartImgBorder">
                                <img src={burger} className="img-fluid mx-auto yourCartImg" alt="" />
                            </div>
                            <div className="col-8 p-3 yourCartBody">
                                <div className="row justify-content-between ml-4">
                                    <div className="col-7"><h4>Big boss Burger</h4></div>
                                    <div className="col-5"><ReactStars {...rating} /></div>
                                </div>
                                <p className="mt-4 ml-5">$120/piece</p>
                                <div className="row mt-5 justify-content-between ml-5">
                                    <div className="col-7">
                                        <div className="row text-center">
                                            <div className="col-md-3 border border-secondary">-</div>
                                            <div className="col-md-3 border border-secondary">1</div>
                                            <div className="col-md-3 border border-secondary" >+</div>
                                        </div>

                                    </div>
                                    <div className="col-5"><h4 className="text-center text-danger">$120</h4></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourCart;