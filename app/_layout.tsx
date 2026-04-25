import { Stack } from "expo-router";
import "../global.css";
import { GradientBackground } from "../components/GradientBackground";
import { OnboardingProvider } from "../store/onboardingStore";
import Toast from 'react-native-toast-message';

export default function RootLayout() {
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

