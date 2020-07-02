import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loadLeaderBoardAction } from '../../store';
import LeaderBoard from '../Leaderboard';
import { AppBar, Tabs, Tab, Grid, Container } from '@material-ui/core';
import LeaderboardSearch from '../LeaderboardSearch/LeaderboardSearch';

function LeaderBoards(props) {
  const [options, setOptions] = useState({
    page: 0,
    limit: 15,
    bracket: props.match.params.bracket,
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
    options.bracket = props.match.params.bracket;
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
      <AppBar position="static" color="default">
        <Tabs
          value={options.bracket}
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
      <Container>
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
              <LeaderBoard
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
      </Container>
    </>
  );
}

export default withRouter(LeaderBoards);
