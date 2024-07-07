import axios from "axios";
const api_url = "https://posts-server-oqzv.onrender.com";
const api = axios.create({
    

    baseURL: `${api_url}`
});


export default api;