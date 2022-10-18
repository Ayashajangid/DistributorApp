import {
  ADD_CONTACT,
  ADD_EXPENSE,
  DELETE_CONTACT,
  DELETE_EXPENSE,
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
      state.contact[index] = {...state.contact[index], ...obj};
      return {
        ...state,
        contact: [...state.contact],
      };
    case ADD_EXPENSE:
      const expObj = action.payload.data;
      const ind = action.payload.index;
      state.contact[ind].payments.push(expObj);
      return {
        ...state,
        contact: [...state.contact],
      };
    case DELETE_EXPENSE:
      const id = action.payload.id;
      state.contact[action.payload.index].payments = state.contact[
        action.payload.index
      ].payments.filter(item => item.paymentId != id);
      return {
        ...state,
        contact: [...state.contact],
      };
    default:
      return state;
  }
};

export default contactReducer;
