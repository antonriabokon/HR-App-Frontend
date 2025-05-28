import axios from "axios";

const useAxios = () => {
  const baseURL =
    import.meta.env.MODE === "production"
      ? "https://hr-app-backend-hjdd.onrender.com"
      : "http://localhost:3001";

  const get = (endpoint) => axios.get(`${baseURL}${endpoint}`);
  const post = (endpoint, data) => axios.post(`${baseURL}${endpoint}`, data);
  const patch = (endpoint, data) => axios.patch(`${baseURL}${endpoint}`, data);

  return { get, post, patch };
};

export default useAxios;