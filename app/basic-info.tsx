import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ChevronLeft, Camera, Image as ImageIcon } from "lucide-react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { GradientBackground } from "../components/GradientBackground";

const { width } = Dimensions.get("window");
const scale = (size: number) => (width / 375) * size;

export default function BasicInfoScreen() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const pickImage = async (type: "cover" | "profile") => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: type === "cover" ? [16, 9] : [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      if (type === "cover") {
        setCoverImage(result.assets[0].uri);
      } else {
        setProfileImage(result.assets[0].uri);
      }
    }
  };

  return (
    <GradientBackground>
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <StatusBar style="light" />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          {/* HEADER */}
          <View style={{ paddingHorizontal: scale(16), paddingVertical: scale(50), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <TouchableOpacity onPress={() => router.back()}>
              <ChevronLeft size={scale(24)} color="white" />
            </TouchableOpacity>
            <Text style={{ fontSize: scale(14), fontWeight: "bold", color: "#9CA3AF", letterSpacing: 1.5 }}>
              STEP 1 OF 5
            </Text>
            <View style={{ width: scale(24) }} />
          </View>

          {/* PROGRESS */}
          <View style={{ height: 2, backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
            <View style={{ height: "100%", backgroundColor: "#F44725", width: "20%" }} />
          </View>

          <ScrollView
            style={{ flex: 1, paddingHorizontal: scale(16), paddingTop: scale(20) }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* TITLE */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: scale(15) }}>
              <Text style={{ color: "#F44725", fontWeight: "600", fontSize: scale(16) }}>
                Tournament Branding
              </Text>
              <Text style={{ color: "#6B7280", fontSize: scale(14) }}>Required</Text>
            </View>

            {/* COVER UPLOAD */}
            <View style={{ marginBottom: scale(40), position: "relative" }}>
              <TouchableOpacity
                onPress={() => pickImage("cover")}
                style={{
                  borderWidth: 1,
                  borderStyle: "dashed",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                  borderRadius: scale(20),
                  height: scale(180),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  overflow: "hidden"
                }}
              >
                {coverImage ? (
                  <Image source={{ uri: coverImage }} style={{ width: "100%", height: "100%" }} />
                ) : (
                  <>
                    <Camera size={scale(32)} color="#777" />
                    <Text style={{ color: "#D1D5DB", fontSize: scale(16), marginTop: scale(8), fontWeight: "500" }}>
                      Upload Cover Photo
                    </Text>
                    <Text style={{ color: "#6B7280", fontSize: scale(12), marginTop: scale(4) }}>
                      16:9 ratio recommended (JPG, PNG)
                    </Text>
                  </>
                )}
              </TouchableOpacity>

              {/* FLOATING LOGO */}
              <View style={{ position: "absolute", bottom: scale(-30), left: scale(16) }}>
                <TouchableOpacity
                  onPress={() => pickImage("profile")}
                  style={{
                    width: scale(90),
                    height: scale(90),
                    borderRadius: scale(16),
                    backgroundColor: "#000",
                    borderWidth: 2,
                    borderColor: "rgba(255, 255, 255, 0.15)",
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    elevation: 8,
                    overflow: "hidden"
                  }}
                >
                  {profileImage ? (
                    <Image source={{ uri: profileImage }} style={{ width: "100%", height: "100%" }} />
                  ) : (
                    <View style={{ alignItems: "center" }}>
                      <ImageIcon size={scale(24)} color="#444" />
                      <Text style={{ color: "#444", fontSize: scale(10), fontWeight: "700", marginTop: 2 }}>LOGO</Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </View>

            {/* TITLE INPUT */}
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: scale(20), padding: scale(16), borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", marginBottom: scale(16) }}>
              <Text style={{ color: "white", fontSize: scale(14), marginBottom: scale(8), fontWeight: "600" }}>
                Tournament Title
              </Text>
              <TextInput
                placeholder="e.g. The Coastal Pickleball Classic 2024"
                placeholderTextColor="#666"
                value={title}
                onChangeText={setTitle}
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  borderWidth: 1,
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: scale(12),
                  paddingHorizontal: scale(12),
                  paddingVertical: scale(12),
                  color: "white",
                  fontSize: scale(14)
                }}
              />
              <Text style={{ color: "#6B7280", fontSize: scale(12), marginTop: scale(8) }}>
                This will be the main name shown on promotional materials.
              </Text>
            </View>

            {/* TAGLINE */}
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: scale(20), padding: scale(16), borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", marginBottom: scale(16) }}>
              <Text style={{ color: "white", fontSize: scale(14), marginBottom: scale(8), fontWeight: "600" }}>
                Catchy Tagline
              </Text>
              <TextInput
                placeholder="e.g. Where Legends Meet the Court"
                placeholderTextColor="#666"
                value={tagline}
                onChangeText={setTagline}
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  borderWidth: 1,
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: scale(12),
                  paddingHorizontal: scale(12),
                  paddingVertical: scale(12),
                  color: "white",
                  fontSize: scale(14)
                }}
              />
            </View>

            {/* DESCRIPTION */}
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: scale(20), padding: scale(16), borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", marginBottom: scale(24) }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: scale(8) }}>
                <Text style={{ color: "white", fontSize: scale(14), fontWeight: "600" }}>
                  Public Description
                </Text>
                <Text style={{ color: "#6B7280", fontSize: scale(12) }}>
                  {description.length}/300
                </Text>
              </View>

              <TextInput
                placeholder="Briefly describe what makes your tournament special..."
                placeholderTextColor="#666"
                value={description}
                onChangeText={setDescription}
                multiline
                maxLength={300}
                textAlignVertical="top"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  borderWidth: 1,
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: scale(12),
                  paddingHorizontal: scale(12),
                  paddingVertical: scale(12),
                  color: "white",
                  fontSize: scale(16),
                  height: scale(120)
                }}
              />

              {/* TIP */}
              <View style={{ backgroundColor: "rgba(244, 71, 37, 0.1)", borderWidth: 1, borderColor: "rgba(244, 71, 37, 0.2)", borderRadius: scale(12), padding: scale(12), marginTop: scale(12) }}>
                <Text style={{ color: "#F44725", fontSize: scale(13) }}>
                  Pro Tip: Keep it under 3 sentences for better mobile viewing on
                  social sharing cards.
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* FOOTER */}
          <View style={{ paddingHorizontal: scale(16), paddingBottom: scale(24), paddingTop: scale(12), backgroundColor: "transparent", borderTopWidth: 1, borderTopColor: "rgba(255, 255, 255, 0.1)" }}>
            <TouchableOpacity
              onPress={() => router.push("/schedule-and-venue")}
              style={{ backgroundColor: "#F44725", height: scale(54), borderRadius: scale(16), alignItems: "center", justifyContent: "center" }}
            >
              <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: scale(16) }}>
                  Continue to Schedule →
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: "center", marginTop: scale(12) }}>
              <Text style={{ color: "#6B7280", fontSize: scale(14) }}>
                Save Progress for Later
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GradientBackground>
  );
}