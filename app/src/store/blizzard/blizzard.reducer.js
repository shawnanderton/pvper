import {
  LOAD_LEADER_BOARD,
  LOAD_LEADER_BOARD_SUCCESS,
  LOAD_LEADER_BOARD_ERROR,
} from './blizzard.actions';

let initState = {
  loading: false,
  data: [],
  error: void 0,
};

export const leaderBoardReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_LEADER_BOARD:
      return { ...state, loading: true, error: '' };
    case LOAD_LEADER_BOARD_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case LOAD_LEADER_BOARD_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
