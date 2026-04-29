import React, { useState, useEffect, useMemo } from "react";
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
  Modal,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft, ChevronDown, Check, X, Plus, Search, Trash2, Pencil } from "lucide-react-native";
import { skillsData } from "../assets/data/skills";

// ── Tournament entry type ──────────────────────────────────────────────────────
type TournamentEntry = {
  id: string;
  name: string;
  category: string;
  year: string;
  result: string;
};

const newId = () => Date.now().toString();
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
  const [skills, setSkills] = useState<string[]>([]);
  const [skillsModalVisible, setSkillsModalVisible] = useState(false);
  const [equipment, setEquipment] = useState("");
  const [coachName, setCoachName] = useState("");
  const [trainingClub, setTrainingClub] = useState("");
  const [tournaments, setTournaments] = useState<TournamentEntry[]>([]);
  const [tourneyModalVisible, setTourneyModalVisible] = useState(false);
  const [editingTourney, setEditingTourney] = useState<TournamentEntry | null>(null);

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
          setSkills(
            p.Skills
              ? p.Skills.split(",").map((s: string) => s.trim().replace(/_/g, " ")).filter(Boolean)
              : []
          );
          setEquipment(p.Equipment || "");
          setCoachName(p.Coach_name || p.CoachName || "");
          setTrainingClub(p.Training_location || p.TrainingLocation || "");
          // Load tournaments: try JSON array first, then fall back to single fields
          if (p.Tournaments) {
            try {
              const parsed = JSON.parse(p.Tournaments);
              if (Array.isArray(parsed)) {
                setTournaments(parsed.map((t: any, i: number) => ({ id: String(i), name: t.name || "", category: t.category || "", year: t.year || "", result: t.result || "" })));
              }
            } catch { /* ignore */ }
          } else if (p.Tournament_name || p.TournamentName) {
            setTournaments([{
              id: "0",
              name: p.Tournament_name || p.TournamentName || "",
              category: p.Category || "",
              year: p.Year?.toString() || "",
              result: p.Result || "",
            }]);
          }
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
        playingSkills: skills.join(", "),
        equipment,
        coachName,
        trainingClub,
        // Backward-compat: keep first tournament in old fields
        Tournament_name: tournaments[0]?.name || "",
        Category: tournaments[0]?.category || "",
        Year: tournaments[0]?.year || "",
        Result: tournaments[0]?.result || "",
        // Full list as JSON (new field — backend can read this later)
        Tournaments: JSON.stringify(tournaments.map(({ name, category, year, result }) => ({ name, category, year, result }))),
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

            {/* ── Skills Multi-Select ── */}
            <View style={sk.wrapper}>
              <Text style={sk.label}>SKILLS</Text>
              {/* Selected pills */}
              <View style={sk.pillsContainer}>
                {skills.map((skill) => (
                  <View key={skill} style={sk.pill}>
                    <Text style={sk.pillText}>
                      {skill.replace(/_/g, " ")}
                    </Text>
                    <TouchableOpacity
                      onPress={() => setSkills(skills.filter((s) => s !== skill))}
                      style={sk.pillRemove}
                    >
                      <X size={10} color="white" />
                    </TouchableOpacity>
                  </View>
                ))}
                {/* + Add button */}
                <TouchableOpacity
                  style={sk.addBtn}
                  onPress={() => setSkillsModalVisible(true)}
                >
                  <Plus size={14} color="#B20000" />
                  <Text style={sk.addBtnText}>Add Skill</Text>
                </TouchableOpacity>
              </View>
              {skills.length === 0 && (
                <Text style={sk.emptyHint}>Tap "+ Add Skill" to select your skills</Text>
              )}
            </View>

            <Field label="Equipment Used" value={equipment} onChangeText={setEquipment} placeholder="e.g. Joola Perseus 14mm" />
          </View>

          {/* ── COACHING ── */}
          <SectionHeader title="Coach & Training" />
          <View style={styles.card}>
            <Field label="Coach Name" value={coachName} onChangeText={setCoachName} placeholder="e.g. Vishnu Raja" />
            <Field label="Training Club / Location" value={trainingClub} onChangeText={setTrainingClub} placeholder="e.g. RallyHub, Tirupur" />
          </View>

          {/* ── TOURNAMENT ── */}
          <SectionHeader title="Tournaments" />
          <View style={styles.card}>

            {/* Existing tournament cards */}
            {tournaments.map((t, idx) => (
              <View key={t.id} style={tr.card}>
                <View style={tr.cardLeft}>
                  <Text style={tr.cardNum}>#{idx + 1}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={tr.cardName} numberOfLines={1}>{t.name || "(No name)"}</Text>
                    <Text style={tr.cardMeta}>
                      {[t.category, t.year, t.result].filter(Boolean).join(" · ")}
                    </Text>
                  </View>
                </View>
                <View style={tr.cardActions}>
                  <TouchableOpacity
                    style={tr.actionBtn}
                    onPress={() => { setEditingTourney(t); setTourneyModalVisible(true); }}
                  >
                    <Pencil size={14} color="#6B7280" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[tr.actionBtn, tr.deleteBtn]}
                    onPress={() => setTournaments(tournaments.filter((x) => x.id !== t.id))}
                  >
                    <Trash2 size={14} color="#EF4444" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}

            {/* + Add Tournament button */}
            <TouchableOpacity
              style={tr.addRow}
              onPress={() => { setEditingTourney(null); setTourneyModalVisible(true); }}
            >
              <Plus size={16} color="#B20000" />
              <Text style={tr.addRowText}>Add Tournament</Text>
            </TouchableOpacity>

            {tournaments.length === 0 && (
              <Text style={tr.emptyHint}>No tournaments added yet.</Text>
            )}
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

      {/* ── Skills Picker Modal ── */}
      <SkillPickerModal
        visible={skillsModalVisible}
        selected={skills}
        onClose={() => setSkillsModalVisible(false)}
        onToggle={(skill) => {
          // Convert underscore key → human-readable label before storing
          const label = skill.replace(/_/g, " ");
          setSkills((prev) =>
            prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
          );
        }}
      />

      {/* ── Tournament Form Modal ── */}
      <TournamentFormModal
        visible={tourneyModalVisible}
        initial={editingTourney}
        onClose={() => setTourneyModalVisible(false)}
        onSave={(entry) => {
          if (editingTourney) {
            setTournaments(tournaments.map((t) => (t.id === editingTourney.id ? entry : t)));
          } else {
            setTournaments([...tournaments, entry]);
          }
          setTourneyModalVisible(false);
        }}
      />
    </SafeAreaView>
  );
}

