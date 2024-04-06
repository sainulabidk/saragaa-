import { all, call } from 'redux-saga/effects';
import CountryActionWatcher from '../container/countryContainer/saga';

function* adminSaga() {
  yield all([ call(CountryActionWatcher) 
  ]);
}

export default adminSaga;
