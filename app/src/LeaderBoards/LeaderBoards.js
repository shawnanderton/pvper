import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadLeaderBoardAction } from '../store';
import LeaderBoard from './LeaderBoard';
import Tabs from '../components/Tabs/Tabs';
import Tab from '../components/Tabs/Tab';

function LeaderBoards({ history }) {
  const dispatch = useDispatch();
  const getLeaderBoard = useCallback(() => dispatch(loadLeaderBoardAction()), [
    dispatch,
  ]); // called within a useEffect()
  const leaderBoard = useSelector((state) => state.leaderBoard.data);
  useEffect(() => {
    getLeaderBoard();
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
    </>
  );
}

export default LeaderBoards;
