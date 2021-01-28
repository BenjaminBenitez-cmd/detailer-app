import axios from 'axios';
import { apiPath } from '../config';

export const register = (username, email, password)  => {
    return axios.post(apiPath + "/signup", {
        username: username,
        email: email,
        password: password
    });
    
};

export const registerAuth = (token) => {
    return axios.post(apiPath + "/signinauth", {},
    {
        headers: {
            token: token, 
        }
    });
}

export const login = (email, password) => {
    return axios.post(apiPath + "/signin", {
        email: email,
        password: password
    })
    .then((response) => {
        if(response.data.token){
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};

export const resetRequest = (email) => {
    return axios.put(apiPath + "/reset", { email: email });
}

export const resetPassword = (token, password) => {
    return axios.put(apiPath + "/changepassword", { newPass: password }, { headers: { token } });
}

export const logout = () => {
    localStorage.removeItem("user");
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}

// export default {
//     register,
//     login,
//     logout,
//     getCurrentUser
// };


