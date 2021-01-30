export const checkIfEmpty = (value) => {
    if(value.trim() === ""){
        return true;
    } else {
        return false;
    }
};

export const checkForBoth = ( username, email) => {
    
}

export const checkForUsername = (fieldValue) => {
    if(/[^a-zA-Z -]/.test(fieldValue)) {
        return "Invalid Characters";
    }
    if(fieldValue.trim() === '') {
        return "Invalid characters";
    }
    if(fieldValue.trim().length < 8){
        return "Username needs to be at least three characters";
    }
    return null;
}

export const CheckForEmail = (email) => {
    if(!/\S+@\S*\.\S+/.test(email)){
        return "Invalid email";
    } else if (checkIfEmpty(email)){
        return "Email is required";
    }
    return null;   
}

export const checkForPassword = (password) => {
    if(!/\S{8,}/.test(password)){
        return "Password should be atleast 8 characters";
    } 
    if (checkIfEmpty(password)){
        return "Password is required";
    } 
    return null;
}
