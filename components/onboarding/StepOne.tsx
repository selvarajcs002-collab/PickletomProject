import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { InputField } from '../InputField';
import { Dropdown } from './Dropdown';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

interface StepOneProps {
  data: any;
  updateData: (key: string, value: any) => void;
}

const PLAYING_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Professional'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const YEARS = Array.from({ length: 50 }, (_, i) => (new Date().getFullYear() - i).toString());
const HANDS = ['Right', 'Left', 'Both'];
const BACKHANDS = ['One-Handed', 'Two-Handed'];

export const StepOne: React.FC<StepOneProps> = ({ data, updateData }) => {
  return (
    <View style={styles.container}>
      <InputField
        label="Full Name"
        value={data.fullName || ''}
        onChangeText={(text) => updateData('fullName', text)}
        placeholder="Enter your full name"
      />
      
      <Dropdown
        label="Playing Level"
        value={data.playingLevel || ''}
        options={PLAYING_LEVELS}
        onSelect={(val) => updateData('playingLevel', val)}
        placeholder="Select your level"
      />

      <View style={styles.row}>
        <View style={{ flex: 1, marginRight: scale(8) }}>
          <Dropdown
            label="Since Month"
            value={data.sinceMonth || ''}
            options={MONTHS}
            onSelect={(val) => updateData('sinceMonth', val)}
          />
        </View>
        <View style={{ flex: 1, marginLeft: scale(8) }}>
          <Dropdown
            label="Since Year"
            value={data.sinceYear || ''}
            options={YEARS}
            onSelect={(val) => updateData('sinceYear', val)}
          />
        </View>
      </View>

      <Dropdown
        label="Power Hand"
        value={data.powerHand || ''}
        options={HANDS}
        onSelect={(val) => updateData('powerHand', val)}
      />

      <Dropdown
        label="Back Hand"
        value={data.backHand || ''}
        options={BACKHANDS}
        onSelect={(val) => updateData('backHand', val)}
      />

      <InputField
        label="Club Name"
        value={data.clubName || ''}
        onChangeText={(text) => updateData('clubName', text)}
        placeholder="e.g. RallyHub"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
});
