import {CHANGE_ROUTE} from '../action/actions';

const initialState = {
  route: 0,
};
const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {
        ...state,
        route: action.payload,
      };
    default:
      return state;
  }
};
export default routeReducer;
