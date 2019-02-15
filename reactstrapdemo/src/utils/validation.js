export const validation = (e, data) => {
  let regexp, valid;
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
  valid = e.target.value.match(regexp) ? true : false;
  return valid;
}

export const emptyValue = (user) => {
  let valid = null;
  for (var key in user) {
    if (key === 'cpassword' ? (user.password !== '' && user[key] === '') : user[key] === '' || user[key].length === 0) {
      if (key === 'to' || 'from') {
        console.log(key)
        if (user.to === '' || user.from === '') {
          key = 'priceRange';
        }
      }
      valid = { ...valid, [key]: false };
    }
  }
  return valid;
}