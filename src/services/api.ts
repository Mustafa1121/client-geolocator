import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-geolocator.vercel.app',
});

export default api;
