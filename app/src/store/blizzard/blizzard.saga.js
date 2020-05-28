import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  LOAD_LEADER_BOARD,
  LOAD_LEADER_BOARD_SUCCESS,
  LOAD_LEADER_BOARD_ERROR,
} from './blizzard.actions';
import { getleaderBoardApi } from './blizzard.api';

export function* loadingLeaderBoardAsync() {
  try {
    const data = yield call(getleaderBoardApi);
    const leaderBoard = data;

    yield put({ type: LOAD_LEADER_BOARD_SUCCESS, payload: leaderBoard });
  } catch (err) {
    yield put({ type: LOAD_LEADER_BOARD_ERROR, payload: err.message });
  }
}

export function* watchLoadingLeaderBoardAsync() {
  yield takeEvery(LOAD_LEADER_BOARD, loadingLeaderBoardAsync);
}

export function* blizzardSaga() {
  yield all([watchLoadingLeaderBoardAsync()]);
}
