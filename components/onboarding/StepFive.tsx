import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Plus, Trash2 } from 'lucide-react-native';
import { InputField } from '../InputField';
import { Dropdown } from './Dropdown';
import { Colors } from '../../constants/Colors';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

interface StepFiveProps {
  data: any;
  updateData: (key: string, value: any) => void;
}

const CATEGORIES = ['Singles', 'Doubles', 'Mixed Doubles'];
const RESULTS = ['Winner', 'Runner Up', 'Semi-Finalist', 'Participant'];
const YEARS = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() - i).toString());

export const StepFive: React.FC<StepFiveProps> = ({ data, updateData }) => {
  const tournaments = data.tournaments || [{ name: '', category: '', year: '', result: '' }];

  const addTournament = () => {
    updateData('tournaments', [...tournaments, { name: '', category: '', year: '', result: '' }]);
  };

  const removeTournament = (index: number) => {
    if (tournaments.length > 1) {
      const newList = tournaments.filter((_: any, i: number) => i !== index);
      updateData('tournaments', newList);
    }
  };

  const updateTournament = (index: number, key: string, value: string) => {
    const newList = [...tournaments];
    newList[index][key] = value;
    updateData('tournaments', newList);
  };

  return (
    <View style={styles.container}>
      <InputField
        label="COACH NAME"
        value={data.coachName || ''}
        onChangeText={(text) => updateData('coachName', text)}
        placeholder="Enter coach name"
      />

      <InputField
        label="TRAINING CLUB LOCATION"
        value={data.trainingClub || ''}
        onChangeText={(text) => updateData('trainingClub', text)}
        placeholder="e.g. Tirupur, TN"
      />

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>TOURNAMENTS PLAYED</Text>

      {tournaments.map((item: any, index: number) => (
        <View key={index} style={styles.tournamentCard}>
          <View style={styles.tournamentHeader}>
            <Text style={styles.tournamentIndex}>Tournament #{index + 1}</Text>
            {tournaments.length > 1 && (
              <TouchableOpacity onPress={() => removeTournament(index)}>
                <Trash2 size={scale(18)} color="#EF4444" />
              </TouchableOpacity>
            )}
          </View>

          <InputField
            label="Tournament Name"
            value={item.name}
            onChangeText={(text) => updateTournament(index, 'name', text)}
            placeholder="Enter name"
          />

          <View style={styles.row}>
            <View style={{ flex: 1, marginRight: scale(4) }}>
              <Dropdown
                label="Category"
                value={item.category}
                options={CATEGORIES}
                onSelect={(val) => updateTournament(index, 'category', val)}
                placeholder="Category"
              />
            </View>
            <View style={{ flex: 1, marginLeft: scale(4) }}>
              <Dropdown
                label="Year"
                value={item.year}
                options={YEARS}
                onSelect={(val) => updateTournament(index, 'year', val)}
                placeholder="Year"
              />
            </View>
          </View>

          <Dropdown
            label="Result"
            value={item.result}
            options={RESULTS}
            onSelect={(val) => updateTournament(index, 'result', val)}
            placeholder="Select result"
          />
        </View>
      ))}

      <TouchableOpacity style={styles.addButton} onPress={addTournament}>
        <Plus size={scale(20)} color={Colors.onboardingButton} style={{ marginRight: scale(8) }} />
        <Text style={styles.addButtonText}>Add Another Tournament</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: scale(20),
  },
  sectionTitle: {
    fontSize: scale(14),
    fontWeight: '800',
    color: '#374151',
    marginBottom: scale(16),
    letterSpacing: 0.5,
  },
  tournamentCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: scale(16),
    padding: scale(16),
    marginBottom: scale(16),
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  tournamentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scale(12),
  },
  tournamentIndex: {
    fontSize: scale(12),
    fontWeight: '600',
    color: '#6B7280',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(16),
    borderRadius: scale(16),
    borderWidth: 1,
    borderColor: Colors.onboardingButton,
    borderStyle: 'dashed',
    marginTop: scale(8),
  },
  addButtonText: {
    color: Colors.onboardingButton,
    fontSize: scale(14),
    fontWeight: '700',
  },
});
