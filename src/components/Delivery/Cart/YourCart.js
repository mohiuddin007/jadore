import React, { useContext, useState } from 'react';
import './YourCart.css';
import Navbar from '../../Home/Navbar/Navbar';
import Cart from './Cart';
import ReactStars from "react-rating-stars-component";
import { ProductContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const YourCart = (props) => {
    const [productsInfo, SetProductsInfo] = useContext(ProductContext);

    const rating = {
        size: 20,
        value: 5,
        activeColor: "red",
        edit: true
    };

    const deleteProduct = (productId) => {
        const floatingCartProduct = productsInfo.filter( pd => pd._id !== productId);
 
        SetProductsInfo(floatingCartProduct)
     }

    return (
        <div className="exploreFoodBg text-white pb-5">
            <Navbar />
            <div className="container pb-5">
                <h1 className="mt-5">Your Cart</h1>
                <div className="row justify-content-between pb-5">
                <div className="col-md-8">
                    {
                        productsInfo.map(pd => <>
                          
                        <div className="row mt-3 yourCart">
                            <div className="col-4 bg-warning cartImgBorder">
                                <img src={pd.img} className="img-fluid mx-auto yourCartImg" alt="" />
                            </div>
                            <div className="col-8 p-3 yourCartBody">
                                <div className="row justify-content-between ml-4">
                                    <div className="col-6"><h4>{pd.title}</h4></div>
                                    <div className="col-4"><ReactStars {...rating} /></div>
                                    <div className="cursor" onClick={() => deleteProduct(pd._id)} > <FontAwesomeIcon icon={faTrashAlt} /></div>
                                </div>
                                <p className="mt-4 ml-5">{pd.price}/piece</p>
                                <div className="row mt-5 justify-content-between ml-5">
                                    <div className="col-7">
                                        <div className="row text-center">
                                            <div className="col-3 col-md-3 border border-secondary cursor" onClick={()=> props.updateProductInfo(pd._id, (pd.quantity-1))}>-</div>
                                            <div className="col-3 col-md-3 border border-secondary cursor">{pd.quantity }</div>
                                            <div className="col-3 col-md-3 border border-secondary cursor" onClick={()=> props.updateProductInfo(pd._id, (pd.quantity+1))}>+</div>
                                        </div>

                                    </div>
                                    <div className="col-5"><h4 className="text-center text-danger">{(pd.price * pd.quantity).toFixed(2)}</h4></div>
                                </div>

                            </div>
                        </div>
                    
                    </>
                         )
                    } 
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