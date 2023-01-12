import axios from "axios";

const API = axios.create({
    baseURL: "https://projeto-json-server-xp9l.onrender.com"
})

export default API