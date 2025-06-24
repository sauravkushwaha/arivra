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

export const signupUser = async (formData) => {
  try {
    const response = await api.post("/auth/signup", formData);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await api.post("/auth/login", formData);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const postTutorial = async (tutorialData, token) => {
  try {
    const response = await api.post("/api/tutorial/add", tutorialData, {
      headers: {
        Authorization:` Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting tutorial:", error);
    throw error;
  }
};