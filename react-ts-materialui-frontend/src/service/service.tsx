import { endpoint } from "../config/config";
import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL = endpoint;

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status) {
      return response;
    } else {
      throw new Error("request error");
    }
  },
  (error: AxiosError) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      console.log("An unexpected error occurrred.");
    }

    return Promise.reject(error);
  }
);

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
};

export default http;
