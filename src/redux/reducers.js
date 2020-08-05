// Imports: Dependencies
import {combineReducers} from 'redux';

// Imports: Reducers
import countriesReducer from './countries/reducers';

// Redux: Root Reducer
const rootReducer = combineReducers({
  countries: countriesReducer,
});

// Exports
export default rootReducer;
