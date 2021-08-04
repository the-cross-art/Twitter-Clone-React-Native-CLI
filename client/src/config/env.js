import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const devEnvironmentVariables = {
  BACKEND_URL: 'http://10.0.2.2:8000/api',
};

const prodEnvironmentVariables = {
  BACKEND_URL: 'http://10.0.2.2:8000/api',
};
export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;

// BACKEND_URL: 'https://twitter-server-imran.herokuapp.com/api',
// BACKEND_URL: 'http://10.0.2.2:8000/api',
