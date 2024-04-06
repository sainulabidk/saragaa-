import { combineReducers } from 'redux';

import userReducer from '../container/userContainer/slice';
import customerReducer from '../container/customerContainer/slice';
import profileReducer from '../container/profile/slice';
// ==============================|| COMBINE REDUCER ||============================== //

const vendorReducer = combineReducers({
  user: userReducer,
  customer: customerReducer,
  profile: profileReducer
});

export default vendorReducer;
