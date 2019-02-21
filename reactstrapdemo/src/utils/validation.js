export const validation = (name, value, data, isValid) => {
  console.log("name", name, "value", value);
  let regexp, valid = isValid;
  switch (name) {
    case 'email': {
      regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      break;
    }
    case 'password': {
      regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      let val = (value === data.cpassword) ? true : false;
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
    case 'Designation': {
      let val = data.Designation.length !== 0 ? true : false;
      valid = { ...valid, Designation: val }
    }
      break;
    default: {
      console.log('onchange');
    }
  }
  valid = { ...valid, [name]: value.match(regexp) ? true : false };
  return valid;
}

export const emptyValue = (user) => {
  let valid = null;
  for (var key in user) {
    if ((key === 'to' || key === 'from') ? user.to === '' : user.from === '') {
      valid = { ...valid, priceRange: false };
    }
    if (key === 'cpassword' ?
      (user.password !== '' && user[key] === '') :
      user[key] === '' || user[key].length === 0) {
      valid = { ...valid, [key]: false };
    }

  }
  return valid;
}