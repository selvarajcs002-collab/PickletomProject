import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Dimensions } from 'react-native';
import { ChevronDown } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

interface DropdownProps {
  label: string;
  value: string;
  options: { label: string; value: string }[] | string[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  onSelect,
  placeholder = 'Select',
}) => {
  const [visible, setVisible] = useState(false);

  const formattedOptions = options.map((opt) => 
    typeof opt === 'string' ? { label: opt, value: opt } : opt
  );

  const selectedOption = formattedOptions.find((opt) => opt.value === value);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setVisible(true)}
      >
        <Text style={[styles.value, !value && { color: Colors.onboardingTextMuted }]}>
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <ChevronDown size={scale(16)} color={Colors.onboardingTextMuted} />
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={formattedOptions}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onSelect(item.value);
                    setVisible(false);
                  }}
                >
                  <Text style={[styles.optionText, item.value === value && styles.selectedOptionText]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
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
  dropdown: {
    backgroundColor: '#F5F5F5',
    borderRadius: scale(12),
    paddingHorizontal: scale(16),
    paddingVertical: scale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  value: {
    fontSize: scale(14),
    color: Colors.onboardingText,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    maxHeight: '60%',
    backgroundColor: 'white',
    borderRadius: scale(20),
    padding: scale(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  option: {
    paddingVertical: scale(12),
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  optionText: {
    fontSize: scale(16),
    color: Colors.onboardingText,
    textAlign: 'center',
  },
  selectedOptionText: {
    color: Colors.onboardingButton,
    fontWeight: '700',
  },
});
