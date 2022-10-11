import {createStore, combineReducers} from 'redux';
import googleReducer from './reducer/googleReducer';
import groupReducer from './reducer/groupReducer';
import routeReducer from './reducer/routeReducer';

const rootReducer = combineReducers({
  route: routeReducer,
  group: groupReducer,
  google: googleReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
