import {GOOGLE_DATA} from '../action/actions';

const initialState = {
  data: [],
};
const googleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default googleReducer;
