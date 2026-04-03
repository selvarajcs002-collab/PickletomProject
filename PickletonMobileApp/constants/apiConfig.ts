import { Platform } from 'react-native';

/**
 * API Configuration
 * 
 * Handles dynamic BASE_URL selection based on the environment:
 * - Android Emulator: 10.0.2.2
 * - iOS Simulator: localhost
 * - Real Device: System IP (e.g., 192.168.1.10)
 * 
 * CRITICAL: We use http:// (NOT https://) to avoid self-signed certificate failures.
 * IMPORTANT: Ensure your .NET backend is bound to "http://0.0.0.0:7296".
 */

const DEV_MACHINE_IP = '192.168.1.10'; 
const PORT = '7296';

const getBaseUrl = () => {
  if (Platform.OS === 'android') {
    // 10.0.2.2 is the shortcut for host machine from Android Emulator
    // If testing on a REAL Android device, you should use DEV_MACHINE_IP instead.
    return `http://10.0.2.2:${PORT}`;
  }
  
  if (Platform.OS === 'ios') {
    // For iOS Simulator use localhost, for REAL iOS device use DEV_MACHINE_IP
    return `http://localhost:${PORT}`; 
  }

  // Web fallback
  return `http://localhost:${PORT}`;
};

// Use the explicit DEV_MACHINE_IP to ensure real devices can connect
export const BASE_URL = `http://${DEV_MACHINE_IP}:${PORT}/api`;

export default {
  BASE_URL,
  TIMEOUT: 10000,
};
