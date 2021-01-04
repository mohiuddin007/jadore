import React from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div className="backgroundStyle text-white">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-8 col-sm-8 col-md-5 col-lg-5 col-xl-5">
                    <h4 className="text-center mb-4">Login or SingUp</h4>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faEnvelope} />  Email address</label>
                            <input type="email" className="form-control inputBox" id="exampleInputEmail1" placeholder="example@email.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label"><FontAwesomeIcon icon={faLock} />  Password</label>
                            <input type="password" className="form-control inputBox" placeholder="Write a password" />
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-md-4">
                                <p className="text-danger">Forgot password?</p>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-danger rounded-pill py-3" type="button"><b>Login</b> </button>
                        </div>
                        <p className="text-center mt-3">Or via social media</p>
                        <div className="row d-flex justify-content-center mt-3">
                            <div className="col-md-2"><img src="https://i.ibb.co/Nj1NRdn/download.png" className="logo" alt="" /> </div>
                            <div className="col-md-2"> <img src="https://i.ibb.co/r75nsLd/google.png" className="logo" alt="" /></div>
                        </div>
                        <p className="text-center mt-3">Dont have an account? <span className="text-danger">Sign Up</span></p>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;