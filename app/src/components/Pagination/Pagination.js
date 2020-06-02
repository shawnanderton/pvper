import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PaginationList from './PaginationList';

function Pagination({ total }) {
  const [current, setCurrent] = useState(1);
  const [start, setStart] = useState(1);
  
  const e = current + 3;

  const [end, setEnd] = useState(e <= total ? e : total);

  useEffect(() => {
    console.log('Total: ', total)
    setStart((s) => {
      const start = s - 3;
      return start >= 1 ? start : 1;
    });
   
    setEnd(end + 1)
    console.log("END::", end);
  }, [current]);

  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a className="pagination-previous">Previous</a>
      <a className="pagination-next">Next page</a>
      <PaginationList total={total} current={current} start={start} end={end} setCurrent={setCurrent} />
    </nav>
  );
}

Pagination.propTypes = {};

export default Pagination;
