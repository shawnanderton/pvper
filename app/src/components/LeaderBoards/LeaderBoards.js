import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadLeaderBoardAction } from '../../store';
import LeaderBoard from '../LeaderBoard';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import ClassDropdown from '../ClassDropdown';

function LeaderBoards({ history }) {
  const [tabValue, setTabValue] = useState(0);
  const [options, setOptions] = useState({
    page: 0,
    bracket: '2v2',
    limit: 15,
  });

  const bracketList = ['2v2', '3v3', 'rbg'];

  const dispatch = useDispatch();

  const getLeaderBoard = useCallback(
    (o) => {
      dispatch(loadLeaderBoardAction(o));
    },
    [dispatch],
  );
  const leaderBoard = useSelector((state) => state.leaderBoard);
  useEffect(() => {
    getLeaderBoard(options);
  }, [getLeaderBoard, options]);

  function handleChangePage(event, page) {
    setOptions({ ...options, page });
  }

  function handleChange(event, newValue) {
    const bracket = bracketList[newValue];
    console.log({ ...options, page: 0, bracket });
    setOptions({ ...options, page: 0, bracket });
    setTabValue(newValue);
  }

  return (
    <>
      <ClassDropdown />
      <AppBar position="static" color="default">
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          onChange={handleChange}
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab id="2v2" label="2v2" />
          <Tab id="3v3" label="3v3" />
          <Tab id="RBG" label="RBG" />
        </Tabs>
      </AppBar>
      <div>
        {leaderBoard.loading ? (
          'loading'
        ) : (
          <LeaderBoard
            onChangePage={handleChangePage}
            count={leaderBoard.data.total || 0}
            bracket={bracketList[tabValue]}
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
