import {all, fork} from 'redux-saga/effects';

import saga from './saga.ts';

export default function* root() {
  yield all([fork(saga)]);
}
