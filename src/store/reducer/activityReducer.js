import {ACTIVITY} from '../action/actions';

const initialState = {
  activity: [],
};
const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVITY:
      return {
        ...state,
        activity: [action.payload, ...state.activity],
      };
    default:
      return state;
  }
};

export default activityReducer;
