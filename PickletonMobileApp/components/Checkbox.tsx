import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';
import { Check } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

interface CheckboxProps {
  label: string;
  checked: boolean;
  onPress: () => void;
  style?: any;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onPress, style }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.box, checked && styles.checkedBox]}>
        {checked && <Check size={scale(14)} color="white" strokeWidth={3} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(12),
  },
  box: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(4),
    borderWidth: 2,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(10),
  },
  checkedBox: {
    backgroundColor: Colors.onboardingButton,
    borderColor: Colors.onboardingButton,
  },
  label: {
    fontSize: scale(12),
    color: '#6B7280',
    flex: 1,
    lineHeight: scale(18),
  },
});
