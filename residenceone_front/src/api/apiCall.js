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
export const getUserDetails = (id) => {
  const url = `user/detail/${id}`;
  return Interceptor.get(url);
}
export const getReceptionTable = (obj) => {
  const url = `reception/reception-users-list`;
  return Interceptor.get(url,obj);
}
export const getUnitDetails = (id) => {
  const url = `unit/detail/${id}`;
  return Interceptor.get(url);
}
export const getOwnerDetails = (id) => {
  const url = `owner/getOwnerById/${id}`;
  return Interceptor.get(url);
}
export const getGroupTable = (obj) => {
  const url='family/list';
  return Interceptor.get(url,obj);
}

export const getFamilyByOnwerId=(id)=>{
  const url = `family/getResidents/${id}`;
  return Interceptor.get(url);
}

export const markHandicapped=(id,status)=>{
  const url = `user/updateisHandicapped/${status}`;
  return Interceptor.post(url,{userId:id});
}
export const markActive=(id,status)=>{
  const url = `user/updateStatus/${id}/${status}`;
  return Interceptor.get(url);
}

export const updateFloors=(id,obj)=>{
  const url=`entry/edit/${id}`;
  return Interceptor.post(url,obj);
}
export const getDocumentList=(obj)=>{
  const url=`document/list`;
  return Interceptor.get(url,obj);
}