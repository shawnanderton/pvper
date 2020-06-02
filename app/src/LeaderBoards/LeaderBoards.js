import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadLeaderBoardAction } from '../store';
import LeaderBoard from './LeaderBoard';
import Tabs from '../components/Tabs/Tabs';
import Tab from '../components/Tabs/Tab';
import Pagination from '../components/Pagination/Pagination';

function LeaderBoards({ history }) {
  const dispatch = useDispatch();
  const options = {
    page: 1,
    limit: 20,
  };
  const getLeaderBoard = (options) => dispatch(loadLeaderBoardAction(options));
  const leaderBoard = useSelector((state) => state.leaderBoard.data);
  useEffect(() => {
    getLeaderBoard(options);
  }, [getLeaderBoard]);

  return (
    <>
      <Tabs>
        <Tab active>2v2</Tab>
        <Tab>3v3</Tab>
        <Tab>RBG</Tab>
      </Tabs>
      <div>
        <LeaderBoard entries={leaderBoard} />
      </div>
      <div style={{ paddingTop: 5 }}>
        <Pagination total={50} />
      </div>
    </>
  );
}

export default LeaderBoards;
