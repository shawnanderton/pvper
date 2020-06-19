import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableContainer, Paper } from '@material-ui/core';

import LeaderboardTableHeader from './LeaderboardTableHeader';
import LeaderboardTableFooter from './LeaderboardTableFooter';
import LeaderboardTableBody from './LeaderboardTableBody';

const useStyles = makeStyles({
  table: {
    minWidth: 950,
  },
});

function Leaderboard({ bracket, count, entries, limit, page, onChangePage }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table size="small" className={classes.table} aria-label="simple table">
        <LeaderboardTableHeader />
        <LeaderboardTableBody entries={entries} bracket={bracket} />
        <LeaderboardTableFooter
          rowsPerPageOptions={[5, 10, 15]}
          count={count}
          colSpan={3}
          rowsPerPage={limit}
          onChangePage={onChangePage}
          page={page}
        />
      </Table>
    </TableContainer>
  );
}

export default Leaderboard;
