import React from 'react';
import { View, StyleSheet, Dimensions, TextInput, Text } from 'react-native';
import { InputField } from '../InputField';
import { Dropdown } from './Dropdown';
import { Colors } from '../../constants/Colors';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

interface StepFourProps {
  data: any;
  updateData: (key: string, value: any) => void;
}

const SKILL_OPTIONS = ['Beginner', 'Intermediate', 'Advanced', 'Professional'];

export const StepFour: React.FC<StepFourProps> = ({ data, updateData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>ABOUT</Text>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          value={data.about || ''}
          onChangeText={(text) => {
            if (text.length <= 100) {
              updateData('about', text);
            }
          }}
          placeholder="Tell us a bit about yourself..."
          placeholderTextColor="#9CA3AF"
          multiline
          numberOfLines={4}
          maxLength={100}
        />
        <Text style={styles.charCount}>
          {data.about ? data.about.length : 0} / 100
        </Text>
      </View>

      <Dropdown
        label="PLAYING SKILLS"
        value={data.playingSkills || ''}
        options={SKILL_OPTIONS}
        onSelect={(val) => updateData('playingSkills', val)}
        placeholder="Select your skill level"
      />

      <InputField
        label="EQUIPMENT USED"
        value={data.equipment || ''}
        onChangeText={(text) => updateData('equipment', text)}
        placeholder="e.g. Wilson Pro Staff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: scale(12),
    fontWeight: '700',
    color: '#9CA3AF',
    marginBottom: scale(6),
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  textAreaContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: scale(16),
    padding: scale(16),
    marginBottom: scale(20),
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  textArea: {
    fontSize: scale(14),
    color: Colors.onboardingText,
    minHeight: scale(80),
    textAlignVertical: 'top',
  },
  charCount: {
    fontSize: scale(10),
    color: '#9CA3AF',
    textAlign: 'right',
    marginTop: scale(4),
  },
});
