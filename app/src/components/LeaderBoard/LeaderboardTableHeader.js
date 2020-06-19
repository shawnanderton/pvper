import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

function LeaderboardTableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell size="small">Rank</TableCell>
        <TableCell size="small">Name</TableCell>
        <TableCell size="small">wins/lost</TableCell>
        <TableCell size="small">Rating</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default LeaderboardTableHeader;
