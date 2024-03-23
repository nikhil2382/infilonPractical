import {all, call, put, takeLatest} from 'redux-saga/effects';

import * as TYPES from '../actions/types.ts';
import {apis} from '../api/apis.ts';

import * as actions from '../actions/actions';

function* getImageData() {
  try {
    const response = yield call(apis.fetchImagesData);

    yield put(actions.fetchDataSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchDataFailure());
  }
}
function* saga() {
  yield all([takeLatest(TYPES.GET_DATA, getImageData)]);
}
export default saga;
