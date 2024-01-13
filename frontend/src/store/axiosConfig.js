import axios from 'axios';

const baseURL = 'https://byte-ecommerce-api.onrender.com';

const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
});

export default axiosInstance;
