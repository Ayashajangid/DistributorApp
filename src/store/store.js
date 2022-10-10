import {createStore, combineReducers} from 'redux';
import groupReducer from './reducer/groupReducer';
import routeReducer from './reducer/routeReducer';

const rootReducer = combineReducers({route: routeReducer, group: groupReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
