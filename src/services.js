import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const api = {
  get(endpoint) {
    return apiInstance.get(endpoint);
  },
};
