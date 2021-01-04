import React from 'react';
import './HeaderCard.css';
import headerImg3 from '../../../images/HomePageResources/Group 1331.svg';
import headerImg1 from '../../../images/HomePageResources/Group 1327.svg';
import headerImg2 from '../../../images/HomePageResources/Group 1329.svg';


const HeaderCard = () => {
    return (
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-10 col-md-3 mx-auto mb-3 cardStyle">
                    <img src={headerImg1} className="rounded mx-auto d-block pt-5 headerCartImg" alt="" />
                    <p className="cartText mt-3">advanced table booking</p>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className="col-10 col-md-3 mx-auto mb-3 cardStyle">
                    <img src={headerImg2} className="rounded mx-auto d-block pt-5 headerCartImg" alt="" />
                    <p className="cartText mt-3">Food For Free 24/7</p>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className="col-10 col-md-3 mx-auto mb-3 cardStyle">
                    <img src={headerImg3} className="rounded mx-auto d-block pt-5 headerCartImg" alt="" />
                    <p className="cartText mt-3">Free home delivery at your door steps</p>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
            </div>
        </div>
    );
};

export default HeaderCard;