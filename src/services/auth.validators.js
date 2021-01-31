export const checkForPassword = (password) => {
    if (checkIfEmpty(password)) {
       return "Password is required";
   }
   if ( password.trim().length < 8) {
       return "Password should be longer than 8 characters";
   }
   return null;
}

export const checkIfEmpty = (value) => {
   if (value.trim() === "") {
       return true;
   } else {
       return false;
   }
};

export const checkForEmail = (email) => {
   if (checkIfEmpty(email)) {
       return "Email is required";
   }
   if (!/\S+@\S*\.\S+/.test(email)) {
       return "Invalid email";
   }
   return null;
}

export const checkForUsername = (fieldValue) => {
   if (/[^a-zA-Z -]/.test(fieldValue)) {
       return "Username has invalid characters";
   }
   if (fieldValue.trim() === '') {
       return "Username is required";
   }
   if (fieldValue.trim().length < 8) {
       return "Username should be more than eight characters";
   }
   return null;
}



export const validateThree = (obj) => {
 const { email, username, password } = obj;
 let errors = [];
 const emailCheck = checkForEmail(email);
 if(emailCheck !== null){
   errors.push(emailCheck);
 }
 
 const userCheck = checkForUsername(username);
 if(userCheck !== null){
   errors.push(userCheck);
 }
 const userPassword = checkForPassword(password);
 if(userPassword !== null){
   errors.push(userPassword);
 }
 return errors;
};

export const validateTwo = (obj) => {
 const {email, password} = obj;
 let errors = [];
 const emailCheck = checkForEmail(email);
 if(emailCheck !== null){
   errors.push(emailCheck);
 }
 const passwordCheck = checkForPassword(password);
 if(passwordCheck !== null){
   errors.push(passwordCheck);
 }
 return errors;
}

