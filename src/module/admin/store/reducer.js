import { combineReducers } from 'redux';
import countryReducer from '../container/countryContainer/slice';


const adminReducer = combineReducers({
  country: countryReducer,
});

export default adminReducer;
