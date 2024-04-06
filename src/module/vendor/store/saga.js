import { all, call } from 'redux-saga/effects';

import UserActionWatcher from '../container/userContainer/saga';
import CustomerActionWatcher from '../container/customerContainer/saga';
import SupportActionWatcher from '../container/supportContainer/saga';
import SupportTypeActionWatcher from '../container/supportTypeContainer/saga';

function* vendorSaga() {
  yield all([call(UserActionWatcher), call(CustomerActionWatcher), call(SupportActionWatcher),call(SupportTypeActionWatcher)]);
}

export default vendorSaga;
