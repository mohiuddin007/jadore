import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import chilliChicken from '../../../images/LoginPage/kisspng-chilli-chicken-chicken-nugget-chili-pepper-free-spicy-shredded-chicken-pull-png-image-5a694f269b66d3 1.png';
import friedChicken from '../../../images/LoginPage/PngJoy_kfc-bucket-crispy-fried-chicken-png-download_9851047 1.png';
import salad from '../../../images/LoginPage/IMGBIN_greek-salad-vegetable-greek-cuisine-stock-photography-png_CeXLnZBK 1.png';
import kfcChicken from '../../../images/LoginPage/PngJoy_kfc-chicken-kfc-fried-chicken-png-png-download_7322209 2.png';
import { useForm } from 'react-hook-form';

const CreateNewPassword = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data, event) => {
        console.log(data)
    };
    return (
        <div className="backgroundStyle text-white">
            <img src={kfcChicken} className="kfcChicken" alt=""/>
            <img src={salad} className="salad" alt=""/>
            <div className="container">
                <div className="row justify-content-center pt-5">
                    <div className="col-8 col-sm-8 col-md-5 col-lg-5 col-xl-5 pt-5">
                        <h4 className="text-center mb-5">Create New Password</h4>

                        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label"><FontAwesomeIcon icon={faLock} />  Password</label>
                                <input type="password" name="password" className="form-control inputBox" placeholder="Write a password" ref={register({ required: true })}/>
                                {errors.name && <span className="error text-danger">Password is required</span>}
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label"><FontAwesomeIcon icon={faLock} />  Re-Enter Password</label>
                                <input type="password" name="Re-Enter Password" className="form-control inputBox" placeholder="Write again the password" ref={register({ required: true })}/>
                                {errors.name && <span className="error text-danger">Password is required</span>}
                            </div>
                            <div className="d-grid gap-2 mt-5">
                                <input className="btn btn-danger btn-block rounded-pill py-2" type="submit" defaultValue="Login"/>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <img src={chilliChicken} className="chilliChicken" alt=""/>
            <img src={friedChicken} className="friedChicken" alt=""/>
        </div>
    );
};

export default CreateNewPassword;