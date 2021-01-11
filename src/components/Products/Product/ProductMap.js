import React from 'react';
import { PRODUCT_PER_PAGE } from '../Constents/Constents';
import ProductsData from './ProductsData';

const ProductMap = ({allProducts, currentPage }) => {
    const startIndex = ( currentPage - 1 ) * PRODUCT_PER_PAGE;
    const selectedProducts = allProducts.slice(startIndex, startIndex + PRODUCT_PER_PAGE);
    return (
        <div className="row justify-content-center pb-5">
            {
                        selectedProducts.map(data => <ProductsData data={data} key={data._id}/>)
                    }
        </div>
    );
};

export default ProductMap;