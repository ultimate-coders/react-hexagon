import { ACTIVE_NOTIFICATION } from './actionTypes';

const initialState = {
  activeNotification: {},
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_NOTIFICATION:
      return {
        ...state,
        activeNotification: action.payload,
      };

    default:
      return state;
  }
};

export default notificationReducer;
