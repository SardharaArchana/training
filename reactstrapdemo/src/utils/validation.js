export const validation = (e, data, isValid) => {
  let regexp, valid = isValid;
  switch (e.target.name) {
    case 'email': {
      regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      break;
    }
    case 'password': {
      regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      let val = (e.target.value === data.cpassword) ? true : false;
      valid = { ...valid, cpassword: val }
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
  valid = { ...valid, [e.target.name]: e.target.value.match(regexp) ? true : false };
  return valid;
}

export const emptyValue = (user) => {
  let valid = null;
  for (var key in user) {
    console.log(key)
    if (key === 'cpassword' ? (user.password !== '' && user[key] === '') : user[key] === '' ||user[key] === {} || user[key].length === 0) {   
      if (key === 'to' || 'from') {
        console.log(key)
        if (user.to === '' || user.from === '') {
          key = 'priceRange';
        }
      }
      if(key==='name' || key==='selectname'){
        key='async';
      }
      valid = { ...valid, [key]: false };
    }
  }
  return valid;
}