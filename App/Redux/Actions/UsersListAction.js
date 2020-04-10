import { USER_FETCH_REQUESTED } from './../ActionTypes';

export function fetchUsersList() {
  return {
    type: USER_FETCH_REQUESTED
  }
}