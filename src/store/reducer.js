import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import loginReducer from 'container/LoginContainer/slice';
import countryReducer from 'module/admin/store/reducer';
// import userReducer from 'module/vendor/store/reducer';
// import  customerReducer from 'module/vendor/container/customerContainer/slice'
// import supportReducer from 'module/vendor/container//supportContainer/slice';
// import supportTypeReducer from 'module/vendor/container/supportTypeContainer/slice';
// import profileReducer from 'module/vendor/container/profile/slice'; 
import vendorReducer from 'module/vendor/store/reducer'

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  login: loginReducer,
  country: countryReducer,
  data: vendorReducer,
  // user: userReducer,
  // customers: customerReducer,
  // support: supportReducer,
  // supportType: supportTypeReducer,
  // profile: profileReducer ,

});

export default reducer;
