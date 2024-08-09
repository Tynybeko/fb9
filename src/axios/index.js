import axios from "axios";




const intance = axios.create({
    baseURL: 'https://rosneft-back.prolabagency.com/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
})








export default intance