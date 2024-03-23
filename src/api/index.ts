import {AsyncStorage} from 'react-native';

import axios from 'axios/index';
import Toast from 'react-native-toast-message';

export const apiService = axios.create({});

export const get = async (path, params = {}) => {
  return apiService.get(path, {params});
};

apiService.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error),
);

apiService.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    if (error && error.response && error.response.data.code === 404) {
      return Promise.reject(error);
    }
    if (error.response && error.response.data && error.response.data.message) {
      console.log(error.response.data.message);
      Toast.show({
        type: 'error',
        text1: '',
        text2: error.response.data.message,
      });
    }
    if (error && error.response && error.response.data.code === 401) {
      AsyncStorage.clear();
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);
