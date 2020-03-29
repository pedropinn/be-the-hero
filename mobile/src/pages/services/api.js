import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.32:3333' // change for local ip 
});

export default api;