import {
  ADD_CONTACT,
  ADD_EXPENSE,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from '../action/actions';

const initialState = {
  contact: [],
};
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contact: [...state.contact, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contact: state.contact.filter((i, index) => action.payload != index),
      };
    case EDIT_CONTACT:
      const obj = action.payload.data;
      const index = action.payload.index;
      state.contact[index] = obj;
      return {
        ...state,
        contact: [...state.contact],
      };
    case ADD_EXPENSE:
      state.contact[index];
      return {
        ...state,
        contact: [...state.contact, action.payload],
      };
    default:
      return state;
  }
};

export default contactReducer;
