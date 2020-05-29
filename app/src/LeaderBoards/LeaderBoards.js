import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadLeaderBoardAction } from '../store';
import LeaderBoard from './LeaderBoard';

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
      <div className="tabs">
        <ul>
          <li className="is-active">2v2</li>
          <li>3v3</li>
          <li>RPG</li>
        </ul>
      </div>
      <div>
        <LeaderBoard entries={leaderBoard} />
      </div>
    </>
  );
}

export default LeaderBoards;
