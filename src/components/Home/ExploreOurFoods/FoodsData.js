import React, { useContext, useState } from 'react';
import './FoodsData.css';
import plusIcon from '../../../images/HomePageResources/Icon_plus_circle.svg';
import ReactStars from "react-rating-stars-component";
import { ProductContext } from '../../../App';
import ProductPopUp from '../../Delivery/ProductPopUp/ProductPopUp';

const FoodsData = (props) => {
    const { img, title, price } = props.data;
    const [productsInfo, SetProductsInfo] = useContext(ProductContext);

    const rating = {
        size: 20,
        value: 5,
        activeColor: "red",
        edit: true
    };

    //react modal package
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    // product add to cart function 
    const handleAddToCart = (product) => {
        product.quantity = 1;
        const newCart = [...productsInfo, product]
        SetProductsInfo(newCart);
    }
    return (
        <div className="col-10 col-sm-10 col-md-3 mt-5 mx-auto">
           
            <div className="card cardStyles" onClick={openModal}>
                <img src={img} className="card-img-top mx-auto d-block img-fluid" alt="" />
                <div class="card-body cardBodyStyles">
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
                            <ReactStars {...rating} />
                        </div>
                        <div className="col-4">
                            <img src={plusIcon} className="img-fluid plusCircleBtn" onClick={() => handleAddToCart(props.data)} alt="" />
                        </div>
                    </div>
                </div>
                <ProductPopUp
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                >
</ProductPopUp>
             
            </div>
            
        </div>
    );
};

export default FoodsData;