import axios from 'axios';
import authHeader from './auth-header';
import { apiPath, mapboxBoxToken } from '../config';

const API_URL = apiPath + "/api";


export const getUserLists = () => {
    return axios.get(API_URL + "/list", { headers: authHeader() });
};

export const getUserWashes = () => {
    return axios.get(API_URL + "/washes", { headers: authHeader() });
};

export const getUserWash = (id) => {
    return axios.get(API_URL + `/washes/${id}`, { headers: authHeader() });
}

export const postUserWash = (info) => {
    return axios.post(API_URL + `/washes`, info, {
        headers:authHeader()
    })
}

export const postUserList = (listName) => {
    return axios.post(API_URL + "/list", { 
        name: listName,
        headers: authHeader()
    });
};

export const isSuccessful = (position) => {
    return position.coords;
}

export const getUserLocation = async (lng, lat) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + lng + "," + lat + ".json?access_token=" + mapboxBoxToken;
    return axios.get(url);
}
