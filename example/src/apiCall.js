import axios from 'axios';

export const getUserList = () => {
  axios.get('https://reqres.in/api/users?page=1')
    .then((response) => {
      console.log('response', response);
    })
    .catch((error) => {
      console.log(error);
    });
};
