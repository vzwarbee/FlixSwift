import axios from 'axios';
import { BASE_CALL_API } from './base_url_api';
import store from '../Redux/store'
// let store;
// export const injectStore = _store => {
//     store = _store
// }
const axiosInstance = axios.create({
    baseURL: BASE_CALL_API,
    headers: {
        "Content-type": "application/json",
    },
    timeout:10000 // 10s
});

axiosInstance.interceptors.request.use(function (config) {
    const token = store.getState()?.auth.accessToken;
    if(config.headers){
        config.headers.Authorization = `Bearer ${token} `;
    }
    return config;
});
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
export default axiosInstance;
