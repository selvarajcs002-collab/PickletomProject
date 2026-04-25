import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientBackgroundProps extends ViewProps {
  children: React.ReactNode;
  colors?: readonly [string, string, ...string[]];
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({ 
  children, 
  style, 
  colors = ['#7A0000', '#000000'],
  ...props 
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.container, style]}
      {...props}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
