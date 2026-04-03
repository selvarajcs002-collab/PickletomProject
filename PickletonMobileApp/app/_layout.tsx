import { Stack } from "expo-router";
import "../global.css";
import { GradientBackground } from "../components/GradientBackground";
import { OnboardingProvider } from "../store/onboardingStore";

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
      </GradientBackground>
    </OnboardingProvider>
  );
}
