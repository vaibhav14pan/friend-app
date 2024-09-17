import { instance } from './api';

// Login user
export const loginUser = (credentials) => {
  return instance.post('/auth/login', credentials);
};

// Sign up user
export const signUpUser = (userData) => {
  return instance.post('/auth/register', userData);
};
