import axios from 'axios';

const baseUrl = 'http://127.0.0.1:3000/api/';
const errorMsg = `Something Went Wrong!.....`;

const post = (url, obj) => {
  const apiUrl = `${baseUrl}${url}`;
  return axios.post(apiUrl, obj, {
    headers: { token: localStorage.getItem('userToken') }
  })
    .then(response => {
      console.log(response);
      return Promise.resolve({
        success: true,
        data: response.data,
        error: null,
      });
    })
    .catch(error => {
      return Promise.reject({
        success: false,
        error: `${errorMsg}${error}`,
        data: null,
      })
    })
}

const del = (url, obj) => {
  const apiUrl = `${baseUrl}${url}`;
  return axios.delete(apiUrl, obj, {
    headers: { token: localStorage.getItem('userToken') }
  })
    .then(response => {
      console.log(response);
      return Promise.resolve({
        success: true,
        data: response.data,
        error: null,
      });
    })
    .catch(error => {
      return Promise.reject({
        success: false,
        error: `${errorMsg}${error}`,
        data: null,
      })
    })
}

const get = (url, params) => {
  const apiUrl = `${baseUrl}${url}`;
  return axios.get(apiUrl,
    {
      params: params,
      headers: { token: localStorage.getItem('userToken') }
    })
    .then(response => {
      console.log('response:::', response);
      return Promise.resolve({
        success: true,
        data: response.data,
        error: null,
      });
    })
    .catch(error => {
      return Promise.reject({
        success: false,
        error: `${errorMsg}${error}`,
        data: null,
      })
    })
}

const put = (url, obj) => {
  const apiUrl = `${baseUrl}${url}`;
  return axios.put(apiUrl, obj, {
    headers: { token: localStorage.getItem('userToken') }
  })
    .then(response => {
      console.log('response', response);
      return Promise.resolve({
        success: true,
        data: response.data,
        error: null,
      });
    })
    .catch(error => {
      return Promise.reject({
        success: false,
        error: `${errorMsg}${error}`,
        data: null,
      })
    })
}

export default { get, put, post, del };