import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import chilliChicken from '../../../images/LoginPage/kisspng-chilli-chicken-chicken-nugget-chili-pepper-free-spicy-shredded-chicken-pull-png-image-5a694f269b66d3 1.png';
import friedChicken from '../../../images/LoginPage/PngJoy_kfc-bucket-crispy-fried-chicken-png-download_9851047 1.png';
import salad from '../../../images/LoginPage/IMGBIN_greek-salad-vegetable-greek-cuisine-stock-photography-png_CeXLnZBK 1.png';
import kfcChicken from '../../../images/LoginPage/PngJoy_kfc-chicken-kfc-fried-chicken-png-png-download_7322209 2.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = (data, event) => {
        console.log(data)
    };

    return (
        <div className="backgroundStyle text-white" style={{ height: "700px" }}>
            <img src={kfcChicken} className="kfcChicken" alt="" />
            <img src={salad} className="salad" alt="" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8 col-sm-8 col-md-5 col-lg-5 col-xl-5">
                        <h4 className="text-center mb-4">Sing Up</h4>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faUser} />  User Name</label>
                                <input type="name" name="userName" className="form-control inputBox" id="exampleInputEmail1" placeholder="Your Name" ref={register({ required: true })} />
                                {errors.name && <span className="error">Name is required</span>}
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faPhone} />  Phone</label>
                                <input type="number" name="phoneNumber" className="form-control inputBox" id="exampleInputEmail1" placeholder="Enter your phone number" ref={register({ required: true })} />
                                {errors.name && <span className="error">Phone number is required</span>}
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faEnvelope} />  Email address</label>
                                <input type="email" name="email" className="form-control inputBox" id="exampleInputEmail1" placeholder="example@email.com" ref={register({ required: true })} />
                                {errors.name && <span className="error">Email is required</span>}
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label"><FontAwesomeIcon icon={faLock} />  Password</label>
                                <input type="password" name="password" className="form-control inputBox" placeholder="Write a password" ref={register({ required: true })} />
                                {errors.name && <span className="error">Password is required</span>}
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label"><FontAwesomeIcon icon={faLock} />  Re-Enter Password</label>
                                <input type="password" name="password" className="form-control inputBox" placeholder="Write again the password" ref={register({ required: true })} />
                                {errors.name && <span className="error">Password is required</span>}
                            </div>

                            <div className="d-grid gap-2 mt-5">
                                <input className="btn btn-danger btn-block rounded-pill py-2" type="submit" defaultValue="Sign Up" />
                            </div>
                            
                        </form>
                        <p className="text-center mt-3">Already have an account? <Link to="/login"><span className="text-danger">Login</span></Link></p>
                    </div>
                </div>
            </div>
            <img src={chilliChicken} className="chilliChicken" alt="" />
            <img src={friedChicken} className="friedChicken" alt="" />
        </div>
    );
};

export default SignUp;