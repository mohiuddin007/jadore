import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({review}) => {
    console.log(review)
    return (
        <div className="reviewCard text-white m-sm-0 m-md-2">
            <div className="container p-3">
            <div className="row">
                <div className="col-8">
                <img src={review.img} className="reviewImg" alt=""/> <span>Yessica Christy</span>
                </div>
                 <div className="col-4">
                     <span>5.0</span> <FontAwesomeIcon icon={faStar} className="star"/>
                 </div>

            </div>
            </div>
            <div className="container mt-3">
                <div className="row text-center">
                    <div className="col-12">
                    <p>Jadore manger is my 2nd love, i love all of the foods of them.</p>
                    </div>
                      
                </div>
            </div>
           
        </div>
    );
};

export default ReviewCard;