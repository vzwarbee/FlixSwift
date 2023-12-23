import axiosInstance from "./axios"

export function getRequest(url, params) {
    try {
        return axiosInstance.get(url, {
            params
        });
    } catch (error) {
        return undefined;
    }
}
export function postRequest(url, data){
    try {
        return axiosInstance.post(url, data);
    } catch (error) {
        return undefined;
    }
}