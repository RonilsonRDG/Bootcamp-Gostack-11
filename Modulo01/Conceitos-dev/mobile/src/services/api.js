import axios from 'axios';

const api = axios.create ({
  baseURL:'HTTP://192.168.0.126:3333',
})

export default api;