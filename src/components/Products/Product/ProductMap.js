import React, { useEffect, useState } from 'react';
import { PRODUCT_PER_PAGE } from '../Constents/Constents';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import ProductsData from './ProductsData';

const ProductMap = ({currentPage, filterProduct, search}) => {
    const [searchProduct ,setSearchProduct] = useState([])
    // calculation for pagination
    // const startIndex = ( currentPage - 1 ) * PRODUCT_PER_PAGE;
    // const selectedProducts = allProducts.slice(startIndex, startIndex + PRODUCT_PER_PAGE);

        //paginate
        const [offset, setOffset] = useState(0);
        const [datas, setData] = useState([]);
        const [perPage] = useState(5);
        const [pageCount, setPageCount] = useState(0)


      const fetchPaginatedProducts = async () => {
        const res = await axios.get('https://backendjadore.softifydigital.com/api/showfeature')
        const data =res.data.data;
        const slice = data.slice(offset, offset + perPage);
        console.log("junaid",slice);
        setData(slice);
        setPageCount(Math.ceil(data.length / perPage));
        // setTotalPages(Math.ceil(res.data.data.foods.length / PRODUCT_PER_PAGE))
    }

    useEffect(()=>{
        fetchPaginatedProducts();
    },[offset])




    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    
    


    return (
        <div className="row justify-content-center pb-5">
            {
                datas && datas.map(data => 
                <ProductsData data={data} key={data._id}/>
                    )}
            <div style={{position:'absolute'}}>
            <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    initialPage={0}/>
            </div>
        </div>
    );
};

export default ProductMap;