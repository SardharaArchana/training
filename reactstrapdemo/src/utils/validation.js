export const validation = (e, data) => {
  let regexp,valid;
  switch (e.target.name) {
    case 'email': {
      regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      break;
    }
    case 'password': {
      regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      break;
    }
    case 'cpassword': {
      regexp = `^${data.password}$`;
      break;
    }
    case 'number': {
      regexp = /^[ ()+]*([0-9][ ()+]*){10}$/;
      break;
    }
    case 'Gender': {
      regexp = /^[a-zA-Z]+$/;
      break;
    }
    case 'remarks': {
      regexp = /^(?!\s*$).+/;
      break;
    }
    default: {
      console.log('onchange');
    }
  }
  valid=e.target.value.match(regexp)?true:false;
  return valid;
}

export const emptyValue = (user) => {
  let valid = null;
  const { email, password, cpassword, number, Gender, remarks, Designation } = user;
  const arr = [
    { name: 'email', value: email },
    { name: 'password', value: password },
    { name: 'cpassword', value: cpassword },
    { name: 'number', value: number },
    { name: 'Gender', value: Gender },
    { name: 'remarks', value: remarks },
    { name: 'Designation', value: Designation },
  ];
  arr.map((a) => {
    if (a.name === 'cpassword' ? (password !== '' && a.value === '') : a.value === '' || a.value.length === 0) {
      valid = { ...valid, [a.name]: false };
      return null;
    }
    else {
      return null;
    }
  })
  return valid;
}