import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const api = axios.create({
  baseURL: BASE_URL,
});

// ✅ Get all tutorials
export const fetchTutorials = async () => {
  try {
    const response = await api.get("/api/tutorial/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching tutorials:", error);
    return [];
  }
};

// ✅ Signup user
export const signupUser = async (formData) => {
  try {
    const response = await api.post("/auth/signup", formData);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

// ✅ Login user (FIXED to prevent double toast)
export const loginUser = async (formData) => {
  try {
    const response = await api.post("/auth/login", formData);
    if (response.status === 200 && response.data?.token) {
      return response; // correct login
    } else {
      throw new Error("Invalid login response");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// ✅ Add tutorial with token
export const postTutorial = async (tutorialData, token) => {
  try {
    const response = await api.post("/api/tutorial/add", tutorialData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting tutorial:", error);
    throw error;
  }
};