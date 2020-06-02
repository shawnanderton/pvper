export const LOAD_LEADER_BOARD = '[Leader Board] LOAD_LEADER_BOARD';
export const LOAD_LEADER_BOARD_SUCCESS =
  '[Leader Board] LOAD_LEADER_BOARD_SUCCESS';
export const LOAD_LEADER_BOARD_ERROR = '[Leader Board] LOAD_LEADER_BOARD_ERROR';

export const loadLeaderBoardAction = (options) => ({ type: LOAD_LEADER_BOARD, payload: options });
