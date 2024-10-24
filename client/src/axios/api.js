import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
        "Accept": "application/json",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        // "Access-Control-Allow-Credentials": true
        // "Access-Control-Allow-Origin": "http://localhost:3000"
    },
});

export default instance