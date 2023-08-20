import React, {useState} from 'react';
import _ from 'lodash';
import Down from '../../assets/chevron-down.svg';

function Pagination(props) {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);
  return (
    <div className="flex fixed absolute bottom-9 left-60 right-0 justify-between mx-[3rem] bg-white p-3">
      <div className="flex gap-4 items-center">
        <p className="text-[12px]">Rows per page</p>
        <p className="flex gap-10 border text-[12px] items-center p-1 ">{pageSize} <span><img src={Down} alt="" /></span> </p>
      </div>
      <nav className="text-[14px]">
        <ul className="pagination mx-[3rem] flex gap-2 bg-white ">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage
                  ? 'page-item active text-[#039BF0]'
                  : 'page-item'
              }
            >
              <a
                href="#"
                className="page-link cursor-pointer"
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
