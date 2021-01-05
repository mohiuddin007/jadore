import React from 'react';
import './FoodsData.css';
import plusIcon from '../../../images/HomePageResources/Icon_plus_circle.svg';

const FoodsData = (props) => {
    const { img, title, price } = props.data;
    console.log(props.data)
    return (
        <div className="col-md-3 mt-5 mx-4">
            <div className="row card">
                <div className="card-img">
                    <img src={img} className="card-img-top img-fluid" alt="" />
                </div>
                <div class="card-footer card-footer-text">
                    <div className="row">
                        <div className="col-8">
                            <h6 className="card-title text-left">{title}</h6>
                        </div>
                        <div className="col-4">
                            <h6 className="text-danger text-right">${price}</h6>
                        </div>

                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetu</p>
                    <div className="row">
                        <div className="col-8">

                        </div>
                        <div className="col-4">
                            <img src={plusIcon} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FoodsData;