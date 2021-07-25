import { ACTIVE_CHAT, ACTIVE_CHAT_USER } from './actionTypes';

const initialState = {
  activeChat: null,
  activeChatUser: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_CHAT:
      return {
        ...state,
        activeChat: action.payload,
      };

    case ACTIVE_CHAT_USER:
      return {
        ...state,
        activeChatUser: action.payload,
      };

    default:
      return state;
  }
};

export default chatReducer;