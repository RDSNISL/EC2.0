import axios from "axios"
import { Toast } from "components/Common/Toaster";

const API_URL = "";

const axiosApi = axios.create({
  baseURL: API_URL,
})

const successHandler = (response) => {
  if (response?.data?.message) {
    // Toast.success(response?.data?.message)
  }
  return response;
};

const errorHandler = (error) => {
  Toast.error(error?.response?.data?.message)
  if (error?.response?.status === 401) {
    localStorage.clear();
    // history.push("/login")
  }

  return error?.response
};

const requestHandler = (config) => {
  const token = localStorage.getItem('authUser');
  if (token) {
    config.headers["x-access-token"] = token
  }
  return config;
};


axiosApi.interceptors.request.use(
  (config) => requestHandler(config),
  (error) => Promise.reject(error)
);

axiosApi.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}


/* Common API For All Services */
/**
 * @Author - Dipesh Mali 
 */
export const makeAPICall = async (apiData) => {
  let config = {
    headers: {
      'Content-Type': 'application/json'
    },
    ...apiData.config
  }
  const { option: { method, url, baseURL }, ...rest } = apiData;
  return await axiosApi({
    method,
    url,
    baseURL,
    ...rest,
    ...config
  }).then(response => response.data)
    .catch(err => err.response)
}
