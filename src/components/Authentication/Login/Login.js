import React from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import fbLogo from "../../../images/LoginPage/facebook.svg";
import googleLogo from '../../../images/LoginPage/google.svg';
import { Link } from 'react-router-dom';
import chilliChicken from '../../../images/LoginPage/kisspng-chilli-chicken-chicken-nugget-chili-pepper-free-spicy-shredded-chicken-pull-png-image-5a694f269b66d3 1.png';
import friedChicken from '../../../images/LoginPage/PngJoy_kfc-bucket-crispy-fried-chicken-png-download_9851047 1.png';
import salad from '../../../images/LoginPage/IMGBIN_greek-salad-vegetable-greek-cuisine-stock-photography-png_CeXLnZBK 1.png';
import kfcChicken from '../../../images/LoginPage/PngJoy_kfc-chicken-kfc-fried-chicken-png-png-download_7322209 2.png';
import { useForm } from 'react-hook-form';
import Navbar from '../../Home/Navbar/Navbar';

const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data, event) => {
        console.log(data)
    };

    return (
        <div className="backgroundStyle text-white">
            <Navbar/>
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <img src={kfcChicken} className="kfcChicken rounded float-left" alt="" />
                    <img src={chilliChicken} className="chilliChicken rounded float-left" alt="" />
                    
                </div>
                <div className="col-md-6 pt-5">
                    <h4 className="text-center pt-5 mb-4">Login or SingUp</h4>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faEnvelope} />  Email address</label>
                            <input type="email" name="email" className="form-control inputBox" id="exampleInputEmail1" placeholder="example@email.com" ref={register({ required: true })} />
                            {errors.name && <span className="error text-danger">Email is required</span>}
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label"><FontAwesomeIcon icon={faLock} />  Password</label>
                            <input type="password" name="password" className="form-control inputBox" placeholder="Write a password" ref={register({ required: true })} />
                            {errors.name && <span className="error text-danger">Password is required</span>}
                        </div>

                        <div className="row justify-content-end">
                            <div className="col-md-4">
                                <Link to="/forgetPassword">
                                    <p className="text-danger">Forgot password?</p>
                                </Link>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <input className="btn btn-danger btn-block rounded-pill py-2" type="submit" defaultValue="Login" />
                        </div>
                        <p className="text-center mt-3">Or via social media</p>
                        <div className="row d-flex justify-content-center mt-3">
                            <div className="col-3 text-end"><img src={fbLogo} className="logo" alt="" /> </div>
                            <div className="col-3"> <img src={googleLogo} className="logo" alt="" /></div>
                        </div>
                        <p className="text-center mt-3">Dont have an account? <Link to="/signUp"><span className="text-danger" style={{ textDecoration: 'none' }}>Sign Up</span></Link></p>
                    </form>
                </div>
                <div className="col-md-3">
                    <img src={salad} className="salad rounded float-right" alt="" />

                    <img src={friedChicken} className="friedChicken rounded float-right" alt="" />
                </div>
            </div>
            {/* <img src={kfcChicken} className="kfcChicken rounded float-left" alt=""/>
            <img src={salad} className="salad rounded float-right" alt=""/>
            <div className="row justify-content-center">
            
                <div className="col-8 col-sm-8 col-md-5 col-lg-5 col-xl-5">
                    <h4 className="text-center mb-4">Login or SingUp</h4>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faEnvelope} />  Email address</label>
                            <input type="email" name="email" className="form-control inputBox" id="exampleInputEmail1" placeholder="example@email.com" ref={register({ required: true })} />
                            {errors.name && <span className="error text-danger">Email is required</span>}
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label"><FontAwesomeIcon icon={faLock} />  Password</label>
                            <input type="password" name="password" className="form-control inputBox" placeholder="Write a password" ref={register({ required: true })} />
                            {errors.name && <span className="error text-danger">Password is required</span>}
                        </div>

                        <div className="row justify-content-end">
                            <div className="col-md-4">
                                <Link to="/forgetPassword">
                                    <p className="text-danger">Forgot password?</p>
                                </Link>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <input className="btn btn-danger btn-block rounded-pill py-2" type="submit" defaultValue="Login" />
                        </div>
                        <p className="text-center mt-3">Or via social media</p>
                        <div className="row d-flex justify-content-center mt-3">
                            <div className="col-3 text-end"><img src={fbLogo} className="logo" alt="" /> </div>
                            <div className="col-3"> <img src={googleLogo} className="logo" alt="" /></div>
                        </div>
                        <p className="text-center mt-3">Dont have an account? <Link to="/signUp"><span className="text-danger" style={{ textDecoration: 'none' }}>Sign Up</span></Link></p>
                    </form>
                </div>
                
            </div>
            <img src={chilliChicken} className="chilliChicken rounded float-left" alt=""/>
            <img src={friedChicken} className="friedChicken rounded float-right" alt=""/> */}
        </div>
    );
};

export default Login;