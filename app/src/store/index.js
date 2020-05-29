import { combineReducers } from 'redux';
import { leaderBoardReducer } from './blizzard/blizzard.reducer';

export * from './blizzard/blizzard.actions';
export * from './blizzard/blizzard.reducer';
export * from './blizzard/blizzard.saga';
export * from './blizzard/blizzard.api';

const store = combineReducers({
  leaderBoard: leaderBoardReducer
});

export default store;
