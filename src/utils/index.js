import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://strapi-store-server.onrender.com/api',
});

export default authFetch;
