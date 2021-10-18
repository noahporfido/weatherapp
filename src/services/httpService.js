import axios from 'axios';

const httpService = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_API
})

export default httpService