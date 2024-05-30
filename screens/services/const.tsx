import axios from "axios";

export const API_URL = "http://20.83.162.105:8080";

export const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});
