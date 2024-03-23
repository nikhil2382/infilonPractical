import {combineReducers} from 'redux';

// Reducers
import reducer from './reducer.ts';

const rootReducer = combineReducers({
  reducer: reducer,
});

export default (state, action) => {
  return rootReducer(state, action);
};
