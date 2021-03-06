import { USER_DETAIL_INFO, LOGIN_STATE } from './actionTypes';

const initialState = {
  loggedIn: false,
  user: null,
};

const userDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAIL_INFO:
      return {
        ...state,
        user: action.payload,
      };

    case LOGIN_STATE:
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default userDetailReducer;
