import {ADD_GROUP, ADD_EXPENSE} from '../action/actions';

const initialState = {
  group: [],
  expenses: []
};
const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return {
        ...state,
        group: action.payload,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      }
    default:
      return state;
  }
};

export default groupReducer;
