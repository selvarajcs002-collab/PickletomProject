import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { OnboardingProvider, useOnboarding } from '../store/onboardingStore';
import { profileService } from '../services/profileService';
import { Alert, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GradientBackground } from '../components/GradientBackground';
import { Colors } from '../constants/Colors';
import { ProgressBar } from '../components/onboarding/ProgressBar';
import { StepOne } from '../components/onboarding/StepOne';
import { StepTwo } from '../components/onboarding/StepTwo';
import { StepThree } from '../components/onboarding/StepThree';
import { StepFour } from '../components/onboarding/StepFour';
import { StepFive } from '../components/onboarding/StepFive';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

const totalSteps = 5;

export const OnboardingScreen: React.FC = () => {
  return <OnboardingContent />;
};

const OnboardingContent: React.FC = () => {
  const router = useRouter();
  const { onboardingData, updateStepData, setOnboardingData } = useOnboarding();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const storedUserId = await AsyncStorage.getItem('userId');
      const resolvedUserId = Number(onboardingData.userId || storedUserId || 0);

      if (!resolvedUserId || Number.isNaN(resolvedUserId) || resolvedUserId <= 0) {
        throw new Error('UserId is required. Please sign up or log in again before finishing onboarding.');
      }

      if (onboardingData.userId !== String(resolvedUserId)) {
        updateStepData('userId', String(resolvedUserId));
      }

      let profileUrl = onboardingData.profileImageUrl;
      let coverUrl = onboardingData.coverImageUrl;
      let mediaGroupId = onboardingData.mediaGroupId;
      let mediaFilesList = onboardingData.mediaFiles;

      // 1. Upload Profile Image
      if (onboardingData.localProfileImage) {
        console.log('Step 1: Uploading Profile Image...');
        const res = await profileService.uploadSingle(
          onboardingData.localProfileImage,
          'profile',
          resolvedUserId
        );
        if (res && res.status === 1) {
          profileUrl = res.url;
          setOnboardingData(prev => ({ ...prev, profileImageUrl: res.url }));
        } else {
          throw new Error(res?.message || 'Profile image upload failed');
        }
      }

      // 2. Upload Cover Image
      if (onboardingData.localCoverImage) {
        console.log('Step 2: Uploading Cover Image...');
        const res = await profileService.uploadSingle(
          onboardingData.localCoverImage,
          'cover',
          resolvedUserId
        );
        if (res && res.status === 1) {
          coverUrl = res.url;
          setOnboardingData(prev => ({ ...prev, coverImageUrl: res.url }));
        } else {
          throw new Error(res?.message || 'Cover image upload failed');
        }
      }

      // 3. Upload Media Files
      if (onboardingData.localMediaFiles.length > 0) {
        console.log('Step 3: Uploading Media Files...');
        const res = await profileService.uploadMultiple(onboardingData.localMediaFiles, resolvedUserId);
        if (res && res.status === 1) {
          mediaGroupId = res.mediaGroupId;
          mediaFilesList = res.files;
          setOnboardingData(prev => ({
            ...prev,
            mediaGroupId: res.mediaGroupId,
            mediaFiles: res.files
          }));
        } else {
          throw new Error(res?.message || 'Media upload failed');
        }
      }

      // 4. Final Profile Save
      console.log('Step 4: Saving Profile...');
      
      const tournaments = onboardingData.step5?.tournaments || [];
      const firstTournament = tournaments.length > 0 ? tournaments[0] : {};

      const payload = {
        UserId: resolvedUserId,
        ...onboardingData.step1,
        ...onboardingData.step2,
        ...onboardingData.step3,
        ...onboardingData.step4,
        ...onboardingData.step5,
        Tournament_name: firstTournament.name || '',
        Category: firstTournament.category || '',
        Year: firstTournament.year || '',
        Result: firstTournament.result || '',
        profileImageUrl: profileUrl,
        coverImageUrl: coverUrl,
        mediaGroupId: mediaGroupId,
      };

      const response = await profileService.saveProfile(payload);

      if (response && response.status === 1) {
        // Success -> Final Success Screen or Feed
        router.push('/profile-setup-loading');
      } else {
        throw new Error(response?.message || 'Unable to save profile');
      }
    } catch (error: any) {
      console.error('Sequence Failed:', error);
      Alert.alert('Process Failed', error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  const renderStep = () => {
    const stepKey = `step${currentStep}` as keyof typeof onboardingData;
    const stepData = onboardingData[stepKey];

    switch (currentStep) {
      case 1:
        return <StepOne data={stepData} updateData={(key: string, value: any) => updateStepData('step1', { [key]: value })} />;
      case 2:
        return <StepTwo data={stepData} updateData={(key: string, value: any) => updateStepData('step2', { [key]: value })} />;
      case 3:
        return <StepThree data={stepData} updateData={(key: string, value: any) => updateStepData('step3', { [key]: value })} />;
      case 4:
        return <StepFour data={stepData} updateData={(key: string, value: any) => updateStepData('step4', { [key]: value })} />;
      case 5:
        return <StepFive data={stepData} updateData={(key: string, value: any) => updateStepData('step5', { [key]: value })} />;
      default:
        return null;
    }
  };

  return (
    <GradientBackground colors={[Colors.onboardingRed, '#000000']}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <ChevronLeft size={scale(24)} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile Setup</Text>
          {(currentStep === 4 || currentStep === 5) ? (
            <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ width: scale(40) }} />
          )}
        </View>

        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.card}>
              <Text style={styles.cardTitle}>
                {currentStep === 1 && "Let's Get Started!"}
                {currentStep === 2 && "A Little More Info"}
                {currentStep === 3 && "Show Your Game"}
                {currentStep >= 4 && "Let’s Onboard You!"}
              </Text>
              <Text style={styles.cardSubtitle}>
                {currentStep === 1 && "Fill in your basic details to begin."}
                {currentStep === 2 && "Help us know you better for matching."}
                {currentStep === 3 && "Upload your highlights to the community."}
                {currentStep === 4 && "Let’s get to know you and your skills better!"}
                {currentStep === 5 && "Let’s get to know your training and matches played!"}
              </Text>

              {renderStep()}

              <TouchableOpacity
                style={[styles.nextButton, isLoading && styles.disabledButton]}
                onPress={currentStep === 5 ? handleFinish : handleNext}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.nextButtonText}>
                    {currentStep === totalSteps ? 'Finish' : 'Next Step →'}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
    paddingVertical: scale(10),
  },
  backButton: {
    padding: scale(8),
  },
  headerTitle: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: '700',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: scale(20),
    paddingBottom: scale(40),
  },
  card: {
    backgroundColor: Colors.onboardingCard,
    borderRadius: scale(30),
    padding: scale(24),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  cardTitle: {
    fontSize: scale(24),
    fontWeight: '800',
    color: Colors.onboardingText,
    marginBottom: scale(8),
  },
  cardSubtitle: {
    fontSize: scale(14),
    color: '#6B7280',
    marginBottom: scale(24),
    lineHeight: scale(20),
  },
  nextButton: {
    backgroundColor: Colors.onboardingButton,
    height: scale(56),
    borderRadius: scale(16),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(24),
    shadowColor: Colors.onboardingButton,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  nextButtonText: {
    color: 'white',
    fontSize: scale(16),
    fontWeight: '700',
  },
  disabledButton: {
    opacity: 0.7,
  },
  skipButton: {
    padding: scale(8),
    minWidth: scale(60),
    alignItems: 'flex-end',
  },
  skipText: {
    color: '#9CA3AF',
    fontSize: scale(14),
    fontWeight: '600',
  },
});
