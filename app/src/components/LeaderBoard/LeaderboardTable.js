import React from 'react';

import LeaderboardTableHeader from './LeaderboardTableHeader';
import LeaderboardTableFooter from './LeaderboardTableFooter';
import LeaderboardTableBody from './LeaderboardTableBody';

function LeaderboardTable({ bracket, count, entries, limit, page, onChangePage }) {
  return (
    <div class="table-container">
      <table className="table is-fullwidth">
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
    </table>
    </div>
  );
}

export default LeaderboardTable;
