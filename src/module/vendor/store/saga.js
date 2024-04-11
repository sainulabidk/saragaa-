

import { all, call } from 'redux-saga/effects';

import UserActionWatcher from '../container/userContainer/saga';
import CustomerActionWatcher from '../container/customerContainer/saga';
import userActionWatcher from '../container/userContainer/saga';
import SupportActionWatcher from '../container/supportContainer/saga';
import SupportTypeActionWatcher from '../container/supportTypeContainer/saga';
import ProfileActionWatcher from '../container/profile/saga';
import DistrictActionWatcher from '../container/districtContainer/saga';

function* vendorSaga() {
  yield all([
    call(UserActionWatcher), 
    call(CustomerActionWatcher),  
    call(userActionWatcher),
    call(SupportActionWatcher),
    call(SupportTypeActionWatcher),
    call(ProfileActionWatcher),
    call(DistrictActionWatcher)
  ]);
    
 


}

export default vendorSaga;



