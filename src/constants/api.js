import axios from "axios";

const api = axios.create({
  baseURL: "https://db61-3-81-60-198.ngrok-free.app",
    timeout: 5000
});

export default api;