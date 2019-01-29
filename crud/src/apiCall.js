import axios from 'axios';
export const getUserList = (id) => {
  return (
    axios.get(`https://reqres.in/api/users?page=${id}`)
      .then((response) => {
        console.log('getUserList', response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
  )
};

export const addUser = (obj) => {
  return (
    axios.post('https://reqres.in/api/users', {
      name: obj.first_name,
      job: obj.last_name,
    })
      .then((response) => {
        console.log('addUser', response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
  )
};

export const deleteUser = (id) => {
  return (
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        console.log('deleteUser', response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
  )
};

export const getUser = (id) => {
  return (
    axios.get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        console.log('getUser', response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
  )
};
export const editUser = (obj) => {
  return (
    axios.put(`https://reqres.in/api/users/${obj.id}`, {
      name: obj.first_name,
      job: obj.last_name,
    })
      .then((response) => {
        console.log('editUser', response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
  )
};