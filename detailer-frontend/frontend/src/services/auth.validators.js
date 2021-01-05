const checkIfEmpty = (value) => {
    if(value.trim() === ""){
        return false;
    } else {
        return true;
    }
};

const checkForBoth = (email, password) => {
    let errors =[];
    if(!/\S+@\S*\.\S+/.test(email)){
        errors.push("Invalid email");
    } else if (!checkIfEmpty(email)){
        errors.push("Email should not be empty");
    }
    if(!/\S{8,}/.test(password)){
        errors.push("Invalid Password");
    } else if (!checkIfEmpty(password)){
        errors.push("Password is empty");
    }
    return errors
}

export default {
    checkIfEmpty,
    checkForBoth
}