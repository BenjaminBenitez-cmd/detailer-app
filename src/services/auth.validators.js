export const checkIfEmpty = (value) => {
    if(value.trim() === ""){
        return true;
    } else {
        return false;
    }
};

export const checkForBoth = ( username, email, password) => {
    let errors =[];
    if(!/\S+@\S*\.\S+/.test(email)){
        errors.push("email");
    } else if (!checkIfEmpty(email)){
        errors.push("Empty mail");
    }   
    if(!/\S{8,}/.test(password)){
        errors.push("password");
    } else if (!checkIfEmpty(password)){
        errors.push("Password is empty");
    }
    if(!/\S{8}/.test(username)){
        errors.push("username");
    } else if (!checkIfEmpty(username)){
        errors.push("Username is empty");
    }
    return errors
}

export const CheckForEmail = (email) => {
    if(!/\S+@\S*\.\S+/.test(email)){
        return false;
    } else if (checkIfEmpty(email)){
        return false;
    }
    return true;   
}

export const checkForPassword = (password) => {
    if(!/\S{8,}/.test(password)){
        return "Password should be atleast 8 characters";
    } else if (checkIfEmpty(password)){
        return "Password should not be empty";
    } 
    return "valid";
}
