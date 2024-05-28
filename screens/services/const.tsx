import axios from "axios";

export const API_URL = "http://192.168.150.157:8080";

export const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});
