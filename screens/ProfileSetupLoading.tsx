import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Easing, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GradientBackground } from '../components/GradientBackground';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

export default function ProfileSetupLoading() {
  const router = useRouter();

  // Animation values using standard Animated API
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const [dots, setDots] = useState('.');

  useEffect(() => {
    // 1. Fade-in Card Animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    // 2. Continuous Pulsing Pulse Animation (Outer Ring)
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.3,
          duration: 1200,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1200,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // 3. Dots Animation Loop (every 500ms)
    const dotInterval = setInterval(() => {
      setDots((prev) => {
        if (prev === '...') return '.';
        if (prev === '..') return '...';
        return '..';
      });
    }, 500);

    // 4. Redirect after 2.5 seconds
    const redirectTimer = setTimeout(() => {
      router.push('/community-feed');
    }, 2500);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <GradientBackground colors={['#7B0000', '#000000']}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.content}>
          <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
            {/* PULSE RINGS */}
            <View style={styles.avatarWrapper}>
              <Animated.View
                style={[
                  styles.pulseRing,
                  {
                    transform: [{ scale: pulseAnim }],
                    opacity: pulseAnim.interpolate({
                      inputRange: [1, 1.3],
                      outputRange: [0.5, 0.05]
                    })
                  }
                ]}
              />
              {/* App Logo */}
              <Image
                source={require('../assets/pickleon-logo.png')}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.title}>Setting up your Profile!</Text>

            <View style={styles.loadingContainer}>
              <View style={styles.dotIndicator} />
              <Text style={styles.loadingText}>Loading{dots}</Text>
            </View>
          </Animated.View>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(20),
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: scale(20),
    padding: scale(32),
    width: '85%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  avatarWrapper: {
    width: scale(130),
    height: scale(130),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(32),
  },
  pulseRing: {
    position: 'absolute',
    width: scale(150),
    height: scale(150),
    borderRadius: scale(34),      // matches the logo's rounded-square shape
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.8)',
  },
  logoImage: {
    width: scale(120),
    height: scale(120),
    borderRadius: scale(28),      // logo already has rounded corners
    zIndex: 10,
  },
  title: {
    fontSize: scale(18),
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: scale(32),
    letterSpacing: 0.5,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotIndicator: {
    width: scale(6),
    height: scale(6),
    borderRadius: 3,
    backgroundColor: '#FF4A2A',
    marginRight: scale(10),
  },
  loadingText: {
    fontSize: scale(14),
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '600',
    letterSpacing: 1,
    minWidth: scale(80), // Prevent layout shift during dot changes
  },
});
