import React, { useContext, useState } from 'react';
import './YourCart.css';
import Navbar from '../../Home/Navbar/Navbar';
import Cart from './Cart';
import burger from '../../../images/HomePageResources/Burger2 1.png';
import ReactStars from "react-rating-stars-component";
import { ProductContext } from '../../../App';

const YourCart = () => {
    const [productsInfo, SetProductsInfo] = useContext(ProductContext);
    const [quantity, setQuantity] = useState(1);
    console.log(productsInfo)

    const rating = {
        size: 20,
        value: 5,
        activeColor: "red",
        edit: true
    };

    
    const handleIncrement =(id)=>{
        const specificProduct = productsInfo.find(pd => pd._id == id);
            // specificProduct.quantity = quantity;
            setQuantity(quantity+1);
            specificProduct.quantity = quantity;
            // SetProductsInfo(specificProduct.quantity+1)
           

        
    }
    const handleDecrement =(id) => {
        const specificProduct = productsInfo.find(pd => pd._id == id);
            // specificProduct.quantity = quantity;
            setQuantity(quantity-1);
            specificProduct.quantity = quantity;
            // SetProductsInfo(specificProduct.quantity+1)
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
                                    <div className="col-6"><ReactStars {...rating} /></div>
                                </div>
                                <p className="mt-4 ml-5">{pd.price}/piece</p>
                                <div className="row mt-5 justify-content-between ml-5">
                                    <div className="col-7">
                                        <div className="row text-center">
                                            <div className="col-3 col-md-3 border border-secondary" onClick={()=> handleDecrement(pd._id)}>-</div>
                                            <div className="col-3 col-md-3 border border-secondary">{pd.quantity }</div>
                                            <div className="col-3 col-md-3 border border-secondary" onClick={()=> handleIncrement(pd._id)}>+</div>
                                        </div>

                                    </div>
                                    <div className="col-5"><h4 className="text-center text-danger">{pd.price}</h4></div>
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