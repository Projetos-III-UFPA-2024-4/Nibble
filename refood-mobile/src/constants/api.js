import axios from "axios";

const api = axios.create({
  baseURL: "https://a3a9-3-81-110-4.ngrok-free.app",
    timeout: 5000
});

export default api;