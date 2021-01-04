import React from 'react';

const Verification = () => {
    return (
        <div className="backgroundStyle text-white">
            <div className="container">
            <div className="row justify-content-center pt-5">
                <div className="col-8 col-sm-8 col-md-5 col-lg-5 col-xl-5 pt-5">
                    <h4 className="text-center mb-5">Verification</h4>
                    <form className="mt-3">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Enter verification code</label>
                            <input type="email" className="form-control inputBox" id="exampleInputEmail1" placeholder="Check your email & enter the code" />
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

export default Verification;