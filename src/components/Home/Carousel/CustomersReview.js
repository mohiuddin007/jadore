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
        <div className="darkBg">
 <div className="container pt-5  text-center">
            <h2 className="text-center">Trusted by Thousands of Happy CustomerS</h2>
            <p className="mt-4">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
            <div className="mt-5 pb-5">
            <Carousel breakPoints={breakPoints}>
                {
                    first9Review.map((review) => <ReviewCard review={review}/>)
                }
                
            </Carousel>
            </div>
            
        </div>
        </div>
       
    );
};

export default CustomersReview;