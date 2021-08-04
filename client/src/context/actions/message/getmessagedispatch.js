import {
  ALL_USERS,
  ACTIVE_ROOM,
  ACTIVE_USER,
  ADD_MESSAGE,
  INJECT_MESSAGE,
  LOAD_MESSAGE,
  CLEAR_ACTIVE_MSGS,
} from '../../../constants/actionTypes';
import {handleDispatchMsg} from '../../../constants/chatActions';
import axios from '../../../helpers/axiosInstance';

export default () => dispatch => {
  dispatch(handleDispatchMsg());
};
