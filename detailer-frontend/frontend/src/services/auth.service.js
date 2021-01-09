import axios from 'axios';
import { apiPath } from '../config';

export const register = (email, password)  => {
    return axios.post(apiPath + "/signup", {
        email: email,
        password: password
    });
    
};

export const login = (email, password) => {
    return axios.post(apiPath + "/signin", {
        email: email,
        password: password
    })
    .then((response) => {
        if(response.data.token){
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data;
    });
};


export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
};

// export default {
//     register,
//     login,
//     logout,
//     getCurrentUser
// };


