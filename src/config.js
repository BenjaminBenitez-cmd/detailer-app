require('dotenv').config();
export const apiPath = process.env.REACT_APP_API_URL || "http://localhost:5000";
export const mapboxBoxToken = process.env.REACT_APP_MAP_BOX;
