import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Mail, Lock, Chrome, ArrowRight, ChevronLeft } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';
import { GradientBackground } from '../components/GradientBackground';
import { InputField } from '../components/InputField';
import { PrimaryButton } from '../components/PrimaryButton';
import { Checkbox } from '../components/Checkbox';
import { Colors } from '../constants/Colors';
import { profileService } from '../services/profileService';
import { useOnboarding } from '../store/onboardingStore';
import { Alert, ActivityIndicator } from 'react-native';

const { width, height } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

export const SignUpScreen: React.FC = () => {
  const router = useRouter();
  const { updateStepData } = useOnboarding();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= 8 && hasUpperCase && hasNumber && hasSpecialChar;
  };

  const handleSignUp = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        'Validation Error',
        'Password must be at least 8 characters long and contain 1 uppercase letter, 1 number, and 1 special character.'
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Validation Error', 'Passwords do not match.');
      return;
    }

    if (!isTermsAccepted) {
      Alert.alert('Validation Error', 'Please accept the Terms and Privacy Policy.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await profileService.signUp(email, password);
      
      if (response && response.User_Id) {
        // Success
        updateStepData('userId', response.User_Id);
        Alert.alert('Success', response.Message || 'User created successfully', [
          { text: 'OK', onPress: () => router.push('/onboarding') }
        ]);
      } else {
        Alert.alert('Error', response?.Message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Signup Error:', error);
      Alert.alert('Network Error', 'Unable to connect to the server. Please check your network and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = email && password && confirmPassword && isTermsAccepted;

  return (
    <GradientBackground colors={['#7B0000', '#000000']}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={scale(24)} color="white" />
        </TouchableOpacity>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.card}>
              <View style={styles.headerContainer}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>Let’s get started by filling out the form below</Text>
              </View>

              <InputField
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                icon={<Mail size={scale(18)} color="#9CA3AF" />}
              />

              <InputField
                label="Password"
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                secureTextEntry
                icon={<Lock size={scale(18)} color="#9CA3AF" />}
              />

              <InputField
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="••••••••"
                secureTextEntry
                icon={<Lock size={scale(18)} color="#9CA3AF" />}
              />

              <Checkbox
                label="I accept the Terms of Services and Privacy Policy"
                checked={isTermsAccepted}
                onPress={() => setIsTermsAccepted(!isTermsAccepted)}
              />

              <PrimaryButton
                title={isLoading ? "" : "Create Account"}
                onPress={handleSignUp}
                disabled={!isFormValid || isLoading}
                style={styles.signUpButton}
                icon={isLoading ? <ActivityIndicator color="white" /> : <ArrowRight size={scale(20)} color="white" />}
              />

              <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>OR continue with</Text>
                <View style={styles.divider} />
              </View>

              <TouchableOpacity style={styles.googleButton}>
                <Chrome size={scale(20)} color="#444" style={styles.googleIcon} />
                <Text style={styles.googleButtonText}>Continue with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.footer} 
                onPress={() => router.push('/')}
              >
                <Text style={styles.footerText}>
                  Already a member? <Text style={styles.footerLink}>Login instead</Text>
                </Text>
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
  backButton: {
    padding: scale(16),
    position: 'absolute',
    top: Platform.OS === 'ios' ? scale(40) : scale(10),
    left: scale(0),
    zIndex: 10,
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: scale(40),
  },
  card: {
    backgroundColor: Colors.onboardingCard,
    borderRadius: scale(30),
    padding: scale(28),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    marginTop: scale(40),
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: scale(24),
  },
  title: {
    fontSize: scale(28),
    fontWeight: '800',
    color: Colors.onboardingText,
    marginBottom: scale(8),
  },
  subtitle: {
    fontSize: scale(14),
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: scale(20),
  },
  signUpButton: {
    marginTop: scale(8),
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(24),
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    marginHorizontal: scale(12),
    fontSize: scale(12),
    color: '#9CA3AF',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(56),
    borderRadius: scale(16),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: 'white',
  },
  googleIcon: {
    marginRight: scale(12),
  },
  googleButtonText: {
    fontSize: scale(15),
    fontWeight: '600',
    color: '#4B5563',
  },
  footer: {
    marginTop: scale(24),
    alignItems: 'center',
  },
  footerText: {
    fontSize: scale(14),
    color: '#6B7280',
  },
  footerLink: {
    color: Colors.onboardingButton,
    fontWeight: '700',
  },
});
