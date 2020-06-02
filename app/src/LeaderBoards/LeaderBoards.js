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
 
  const getLeaderBoard = useCallback(() => dispatch(loadLeaderBoardAction(options), options), [dispatch]);
  const leaderBoard = useSelector((state) => state.leaderBoard.data);
  console.log('leaderbo',leaderBoard);
  useEffect(() => {
    getLeaderBoard();
  }, [getLeaderBoard]);

  function handleClick(page) {
    options.page = page;
    console.log('handle clicked', page);
    dispatch(loadLeaderBoardAction(options));
  }

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
        <Pagination total={50} handleClick={handleClick} />
      </div>
    </>
  );
}

export default LeaderBoards;
