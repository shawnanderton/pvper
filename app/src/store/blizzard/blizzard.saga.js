import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  LOAD_LEADER_BOARD,
  LOAD_LEADER_BOARD_SUCCESS,
  LOAD_LEADER_BOARD_ERROR,
} from './blizzard.actions';
import { getleaderBoardApi } from './blizzard.api';

export function* loadingLeaderBoardAsync({payload}) {
  try {
    yield put({ type: LOAD_LEADER_BOARD_SUCCESS, payload: [] });
    const data = yield call(getleaderBoardApi, payload);

    yield put({ type: LOAD_LEADER_BOARD_SUCCESS, payload: data });
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
