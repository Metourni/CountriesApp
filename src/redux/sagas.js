import {all} from 'redux-saga/effects';

import countries from './countries/sagas';

export default function* rootSaga() {
  yield all([countries()]);
}
