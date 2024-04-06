import { all, call } from 'redux-saga/effects';

import LoginActionWatcher from 'container/LoginContainer/saga';
import CountryActionWatcher from 'module/admin/store/saga';
import userActionWatcher from 'module/vendor/store/saga';
import CustomerActionWatcher from 'module/vendor/store/saga'
import SupportActionWatcher from 'module/vendor/store/saga';
import SupportTypeActionWatcher from 'module/vendor/store/saga';

function* rootSaga() {
  yield all([call(LoginActionWatcher), call(CountryActionWatcher), call(userActionWatcher), call(CustomerActionWatcher), call(SupportActionWatcher),call(SupportTypeActionWatcher)]);
}

export default rootSaga;
