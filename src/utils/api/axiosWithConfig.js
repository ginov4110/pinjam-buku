import axios from "axios";

let baseUrl = "";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (backendUrl) => {
  baseUrl = backendUrl;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = baseUrl;

  return axiosConfig;
});

export default axiosWithConfig;
