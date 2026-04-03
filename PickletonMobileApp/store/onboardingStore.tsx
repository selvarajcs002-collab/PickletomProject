import React, { createContext, useContext, useState } from 'react';

interface OnboardingData {
  userId: string;
  step1: any;
  step2: any;
  step3: any;
  step4: any;
  step5: any;
  localProfileImage: string | null;
  localCoverImage: string | null;
  localMediaFiles: string[];
  profileImageUrl: string;
  coverImageUrl: string;
  mediaGroupId: string;
  mediaFiles: { type: string; url: string }[];
}

interface OnboardingContextType {
  onboardingData: OnboardingData;
  updateStepData: (step: keyof OnboardingData, data: any) => void;
  setOnboardingData: React.Dispatch<React.SetStateAction<OnboardingData>>;
  resetOnboardingData: () => void;
}

const initialData: OnboardingData = {
  userId: '',
  step1: {},
  step2: {},
  step3: {},
  step4: {},
  step5: {},
  localProfileImage: null,
  localCoverImage: null,
  localMediaFiles: [],
  profileImageUrl: '',
  coverImageUrl: '',
  mediaGroupId: '',
  mediaFiles: [],
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState<OnboardingData>(initialData);

  const updateStepData = (step: keyof OnboardingData, data: any) => {
    setOnboardingData((prev) => ({
      ...prev,
      [step]: prev[step] && typeof prev[step] === 'object' ? { ...prev[step], ...data } : data,
    }));
  };

  const resetOnboardingData = () => {
    setOnboardingData(initialData);
  };

  return (
    <OnboardingContext.Provider value={{ onboardingData, updateStepData, setOnboardingData, resetOnboardingData }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
