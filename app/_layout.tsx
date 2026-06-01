import { Stack } from "expo-router";
import "../global.css";
import { GradientBackground } from "../components/GradientBackground";
import { OnboardingProvider } from "../store/onboardingStore";
import Toast from 'react-native-toast-message';
import { useSignalR } from "../services/useSignalR";

export default function RootLayout() {
  useSignalR();

  return (
    <OnboardingProvider>
      <GradientBackground>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
        <Toast />
      </GradientBackground>
    </OnboardingProvider>
  );
}

