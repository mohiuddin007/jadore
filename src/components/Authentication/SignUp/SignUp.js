import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import chilliChicken from '../../../images/LoginPage/kisspng-chilli-chicken-chicken-nugget-chili-pepper-free-spicy-shredded-chicken-pull-png-image-5a694f269b66d3 1.png';
import friedChicken from '../../../images/LoginPage/PngJoy_kfc-bucket-crispy-fried-chicken-png-download_9851047 1.png';
import salad from '../../../images/LoginPage/IMGBIN_greek-salad-vegetable-greek-cuisine-stock-photography-png_CeXLnZBK 1.png';
import kfcChicken from '../../../images/LoginPage/PngJoy_kfc-chicken-kfc-fried-chicken-png-png-download_7322209 2.png';

const SignUp = () => {
    return (
        <div className="backgroundStyle text-white" style={{height:"700px"}}>
            <img src={kfcChicken} className="kfcChicken" alt=""/>
            <img src={salad} className="salad" alt=""/>
            <div className="container">
        <div className="row justify-content-center">
            <div className="col-8 col-sm-8 col-md-5 col-lg-5 col-xl-5">
                <h4 className="text-center mb-4">Sing Up</h4>
                <form>
                <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faUser} />  User Name</label>
                        <input type="email" className="form-control inputBox" id="exampleInputEmail1" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faPhone} />  Phone</label>
                        <input type="email" className="form-control inputBox" id="exampleInputEmail1" placeholder="Enter your phone number" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faEnvelope} />  Email address</label>
                        <input type="email" className="form-control inputBox" id="exampleInputEmail1" placeholder="example@email.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><FontAwesomeIcon icon={faLock} />  Password</label>
                        <input type="password" className="form-control inputBox" placeholder="Write a password" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><FontAwesomeIcon icon={faLock} />  Re-Enter Password</label>
                        <input type="password" className="form-control inputBox" placeholder="Write again the password" />
                    </div>
                    <div className="d-grid gap-2 mt-5">
                        <button className="btn btn-danger rounded-pill py-2" type="button"><b>Sign Up</b> </button>
                    </div>
                    <p className="text-center mt-3">Already have an account? <span className="text-danger">Login</span></p>
                </form>
            </div>
        </div>
        </div>
        <img src={chilliChicken} className="chilliChicken" alt=""/>
            <img src={friedChicken} className="friedChicken" alt=""/>
    </div>
    );
};

export default SignUp;