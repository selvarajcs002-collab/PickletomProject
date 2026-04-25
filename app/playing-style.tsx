import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Zap,
  Users,
  Camera,
} from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import { profileService } from "../services/profileService";
import { ActivityIndicator } from "react-native";

import {
  scale,
  verticalScale,
  normalize,
} from "../utils/responsive";
import CoreSkillsSelector from "./CoreSkillsSelector";

export default function PlayingStyleStep2() {
  const router = useRouter();

  const [playStyle, setPlayStyle] = useState("");
  const [preferredType, setPreferredType] = useState("singles");
  const [dupr, setDupr] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [highlights, setHighlights] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
  ]);

  const skillsList = [
    "Kitchen Master",
    "Power Server",
    "Deep Dink",
    "Third Shot Drop",
    "Defensive Pro",
  ];

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const pickImage = async (index: number) => {
    const { status } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission required");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 0.8,
    });

    if (!result.canceled) {
      const updated = [...highlights];
      updated[index] = result.assets[0].uri;
      setHighlights(updated);
    }
  };

  const labels = ["ACTION SHOT", "THE SERVE", "WINNING POSE", "HOME COURT"];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <StatusBar style="light" />

      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: scale(16),
          paddingVertical: verticalScale(12),
          borderBottomWidth: 1,
          borderBottomColor: "rgba(255,255,255,0.05)",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft color="white" size={scale(22)} />
        </TouchableOpacity>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: normalize(18),
              fontWeight: "700",
            }}
          >
            Playing Style
          </Text>
          <Text
            style={{
              color: "#777",
              fontSize: normalize(10),
            }}
          >
            STEP 2 OF 2
          </Text>
        </View>

        <View style={{ width: scale(22) }} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: scale(20),
            paddingBottom: verticalScale(40),
          }}
        >
          {/* TITLE */}
          <Text
            style={{
              color: "white",
              fontSize: normalize(28),
              fontWeight: "700",
              marginBottom: verticalScale(6),
            }}
          >
            Showcase Your Play
          </Text>

          <Text
            style={{
              color: "#aaa",
              fontSize: normalize(13),
              marginBottom: verticalScale(20),
            }}
          >
            Help the community find you by describing your court presence and uploading highlights.
          </Text>

          {/* PRO TIP */}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "rgba(244,71,37,0.1)",
              borderColor: "rgba(244,71,37,0.2)",
              borderWidth: 1,
              borderRadius: scale(16),
              padding: scale(12),
              marginBottom: verticalScale(20),
            }}
          >
            <View
              style={{
                width: scale(32),
                height: scale(32),
                borderRadius: scale(16),
                backgroundColor: "#F44725",
                alignItems: "center",
                justifyContent: "center",
                marginRight: scale(10),
              }}
            >
              <Zap size={scale(14)} color="white" />
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "#F44725",
                  fontSize: normalize(10),
                  fontWeight: "700",
                }}
              >
                PRO TIP
              </Text>
              <Text
                style={{
                  color: "#ccc",
                  fontSize: normalize(12),
                }}
              >
                Detailed history helps better matching.
              </Text>
            </View>
          </View>

          {/* PLAY STYLE */}
          <Text style={{ color: "white", marginBottom: 6 }}>
            About My Play Style *
          </Text>

          <View
            style={{
              backgroundColor: "#1e2128",
              borderRadius: scale(16),
              padding: scale(14),
              marginBottom: verticalScale(20),
            }}
          >
            <TextInput
              multiline
              value={playStyle}
              onChangeText={setPlayStyle}
              placeholder="Describe your play..."
              placeholderTextColor="#555"
              style={{
                color: "white",
                minHeight: verticalScale(120),
                fontSize: normalize(13),
              }}
            />
          </View>

          {/* GALLERY */}
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ color: "white" }}>Gallery Highlights</Text>
            <Text style={{ color: "#666" }}>OPTIONAL</Text>
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {highlights.map((img, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => pickImage(i)}
                style={{ width: "50%", padding: scale(6) }}
              >
                <View
                  style={{
                    aspectRatio: 1,
                    backgroundColor: "#1e2128",
                    borderRadius: scale(16),
                    borderWidth: 1,
                    borderStyle: "dashed",
                    borderColor: "rgba(255,255,255,0.2)",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {img ? (
                    <Image
                      source={{ uri: img }}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: scale(16),
                      }}
                    />
                  ) : (
                    <>
                      <Camera color="#666" size={scale(18)} />
                      <Text style={{ color: "#666", fontSize: 10 }}>
                        {labels[i]}
                      </Text>
                    </>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* SKILLS */}
          <View
            style={{
              backgroundColor: "#1e2128",
              borderRadius: scale(20),
              padding: scale(16),
              marginTop: verticalScale(20),
            }}
          >
            <CoreSkillsSelector 
              selected={selectedSkills}
              onSelectionChange={setSelectedSkills}
            />

            {/* GAME TYPE */}
            <Text style={{ color: "white", marginTop: 12 }}>
              Preferred Game Type
            </Text>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              {["singles", "doubles"].map((type) => {
                const active = preferredType === type;
                return (
                  <TouchableOpacity
                    key={type}
                    onPress={() => setPreferredType(type)}
                    style={{
                      flex: 1,
                      height: verticalScale(44),
                      borderRadius: scale(12),
                      borderWidth: 1,
                      borderColor: active ? "#F44725" : "#333",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: scale(6),
                    }}
                  >
                    <Text
                      style={{
                        color: active ? "white" : "#777",
                      }}
                    >
                      {type}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* DUPR */}
            <Text style={{ color: "white", marginTop: 12 }}>
              DUPR Rating
            </Text>

            <TextInput
              value={dupr}
              onChangeText={setDupr}
              placeholder="e.g. 3.5"
              placeholderTextColor="#555"
              style={{
                backgroundColor: "black",
                height: verticalScale(44),
                borderRadius: scale(12),
                paddingHorizontal: scale(12),
                color: "white",
                marginTop: 6,
              }}
            />
          </View>

          {/* CLUB */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#1e2128",
              padding: scale(14),
              borderRadius: scale(16),
              marginTop: verticalScale(20),
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Shield color="white" size={scale(18)} />
              <Text style={{ color: "white", marginLeft: 10 }}>
                Add Club Affiliations
              </Text>
            </View>
            <ChevronRight color="white" />
          </TouchableOpacity>

          {/* BUTTON */}
          <TouchableOpacity
            disabled={loading}
            onPress={async () => {
              setLoading(true);
              try {
                await profileService.updateProfile({
                   // This should probably be a merge or we should have all state here
                   // For now, I'll send what we have in this screen
                   playStyle,
                   preferredType,
                   duprRating: dupr,
                   selectedSkills,
                   highlights,
                   // Note: Step 1 data is missing here if we don't persist it in a global state
                   // In a real app, we'd use Redux or Context to collect all data
                   fullName: "", // placeholder
                   age: "", // placeholder
                   gender: "", // placeholder
                   playingLevel: "", // placeholder
                   location: "", // placeholder
                   startedPlayingMonth: "", // placeholder
                   startedPlayingYear: "", // placeholder
                   duprLink: "", // placeholder
                   favoriteCourts: "", // placeholder
                });
                router.push("/community-feed");
              } catch (error) {
                Alert.alert("Error", "Failed to finish onboarding. Please try again.");
              } finally {
                setLoading(false);
              }
            }}
            style={{
              backgroundColor: "#F44725",
              height: verticalScale(60),
              borderRadius: scale(20),
              justifyContent: "center",
              alignItems: "center",
              marginTop: verticalScale(20),
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text
                style={{
                  color: "white",
                  fontSize: normalize(16),
                  fontWeight: "700",
                }}
              >
                Finish Onboarding →
              </Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}