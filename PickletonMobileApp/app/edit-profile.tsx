import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft, ChevronDown, Check } from "lucide-react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { profileService } from "../services/profileService";

const { width } = Dimensions.get("window");
const scale = (n: number) => (width / 375) * n;

// ── Dropdown options ───────────────────────────────────────────────────────────
const PLAYING_LEVELS = ["Beginner", "Intermediate", "Advanced", "Professional"];
const GENDERS = ["Male", "Female", "Other"];
const HANDS = ["Right", "Left", "Both"];
const BACKHANDS = ["One-Handed", "Two-Handed"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const YEARS_PLAYING = Array.from({ length: 50 }, (_, i) =>
  (new Date().getFullYear() - i).toString()
);
const BIRTH_YEARS = Array.from({ length: 80 }, (_, i) =>
  (new Date().getFullYear() - 10 - i).toString()
);
const TOURNAMENT_YEARS = Array.from({ length: 10 }, (_, i) =>
  (new Date().getFullYear() - i).toString()
);
const CATEGORIES = ["Singles", "Doubles", "Mixed Doubles"];
const RESULTS = ["Winner", "Runner Up", "Semi-Finalist", "Participant"];

// ── Simple Dropdown ────────────────────────────────────────────────────────────
function Dropdown({
  label,
  value,
  options,
  onSelect,
  placeholder = "Select...",
}: {
  label: string;
  value: string;
  options: string[];
  onSelect: (v: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <View style={dd.wrapper}>
      <Text style={dd.label}>{label.toUpperCase()}</Text>
      <TouchableOpacity style={dd.button} onPress={() => setOpen(!open)}>
        <Text style={[dd.buttonText, !value && dd.placeholder]}>
          {value || placeholder}
        </Text>
        <ChevronDown size={16} color="#9CA3AF" />
      </TouchableOpacity>
      {open && (
        <View style={dd.list}>
          <ScrollView nestedScrollEnabled style={{ maxHeight: 200 }}>
            {options.map((opt) => (
              <TouchableOpacity
                key={opt}
                style={dd.item}
                onPress={() => { onSelect(opt); setOpen(false); }}
              >
                <Text style={dd.itemText}>{opt}</Text>
                {value === opt && <Check size={14} color="#B20000" />}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

// ── Field Component ────────────────────────────────────────────────────────────
function Field({
  label,
  value,
  onChangeText,
  placeholder = "",
  multiline = false,
  keyboardType = "default" as any,
}: {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  placeholder?: string;
  multiline?: boolean;
  keyboardType?: any;
}) {
  return (
    <View style={f.wrapper}>
      <Text style={f.label}>{label.toUpperCase()}</Text>
      <TextInput
        style={[f.input, multiline && f.multiline]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
        textAlignVertical={multiline ? "top" : "center"}
        keyboardType={keyboardType}
      />
    </View>
  );
}

// ── Section Header ─────────────────────────────────────────────────────────────
function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionLine} />
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionLine} />
    </View>
  );
}

// ── Main Screen ────────────────────────────────────────────────────────────────
export default function EditProfileScreen() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  // ── Form State ───────────────────────────────────────────────────────────────
  const [fullName, setFullName] = useState("");
  const [yearBorn, setYearBorn] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [playingLevel, setPlayingLevel] = useState("");
  const [sinceMonth, setSinceMonth] = useState("");
  const [sinceYear, setSinceYear] = useState("");
  const [powerHand, setPowerHand] = useState("");
  const [backHand, setBackHand] = useState("");
  const [clubName, setClubName] = useState("");
  const [duprLink, setDuprLink] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [equipment, setEquipment] = useState("");
  const [coachName, setCoachName] = useState("");
  const [trainingClub, setTrainingClub] = useState("");
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentCategory, setTournamentCategory] = useState("");
  const [tournamentYear, setTournamentYear] = useState("");
  const [tournamentResult, setTournamentResult] = useState("");

  // ── Load existing profile ────────────────────────────────────────────────────
  useEffect(() => {
    const load = async () => {
      try {
        const id = await AsyncStorage.getItem("userId");
        if (!id) {
          Alert.alert("Not logged in", "Please sign in first.");
          router.back();
          return;
        }
        const uid = parseInt(id, 10);
        setUserId(uid);
        const p = await profileService.getProfile(uid);
        if (p) {
          setFullName(p.userName || p.FullName || "");
          setYearBorn(p.Age?.toString() || p.YearBorn || "");
          setGender(p.Gender || "");
          setLocation(p.Location || "");
          setPlayingLevel(p.Playing_level || p.PlayingLevel || "");
          setSinceMonth(p.Playing_since || p.PlayingSinceMonth || "");
          setSinceYear(p.PlayingSinceYear || "");
          setPowerHand(p.Power_hand || p.PowerHand || "");
          setBackHand(p.Back_hand || p.BackHand || "");
          setClubName(p.Club || p.ClubName || "");
          setDuprLink(p.DUPR_profile_link || p.DuprLink || "");
          setAbout(p.About || "");
          setSkills(p.Skills || "");
          setEquipment(p.Equipment || "");
          setCoachName(p.Coach_name || p.CoachName || "");
          setTrainingClub(p.Training_location || p.TrainingLocation || "");
          setTournamentName(p.Tournament_name || p.TournamentName || "");
          setTournamentCategory(p.Category || "");
          setTournamentYear(p.Year?.toString() || "");
          setTournamentResult(p.Result || "");
        }
      } catch (err: any) {
        Alert.alert("Error", "Failed to load profile data.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // ── Save Profile ─────────────────────────────────────────────────────────────
  const handleSave = async () => {
    if (!userId) return;
    setSaving(true);
    try {
      // Payload keys must match OnboardingProfileRequest.cs [JsonPropertyName] tags
      const payload = {
        userId,
        fullName,
        yearBorn,
        gender,
        location,
        playingLevel,
        sinceMonth,
        sinceYear,
        powerHand,
        backHand,
        clubName,
        duprLink,
        about,
        playingSkills: skills,
        equipment,
        coachName,
        trainingClub,
        // Tournament fields use their own JsonPropertyName keys
        Tournament_name: tournamentName,
        Category: tournamentCategory,
        Year: tournamentYear,
        Result: tournamentResult,
      };

      const res = await profileService.saveProfile(payload);
      if (res && res.status === 1) {
        Alert.alert("Saved!", res.message || "Profile updated successfully.", [
          { text: "OK", onPress: () => router.back() },
        ]);
      } else {
        Alert.alert("Error", res?.message || "Failed to save. Please try again.");
      }
    } catch (err: any) {
      Alert.alert("Error", err?.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={[styles.safeArea, styles.centered]}>
        <StatusBar style="light" />
        <ActivityIndicator size="large" color="#B20000" />
        <Text style={styles.loadingText}>Loading your profile...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <ChevronLeft size={scale(24)} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <TouchableOpacity
          style={[styles.saveBtn, saving && styles.saveBtnDisabled]}
          onPress={handleSave}
          disabled={saving}
        >
          {saving ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.saveBtnText}>Save</Text>
          )}
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* ── PERSONAL INFO ── */}
          <SectionHeader title="Personal Info" />
          <View style={styles.card}>
            <Field label="Full Name" value={fullName} onChangeText={setFullName} placeholder="e.g. Ben Johns" />
            <Dropdown label="Year Born" value={yearBorn} options={BIRTH_YEARS} onSelect={setYearBorn} placeholder="Select year" />
            <Dropdown label="Gender" value={gender} options={GENDERS} onSelect={setGender} />
            <Field label="Location" value={location} onChangeText={setLocation} placeholder="e.g. Chennai, TN, India" />
            <Field label="DUPR Profile Link" value={duprLink} onChangeText={setDuprLink} placeholder="https://mydupr.com/p/..." keyboardType="url" />
          </View>

          {/* ── PLAYING INFO ── */}
          <SectionHeader title="Playing Info" />
          <View style={styles.card}>
            <Dropdown label="Playing Level" value={playingLevel} options={PLAYING_LEVELS} onSelect={setPlayingLevel} />
            <View style={styles.row}>
              <View style={{ flex: 1, marginRight: scale(8) }}>
                <Dropdown label="Since Month" value={sinceMonth} options={MONTHS} onSelect={setSinceMonth} />
              </View>
              <View style={{ flex: 1 }}>
                <Dropdown label="Since Year" value={sinceYear} options={YEARS_PLAYING} onSelect={setSinceYear} />
              </View>
            </View>
            <Dropdown label="Power Hand" value={powerHand} options={HANDS} onSelect={setPowerHand} />
            <Dropdown label="Back Hand" value={backHand} options={BACKHANDS} onSelect={setBackHand} />
            <Field label="Club Name" value={clubName} onChangeText={setClubName} placeholder="e.g. RallyHub" />
          </View>

          {/* ── ABOUT & SKILLS ── */}
          <SectionHeader title="About & Skills" />
          <View style={styles.card}>
            <Field
              label="About You"
              value={about}
              onChangeText={setAbout}
              placeholder="Tell us about yourself..."
              multiline
            />
            <Field
              label="Skills (comma separated)"
              value={skills}
              onChangeText={setSkills}
              placeholder="e.g. Fast Volleys, Deep Serves"
            />
            <Field label="Equipment Used" value={equipment} onChangeText={setEquipment} placeholder="e.g. Joola Perseus 14mm" />
          </View>

          {/* ── COACHING ── */}
          <SectionHeader title="Coach & Training" />
          <View style={styles.card}>
            <Field label="Coach Name" value={coachName} onChangeText={setCoachName} placeholder="e.g. Vishnu Raja" />
            <Field label="Training Club / Location" value={trainingClub} onChangeText={setTrainingClub} placeholder="e.g. RallyHub, Tirupur" />
          </View>

          {/* ── TOURNAMENT ── */}
          <SectionHeader title="Tournament" />
          <View style={styles.card}>
            <Field label="Tournament Name" value={tournamentName} onChangeText={setTournamentName} placeholder="e.g. Chennai Open" />
            <View style={styles.row}>
              <View style={{ flex: 1, marginRight: scale(8) }}>
                <Dropdown label="Category" value={tournamentCategory} options={CATEGORIES} onSelect={setTournamentCategory} />
              </View>
              <View style={{ flex: 1 }}>
                <Dropdown label="Year" value={tournamentYear} options={TOURNAMENT_YEARS} onSelect={setTournamentYear} />
              </View>
            </View>
            <Dropdown label="Result" value={tournamentResult} options={RESULTS} onSelect={setTournamentResult} />
          </View>

          {/* ── Bottom Save ── */}
          <TouchableOpacity
            style={[styles.bottomSave, saving && styles.saveBtnDisabled]}
            onPress={handleSave}
            disabled={saving}
          >
            {saving ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.bottomSaveText}>Save Profile</Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ── Field styles ───────────────────────────────────────────────────────────────
const f = StyleSheet.create({
  wrapper: { marginBottom: scale(16) },
  label: {
    fontSize: scale(11),
    fontWeight: "700",
    color: "#9CA3AF",
    letterSpacing: 0.8,
    marginBottom: scale(6),
  },
  input: {
    backgroundColor: "#F3F4F6",
    borderRadius: scale(12),
    paddingHorizontal: scale(14),
    paddingVertical: scale(12),
    fontSize: scale(14),
    color: "#111827",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  multiline: {
    minHeight: scale(90),
    textAlignVertical: "top",
  },
});

// ── Dropdown styles ────────────────────────────────────────────────────────────
const dd = StyleSheet.create({
  wrapper: { marginBottom: scale(16), zIndex: 10 },
  label: {
    fontSize: scale(11),
    fontWeight: "700",
    color: "#9CA3AF",
    letterSpacing: 0.8,
    marginBottom: scale(6),
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F3F4F6",
    borderRadius: scale(12),
    paddingHorizontal: scale(14),
    paddingVertical: scale(12),
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  buttonText: { fontSize: scale(14), color: "#111827" },
  placeholder: { color: "#9CA3AF" },
  list: {
    backgroundColor: "white",
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginTop: scale(4),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 999,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: scale(11),
    paddingHorizontal: scale(14),
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  itemText: { fontSize: scale(14), color: "#374151" },
});

// ── Screen styles ──────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  centered: { justifyContent: "center", alignItems: "center" },
  loadingText: { color: "white", marginTop: 12, fontSize: scale(14) },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(16),
    paddingTop: Platform.OS === "ios" ? scale(10) : scale(20),
    paddingBottom: scale(14),
  },
  backBtn: { padding: scale(8) },
  headerTitle: {
    color: "white",
    fontSize: scale(18),
    fontWeight: "700",
  },
  saveBtn: {
    backgroundColor: "#B20000",
    paddingHorizontal: scale(18),
    paddingVertical: scale(8),
    borderRadius: scale(20),
    minWidth: scale(60),
    alignItems: "center",
  },
  saveBtnDisabled: { opacity: 0.6 },
  saveBtnText: { color: "white", fontWeight: "700", fontSize: scale(14) },

  scroll: {
    paddingHorizontal: scale(16),
    paddingBottom: scale(40),
  },
  card: {
    backgroundColor: "white",
    borderRadius: scale(20),
    padding: scale(18),
    marginBottom: scale(16),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    marginBottom: 0,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale(12),
    marginTop: scale(8),
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  sectionTitle: {
    color: "rgba(255,255,255,0.85)",
    fontSize: scale(12),
    fontWeight: "700",
    letterSpacing: 1.2,
    paddingHorizontal: scale(12),
    textTransform: "uppercase",
  },

  bottomSave: {
    backgroundColor: "#B20000",
    height: scale(54),
    borderRadius: scale(16),
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(8),
    marginBottom: scale(20),
    shadowColor: "#B20000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  bottomSaveText: {
    color: "white",
    fontSize: scale(16),
    fontWeight: "700",
  },
});
