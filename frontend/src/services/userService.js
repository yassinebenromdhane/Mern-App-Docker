import customAxios from "../axios/axiosInstance";

// Get all users
export function getAllUsers() {
  return customAxios.get("users");
}

// Get user by id
export function getUserById(id) {
  return customAxios.get(`users/${id}`);
}

// Get user by email
export function getUserByEmail(email) {
  return customAxios.get(`users/email/${email}`);
}

// Get user by username
export function getUserByUsername(username) {
  return customAxios.get(`users/username/${username}`);
}

// Update user by id
export function updateUserById(id, user) {
  return customAxios.put(`users/${id}`, user);
}

// Delete user by id
export function deleteUserById(id) {
  return customAxios.delete(`users/${id}`);
}

// Update isVerified field
export function updateIsVerified(id) {
  return customAxios.put(`users/verify/${id}`);
}
