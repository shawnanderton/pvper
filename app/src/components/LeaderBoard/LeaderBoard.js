import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loadLeaderBoardAction } from '../../store';
import LeaderBoardTable from './LeaderboardTable';
import LeaderboardSearch from './LeaderboardSearch';

function LeaderBoards(props) {
  const [options, setOptions] = useState({
    page: 0,
    limit: 15,
    bracket: '2v2',
    factions: ['horde', 'alliance'],
    classes: [
      'death knight',
      'demon hunter',
      'druid',
      'hunter',
      'mage',
      'monk',
      'paladin',
      'priest',
      'rogue',
      'shaman',
      'warlock',
      'warrior',
    ],
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
    options.bracket = '2v2';
    getLeaderBoard(options);
  }, [options, getLeaderBoard]);

  function handleChangePage(event, page) {
    setOptions({ ...options, page });
  }

  function handleChange(event, newValue) {
    setOptions({ ...options, bracket: props.match.params.bracket });
    props.history.push(`/pvp/leaderboards/${newValue}`);
  }
  function handleSearchChange(value) {
    console.log('value', value.items);
    setOptions({ ...options, [value.name]: value.items });
  }

  return (
    <>
      <div position="static" color="default">
        <div
          value={options.bracket}
          indicatorColor="primary"
          onChange={handleChange}
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <div id="2v2" label="2v2" value="2v2"></div>
          <div id="3v3" label="3v3" value="3v3"></div>
          <div id="RBG" label="RBG" value="rbg"></div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <LeaderboardSearch
              onChange={handleSearchChange}
              selectedClasses={options.classes}
              selectedFractions={options.factions}
            />
          </div>
          <div>
            {leaderBoard.loading || !leaderBoard.data.entries ? (
              'loading'
            ) : (
              <LeaderBoardTable
                onChangePage={handleChangePage}
                count={leaderBoard.data.total || 0}
                bracket={options.bracket}
                page={options.page}
                limit={options.limit}
                entries={leaderBoard.data.entries}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(LeaderBoards);
