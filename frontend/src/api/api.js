import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change this to your backend URL

export const instance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});
