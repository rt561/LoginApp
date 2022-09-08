import axios from 'axios';
import { base_url } from './url'

const axiosInstance = axios.create({ baseURL: `${base_url}` });

axiosInstance.interceptors.request.use(
    async function configuration(config) {
        const token = await localStorage.getItem('token');
        if (token) config.headers.authorization = `${token}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(

    async function (result) {
        return result;
    },
    function (error) {

        return Promise.reject(error);
    }
);

export const GET = async (url, params) => {
    let result = await axiosInstance.get(url, { params: params });
    return result;
};
export const POST = async (url, body, options) => {
    let result = await axiosInstance.post(url, body, options);
    return result;
};

export const PUT = async (url, body, options) => {
  let result = await axiosInstance.put(url, body, options);
  return result;
};

