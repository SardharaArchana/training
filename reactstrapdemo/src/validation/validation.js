export const checkEmail = (email) => {
    let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (email.match(reg) && email !== '') {
        return 'valid';
    } else {
        return 'invalid';
    }
}

export const checkPassword=(password)=> {
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password.match(reg) && password !== '') {
        return 'valid';
    } else {
        return 'invalid';
    }
}

export const checkConfirmPassword=(cpassword,psd)=> {
    if (cpassword === psd && cpassword !== '') {
        return 'valid';
    } else {
        return 'invalid';
    }
}

export const checkPhnNo=(phnno)=> {
    let reg = /^[ ()+]*([0-9][ ()+]*){10}$/;
    if (phnno.match(reg) && phnno !== '') {
        return 'valid';
    } else {
        return 'invalid';
    }
}