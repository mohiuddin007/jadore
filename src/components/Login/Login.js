import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="container backgroundStyle">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6 col-sm-6">
                    <h5 className="text-center text-white">Login or SingUp</h5>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="example@email.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Write a password" />
                        </div>
                        <div className="row justify-content-end">
                             <div className="col-md-4">
                                 <p className="text-danger">Forgot password?</p>
                             </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-danger rounded-pill" type="button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;