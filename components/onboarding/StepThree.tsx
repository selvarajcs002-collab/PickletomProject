import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, FlatList, Image, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Plus, X, Play } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { profileService } from '../../services/profileService';
import { useOnboarding } from '../../store/onboardingStore';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;
const itemSize = (width - scale(64)) / 2;

interface StepThreeProps {
  data: any;
  updateData: (key: string, value: any) => void;
}

export const StepThree: React.FC<StepThreeProps> = ({ data, updateData }) => {
  const { onboardingData, updateStepData } = useOnboarding();

  const handlePickMedia = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const selectedUris = result.assets.map(asset => asset.uri);
      const newFiles = Array.from(new Set([...onboardingData.localMediaFiles, ...selectedUris]));
      updateStepData('localMediaFiles', newFiles);
    }
  };

  const removeMedia = (index: number) => {
    const newFiles = [...onboardingData.localMediaFiles];
    newFiles.splice(index, 1);
    updateStepData('localMediaFiles', newFiles);
  };

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    const isVideo = item.toLowerCase().endsWith('.mp4') || item.toLowerCase().endsWith('.mov');
    
    return (
      <View style={styles.gridItem}>
        <Image source={{ uri: item }} style={styles.mediaPreview} />
        {isVideo && (
          <View style={styles.videoOverlay}>
            <Play size={scale(20)} color="white" />
          </View>
        )}
        <TouchableOpacity 
          style={styles.removeButton} 
          onPress={() => removeMedia(index)}
        >
          <X size={scale(12)} color="white" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {onboardingData.localMediaFiles.length > 0 ? (
        <FlatList
          data={onboardingData.localMediaFiles}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          scrollEnabled={false}
          ListFooterComponent={
            <TouchableOpacity 
              style={styles.addMoreButton} 
              onPress={handlePickMedia}
            >
              <Plus size={scale(20)} color={Colors.onboardingButton} />
              <Text style={styles.addMoreText}>Add More</Text>
            </TouchableOpacity>
          }
        />
      ) : (
        <TouchableOpacity 
          style={styles.uploadPlaceholder} 
          onPress={handlePickMedia}
        >
          <View style={styles.iconCircle}>
            <Plus size={scale(32)} color={Colors.onboardingTextMuted} />
          </View>
          <Text style={styles.uploadTitle}>Upload Highlights</Text>
          <Text style={styles.uploadSubtitle}>Images or Videos (Max 10)</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  gridItem: {
    width: itemSize,
    height: itemSize,
    borderRadius: scale(16),
    overflow: 'hidden',
    margin: scale(8),
    backgroundColor: '#F3F4F6',
  },
  mediaPreview: {
    width: '100%',
    height: '100%',
  },
  videoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButton: {
    position: 'absolute',
    top: scale(8),
    right: scale(8),
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: scale(24),
    height: scale(24),
    borderRadius: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadPlaceholder: {
    width: '100%',
    height: scale(200),
    backgroundColor: '#F3F4F6',
    borderRadius: scale(24),
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    width: scale(64),
    height: scale(64),
    borderRadius: scale(32),
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(16),
  },
  uploadTitle: {
    fontSize: scale(18),
    fontWeight: '700',
    color: Colors.onboardingText,
    marginBottom: scale(4),
  },
  uploadSubtitle: {
    fontSize: scale(14),
    color: '#9CA3AF',
  },
  addMoreButton: {
    width: itemSize,
    height: itemSize,
    backgroundColor: '#F3F4F6',
    borderRadius: scale(16),
    borderWidth: 1,
    borderColor: Colors.onboardingButton,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    margin: scale(8),
  },
  addMoreText: {
    fontSize: scale(12),
    fontWeight: '700',
    color: Colors.onboardingButton,
    marginTop: scale(4),
  },
  disabledButton: {
    opacity: 0.6,
  },
});
