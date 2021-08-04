import {
  CREATE_CONTACT_FAIL,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes';
import axios from '../../../helpers/axiosInstance';

export default form => dispatch => onSuccess => {
  const requestPayload = {
    tweet_name: form.tweet_name || '',
    tweet: form.tweet || '',
    // user: form.user || '',
  };
  console.log(form);

  dispatch({
    type: CREATE_CONTACT_LOADING,
  });

  axios
    .post('/tweets/new', requestPayload)
    .then(res => {
      console.log('res.data', res.data);
      dispatch({
        type: CREATE_CONTACT_SUCCESS,
        payload: res.data,
      });

      onSuccess();
    })
    .catch(err => {
      dispatch({
        type: CREATE_CONTACT_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try again'},
      });
    });
};
