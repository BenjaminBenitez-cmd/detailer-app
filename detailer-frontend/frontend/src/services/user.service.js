import axios from 'axios';
import authHeader from './auth-header';
import path from '../config'

const API_URL = path + "/api"

const getUserLists = () => {
    return axios.get(API_URL + "/list", { headers: authHeader() });
};

const getUserWashes = () => {
    return axios.get(API_URL + "/washes", { headers: authHeader() });
};

const postUserList = (listName) => {
    return axios.post(API_URL + "/list", { 
        name: listName,
        headers: authHeader()
    });
};

const postUserWash = (name, location, status) => {
    return axios.post(API_URL + "/washes", {
        headers: authHeader(),
        name: name,
        location: location,
        status: status, 
    });
};

export default {
    getUserLists,
    getUserWashes,
    postUserList,
    postUserWash,
};