// ── Tournament Form Modal ──────────────────────────────────────────────────────
function TournamentFormModal({
  visible,
  initial,
  onClose,
  onSave,
}: {
  visible: boolean;
  initial: TournamentEntry | null;
  onClose: () => void;
  onSave: (entry: TournamentEntry) => void;
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState("");

  // Populate form when editing an existing entry
  useEffect(() => {
    if (visible) {
      setName(initial?.name || "");
      setCategory(initial?.category || "");
      setYear(initial?.year || "");
      setResult(initial?.result || "");
    }
  }, [visible, initial]);

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert("Required", "Please enter the tournament name.");
      return;
    }
    onSave({ id: initial?.id || newId(), name: name.trim(), category, year, result });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={tr.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ width: "100%" }}
        >
          <View style={tr.sheet}>
            {/* Modal header */}
            <View style={tr.sheetHeader}>
              <Text style={tr.sheetTitle}>
                {initial ? "Edit Tournament" : "Add Tournament"}
              </Text>
              <TouchableOpacity onPress={onClose} style={tr.closeBtn}>
                <X size={20} color="#374151" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
              {/* Tournament Name */}
              <View style={f.wrapper}>
                <Text style={f.label}>TOURNAMENT NAME *</Text>
                <TextInput
                  style={f.input}
                  value={name}
                  onChangeText={setName}
                  placeholder="e.g. Chennai Open 2024"
                  placeholderTextColor="#9CA3AF"
                />
              </View>

              {/* Category & Year side-by-side */}
              <View style={{ flexDirection: "row", gap: scale(8) }}>
                <View style={{ flex: 1 }}>
                  <Dropdown label="Category" value={category} options={CATEGORIES} onSelect={setCategory} placeholder="Select..." />
                </View>
                <View style={{ flex: 1 }}>
                  <Dropdown label="Year" value={year} options={TOURNAMENT_YEARS} onSelect={setYear} placeholder="Year" />
                </View>
              </View>

              {/* Result */}
              <Dropdown label="Result" value={result} options={RESULTS} onSelect={setResult} placeholder="Select result..." />

              {/* Save button */}
              <TouchableOpacity style={tr.saveBtn} onPress={handleSave}>
                <Text style={tr.saveBtnText}>{initial ? "Update Tournament" : "Add Tournament"}</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

