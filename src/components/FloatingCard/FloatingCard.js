import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import ReactStars from "react-rating-stars-component";
import './FloatingCard.css';
import { Link } from 'react-router-dom';

const FloatingCard = (props) => {
    const [productsInfo, SetProductsInfo] = useContext(ProductContext);

    const rating = {
        size: 20,
        value: 5,
        activeColor: "red",
        edit: true
    };
    return (
            <div className="row" >
                <div className="col-md-4 ml-auto">
                    <div class="h-60 d-inline-block cart showCart">

                    {
                        productsInfo.map(pd => <>
                          
                        <div className="row mt-3 yourCart">
                            <div className="col-4 bg-warning cartImgBorder">
                                <img src={pd.img} className="img-fluid mx-auto floatingCartImg" alt="" />
                            </div>
                            <div className="col-8 yourCartBody">
                                <div className="row justify-content-between">
                                    <div className="col-5"><small>{pd.title}</small></div>
                                    <div className="col-5"><small><ReactStars {...rating} /></small></div>
                                </div>
                                <small className="mt-4">{pd.price}/piece</small>
                                <div className="row mt-3 justify-content-between">
                                    <div className="col-7">
                                        <div className="row text-center">
                                            <div className="col-2 border border-secondary" onClick={()=> props.updateProductInfo(pd._id, (pd.quantity-1))}>-</div>
                                            <div className="col-2 border border-secondary">{pd.quantity }</div>
                                            <div className="col-2 border border-secondary" onClick={()=> props.updateProductInfo(pd._id, (pd.quantity+1))}>+</div>
                                        </div>

                                    </div>
                                    <div className="col-5"><h4 className="text-center text-danger">{(pd.price * pd.quantity).toFixed(2)}</h4></div>
                                </div>

                            </div>
                            
                        </div>
                    
                    </>
                         )
                    } 
                    <Link to="/cart">
            <button className="btn btn-success btn-block rounded-pill mt-2 checkoutBtn">Checkout</button>
            </Link>
                    </div>
                </div>
            </div>
    );
};

export default FloatingCard;