import axios from 'axios';
export const getUserList = () => {
  return (
    axios.get('https://reqres.in/api/users?page=1')
      .then((response) => {

        console.log('response', response);
        return response;
      })
      .catch((error) => {

        console.log(error);
        return error;
      })
  )
};

export const addUser = (name, job) => {
  return (
    axios.post('https://reqres.in/api/users', {
      name: name,
      job: job,
    })
      .then((response) => {

        console.log(response);
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

        console.log(response);
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

        console.log(response);
        return response;

      })
      .catch((error) => {

        console.log(error);
        return error;
      })
  )
};
export const editUser = (id,firstname,lastname) => {
  return (
    axios.get(`https://reqres.in/api/users/${id}`, {
      name: firstname,
      job: lastname,
    })
      .then((response) => {

        console.log(response);
        return response;

      })
      .catch((error) => {

        console.log(error);
        return error;
      })
  )
};