import { endpoint } from "../config/config";
import axios from "axios";

axios.defaults.baseURL = endpoint;

axios.interceptors.response.use(
  (response) => {
    if (response.status) {
      return response;
    } else {
      throw new Error("request error");
    }
  },
  (error) => {
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

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
};
