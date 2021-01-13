import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          {pages.map(num => (
            <li class="page-item"><Link class="page-link" to="" key={num} onClick={() => handleClick(num)}>{num}</Link></li>

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