// ── Tournament card + modal styles ────────────────────────────────────────────
const tr = StyleSheet.create({
  // Cards
  card: {
    backgroundColor: "#F9FAFB",
    borderRadius: scale(12),
    padding: scale(12),
    marginBottom: scale(10),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  cardLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  cardNum: {
    fontSize: scale(11),
    fontWeight: "800",
    color: "#B20000",
    minWidth: scale(20),
  },
  cardName: {
    fontSize: scale(13),
    fontWeight: "700",
    color: "#111827",
    marginBottom: scale(2),
  },
  cardMeta: {
    fontSize: scale(11),
    color: "#6B7280",
  },
  cardActions: {
    flexDirection: "row",
    gap: scale(6),
  },
  actionBtn: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(8),
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteBtn: {
    backgroundColor: "#FEE2E2",
  },
  // Add row
  addRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(6),
    paddingVertical: scale(12),
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#FECACA",
    borderStyle: "dashed",
    borderRadius: scale(12),
    backgroundColor: "#FFF5F5",
    marginTop: scale(4),
  },
  addRowText: {
    color: "#B20000",
    fontSize: scale(13),
    fontWeight: "700",
  },
  emptyHint: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: scale(12),
    fontStyle: "italic",
    marginTop: scale(8),
  },
  // Modal
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  sheet: {
    backgroundColor: "white",
    borderTopLeftRadius: scale(24),
    borderTopRightRadius: scale(24),
    paddingTop: scale(20),
    paddingHorizontal: scale(16),
    paddingBottom: scale(36),
    width: "100%",
    maxHeight: "90%",
  },
  sheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scale(20),
  },
  sheetTitle: {
    fontSize: scale(18),
    fontWeight: "700",
    color: "#111827",
  },
  closeBtn: { padding: scale(4) },
  saveBtn: {
    backgroundColor: "#B20000",
    borderRadius: scale(14),
    height: scale(50),
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(8),
    shadowColor: "#B20000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
  },
  saveBtnText: {
    color: "white",
    fontSize: scale(15),
    fontWeight: "700",
  },
});

// ── Skills flat list (category → items) ──────────────────────────────────────
type SkillEntry = { type: "header"; category: string } | { type: "item"; skill: string };

function buildSkillEntries(): SkillEntry[] {
  const entries: SkillEntry[] = [];
  const pb = skillsData.pickleball_skills;

  const addCategory = (label: string, items: string[]) => {
    entries.push({ type: "header", category: label });
    items.forEach((s) => entries.push({ type: "item", skill: s }));
  };

  addCategory("Physical Skills", pb.physical_skills);
  addCategory("Tactical Skills", pb.tactical_skills);
  addCategory("Mental Skills", pb.mental_skills);
  addCategory("Doubles Skills", pb.doubles_skills);
  addCategory("Rules & Knowledge", pb.rules_and_knowledge);
  addCategory("Equipment Handling", pb.equipment_handling);
  addCategory("Training & Performance", pb.training_and_performance);
  addCategory("Advanced Competitive", pb.advanced_competitive_skills);

  // Technical sub-categories
  const tech = pb.technical_skills;
  addCategory("Serving", tech.serving);
  addCategory("Return of Serve", tech.return_of_serve);
  addCategory("Dinking", tech.dinking);
  addCategory("Volleys", tech.volleys);
  addCategory("Groundstrokes", tech.groundstrokes);
  addCategory("Smashes", tech.smashes);
  addCategory("Lobs", tech.lobs);
  addCategory("Third Shot", tech.third_shot);
  addCategory("Transition Play", tech.transition_play);
  addCategory("Spin Control", tech.spin_control);
  addCategory("Defensive Skills", tech.defensive_skills);
  addCategory("Net Play", tech.net_play);

  return entries;
}

const ALL_SKILL_ENTRIES = buildSkillEntries();

