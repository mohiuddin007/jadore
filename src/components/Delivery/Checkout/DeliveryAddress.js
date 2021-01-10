import React from 'react';
import './DeliveryAddress.css';
import Navbar from '../../Home/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import Cart from '../Cart/Cart';

const DeliveryAddress = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data, event) => {
        console.log(data)
    };
    return (
        <div className="exploreFoodBg text-white">
            <Navbar />
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-md-7">
                        <div className="row mt-5 ml-3">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                <label className="form-check-label" for="exampleRadios1">
                                    Delivery address
                                 </label>
                            </div>
                            <div className="form-check ml-4">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
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
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"> Last name</label>
                                        <input type="text" name="lastName" className="form-control inputBox" id="exampleInputEmail1" placeholder="Last name" ref={register({ required: true })} />
                                        {errors.name && <span className="error text-danger">Last name is required</span>}
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"> First name</label>
                                        <input type="text" name="firstName" className="form-control inputBox" id="exampleInputEmail1" placeholder="First name" ref={register({ required: true })} />
                                        {errors.name && <span className="error text-danger">First name is required</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"> Phone number</label>
                                        <input type="number" name="phone" className="form-control inputBox" id="exampleInputEmail1" placeholder="Phone number" ref={register({ required: true })} />
                                        {errors.name && <span className="error text-danger">Phone number is required</span>}
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"> Email address</label>
                                        <input type="email" name="email" className="form-control inputBox" id="exampleInputEmail1" placeholder="example@email.com" ref={register({ required: true })} />
                                        {errors.name && <span className="error text-danger">Email is required</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-between">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"> Thana</label>
                                        <input type="text" name="thana" className="form-control inputBox" id="exampleInputEmail1" placeholder="Town or city" ref={register({ required: true })} />
                                        {errors.name && <span className="error text-danger">Thana Name is required</span>}
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"> District</label>
                                        <input type="text" name="district" className="form-control inputBox" id="exampleInputEmail1" placeholder="Address" ref={register({ required: true })} />
                                        {errors.name && <span className="error text-danger">District Name is required</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"> ZIP/Postal code</label>
                                        <input type="text" name="Postal code or ZIP" className="form-control inputBox" id="exampleInputEmail1" placeholder="Postal code or ZIP" ref={register({ required: true })} />
                                        {errors.name && <span className="error text-danger">ZIP/Postal code is required</span>}
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"> Address</label>
                                        <input type="text" name="address" className="form-control inputBox" id="exampleInputEmail1" placeholder="Road, house, flat" ref={register({ required: true })} />
                                        {errors.name && <span className="error text-danger">Address is required</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid gap-2">
                                <input className="btn btn-danger btn-block rounded-pill py-2 mt-4" type="submit" defaultValue="Login" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3 text-center mt-5">
                        <Cart/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryAddress;