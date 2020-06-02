import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function PaginationItem({ active, page, onClick }) {
  return (
    <li className="hello" key={page}>
      <a
        className={`pagination-link ${active ? 'is-current' : ''}`}
        aria-label={`Goto page ${page}`}
        onClick={()=> onClick(page)}
        value={page}
      >
        {page}
      </a>
    </li>
  );
}

PaginationItem.propTypes = {};

export default PaginationItem;
