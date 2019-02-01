import axios from 'axios';

const baseUrl = 'https://reqres.in/api/';

const post = (url, obj) => {
  const apiUrl = `${baseUrl}${url}`;
  return axios.post(apiUrl, obj)
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
        error: 'Something Went Wrong!' + error,
        data: null,
      })
    })
}

const del = (url, obj) => {
  const apiUrl = `${baseUrl}${url}`;
  return axios.delete(apiUrl, obj)
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
        error: 'Something Went Wrong!' + error,
        data: null,
      })
    })
}

const get = (url) => {
  const apiUrl = `${baseUrl}${url}`;
  return axios.get(apiUrl)
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
        error: 'Something Went Wrong!' + error,
        data: null,
      })
    })
}

const put = (url, obj) => {
  const apiUrl = `${baseUrl}${url}`;
  return axios.put(apiUrl, obj)
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
        error: 'Something Went Wrong!' + error,
        data: null,
      })
    })
}

export default { get, put, post, del };