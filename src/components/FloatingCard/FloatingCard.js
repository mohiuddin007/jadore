import React, { useContext, useState } from 'react';
import { ProductContext } from '../../App';
import './FloatingCard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import deleteBtn from '../../images/Vector.png';

const FloatingCard = (props) => {
    const [productsInfo, SetProductsInfo] = useContext(ProductContext);
    const [showCart, setShowCart] = useState(false);

    let total = 0;
    for (let i = 0; i < productsInfo.length; i++) {
        const product = productsInfo[i];
        total = total + product.price * product.quantity || 1;
    }

    const deleteProduct = (productId) => {
        const floatingCartProduct = productsInfo.filter(pd => pd._id !== productId);

        SetProductsInfo(floatingCartProduct)
    }

    return (
        <div className="row" >
            <div className="col-md-4 ml-auto">
                <div onClick={() => setShowCart(true)} className="showCartBtn text-center cursor">
                    <div className="bg-danger border-bottom">
                        <FontAwesomeIcon icon={faShoppingCart} />{productsInfo.length}
                    </div>
                    <div className="bg-white text-dark">
                        <FontAwesomeIcon icon={faDollarSign} /> {total.toFixed(2)}
                    </div>
                </div>

                <div className={showCart ? "showCart  h-60 d-inline-block cart" : " closeCart  h-60 d-inline-block cart"} >
                    <div className="row bg-danger pt-0" style={{ height: '40px' }}>
                        <div className="col-4 ml-2"><img src={deleteBtn} className="closeCart cursor" onClick={() => setShowCart(false)} alt="" /></div>
                    </div>
                    {
                        productsInfo.map(pd => <>

                            <div className="row mt-3 yourCart">
                                <div className="col-4 bg-warning cartImgBorder">
                                    <img src={pd.img} className="img-fluid mx-auto floatingCartImg" alt="" />
                                </div>
                                <div className="col-8 yourCartBody">
                                    <div className="row justify-content-between">
                                        <div className="col-8"><small>{pd.title}</small></div>
                                        <div className="col-2 cursor"><small onClick={() => deleteProduct(pd._id)}> <FontAwesomeIcon icon={faTrashAlt} /> </small></div>
                                    </div>
                                    <small className="mt-2">{pd.price}/piece</small>
                                    <div className="row mt-3 justify-content-between">
                                        <div className="col-8">
                                            <div className="row">
                                                <div className="px-1 border border-secondary cursor" onClick={() => props.updateProductInfo(pd._id, (pd.quantity - 1))}> - </div>
                                                <div className="px-1 border border-secondary cursor"> {pd.quantity}</div>
                                                <div className="px-1 border border-secondary cursor" onClick={() => props.updateProductInfo(pd._id, (pd.quantity + 1))}>+</div>
                                            </div>

                                        </div>
                                        <div className="col-3"><p className="text-center text-danger">{(pd.price * pd.quantity).toFixed(2)}</p></div>
                                    </div>

                                </div>

                            </div>

                        </>
                        )
                    }
                    <hr />
                    <div>
                        <div className="row mt-4">
                            <div className="col-6">
                                <p>Sub Total: </p>
                            </div>
                            <div className="col-6">
                                <p className="text-danger text-center">$ {total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to="/cart">
                            <button className="btn btn-success btn-block rounded-pill mt-2 checkoutBtn">Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default FloatingCard;