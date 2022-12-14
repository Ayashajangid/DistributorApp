import {ADD_GROUP, ADD_EXPENSE, GROUP_MEMBER} from '../action/actions';

const initialState = {
  group: [],
  expenses: [],
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
        expenses: [...state.expenses, action.payload],
      };
    case GROUP_MEMBER:
      const id = action.payload.id;
      const arr = action.payload.selected;
      const index = state.group.findIndex(obj => obj.id === id);
      state.group[index].friendList = arr;
      return {
        ...state,
        group: [...state.group],
      };
    default:
      return state;
  }
};

export default groupReducer;
