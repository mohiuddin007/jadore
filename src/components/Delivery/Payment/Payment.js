import React from 'react';
import './Payment.css';
import Navbar from '../../Home/Navbar/Navbar';
import mobileBanking from '../../../images/Rectangle 92.png';
import visaCard from '../../../images/visa-debit-card-.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import Cart from '../Cart/Cart';

const Payment = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data, event) => {
        console.log(data)
    };
    return (
        <div className="exploreFoodBg text-white pb-5">
            <Navbar />
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-md-7 pb-1">

                        <div className="row mt-5 ml-3">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="True" checked />
                                <label className="form-check-label" for="exampleRadios1">
                                    Delivery address
                                 </label>
                            </div>
                            <div className="form-check ml-4">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="True" checked />
                                <label className="form-check-label" for="exampleRadios1">
                                    Delivery time & cost
                                </label>
                            </div>
                            <div className="form-check ml-5">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="True" checked />
                                <label className="form-check-label" for="exampleRadios1">
                                    Payment Policy
                                </label>
                            </div>
                        </div>

                        <h2 className="mt-5">Billing method</h2>
                        <div className="row justify-content-between mt-2">
                            <div className="col-6">Please enter your payment method</div>
                            <div className="col-4">Step 1 of 3</div>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="custom-control custom-checkbox bg-white px-5 py-2 rounded-pill mt-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" value="True" checked/>
                                <label className="custom-control-label text-dark" for="customCheck1">Cash on delivery</label>
                            </div>

                            <div className="row justify-content-center mt-4">
                                <div className="col-4">
                                    <div className="paymentCard">
                                        <img src={mobileBanking} className="img-fluid mobileBankingImg mt-3" alt="" />
                                        <p className="text-dark">Mobile Banking</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="paymentCard">
                                        <img src={visaCard} className="img-fluid visaCardImg mt-4" alt="" />
                                        <p className="text-dark">Pay With Visa Card</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="paymentCard">
                                        <FontAwesomeIcon icon={faPlus} className="addNewCard mt-3" />
                                        <p className="text-dark">Add New Card</p>
                                    </div>
                                </div>
                            </div>

                            <div className="custom-control custom-checkbox bg-white px-5 py-2 rounded-pill mt-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                <label className="custom-control-label text-dark" for="customCheck1">Paypal</label>
                            </div>

                            <div className="paymentInfo mt-4 p-3">
                                <div className="row justify-content-between">
                                    <div className="col-4">
                                        <p>Visa Card</p>
                                    </div>
                                    <div className="col-4">
                                        {/* <img src={visaCard} className="img-fluid visaCardImg ml-3" alt=""/> */}
                                    </div>
                                </div>


                                <div className="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Card number</label>
                                    <input type="text" name="cardNumber" className="form-control inputBox" id="exampleInputEmail1" placeholder="Card number" ref={register({ required: true })} />
                                    {errors.name && <span className="error text-danger">Card number is required</span>}
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Card holder</label>
                                            <input type="text" name="cardHolder" className="form-control inputBox" id="exampleInputEmail1" placeholder="Card holder" ref={register({ required: true })} />
                                            {errors.name && <span className="error text-danger">Card holder is required</span>}
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Expiration date</label>
                                            <input type="date" name="expirationDate" className="form-control inputBox" id="exampleInputEmail1" placeholder="DD/MM/YY" ref={register({ required: true })} />
                                            {errors.name && <span className="error text-danger">Expiration date is required</span>}
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">CVC</label>
                                            <input type="text" name="cvc" className="form-control inputBox" id="exampleInputEmail1" placeholder="CVC" ref={register({ required: true })} />
                                            {errors.name && <span className="error text-danger">CVC is required</span>}
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                <label class="custom-control-label" for="customCheck1">Save this card for next use</label>
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-success btn-block rounded-pill py-2 mt-4 checkoutBtn">Continue</button>
                                {/* <input className="btn btn-danger btn-block rounded-pill py-2 mt-4" type="submit" defaultValue="Continue" /> */}
                            </div>

                            
                        </form>
                    </div>
                    <div className="col-md-3 text-center mt-5 pb-1">
                        <Cart/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;