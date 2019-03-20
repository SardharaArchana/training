import Interceptor from '../interceptor/interceptor';

export const getUserTable = (obj) => {
  const url='user/list';
  return Interceptor.get(url,obj);
}

export const getUserProfile = () => {
  const url = `user/getProfile`;
  return Interceptor.get(url);
}

export const getNotificationTable = () => {
  const url = 'notification/list';
  return Interceptor.get(url);
}