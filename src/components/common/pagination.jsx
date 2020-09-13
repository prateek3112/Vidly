import React from "react";
import ProtoTypes from 'prop-types';
var _ = require("lodash");


const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange , currentPage} = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 0) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>

  );
};
Pagination.propTypes = {

    itemsCount : ProtoTypes.number.isRequired,
     pageSize : ProtoTypes.number.isRequired,
    onPageChange : ProtoTypes.func.isRequired,
     currentPage : ProtoTypes.number.isRequired
}
export default Pagination;
