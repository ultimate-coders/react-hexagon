import React, { useEffect } from 'react';
import openSocket from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { activeChatAction } from './store/chat';
import { activeNotificationAction } from './store/notifications';
import { MESSAGES_SOCKET_URL, NOTIFICATIONS_SOCKET_URL } from './urls';

let messagesSocket;
let notificationsSocket;

const SocketService = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(mapStateToProps);

    const setupSocket = () => {
        if(!user)return;

        // Messages service
        messagesSocket = openSocket(MESSAGES_SOCKET_URL);
        messagesSocket.emit('join', {user_id: user.id});
        messagesSocket.on('message', (data) => {
            console.log('received message : ', data);
            if (user.id === data.receiver_id || user.id === data.sender_id){
                dispatch(activeChatAction(data));
            } else {return;}
        })

        // Notifications service
        notificationsSocket = openSocket(NOTIFICATIONS_SOCKET_URL);
        notificationsSocket.emit('join', {user_id: user.id});
        notificationsSocket.on('notification', (data) => {
            console.log('received notification : ', data);
            if (user.id === data.receiver_id){
                dispatch(activeNotificationAction(data));
            } else {return;}
        })
    };

    useEffect(setupSocket, [user]);

    return <></>;
};

const mapStateToProps = state  => ({
    activeChatUser: state.chat.activeChatUser,
    user: state.userDetails.user
})

export default SocketService;
