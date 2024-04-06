import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import loginReducer from 'container/LoginContainer/slice';
import countryReducer from 'module/admin/store/reducer';
import userReducer from 'module/vendor/store/reducer';
import customerReducer from 'module/vendor/store/reducer';
import supportReducer from 'module/vendor/store/reducer';
import supportTypeReducer from 'module/vendor/store/reducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  login: loginReducer,
  country: countryReducer,
  user: userReducer,
  customer: customerReducer,
  support: supportReducer,
  supportType: supportTypeReducer
});

export default reducer;
