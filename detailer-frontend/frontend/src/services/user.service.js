import axios from 'axios';
import authHeader from './auth-header';
import { apiPath } from '../config'

const API_URL = apiPath + "/api";

export const getUserLists = () => {
    return axios.get(API_URL + "/list", { headers: authHeader() });
};

export const getUserWashes = () => {
    return axios.get(API_URL + "/washes", { headers: authHeader() });
};

export const postUserList = (listName) => {
    return axios.post(API_URL + "/list", { 
        name: listName,
        headers: authHeader()
    });
};

export const isSuccessful = (position) => {
     
    return position.coords;
}

export const getUserLocation = (callback) => {
    return navigator.geolocation.getCurrentPosition((position) => callback(position));
}

export const postUserWash = (name, location, status) => {
    return axios.post(API_URL + "/washes", {
        headers: authHeader(),
        name: name,
        location: location,
        status: status, 
    });
};

