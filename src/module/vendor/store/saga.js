

import { all, call } from 'redux-saga/effects';

import UserActionWatcher from '../container/userContainer/saga';
import CustomerActionWatcher from '../container/customerContainer/saga';
import ProfileActionWatcher from '../container/profile/saga';


function* vendorSaga() {
  yield all([call(UserActionWatcher), call(CustomerActionWatcher),call(ProfileActionWatcher) ]);


}

export default vendorSaga;



