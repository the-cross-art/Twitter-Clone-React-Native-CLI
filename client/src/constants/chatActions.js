import IO from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URI} from './actionTypes';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

//

export const socket = IO(`${API_URI}`, {
  forceNew: true,
});

socket.on('connection', () => console.log('connected'));

export const LoadMessages = () => async dispatch => {};
export const ChatUserList = () => async dispatch => {};
export const uniqueUserChat = () => async dispatch => {};
export const onUniqueChat = () => async dispatch => {};
export const sendMsg = () => async dispatch => {};
export const handleDispatchMsg = () => async dispatch => {};
export const LoadRoomMsgs = () => async dispatch => {};
export const clearActiveMsgs = () => async dispatch => {};
