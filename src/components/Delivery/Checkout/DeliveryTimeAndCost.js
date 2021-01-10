import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../Home/Navbar/Navbar';
import Cart from '../Cart/Cart';

const DeliveryTimeAndCost = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data, event) => {
        console.log(data)
    };
    return (
        <div className="exploreFoodBg text-white pb-5">
            <Navbar />
            <div className="container pb-5">
                <div className="row justify-content-around pb-5">
                    <div className="col-md-7 pb-1">
                        <div className="row mt-5 ml-3">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="True" checked />
                                <label className="form-check-label" for="exampleRadios1">
                                    Delivery address
                                 </label>
                            </div>
                            <div className="form-check ml-4">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="True" checked/>
                                <label className="form-check-label" for="exampleRadios1">
                                    Delivery time & cost
                                </label>
                            </div>
                            <div className="form-check ml-5">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label className="form-check-label" for="exampleRadios1">
                                    Payment Policy
                                </label>
                            </div>
                        </div>
                        <h2 className="mt-5">Address</h2>
                        <div className="row justify-content-between mt-2">
                            <div className="col-6">Please enter your delevery address</div>
                            <div className="col-4">Step 1 of 3</div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row justify-content-between mt-5">
                                <div className="col-5">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"> Estimated Delivery Time</label>
                                        <input type="text" name="deliveryTime" className="form-control inputBox inputBorder" id="exampleInputEmail1" placeholder="20 minutes" defaultValue="20 minutes" ref={register({ required: true })} />
                                        {errors.name && <span className="error text-danger">Delivery Time is required</span>}
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"> Estimated Delivery Charge</label>
                                        <input type="text" name="deliveryCharge" className="form-control inputBox inputBorder" id="exampleInputEmail1" placeholder="$10" defaultValue="$10" ref={register({ required: true })} />
                                        {errors.name && <span className="error text-danger"> Delivery Charge is required</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-danger btn-block rounded-pill py-2 mt-4">Continue</button>
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

export default DeliveryTimeAndCost;