import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import ReviewCard from './ReviewCard';

const CustomersReview = () => {
    const [review, setReview] = useState([]);

const first9Review = review.slice(0, 9);

useEffect(()=>{
    fetch('https://hot-onion.herokuapp.com/api/v1/foods')
    .then(res => res.json())
    .then(data => {
        setReview(data.data.foods);
    })
},[])

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
    return (
        <div className="container text-center">
            <h1 className="text-center">Trusted by Thousands of Happy CustomerS</h1>
            <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
            <Carousel breakPoints={breakPoints}>
                {
                    first9Review.map((review) => <ReviewCard review={review}/>)
                }
                
            </Carousel>
        </div>
    );
};

export default CustomersReview;