import axios from "axios";

export const API_URL = "http://20.55.48.15:8080";

export const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

