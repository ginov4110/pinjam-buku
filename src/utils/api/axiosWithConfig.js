import axios from "axios";

let baseUrl = "https://651a7caa340309952f0d6022.mockapi.io/";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (backendUrl) => {
  baseUrl = backendUrl;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = baseUrl;

  return axiosConfig;
});

export default axiosWithConfig;
