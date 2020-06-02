import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PaginationItem from './PaginationItem';

function PaginationList({ current, start, end, handleClick }) {
  const [paginationItems, setPaginationItems] = useState([]);

  function handlePageinationItems() {
    const list = [];
    for (let i = start; i <= end; i++) {
      list.push(i);
    }
    console.log(list);
    setPaginationItems(() => list);
  }

  useEffect(() => {
    handlePageinationItems();
  }, []);

  return (
    <ul className="pagination-list">
      {paginationItems.map((item) => (
        <PaginationItem
          active={item === current}
          page={item}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
}

PaginationList.propTypes = {};

export default PaginationList;
