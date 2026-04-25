import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

interface InputFieldProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'numeric' | 'email-address';
  secureTextEntry?: boolean;
  icon?: React.ReactNode;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  icon,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputWrapper}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          style={[styles.input, icon ? { paddingLeft: scale(8) } : {}]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.onboardingTextMuted}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
        />
        {secureTextEntry && (
          <TouchableOpacity 
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.eyeIcon}
          >
            {isPasswordVisible ? (
              <EyeOff size={scale(20)} color={Colors.onboardingTextMuted} />
            ) : (
              <Eye size={scale(20)} color={Colors.onboardingTextMuted} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: scale(16),
    width: '100%',
  },
  label: {
    fontSize: scale(12),
    fontWeight: '700',
    color: Colors.onboardingTextMuted,
    marginBottom: scale(6),
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  inputWrapper: {
    backgroundColor: '#F5F5F5',
    borderRadius: scale(12),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: scale(16),
  },
  iconContainer: {
    marginRight: scale(4),
  },
  input: {
    flex: 1,
    paddingVertical: scale(12),
    fontSize: scale(14),
    color: Colors.onboardingText,
  },
  eyeIcon: {
    padding: scale(4),
  },
});
