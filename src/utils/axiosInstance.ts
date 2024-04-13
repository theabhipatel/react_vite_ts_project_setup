import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3331/api/v1",
  timeout: 3000,
});

/** ---> axios interceptor for request and response has to make when will need. */
