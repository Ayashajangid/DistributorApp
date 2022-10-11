export const CHANGE_ROUTE = 'CHANGE_ROUTE';
export const ADD_GROUP = 'ADD_GROUP';
export const GOOGLE_DATA = 'GOOGLE_DATA';
export const ADD_CONTACT = 'ADD_CONTACT';

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
