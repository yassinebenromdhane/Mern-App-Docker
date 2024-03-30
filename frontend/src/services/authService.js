import customAxios from "../axios/axiosInstance";

// Log in an existing user
export function login(email, password) {
  return customAxios.post("users/login", { email, password });
}

// Register a new user
export function register(credentials) {
  return customAxios.post("users/register", JSON.stringify(credentials));
}

// Reset a user's password
export function resetPassword(email) {
  return customAxios.post("password-reset", { email });
}

// Verify the password url
export function verifyPasswordUrl(id, token) {
  return customAxios.get(`password-reset/${id}/${token}`);
}

// Change a user's password
export function changePassword(password,id, token) {
  return customAxios.post(`password-reset/${id}/${token}`, { password });
}
