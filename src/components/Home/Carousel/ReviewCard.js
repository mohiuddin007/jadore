import React from 'react';

const ReviewCard = ({review}) => {
    console.log(review)
    return (
        <div className="card">
           <img src={review.img} alt=""/>
        </div>
    );
};

export default ReviewCard;