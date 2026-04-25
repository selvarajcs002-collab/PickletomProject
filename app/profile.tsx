import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  ChevronLeft,
  Camera,
  User,
  Plus,
  MapPin,
  ChevronDown,
  Link,
  Search,
  ChevronRight,
  Calendar,
} from "lucide-react-native";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import { profileService, ProfileData } from "../services/profileService";

/* ================= RESPONSIVE ================= */
const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 390;
const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / 844) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

/* ================= DATA ================= */
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const years = Array.from({ length: 2050 - 1960 + 1 }, (_, i) => 1960 + i);

/* ================= COMPONENT ================= */
export default function ProfileSetupStep1() {
  const router = useRouter();

  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [avatarImage, setAvatarImage] = useState<string | null>(null);

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [playingLevel, setPlayingLevel] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [duprLink, setDuprLink] = useState("");
  const [favoriteCourts, setFavoriteCourts] = useState("");

  const [loading, setLoading] = useState(false);

  const [genderModal, setGenderModal] = useState(false);
  const [monthModal, setMonthModal] = useState(false);
  const [yearModal, setYearModal] = useState(false);
  const [playingLevelModal, setPlayingLevelModal] = useState(false);

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Enable gallery access");
      return false;
    }
    return true;
  };

  const pickImage = async (type: "cover" | "avatar") => {
    const ok = await requestPermission();
    if (!ok) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.8,
      aspect: type === "cover" ? [16, 9] : [1, 1],
    });

    if (!result.canceled) {
      type === "cover"
        ? setCoverImage(result.assets[0].uri)
        : setAvatarImage(result.assets[0].uri);
    }
  };

  const Label = ({ text }: { text: string }) => (
    <Text style={styles.label}>{text}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={scale(22)} color="white" />
        </TouchableOpacity>

        <View style={{ alignItems: "center" }}>
          <Text style={styles.headerTitle}>Profile Setup</Text>
          <Text style={styles.headerSub}>STEP 1 OF 2</Text>
        </View>

        <View style={{ width: scale(22) }} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* COVER */}
          <TouchableOpacity
            style={styles.cover}
            onPress={() => pickImage("cover")}
          >
            {coverImage && (
              <Image source={{ uri: coverImage }} style={styles.coverImg} />
            )}
            <View style={styles.coverBtn}>
              <Camera size={scale(14)} color="white" />
              <Text style={styles.coverText}>
                {coverImage ? "Change Cover" : "Add Cover"}
              </Text>
            </View>
          </TouchableOpacity>

          {/* AVATAR */}
          <View style={styles.avatarWrap}>
            <TouchableOpacity onPress={() => pickImage("avatar")}>
              <View style={styles.avatar}>
                {avatarImage ? (
                  <Image source={{ uri: avatarImage }} style={styles.avatarImg} />
                ) : (
                  <User size={scale(40)} color="#888" />
                )}
              </View>
              <View style={styles.plus}>
                <Plus size={scale(16)} color="white" />
              </View>
            </TouchableOpacity>
          </View>

          {/* INTRO */}
          <View style={styles.center}>
            <Text style={styles.title}>Let's Onboard you!</Text>
            <Text style={styles.subtitle}>
              Complete your player profile to start connecting with the community.
            </Text>
          </View>

          {/* FORM */}
          <View style={styles.card}>

            {/* FULL NAME */}
            <Label text="FULL NAME" />
            <View style={styles.input}>
              <User size={scale(16)} color="#777" />
              <TextInput
                placeholder="Enter your full name"
                placeholderTextColor="#777"
                style={styles.inputText}
                value={fullName}
                onChangeText={setFullName}
              />
            </View>

            {/* AGE + GENDER */}
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <Label text="AGE" />
                <View style={styles.input}>
                  <TextInput
                    placeholder="Years"
                    placeholderTextColor="#777"
                    style={styles.inputText}
                    keyboardType="numeric"
                    value={age}
                    onChangeText={setAge}
                  />
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <Label text="GENDER" />
                <TouchableOpacity
                  style={styles.input}
                  onPress={() => setGenderModal(true)}
                >
                  <Text style={gender ? styles.selectedText : styles.placeholder}>
                    {gender || "Select"}
                  </Text>
                  <ChevronDown size={scale(14)} color="#777" />
                </TouchableOpacity>
              </View>
            </View>

            {/* PLAYING LEVEL */}
            <Label text="PLAYING LEVEL" />
            <TouchableOpacity
              style={styles.input}
              onPress={() => setPlayingLevelModal(true)}
            >
              <Text style={playingLevel ? styles.selectedText : styles.placeholder}>
                {playingLevel || "Select"}
              </Text>
              <ChevronDown size={scale(14)} color="#777" />
            </TouchableOpacity>

            {/* LOCATION */}
            <Label text="PRIMARY LOCATION" />
            <View style={styles.input}>
              <MapPin size={scale(16)} color="#777" />
              <TextInput
                placeholder="City, Country"
                placeholderTextColor="#777"
                style={styles.inputText}
                value={userLocation}
                onChangeText={setUserLocation}
              />
            </View>

            {/* STARTED PLAYING */}
            <Label text="STARTED PLAYING" />
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.input}
                onPress={() => setMonthModal(true)}
              >
                <Text style={month ? styles.selectedText : styles.placeholder}>
                  {month || "Month"}
                </Text>
                <ChevronDown size={scale(14)} color="#777" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.input}
                onPress={() => setYearModal(true)}
              >
                <Text style={year ? styles.selectedText : styles.placeholder}>
                  {year || "Year"}
                </Text>
                <Calendar size={scale(16)} color="#777" />
              </TouchableOpacity>
            </View>

            {/* LINK */}
            <Label text="DU/PR PROFILE LINK" />
            <View style={styles.input}>
              <Link size={scale(16)} color="#777" />
              <TextInput
                placeholder="mydupr.com/u/yourprofile"
                placeholderTextColor="#777"
                style={styles.inputText}
                value={duprLink}
                onChangeText={setDuprLink}
              />
            </View>

            {/* COURTS */}
            <Label text="FAVORITE COURTS" />
            <View style={styles.input}>
              <Search size={scale(16)} color="#777" />
              <TextInput
                placeholder="Search local courts or clubs..."
                placeholderTextColor="#777"
                style={styles.inputText}
                value={favoriteCourts}
                onChangeText={setFavoriteCourts}
              />
            </View>

            <Text style={styles.tip}>
              Tip: This helps others find you for local games!
            </Text>
          </View>

          {/* BUTTON */}
          <TouchableOpacity
            style={[styles.button, loading && { opacity: 0.7 }]}
            disabled={loading}
            onPress={async () => {
              setLoading(true);
              try {
                await profileService.updateProfile({
                  fullName,
                  age,
                  gender,
                  playingLevel,
                  location: userLocation,
                  startedPlayingMonth: month,
                  startedPlayingYear: year,
                  duprLink,
                  favoriteCourts,
                  coverImage: coverImage || undefined,
                  avatarImage: avatarImage || undefined
                });
                router.push("/playing-style");
              } catch (error) {
                Alert.alert("Error", "Failed to save profile. Please try again.");
              } finally {
                setLoading(false);
              }
            }}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <>
                <Text style={styles.buttonText}>Continue</Text>
                <ChevronRight size={scale(20)} color="white" />
              </>
            )}
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>

      {/* ================= MODALS ================= */}

      {/* GENDER */}
      {genderModal && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {["Male", "Female"].map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.modalItem}
                onPress={() => {
                  setGender(item);
                  setGenderModal(false);
                }}
              >
                <Text style={styles.modalText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* PLAYING LEVEL */}
      {playingLevelModal && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {["Beginner", "Intermediate", "Advanced", "Pro"].map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.modalItem}
                onPress={() => {
                  setPlayingLevel(item);
                  setPlayingLevelModal(false);
                }}
              >
                <Text style={styles.modalText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* MONTH */}
      {monthModal && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView>
              {months.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.modalItem}
                  onPress={() => {
                    setMonth(item);
                    setMonthModal(false);
                  }}
                >
                  <Text style={styles.modalText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      )}

      {/* YEAR */}
      {yearModal && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView style={{ maxHeight: verticalScale(300) }}>
              {years.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.modalItem}
                  onPress={() => {
                    setYear(item.toString());
                    setYearModal(false);
                  }}
                >
                  <Text style={styles.modalText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      )}

    </SafeAreaView>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "transparent" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: scale(16),
  },

  headerTitle: {
    color: "white",
    fontSize: moderateScale(16),
    fontWeight: "700",
  },

  headerSub: {
    color: "#888",
    fontSize: moderateScale(10),
  },

  cover: {
    height: height * 0.25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },

  coverImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  coverBtn: {
    flexDirection: "row",
    gap: scale(6),
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: scale(8),
    borderRadius: scale(10),
    alignItems: "center",
  },

  coverText: { color: "white" },

  avatarWrap: {
    alignItems: "center",
    marginTop: -verticalScale(50),
  },

  avatar: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#000",
  },

  avatarImg: {
    width: "100%",
    height: "100%",
    borderRadius: scale(50),
  },

  plus: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    backgroundColor: "#ff4d2d",
    justifyContent: "center",
    alignItems: "center",
  },

  center: { alignItems: "center", padding: scale(20) },

  title: {
    fontSize: moderateScale(22),
    color: "white",
    fontWeight: "700",
  },

  subtitle: {
    fontSize: moderateScale(13),
    color: "#aaa",
    textAlign: "center",
    marginTop: verticalScale(6),
  },

  card: {
    margin: scale(16),
    padding: scale(16),
    borderRadius: scale(20),
    backgroundColor: "#1e2128",
    marginBottom: scale(8),
  },

  label: {
    color: "#888",
    fontSize: moderateScale(10),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(4),
  },

  input: {
    flex: 1,
    height: verticalScale(48),
    backgroundColor: "#0f1115",
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: "#2a2a2a",
    marginTop: verticalScale(4),
    paddingHorizontal: scale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputText: {
    flex: 1,
    marginLeft: scale(8),
    color: "white",
  },

  placeholder: { color: "#777" },
  selectedText: { color: "white" },

  row: {
    flexDirection: "row",
    gap: scale(10),
  },

  tip: {
    color: "#777",
    fontSize: moderateScale(10),
    marginTop: verticalScale(10),
  },

  button: {
    height: verticalScale(55),
    margin: scale(16),
    borderRadius: scale(30),
    backgroundColor: "#ff4d2d",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    marginRight: scale(6),
  },

  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "flex-end",
  },

  modalContainer: {
    backgroundColor: "#1e2128",
    padding: scale(16),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    maxHeight: "60%",
  },

  modalItem: {
    paddingVertical: verticalScale(14),
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },

  modalText: {
    color: "white",
    fontSize: moderateScale(16),
    textAlign: "center",
  },
});