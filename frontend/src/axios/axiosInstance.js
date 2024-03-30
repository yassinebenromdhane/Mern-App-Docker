import axios from "axios";
const token = localStorage.getItem("token");
// Create a custom Axios instance with defaults
const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000, // Set a timeout for requests (in milliseconds)
  headers: {
    Authorization: `Bearer ${token}`, // Set default Authorization header with token
    "Content-Type": "application/json", // Set default content type
  },
});

// Define request interceptors (optional)
customAxios.interceptors.request.use(function (config) {
  // You can modify the request configuration before it is sent
  console.log('Request being sent:', config);
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Define response interceptors (optional)
customAxios.interceptors.response.use(function (response) {
  // You can modify the response data before it is returned
  console.log('Response received:', response.data);
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default customAxios;
