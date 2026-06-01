// Expo automatically picks up variables prefixed with EXPO_PUBLIC_ from the .env file.
export const BASE_URL = process.env.EXPO_PUBLIC_API_URL || "http://10.160.115.78:7296/api";

export const apiConfig = {
    BASE_URL,
    TIMEOUT: 10000,
};

export default apiConfig;

