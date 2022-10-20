export const CHANGE_ROUTE = 'CHANGE_ROUTE';
export const ADD_GROUP = 'ADD_GROUP';
export const GOOGLE_DATA = 'GOOGLE_DATA';
export const ADD_CONTACT = 'ADD_CONTACT';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const ACTIVITY = 'ACTIVITY';
export const GROUP_MEMBER = 'GROUP_MEMBER';

export function changeRoute(num) {
  return {
    type: CHANGE_ROUTE,
    payload: num,
  };
}
export function addGroup(data) {
  return {
    type: ADD_GROUP,
    payload: data,
  };
}
export function googleData(data) {
  return {
    type: GOOGLE_DATA,
    payload: data,
  };
}
export function addContact(data) {
  return {
    type: ADD_CONTACT,
    payload: data,
  };
}
export function addExpense(data, index) {
  let value = {data, index};
  return {
    type: ADD_EXPENSE,
    payload: value,
  };
}
export function deleteExpense(id) {
  return {
    type: DELETE_EXPENSE,
    payload: id,
  };
}
export function deleteContact(index) {
  return {
    type: DELETE_CONTACT,
    payload: index,
  };
}
export function editContact(data, index) {
  let value = {data, index};
  return {
    type: EDIT_CONTACT,
    payload: value,
  };
}
export function activity(data) {
  return {
    type: ACTIVITY,
    payload: data,
  };
}
export function addGroupFriend(data) {
  return {
    type: GROUP_MEMBER,
    payload: data,
  };
}
