import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchTutorials = async () => {
  try {
    const response = await api.get("/api/tutorial/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching tutorials:", error);
    return [];
  }
};