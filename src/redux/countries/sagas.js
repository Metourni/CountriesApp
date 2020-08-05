import {all, takeEvery, put, call} from 'redux-saga/effects';

// Imports: Actions
import actions from './actions';

// Imports: Services
import {CountriesService} from '../../services';

export function* GET_ALL() {
  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: true,
    },
  });
  const response = yield call(CountriesService.getAll);
  if (response && response.status && response.status === 200 && response.data) {
    // Dispatch Action To Redux Store
    yield put({
      type: actions.SET_STATE,
      payload: {
        loading: false,
        error: null,
        list: response.data || [],
      },
    });
  } else {
    yield put({
      type: actions.SET_STATE,
      payload: {
        loading: false,
        error: "Can't load countries list",
      },
    });
  }
}

export function* SEARCH_BY_NAME({payload}) {
  const {q} = payload;
  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: true,
    },
  });
  const response = yield call(CountriesService.getByName, q);
  console.log('response', response);
  if (response && response.status && response.status === 200 && response.data) {
    // Dispatch Action To Redux Store
    yield put({
      type: actions.SET_STATE,
      payload: {
        loading: false,
        error: null,
        list: response.data || [],
      },
    });
  } else {
    yield put({
      type: actions.SET_STATE,
      payload: {
        loading: false,
        error: "Can't load countries list",
      },
    });
  }
}

export default function* countriesSaga() {
  yield all([
    takeEvery(actions.GET_ALL, GET_ALL),
    takeEvery(actions.SEARCH_BY_NAME, SEARCH_BY_NAME),
  ]);
}
