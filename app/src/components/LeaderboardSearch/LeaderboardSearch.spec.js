import React from 'react';
import { shallow } from 'enzyme';
import LeaderboardSearch from './LeaderboardSearch';

describe('Leaderboard Search', () => {
  let mountedLeaderboardSearch;
  beforeEach(() => {
    mountedLeaderboardSearch = shallow(<LeaderboardSearch />);
  });

  it('should render with out crashing', () => {
    shallow(<LeaderboardSearch />);
  });
});
