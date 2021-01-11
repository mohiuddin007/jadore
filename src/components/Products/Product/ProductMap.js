import React from 'react';
import { PRODUCT_PER_PAGE } from '../Constents/Constents';
import ProductsData from './ProductsData';

const ProductMap = ({allProducts, currentPage, filterProduct }) => {
    

    const startIndex = ( currentPage - 1 ) * PRODUCT_PER_PAGE;
    const selectedProducts = allProducts.slice(startIndex, startIndex + PRODUCT_PER_PAGE);

    const product = selectedProducts.filter( product => product.catagories == filterProduct)
    console.log(selectedProducts);
    return (
        <div className="row justify-content-center pb-5">
            {
                product.length > 0 ? 
                        product.map(data => <ProductsData data={data} key={data._id}/>) : 
                        selectedProducts.map(data => <ProductsData data={data} key={data._id}/>)
                    }
        </div>
    );
};

export default ProductMap;