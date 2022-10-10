import {ADD_GROUP} from '../action/actions';

const initialState = {
  group: [],
};
const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return {
        ...state,
        group: [...state.group, action.payload],
      };
    default:
      return state;
  }
};

export default groupReducer;