// ── Skill Picker Modal ─────────────────────────────────────────────────────────
function SkillPickerModal({
  visible,
  selected,
  onClose,
  onToggle,
}: {
  visible: boolean;
  selected: string[];
  onClose: () => void;
  onToggle: (skill: string) => void;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return ALL_SKILL_ENTRIES;
    const q = query.toLowerCase();
    const result: SkillEntry[] = [];
    let currentHeader: SkillEntry | null = null;
    let headerAdded = false;
    for (const entry of ALL_SKILL_ENTRIES) {
      if (entry.type === "header") {
        currentHeader = entry;
        headerAdded = false;
      } else {
        if (entry.skill.replace(/_/g, " ").toLowerCase().includes(q)) {
          if (currentHeader && !headerAdded) {
            result.push(currentHeader);
            headerAdded = true;
          }
          result.push(entry);
        }
      }
    }
    return result;
  }, [query]);

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={m.overlay}>
        <View style={m.sheet}>
          {/* Modal header */}
          <View style={m.header}>
            <Text style={m.title}>Select Skills</Text>
            <TouchableOpacity onPress={onClose} style={m.closeBtn}>
              <X size={20} color="#374151" />
            </TouchableOpacity>
          </View>

          {/* Selected count */}
          {selected.length > 0 && (
            <Text style={m.selectedCount}>{selected.length} skill{selected.length > 1 ? "s" : ""} selected</Text>
          )}

          {/* Search bar */}
          <View style={m.searchBar}>
            <Search size={15} color="#9CA3AF" />
            <TextInput
              style={m.searchInput}
              value={query}
              onChangeText={setQuery}
              placeholder="Search skills..."
              placeholderTextColor="#9CA3AF"
              autoCapitalize="none"
            />
            {query.length > 0 && (
              <TouchableOpacity onPress={() => setQuery("")}>
                <X size={14} color="#9CA3AF" />
              </TouchableOpacity>
            )}
          </View>

          {/* List */}
          <FlatList
            data={filtered}
            keyExtractor={(item, idx) =>
              item.type === "header" ? `h-${item.category}` : `s-${item.skill}-${idx}`
            }
            renderItem={({ item }) => {
              if (item.type === "header") {
                return <Text style={m.categoryHeader}>{item.category.toUpperCase()}</Text>;
              }
              // Compare using human-readable label (underscores → spaces)
              const label = item.skill.replace(/_/g, " ");
              const isSelected = selected.includes(label);
              return (
                <TouchableOpacity
                  style={[m.skillRow, isSelected && m.skillRowSelected]}
                  onPress={() => onToggle(item.skill)}
                  activeOpacity={0.7}
                >
                  <Text style={[m.skillText, isSelected && m.skillTextSelected]}>
                    {item.skill.replace(/_/g, " ")}
                  </Text>
                  {isSelected && <Check size={16} color="#B20000" />}
                </TouchableOpacity>
              );
            }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          />

          {/* Done button */}
          <TouchableOpacity style={m.doneBtn} onPress={onClose}>
            <Text style={m.doneBtnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
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

// ── Skills selector styles ─────────────────────────────────────────────────────
const sk = StyleSheet.create({
  wrapper: { marginBottom: scale(16) },
  label: {
    fontSize: scale(11),
    fontWeight: "700",
    color: "#9CA3AF",
    letterSpacing: 0.8,
    marginBottom: scale(8),
  },
  pillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: scale(6),
    alignItems: "center",
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#B20000",
    borderRadius: scale(20),
    paddingHorizontal: scale(10),
    paddingVertical: scale(5),
    gap: scale(4),
  },
  pillText: {
    color: "white",
    fontSize: scale(11),
    fontWeight: "600",
    textTransform: "capitalize",
  },
  pillRemove: { padding: 2 },
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(4),
    backgroundColor: "#FEE2E2",
    borderRadius: scale(20),
    paddingHorizontal: scale(12),
    paddingVertical: scale(6),
    borderWidth: 1,
    borderColor: "#FECACA",
  },
  addBtnText: {
    color: "#B20000",
    fontSize: scale(12),
    fontWeight: "600",
  },
  emptyHint: {
    fontSize: scale(11),
    color: "#9CA3AF",
    marginTop: scale(6),
    fontStyle: "italic",
  },
});

// ── Modal styles ───────────────────────────────────────────────────────────────
const m = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "white",
    borderTopLeftRadius: scale(24),
    borderTopRightRadius: scale(24),
    paddingTop: scale(20),
    paddingHorizontal: scale(16),
    paddingBottom: scale(32),
    maxHeight: "85%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scale(4),
  },
  title: {
    fontSize: scale(18),
    fontWeight: "700",
    color: "#111827",
  },
  closeBtn: { padding: scale(4) },
  selectedCount: {
    fontSize: scale(12),
    color: "#B20000",
    fontWeight: "600",
    marginBottom: scale(10),
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: scale(12),
    paddingHorizontal: scale(12),
    paddingVertical: scale(10),
    marginBottom: scale(12),
    gap: scale(8),
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  searchInput: {
    flex: 1,
    fontSize: scale(14),
    color: "#111827",
    padding: 0,
  },
  categoryHeader: {
    fontSize: scale(10),
    fontWeight: "800",
    color: "#9CA3AF",
    letterSpacing: 1,
    paddingVertical: scale(8),
    paddingHorizontal: scale(4),
    backgroundColor: "white",
  },
  skillRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: scale(12),
    paddingHorizontal: scale(8),
    borderRadius: scale(10),
    marginVertical: scale(1),
  },
  skillRowSelected: {
    backgroundColor: "#FEE2E2",
  },
  skillText: {
    fontSize: scale(14),
    color: "#374151",
    textTransform: "capitalize",
    flex: 1,
  },
  skillTextSelected: {
    color: "#B20000",
    fontWeight: "600",
  },
  doneBtn: {
    backgroundColor: "#B20000",
    borderRadius: scale(14),
    height: scale(50),
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(12),
    shadowColor: "#B20000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
  },
  doneBtnText: {
    color: "white",
    fontSize: scale(15),
    fontWeight: "700",
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
