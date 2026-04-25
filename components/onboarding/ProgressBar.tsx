import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { Colors } from '../../constants/Colors';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: currentStep / totalSteps,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [currentStep, totalSteps]);

  const barWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.stepText}>Step {currentStep} of {totalSteps}</Text>
        <Text style={styles.statusText}>
          {currentStep === 1 && 'Basic Stats'}
          {currentStep === 2 && 'Profile Details'}
          {currentStep === 3 && 'Media Showcase'}
          {currentStep === 4 && 'Skills & Gear'}
          {currentStep === 5 && 'Training & History'}
        </Text>
      </View>
      <View style={styles.barBackground}>
        <Animated.View style={[styles.barForeground, { width: barWidth }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(24),
    paddingVertical: scale(20),
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: scale(10),
  },
  stepText: {
    fontSize: scale(12),
    color: '#9CA3AF',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  statusText: {
    fontSize: scale(14),
    color: 'white',
    fontWeight: '600',
  },
  barBackground: {
    height: scale(6),
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: scale(3),
    overflow: 'hidden',
  },
  barForeground: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: scale(3),
  },
});
