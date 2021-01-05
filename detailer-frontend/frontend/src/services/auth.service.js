import axios from 'axios';
import API_URL from '../config';

const register = (email, password)  => {
    return axios.post(API_URL + "/signup", {
        email: email,
        password: password
    });
    
};

const login = (email, password) => {
    return axios.post(API_URL + "/signin", {
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


const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
};

export default {
    register,
    login,
    logout,
    getCurrentUser
};
