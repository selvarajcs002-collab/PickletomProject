import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { InputField } from '../InputField';
import { Dropdown } from './Dropdown';
import { UploadCard } from '../UploadCard';
import { useOnboarding } from '../../store/onboardingStore';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

const coverHeight = width * 0.35;
const profileSize = width * 0.25;

interface StepTwoProps {
  data: any;
  updateData: (key: string, value: any) => void;
}

const GENDERS = ['Male', 'Female', 'Other'];
const BIRTH_YEARS = Array.from({ length: 80 }, (_, i) => (new Date().getFullYear() - 10 - i).toString());

export const StepTwo: React.FC<StepTwoProps> = ({ data, updateData }) => {
  const { onboardingData, updateStepData } = useOnboarding();

  return (
    <View style={styles.container}>
      {/* IMAGE OVERLAP CONTAINER */}
      <View style={styles.imageContainer}>
        {/* COVER IMAGE */}
        <UploadCard
          label="+ Cover Image"
          type="image"
          uri={onboardingData.localCoverImage || data.coverImage || null}
          onUpload={(uri) => updateStepData('localCoverImage', uri)}
          style={styles.coverImageArea}
        />

        {/* PROFILE IMAGE OVERLAP */}
        <UploadCard
          label="+ Profile"
          type="image"
          uri={onboardingData.localProfileImage || data.profileImage || null}
          onUpload={(uri) => updateStepData('localProfileImage', uri)}
          style={styles.profileImageArea}
        />
      </View>

      {/* FORM FIELDS */}
      <Dropdown
        label="Year Born"
        value={data.yearBorn || ''}
        options={BIRTH_YEARS}
        onSelect={(val) => updateData('yearBorn', val)}
        placeholder="Select year"
      />

      <Dropdown
        label="Gender"
        value={data.gender || ''}
        options={GENDERS}
        onSelect={(val) => updateData('gender', val)}
        placeholder="Select gender"
      />

      <InputField
        label="Location"
        value={data.location || ''}
        onChangeText={(text) => updateData('location', text)}
        placeholder="e.g. Tirupur, TN, India"
      />

      <InputField
        label="DUPR Link"
        value={data.duprLink || ''}
        onChangeText={(text) => updateData('duprLink', text)}
        placeholder="https://mydupr.com/p/..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  imageContainer: {
    width: '100%',
    position: 'relative',
    height: coverHeight + scale(20), // Height plus overlap space
    marginBottom: scale(32),
  },
  coverImageArea: {
    width: '100%',
    height: coverHeight,
    backgroundColor: '#F3F4F6',
    borderRadius: scale(16),
  },
  profileImageArea: {
    position: 'absolute',
    bottom: 0,
    left: scale(16),
    width: profileSize,
    height: profileSize,
    zIndex: 10,
  },
});
