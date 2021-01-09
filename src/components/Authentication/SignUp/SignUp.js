import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faPhone, faTruckLoading, faUser } from '@fortawesome/free-solid-svg-icons';
import chilliChicken from '../../../images/LoginPage/kisspng-chilli-chicken-chicken-nugget-chili-pepper-free-spicy-shredded-chicken-pull-png-image-5a694f269b66d3 1.png';
import friedChicken from '../../../images/LoginPage/PngJoy_kfc-bucket-crispy-fried-chicken-png-download_9851047 1.png';
import salad from '../../../images/LoginPage/IMGBIN_greek-salad-vegetable-greek-cuisine-stock-photography-png_CeXLnZBK 1.png';
import kfcChicken from '../../../images/LoginPage/PngJoy_kfc-chicken-kfc-fried-chicken-png-png-download_7322209 2.png';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const SignUp = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [newUserInfo, setNewUserInfo] = useState({});
    console.log(newUserInfo);
    const history = useHistory();

    const onSubmit = (data, event) => {
        const newUser = { ...data }
        fetch('http://backendjadore.softifydigital.com/api/usersignup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                setNewUserInfo(data)

                if (data.status == true) {
                    event.target.reset();
                    setTimeout(() => {
                        history.push('/login')
                    }, 4000);

                    toast('Registration Success')

                }
                if (data.status == false) {
                    toast(data.message)

                }
            })

    }

    return (
        <div className="backgroundStyle text-white">
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <img src={kfcChicken} className="kfcChicken float-left" alt="" />
                    <img src={chilliChicken} className="chilliChicken mt-5 float-left" alt="" />
                </div>
                <div className="col-md-6 pt-md-5">
                    <h4 className="text-center mb-4">Sign Up</h4>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faUser} />  User Name</label>
                            <input type="name" name="username" className="form-control inputBox" id="exampleInputEmail1" placeholder="Your Name" ref={register({ required: true })} />
                            {errors.name && <span className="error">Name is required</span>}
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faPhone} />  Phone</label>
                            <input type="number" name="phone" className="form-control inputBox" id="exampleInputEmail1" placeholder="Enter your phone number" ref={register({ required: true })} />
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

                            <button className="btn btn-danger btn-block rounded-pill py-2" type="submit">
                                {
                                    newUserInfo.status == true ? <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> : 'Sign Up'
                                }
                            </button>
                        </div>

                    </form>


                    <p className="text-center mt-3">Already have an account? <Link to="/login"><span className="text-danger">Login</span></Link></p>
                </div>
                <div className="col-md-3">
                    <img src={salad} className="salad float-right" alt="" />
                    <img src={friedChicken} className="friedChicken float-right mt-5" alt="" />
                </div>
            </div>

        </div>
    );
};

export default SignUp;