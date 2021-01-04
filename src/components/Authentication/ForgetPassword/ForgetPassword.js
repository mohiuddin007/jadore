import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ForgetPassword = () => {
    return (
        <div className="backgroundStyle text-white">
            <div className="container">
            <div className="row justify-content-center pt-5">
                <div className="col-8 col-sm-8 col-md-5 col-lg-5 col-xl-5 pt-5">
                    <h4 className="text-center mb-5">Forget Password</h4>
                    <form className="mt-3">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faEnvelope} />  Email address</label>
                            <input type="email" className="form-control inputBox" id="exampleInputEmail1" placeholder="example@email.com" />
                        </div>
                        <div className="d-grid gap-2 mt-5">
                            <button className="btn btn-danger rounded-pill py-2" type="button"><b>Next</b> </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ForgetPassword;