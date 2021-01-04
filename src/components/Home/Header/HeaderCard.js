import React from 'react';
import './HeaderCard.css';

const HeaderCard = () => {
    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-3 cardStyle">
                    <p>advanced table booking</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className="col-md-3 cardStyle">
                    <p>Food For Free 24/7</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className="col-md-3 cardStyle">
                    <p>free home delivery at your door steps</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
            </div>
        </div>
    );
};

export default HeaderCard;