export const BASE_URL = "https://arivra-backend-4sz6.onrender.com";

import axios from "axios";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchTutorials = async () => {
  try {
    const response = await api.get("/api/tutorial/all");
    // console.log("fetched", response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching tutorials:", error);
    return [];
  }
};