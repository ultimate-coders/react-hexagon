import { USER_DETAIL_INFO, LOGIN_STATE } from './actionTypes';

const initialState = {
  loggedIn: false,
  userDetail: {},
};

const userDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAIL_INFO:
      return {
        ...state,
        userDetail: action.payload,
      };

    case LOGIN_STATE:
      return {
        ...state,
        loggedIn: action.payload,
      };

    default:
      return state;
  }
};

export default userDetailReducer;