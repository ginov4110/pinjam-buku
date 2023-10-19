import axios from "axios";

let baseUrl = "";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (backendUrl) => {
  baseUrl = backendUrl;
};

axiosWithConfig.interceptors.request.use((axiosWithConfig) => {
  axiosConfig.baseURL = baseUrl;

  return axiosConfig;
});

export default axiosWithConfig;
