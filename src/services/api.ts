import axios from "axios";

const api = axios.create({
  baseURL: "https://candidate-be-60058709024.development.catalystserverless.in/server/candidate_be_function/", 
});

export default api;
