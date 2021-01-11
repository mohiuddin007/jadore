import React, { useEffect, useState } from 'react';
import { PRODUCT_PER_PAGE } from '../Constents/Constents';
import ProductsData from './ProductsData';

const ProductMap = ({allProducts, currentPage, filterProduct, search }) => {
    const [searchProduct ,setSearchProduct] = useState([])

    // calculation for pagination
    const startIndex = ( currentPage - 1 ) * PRODUCT_PER_PAGE;
    const selectedProducts = allProducts.slice(startIndex, startIndex + PRODUCT_PER_PAGE);

    //specific catagories food filter
    const product = selectedProducts.filter( product => product.catagories == filterProduct)
    
    // search from input field
    useEffect(() =>{
        setSearchProduct(
            selectedProducts.filter(product => {
                  return product.title.toLowerCase().includes(search.toLowerCase())
               })
        )
      }, [search, selectedProducts])
    return (
        <div className="row justify-content-center pb-5">
            {
                product.length > 0 ? 
                        product.map(data => <ProductsData data={data} key={data._id}/>) : 
                        searchProduct.map(data => <ProductsData data={data} key={data._id}/>)
                    }
        </div>
    );
};

export default ProductMap;