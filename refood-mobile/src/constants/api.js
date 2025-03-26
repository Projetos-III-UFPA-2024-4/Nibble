import axios from "axios";

const api = axios.create({
  baseURL: "https://bd23-13-217-86-176.ngrok-free.app",
    timeout: 5000
});

export default api;