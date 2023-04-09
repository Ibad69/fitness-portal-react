import axios from "axios";
// import { Base64 } from 'js-base64'

// const token = localStorage.getItem('token') !== null ? Base64.decode(localStorage.getItem('token')) : ''
const token = localStorage.getItem('token')
const authToken = `Bearer ${token}`;

const instance = axios.create({
    baseURL: "http://18.212.235.9",
    headers: {
        "Content-Type": "application/json",
        "Authorization": authToken,
    }
});

export default instance;