import { combineReducers } from 'redux';

import countryReducer from '../container/countryContainer/slice';


// ==============================|| COMBINE REDUCER ||============================== //

const adminReducer = combineReducers({
  country: countryReducer,

});

export default adminReducer;
