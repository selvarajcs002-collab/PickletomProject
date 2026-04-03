import { BASE_URL } from '../services/api';

const TIMEOUT_MS = 8000;

const fetchWithTimeout = async (url: string, options: any) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (error: any) {
    clearTimeout(id);
    if (error.name === 'AbortError') {
      throw new Error("Unable to connect to server. Request timed out.");
    }
    throw error;
  }
};

const http = {
  async get(endpoint: string) {
    const res = await fetchWithTimeout(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.message || "Something went wrong");
    }
    return data;
  },

  async post(endpoint: string, body: any) {
    const res = await fetchWithTimeout(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.message || "Unable to connect to server. Please check your network and backend status.");
    }
    return data;
  }
};

export default http;