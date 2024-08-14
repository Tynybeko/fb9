import axios from 'axios'




const API = axios.create({
    baseURL: 'https://online-back-8jc6.onrender.com/',
})



API.interceptors.request.use((config) => {
    const TOKEN = localStorage.getItem('token')
    if (TOKEN) {
        config.headers.Authorization = 'Bearer ' + TOKEN
    }
    return config
}, error => Promise.error(error))

export default API