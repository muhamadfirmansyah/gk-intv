import axios from "axios";

const api = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        'x-api-key': process.env.VUE_APP_API_KEY
    }
})

export default api;