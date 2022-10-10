export const CHANGE_ROUTE = 'CHANGE_ROUTE';
export const ADD_GROUP = 'ADD_GROUP';

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
