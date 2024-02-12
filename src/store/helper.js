import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use(
  (config) => {
    const auth = JSON.parse(localStorage.getItem("frontlett::auth"));
    if (auth) {
      config.headers.Authorization = `Bearer ${auth.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const base = axios.create({
  baseURL: "http://localhost:5000/api",
});

export function cleanUpResponse(res) {
  const response = res.data;
  return response;
}

export function cleanUpErr(res) {
  let response;
  if (
    res.response.status === 401 &&
    res.response.data.message === "Authentication invalid"
  ) {
    console.log("Session Expired, Login to continue", "/onboard/login");
  }
  if (res.code === "ERR_NETWORK") {
    response = res?.message;
  } else {
    response = res?.response?.data;
  }
  return response;
}

export default api;
