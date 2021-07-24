import { ACTIVE_CHAT, ACTIVE_CHAT_USER } from './actionTypes';

export const activeChatAction = (chat) => ({
  type: ACTIVE_CHAT,
  payload: chat,
});

export const activeChatUserAction = (activeUser) => ({
  type: ACTIVE_CHAT_USER,
  payload: activeUser,
});
