import { ACTIVE_NOTIFICATION } from './actionTypes';

export const activeNotificationAction = (notification) => ({
  type: ACTIVE_NOTIFICATION,
  payload: notification,
});
