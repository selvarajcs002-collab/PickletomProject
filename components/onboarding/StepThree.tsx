import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ImageIcon, Film, X } from 'lucide-react-native';
import { useOnboarding } from '../../store/onboardingStore';

const { width } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

// ── The 4 upload slots shown in the mockup ─────────────────────────────────
const SLOTS = [
  { key: 'playingImage',  label: 'Playing image', icon: 'image' },
  { key: 'playingVideo',  label: 'Playing video', icon: 'video' },
  { key: 'netPlay',       label: 'Net play',      icon: 'image' },
  { key: 'extraImage',    label: 'Playing image', icon: 'image' },
] as const;

type SlotKey = typeof SLOTS[number]['key'];

interface StepThreeProps {
  data: any;
  updateData: (key: string, value: any) => void;
}

export const StepThree: React.FC<StepThreeProps> = ({ data, updateData }) => {
  const { onboardingData, updateStepData } = useOnboarding();

  // Read per-slot URIs from step3 data
  const slotValues: Record<SlotKey, string | null> = {
    playingImage: data?.playingImage || null,
    playingVideo: data?.playingVideo || null,
    netPlay:      data?.netPlay || null,
    extraImage:   data?.extraImage || null,
  };

  const handlePick = async (slotKey: SlotKey, isVideo: boolean) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: isVideo
        ? ImagePicker.MediaTypeOptions.Videos
        : ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      updateData(slotKey, uri);

      // Also keep a flat list of all local media files for the upload step
      const current = onboardingData.localMediaFiles.filter(
        (u: string) => u !== slotValues[slotKey]
      );
      updateStepData('localMediaFiles', [...current, uri]);
    }
  };

  const handleRemove = (slotKey: SlotKey) => {
    const uri = slotValues[slotKey];
    updateData(slotKey, null);

    if (uri) {
      const filtered = onboardingData.localMediaFiles.filter((u: string) => u !== uri);
      updateStepData('localMediaFiles', filtered);
    }
  };

  const renderSlot = (slot: typeof SLOTS[number]) => {
    const uri = slotValues[slot.key];
    const isVideo = slot.icon === 'video';

    return (
      <TouchableOpacity
        key={slot.key}
        style={styles.slot}
        onPress={() => handlePick(slot.key, isVideo)}
        activeOpacity={0.7}
      >
        {uri ? (
          <>
            <Image source={{ uri }} style={styles.preview} />
            <TouchableOpacity
              style={styles.removeBtn}
              onPress={() => handleRemove(slot.key)}
            >
              <X size={scale(10)} color="white" />
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.placeholder}>
            {isVideo ? (
              <Film size={scale(36)} color="#C4C4C4" />
            ) : (
              <ImageIcon size={scale(36)} color="#C4C4C4" />
            )}
            <Text style={styles.slotLabel}>{slot.label}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Row 1: Playing image + Playing video */}
      <View style={styles.row}>
        {renderSlot(SLOTS[0])}
        {renderSlot(SLOTS[1])}
      </View>
      {/* Row 2: Net play + Playing image */}
      <View style={styles.row}>
        {renderSlot(SLOTS[2])}
        {renderSlot(SLOTS[3])}
      </View>
    </View>
  );
};

const slotSize = (width - scale(100)) / 2;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: scale(8),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(14),
  },
  slot: {
    width: slotSize,
    height: slotSize,
    borderRadius: scale(16),
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    backgroundColor: '#FAFAFA',
    overflow: 'hidden',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(8),
  },
  slotLabel: {
    fontSize: scale(12),
    fontWeight: '500',
    color: '#BFBFBF',
  },
  preview: {
    width: '100%',
    height: '100%',
  },
  removeBtn: {
    position: 'absolute',
    top: scale(6),
    right: scale(6),
    backgroundColor: 'rgba(0,0,0,0.55)',
    width: scale(22),
    height: scale(22),
    borderRadius: scale(11),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
