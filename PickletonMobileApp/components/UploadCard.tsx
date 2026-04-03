import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Camera, Play, Image as ImageIcon, Video } from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '../constants/Colors';
import { profileService } from '../services/profileService';
import { useOnboarding } from '../store/onboardingStore';
import { ActivityIndicator, Alert } from 'react-native';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

interface UploadCardProps {
  label: string;
  type: 'image' | 'video';
  uploadType?: 'profile' | 'cover';
  uri: string | null;
  onUpload?: (url: string) => void;
  style?: any;
}

export const UploadCard: React.FC<UploadCardProps> = ({
  label,
  type,
  uri,
  onUpload,
  style,
}) => {
  const handlePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: type === 'image' ? ImagePicker.MediaTypeOptions.Images : ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedUri = result.assets[0].uri;
      if (onUpload) onUpload(selectedUri);
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.card, style]} 
      onPress={handlePick}
      activeOpacity={0.7}
    >
      {uri ? (
        <View style={styles.mediaContainer}>
          {type === 'image' ? (
            <Image source={{ uri }} style={styles.image} />
          ) : (
            <View style={styles.videoPlaceholder}>
              <Play size={scale(24)} color="white" />
            </View>
          )}
          <View style={styles.overlay}>
            <Camera size={scale(16)} color="white" />
          </View>
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <View style={styles.iconCircle}>
            {type === 'image' ? (
              <ImageIcon size={scale(24)} color={Colors.onboardingTextMuted} />
            ) : (
              <Video size={scale(24)} color={Colors.onboardingTextMuted} />
            )}
          </View>
          <Text style={styles.emptyText}>{label}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F3F4F6',
    borderRadius: scale(20),
    overflow: 'hidden',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  emptyContainer: {
    padding: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(24),
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(8),
  },
  emptyText: {
    fontSize: scale(12),
    fontWeight: '600',
    color: '#6B7280',
    textAlign: 'center',
  },
  mediaContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  videoPlaceholder: {
    flex: 1,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: scale(8),
    right: scale(8),
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: scale(28),
    height: scale(28),
    borderRadius: scale(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledCard: {
    opacity: 0.6,
  },
});
