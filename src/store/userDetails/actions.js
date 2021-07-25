import { USER_DETAIL_INFO, LOGIN_STATE } from './actionTypes';

export const userDetailAction = (userDetail) => ({
  type: USER_DETAIL_INFO,
  payload: userDetail,
});

export const loginStateAction = (loggedIn) => ({
  type: LOGIN_STATE,
  payload: loggedIn,
});
