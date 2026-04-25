import { Platform } from 'react-native';

/**
 * API Configuration
 * 
 * Handles dynamic BASE_URL selection based on the environment:
 * - Environment Variable: EXPO_PUBLIC_API_URL
 * - Fallback for Android/iOS/Web
 */

const DEV_MACHINE_IP = '192.168.1.10';
const PORT = '7296';

export const BASE_URL = process.env.EXPO_PUBLIC_API_URL || `http://${DEV_MACHINE_IP}:${PORT}/api`;

export default {
  BASE_URL,
  TIMEOUT: 10000,
};

