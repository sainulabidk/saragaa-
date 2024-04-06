import { combineReducers } from 'redux';

import userReducer from '../container/userContainer/slice';
import customerReducer from '../container/customerContainer/slice';
import supportReducer from '../container/supportContainer/slice';
import supportTypeReducer from '../container/supportTypeContainer/slice';
// ==============================|| COMBINE REDUCER ||============================== //

const vendorReducer = combineReducers({
  user: userReducer,
  customer: customerReducer,
  support: supportReducer,
  supportType: supportTypeReducer
});

export default vendorReducer;
