import Interceptor from '../interceptor/interceptor';

 export const  getUserList = (page) => {
  const url = `users?page=${page}`;
  // const url = '';
  try{
  let res= Interceptor.get(url);
  return res;
  }catch(E){
    return E;
  }
}

export const addUser = (obj) => {
  const url = 'users';
  return Interceptor.post(url, obj);
};

export const deleteUser = (id) => {
  const url=`users/${id}`;
  return Interceptor.del(url);
  };

export const getUser = (id) => {
   const url=`users/${id}`;
  return Interceptor.get(url);
};
export const editUser = (obj) => {
  const url=`users/${obj.id}`;
  return Interceptor.put(url,obj);
};