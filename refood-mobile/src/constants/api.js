import axios from "axios";

const api = axios.create({
  baseURL: "https://4feb-2804-14c-59a4-8565-581d-2def-1f79-d4e8.ngrok-free.app",
    timeout: 5000
});

export default api;