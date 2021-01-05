import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import chilliChicken from '../../../images/LoginPage/kisspng-chilli-chicken-chicken-nugget-chili-pepper-free-spicy-shredded-chicken-pull-png-image-5a694f269b66d3 1.png';
import friedChicken from '../../../images/LoginPage/PngJoy_kfc-bucket-crispy-fried-chicken-png-download_9851047 1.png';
import salad from '../../../images/LoginPage/IMGBIN_greek-salad-vegetable-greek-cuisine-stock-photography-png_CeXLnZBK 1.png';
import kfcChicken from '../../../images/LoginPage/PngJoy_kfc-chicken-kfc-fried-chicken-png-png-download_7322209 2.png';
import { Link, useHistory } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// import 'iziToast-master/dist/css/iziToast.min.css';
// import iziToast from 'iziToast-master/dist/js/iziToast.min.js';

toast.configure()

const SignUp = () => {
    
    const { register, handleSubmit, watch, errors } = useForm();
    console.log(errors)
    const [newUserInfo, setNewUserInfo] = useState({});
    const history = useHistory();
    console.log("new user",newUserInfo);
       
    const onSubmit = (data, event) => {
        const newUser = {...data}
        console.log(newUser);
        fetch('http://backendjadore.softifydigital.com/api/usersignup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data=>{
            console.log("data",data)
            setNewUserInfo(data)
            if(newUserInfo.status == true ){
                
              
                // toast('Registration Success')
                window.location.href('http://localhost:3000/login')
                console.log('Registration Success')
                
            }
            if(newUserInfo.status == false){
              toast(newUserInfo.message)
            }
        })

    }

    // const handleClick = () => {
    //     if(newUserInfo.status == true ){
    //         setTimeout(() => {
    //           history.push('/login')
    //         }, 5000);
          
    //         toast('Registration Success')
            
    //     }
    //     if(newUserInfo.status == false){
    //       toast(newUserInfo.message)
    //     }
    
    // }

   
    return (
        <div className="backgroundStyle text-white">
            <img src={kfcChicken} className="kfcChicken" alt="" />
            <img src={salad} className="salad" alt="" />

            
            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8 col-sm-8 col-md-5 col-lg-5 col-xl-5">
                        <h4 className="text-center mb-4">Sign Up</h4>
                        <br/>
                        {/* {
                                newUserInfo.status == false &&  <p className="text-danger bg-white text-center">{newUserInfo.message}</p>
                            } */}
                            {/* <button onClick={notify}>Notify!</button> */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faUser} />  User Name</label>
                                <input type="name" name="username" className="form-control inputBox" id="exampleInputEmail1" placeholder="Your Name" ref={register({ required: true })} />
                                {/* {errors.name && <span className="error">Name is required</span>} */}
                                {errors.name && errors.name.type === "required" && <span>This is required</span>}
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><FontAwesomeIcon icon={faPhone} />  Phone</label>
                                <input type="text" name="phone" className="form-control inputBox" id="exampleInputEmail1" placeholder="Enter your phone number" ref={register({ required: true })} />
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
                                {/* onClick={()=> handleClick()} */}
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