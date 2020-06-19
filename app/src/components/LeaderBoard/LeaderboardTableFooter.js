import React from 'react';
import { TableFooter, TableRow, TablePagination } from '@material-ui/core';

function LeaderboardTableFooter(props) {
  return (
    <TableFooter>
      <TableRow>
        <TablePagination {...props} />
      </TableRow>
    </TableFooter>
  );
}

export default LeaderboardTableFooter;
