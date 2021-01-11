import React from 'react';

const Pagination = ({totalPages, handleClick}) => {
    const pages = [...Array(totalPages).keys()].map(num => num+1);
    return (
        <div>
            <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
  {pages.map(num => (
               <li class="page-item"><a class="page-link" href="" key={num} onClick={() => handleClick(num)}>{num}</a></li>
               
           ))
           }
           {/* <button
               key={num}
               onClick={() => handleClick(num)}
               >{num}</button> */}
  </ul>
</nav>
            
        </div>
    );
};

export default Pagination;