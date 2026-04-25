import { BASE_URL } from './api';

const TIMEOUT_MS = 8000;

const parseResponseBody = async (res: Response) => {
  const contentType = res.headers.get("content-type") || "";
  const rawText = await res.text();

  if (!rawText) {
    return null;
  }

  if (contentType.includes("application/json")) {
    try {
      return JSON.parse(rawText);
    } catch {
      throw new Error("Server returned invalid JSON.");
    }
  }

  // Some backend failures return plain text or HTML instead of JSON.
  try {
    return JSON.parse(rawText);
  } catch {
    return rawText;
  }
};

const getErrorMessage = (data: any, fallback: string) => {
  if (typeof data === "string") {
    return data;
  }

  return data?.message || data?.Message || fallback;
};

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

    const data = await parseResponseBody(res);
    if (!res.ok) {
      throw new Error(getErrorMessage(data, "Something went wrong"));
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

    const data = await parseResponseBody(res);
    if (!res.ok) {
      throw new Error(
        getErrorMessage(
          data,
          "Unable to connect to server. Please check your network and backend status."
        )
      );
    }
    return data;
  }
};

export default http;
