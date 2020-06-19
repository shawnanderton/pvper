import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadLeaderBoardAction } from '../../store';
import LeaderBoard from '../Leaderboard';
import { AppBar, Tabs, Tab } from '@material-ui/core';

function LeaderBoards(props) {
  const [tabValue, setTabValue] = useState(props.match.params.bracket);
  const [options, setOptions] = useState({
    page: 0,
    limit: 15,
  });

  const dispatch = useDispatch();

  const getLeaderBoard = useCallback(
    (o) => {
      dispatch(loadLeaderBoardAction(o));
    },
    [dispatch],
  );
  const leaderBoard = useSelector((state) => state.leaderBoard);
  useEffect(() => {
    const options = {
      page: 0,
      limit: 15,
      bracket: props.match.params.bracket,
    };
    getLeaderBoard(options);
  }, [props.match.params.bracket]);

  function handleChangePage(event, page) {
    setOptions({ ...options, page });
  }

  function handleChange(event, newValue) {
    props.history.push(`/pvp/leaderboards/${newValue}`);
  }

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          onChange={handleChange}
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab id="2v2" label="2v2" value="2v2" />
          <Tab id="3v3" label="3v3" value="3v3" />
          <Tab id="RBG" label="RBG" value="rbg" />
        </Tabs>
      </AppBar>
      <div>
        {leaderBoard.loading ? (
          'loading'
        ) : (
          <LeaderBoard
            onChangePage={handleChangePage}
            count={leaderBoard.data.total || 0}
            bracket={tabValue}
            page={options.page}
            limit={options.limit}
            entries={leaderBoard.data.entries}
          />
        )}
      </div>
    </>
  );
}

export default LeaderBoards;
