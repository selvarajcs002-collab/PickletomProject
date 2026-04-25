import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import {
  Pencil,
  Link as LinkIcon,
  MapPin,
  Users,
  UserPlus,
  LayoutGrid,
  Zap,
  Target,
  Award,
  GraduationCap,
  BarChart3,
} from "lucide-react-native";
import * as Colors from "../constants/Colors";
import BottomNav from "../components/BottomNav";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { profileService } from "../services/profileService";
import { useRouter, useFocusEffect } from "expo-router";

const { width } = Dimensions.get("window");
const scale = (size: number) => (width / 375) * size;

// Fallback placeholder images
const FALLBACK_COVER = "https://images.unsplash.com/photo-1594470117722-de43583d3f10";
const FALLBACK_AVATAR = "https://randomuser.me/api/portraits/men/32.jpg";

// Helper: split skills string "Fast Volleys, Deep Serves" → array
const parseSkills = (skills?: string | null): string[] => {
  if (!skills) return [];
  return skills.split(",").map((s) => s.trim()).filter(Boolean);
};

// Alternate skill pill colors
const SKILL_COLORS = ["#000", "#B20000"];

function ProfileInfo() {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Re-fetch every time this screen gains focus (e.g. returning from edit-profile)
  useFocusEffect(
    useCallback(() => {
      let active = true;
      const fetchProfile = async () => {
        setLoading(true);
        setError(null);
        try {
          const storedId = await AsyncStorage.getItem("userId");
          if (!storedId) {
            setError("User not logged in. Please log in again.");
            return;
          }
          const userId = parseInt(storedId, 10);
          const data = await profileService.getProfile(userId);
          if (active) setProfile(data);
        } catch (err: any) {
          console.error("Profile fetch error:", err);
          if (active) setError(err?.message || "Failed to load profile.");
        } finally {
          if (active) setLoading(false);
        }
      };
      fetchProfile();
      // Cleanup: prevent state update if screen is unfocused before fetch completes
      return () => { active = false; };
    }, [])
  );

  if (loading) {
    return (
      <SafeAreaView style={[styles.safeArea, { justifyContent: "center", alignItems: "center" }]}>
        <StatusBar barStyle="light-content" />
        <ActivityIndicator size="large" color="#D92626" />
        <Text style={{ color: "white", marginTop: 12, fontSize: scale(14) }}>Loading profile...</Text>
      </SafeAreaView>
    );
  }

  if (error || !profile) {
    return (
      <SafeAreaView style={[styles.safeArea, { justifyContent: "center", alignItems: "center" }]}>
        <StatusBar barStyle="light-content" />
        <Text style={{ color: "#FF4A2A", fontSize: scale(14), textAlign: "center", paddingHorizontal: 24 }}>
          {error || "Profile not found."}
        </Text>
      </SafeAreaView>
    );
  }

  // Map API response fields to display values
  const fullName = profile.userName || profile.FullName || "—";
  const gender = profile.Gender || "—";
  const yearBorn = profile.Age || profile.YearBorn || "—";
  const playingLevel = profile.Playing_level || profile.PlayingLevel || "—";
  const location = profile.Location || "—";
  const playingSince = profile.Playing_since || profile.PlayingSinceMonth || "—";
  const playingSinceYear = profile.PlayingSinceYear || "";
  const powerHand = profile.Power_hand || profile.PowerHand || "—";
  const backHand = profile.Back_hand || profile.BackHand || "—";
  const about = profile.About || "No bio available.";
  const skills = parseSkills(profile.Skills);
  const equipment = profile.Equipment || "—";
  const coachName = profile.Coach_name || profile.CoachName || "—";
  const trainingLocation = profile.Training_location || profile.TrainingLocation || "—";
  const clubName = profile.Club || profile.ClubName || "—";
  const tournamentName = profile.Tournament_name || profile.TournamentName || null;
  const tournamentCategory = profile.Category || "—";
  const tournamentYear = profile.Year ? profile.Year.toString() : "—";
  const tournamentResult = profile.Result || "—";
  const duprLink = profile.DUPR_profile_link || profile.DuprLink || null;

  // ── Coach fields (future-proof: will auto-populate when API returns them) ──
  const coachingSince = profile.CoachingSince || profile.Coaching_since || null;
  const coachingOpenTo = profile.OpenTo || profile.Open_to || null;
  const coachingTrainingLevel = profile.CoachingTrainingLevel || profile.Coaching_training_level || null;
  const coachingLocation = profile.CoachingLocation || profile.Coaching_location || trainingLocation !== "—" ? trainingLocation : null;
  const coachingSpecialisation = parseSkills(profile.CoachingSpecialisation || profile.Coaching_specialisation || profile.Skills || "");
  const certification = profile.Certification || null;

  // A coach record is considered present if at least one coach-specific field exists
  const hasCoachRecord = !!(coachingSince || coachingOpenTo || coachingTrainingLevel || coachingLocation || certification || coachingSpecialisation.length > 0);

  const profileImageUrl = profile.ProfileImageUrl || null;
  const initial = fullName && fullName !== "—" ? fullName.trim()[0].toUpperCase() : "?";
  const coverImageUrl = profile.BackgroundImageUrl || profile.CoverImageUrl || FALLBACK_COVER;

  const playingSinceDisplay =
    playingSince !== "—"
      ? `${playingSince}${playingSinceYear ? " " + playingSinceYear : ""}`
      : "—";

  const subText = `${playingLevel} · ${gender} · ${yearBorn}`;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: Colors.background || "transparent" }]}>
      <StatusBar barStyle="light-content" />

      {/* TOP HEADER */}
      <View style={styles.topHeader}>
        <Text style={styles.headerTitle}>PickleOn</Text>
        <TouchableOpacity onPress={() => router.push("/edit-profile")}>
          <Pencil color="white" size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* MAIN PROFILE CARD */}
        <View style={styles.mainCard}>
          {/* COVER IMAGE */}
          <Image source={{ uri: coverImageUrl }} style={styles.coverImage} />

          <View style={styles.cardContent}>
            {/* PROFILE IMAGE OVERLAP */}
            <View style={styles.profileImageWrapper}>
              <View style={styles.profilePicContainer}>
                {profileImageUrl ? (
                  <Image source={{ uri: profileImageUrl }} style={styles.profilePic} />
                ) : (
                  <View style={styles.initialsAvatar}>
                    <Text style={styles.initialsText}>{initial}</Text>
                  </View>
                )}
                <TouchableOpacity style={styles.editProfileTool}>
                  <Pencil color="white" size={10} />
                </TouchableOpacity>
              </View>

              <View style={styles.nameSection}>
                <View style={styles.rowAlign}>
                  <Text style={styles.name}>{fullName}</Text>
                  {duprLink && <LinkIcon color="#888" size={14} style={{ marginLeft: 6 }} />}
                </View>
                <Text style={styles.subText}>{subText}</Text>
                <View style={styles.locationRow}>
                  <Text style={{ fontSize: 14 }}>📍 </Text>
                  <Text style={styles.locationText}>{location}</Text>
                </View>
              </View>
            </View>

            {/* STATS ROW */}
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <View style={styles.statIconBox}>
                  <Text style={{ fontSize: 18 }}>🏓</Text>
                </View>
                <View>
                  <Text style={styles.statValueText}>{playingSinceDisplay}</Text>
                  <Text style={styles.statLabelText}>Playing Since</Text>
                </View>
              </View>

              <View style={styles.statItem}>
                <View style={styles.statIconBox}>
                  <Text style={{ fontSize: 18 }}>💪</Text>
                </View>
                <View>
                  <Text style={styles.statValueText}>{powerHand}</Text>
                  <Text style={styles.statLabelText}>Power Hand</Text>
                </View>
              </View>

              <View style={styles.statItem}>
                <View style={styles.statIconBox}>
                  <Text style={{ fontSize: 18 }}>🙌</Text>
                </View>
                <View>
                  <Text style={styles.statValueText}>{backHand}</Text>
                  <Text style={styles.statLabelText}>Backhand</Text>
                </View>
              </View>
            </View>

            {/* SOCIAL PILLS */}
            <View style={styles.pillsRow}>
              <View style={styles.socialPill}>
                <UserPlus color="#555" size={14} />
                <Text style={styles.pillText}>500+ Networks</Text>
              </View>
              <View style={styles.socialPill}>
                <Users color="#555" size={14} />
                <Text style={styles.pillText}>500+ Followers</Text>
              </View>
            </View>

            {/* PLAYER RATING */}
            <View style={styles.ratingSection}>
              <Text style={styles.ratingHeading}>PLAYER RATING</Text>
              <Text style={styles.duprLogo}>DUPR®</Text>
            </View>

            {/* CARD FOOTER */}
            {clubName !== "—" && (
              <View style={styles.cardFooter}>
                <Text style={styles.footerBaseText}>
                  Often seen playing at <Text style={styles.footerBoldText}>{clubName}</Text>
                </Text>
                <MapPin color="#D92626" size={14} style={{ marginLeft: 4 }} />
              </View>
            )}
          </View>
        </View>

        {/* ABOUT SECTION */}
        <View style={styles.mainCard}>
          <View style={styles.cardContent}>
            <Text style={styles.sectionTitleCenter}>ABOUT</Text>
            {about && about !== "No bio available." ? (
              <Text style={styles.aboutText}>{about}</Text>
            ) : (
              <TouchableOpacity style={styles.addAboutCard} activeOpacity={0.75}>
                <Text style={styles.addAboutPlus}>+</Text>
                <Text style={styles.addAboutTitle}>Add About You</Text>
                <Text style={styles.addAboutSubtitle}>(Enhance Your Profile)</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* PLAYING STYLE SECTION */}
        <View style={styles.mainCard}>
          <View style={styles.cardContent}>
            <Text style={styles.sectionTitleCenter}>PLAYING STYLE</Text>
            <View style={styles.bannerContainer}>
              <Image
                source={{ uri: FALLBACK_COVER }}
                style={styles.bannerImage}
              />
              <View style={styles.imageBadge}>
                <Text style={styles.badgeText}>1/1</Text>
              </View>
            </View>
          </View>
        </View>

        {/* PLAYER RECORD SECTION */}
        <View style={styles.mainCard}>
          <View style={styles.cardContent}>
            <Text style={styles.sectionTitleCenter}>PLAYER RECORD</Text>

            {/* Notable Tournament */}
            <View style={styles.recordSection}>
              <View style={styles.sectionHeaderRow}>
                <LayoutGrid color="#888" size={16} />
                <Text style={styles.sectionHeaderText}>Notable Tournaments</Text>
              </View>
              <View style={styles.tournamentList}>
                {tournamentName ? (
                  <View style={styles.tournamentItem}>
                    <Text style={styles.tournamentTitle}>{tournamentName}</Text>
                    <Text style={styles.tournamentSub}>
                      {tournamentCategory} · {tournamentYear} · {tournamentResult} · {playingLevel}
                    </Text>
                  </View>
                ) : (
                  <Text style={styles.emptyText}>No tournament data yet.</Text>
                )}
              </View>
            </View>

            {/* Skills */}
            <View style={styles.recordSection}>
              <View style={styles.sectionHeaderRow}>
                <Zap color="#FFD700" size={16} fill="#FFD700" />
                <Text style={styles.sectionHeaderText}>Skills</Text>
              </View>
              {skills.length > 0 ? (
                <View style={styles.skillsWrapper}>
                  {skills.map((skill, idx) => (
                    <View
                      key={idx}
                      style={[styles.skillPill, { backgroundColor: SKILL_COLORS[idx % SKILL_COLORS.length] }]}
                    >
                      <Text style={styles.skillPillText}>{skill}</Text>
                    </View>
                  ))}
                </View>
              ) : (
                <Text style={styles.emptyText}>No skills listed.</Text>
              )}
            </View>

            {/* Training */}
            <View style={styles.recordSection}>
              <View style={styles.sectionHeaderRow}>
                <Target color="#D92626" size={16} />
                <Text style={styles.sectionHeaderText}>Training</Text>
              </View>
              <View style={styles.trainingBox}>
                <Text style={styles.coachName}>{coachName}</Text>
                <View style={styles.locationRowSmall}>
                  <MapPin color="#D92626" size={14} />
                  <Text style={styles.locationTextSmall}>{trainingLocation}</Text>
                </View>
              </View>
            </View>

            {/* Equipment */}
            <View style={styles.recordSection}>
              <View style={styles.sectionHeaderRow}>
                <Award color="#888" size={16} />
                <Text style={styles.sectionHeaderText}>Equipment</Text>
              </View>
              <View style={styles.equipmentBox}>
                <Text style={styles.equipmentText}>{equipment}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* COACH RECORD SECTION */}
        <View style={styles.mainCard}>
          <View style={styles.cardContent}>
            <Text style={styles.sectionTitleCenter}>COACH RECORD</Text>

            {hasCoachRecord ? (
              <>
                {/* Coaching Since + Open To row */}
                {(coachingSince || coachingOpenTo) && (
                  <View style={styles.selectionRow}>
                    {coachingSince && (
                      <View style={styles.selectionItem}>
                        <View style={styles.sectionHeaderRow}>
                          <GraduationCap color="#2E8B57" size={16} />
                          <Text style={styles.sectionHeaderTextSmall}>Coaching Since</Text>
                        </View>
                        <View style={styles.selectionTextRow}>
                          <Text style={styles.selectionText}>{coachingSince}</Text>
                        </View>
                      </View>
                    )}
                    {coachingOpenTo && (
                      <View style={styles.selectionItem}>
                        <View style={styles.sectionHeaderRow}>
                          <Users color="#FF8C00" size={16} />
                          <Text style={styles.sectionHeaderTextSmall}>Open to</Text>
                        </View>
                        <View style={styles.selectionTextRow}>
                          <Text style={styles.selectionText}>{coachingOpenTo}</Text>
                        </View>
                      </View>
                    )}
                  </View>
                )}

                {/* Training Level */}
                {coachingTrainingLevel && (
                  <View style={styles.recordSection}>
                    <View style={styles.sectionHeaderRow}>
                      <BarChart3 color="#4169E1" size={16} />
                      <Text style={styles.sectionHeaderText}>Training Level</Text>
                    </View>
                    <View style={styles.selectionTextRow}>
                      <Text style={styles.selectionText}>{coachingTrainingLevel}</Text>
                    </View>
                  </View>
                )}

                {/* Often Seen Coaching At */}
                {coachingLocation && (
                  <View style={styles.recordSection}>
                    <View style={styles.sectionHeaderRow}>
                      <MapPin color="#D92626" size={16} />
                      <Text style={styles.sectionHeaderText}>Often Seen Coaching At</Text>
                    </View>
                    <View style={styles.selectionTextRow}>
                      <Text style={styles.selectionText}>{coachingLocation}</Text>
                    </View>
                  </View>
                )}

                {/* Coaching Specialisation */}
                {coachingSpecialisation.length > 0 && (
                  <View style={styles.recordSection}>
                    <View style={styles.sectionHeaderRow}>
                      <Zap color="#FFD700" size={16} fill="#FFD700" />
                      <Text style={styles.sectionHeaderText}>Coaching Specialisation</Text>
                    </View>
                    <View style={styles.skillsWrapper}>
                      {coachingSpecialisation.map((spec, idx) => (
                        <View key={idx} style={[styles.skillPill, { backgroundColor: SKILL_COLORS[idx % SKILL_COLORS.length] }]}>
                          <Text style={styles.skillPillText}>{spec}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                )}

                {/* Certification */}
                {certification && (
                  <View style={styles.recordSection}>
                    <View style={styles.sectionHeaderRow}>
                      <Award color="#FFD700" size={16} />
                      <Text style={styles.sectionHeaderText}>Certification</Text>
                    </View>
                    <View style={styles.selectionTextRow}>
                      <Text style={styles.selectionText}>{certification}</Text>
                    </View>
                  </View>
                )}
              </>
            ) : (
              // Empty state — matches uploaded mockup
              <TouchableOpacity style={styles.addCoachCard} activeOpacity={0.75}>
                <Text style={styles.addCoachPlus}>+</Text>
                <Text style={styles.addCoachTitle}>Add Coach Record</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

      </ScrollView>

      {/* NAVIGATION BAR */}
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(20),
    paddingTop: scale(60),
    paddingBottom: scale(10),
  },
  headerTitle: {
    color: "white",
    fontSize: scale(24),
    fontWeight: "bold",
  },
  scroll: {
    paddingBottom: scale(100),
  },
  mainCard: {
    backgroundColor: "white",
    marginHorizontal: scale(12),
    marginTop: scale(15),
    borderRadius: scale(24),
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  coverImage: {
    width: "100%",
    height: scale(180),
  },
  cardContent: {
    padding: scale(15),
  },
  profileImageWrapper: {
    flexDirection: "row",
    marginTop: scale(-50),
    alignItems: "flex-end",
  },
  profilePicContainer: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(18),
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "#EEE",
    position: "relative",
  },
  profilePic: {
    width: "100%",
    height: "100%",
    borderRadius: scale(14),
  },
  editProfileTool: {
    position: "absolute",
    bottom: -4,
    right: -4,
    backgroundColor: "#F44725",
    width: scale(20),
    height: scale(20),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  nameSection: {
    marginLeft: scale(12),
    flex: 1,
    paddingBottom: scale(4),
  },
  name: {
    fontSize: scale(20),
    fontWeight: "bold",
    color: "#000",
  },
  rowAlign: {
    flexDirection: "row",
    alignItems: "center",
  },
  subText: {
    fontSize: scale(12),
    color: "#666",
    marginVertical: scale(2),
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: scale(12),
    color: "#666",
    fontWeight: "500",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: scale(25),
    backgroundColor: "#F8F8F8",
    padding: scale(8),
    borderRadius: scale(12),
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  statIconBox: {
    marginRight: scale(6),
  },
  statValueText: {
    fontSize: scale(10),
    fontWeight: "bold",
    color: "#333",
  },
  statLabelText: {
    fontSize: scale(8),
    color: "#888",
  },
  pillsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: scale(20),
    gap: scale(10),
  },
  socialPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    paddingHorizontal: scale(12),
    paddingVertical: scale(6),
    borderRadius: scale(20),
  },
  pillText: {
    fontSize: scale(10),
    color: "#555",
    fontWeight: "600",
    marginLeft: scale(4),
  },
  ratingSection: {
    alignItems: "center",
    marginTop: scale(25),
  },
  ratingHeading: {
    fontSize: scale(12),
    fontWeight: "bold",
    color: "#888",
    letterSpacing: 1,
  },
  duprLogo: {
    fontSize: scale(42),
    fontWeight: "900",
    color: "#0048AB",
    marginTop: scale(5),
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(20),
    paddingTop: scale(15),
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  footerBaseText: {
    fontSize: scale(11),
    color: "#666",
  },
  footerBoldText: {
    fontWeight: "bold",
    color: "#333",
  },
  sectionTitleCenter: {
    textAlign: "center",
    fontSize: scale(14),
    fontWeight: "bold",
    color: "#888",
    marginBottom: scale(15),
    letterSpacing: 1,
  },
  aboutText: {
    fontSize: scale(12),
    color: "#333",
    lineHeight: scale(18),
    textAlign: "justify",
  },
  bannerContainer: {
    width: "100%",
    height: scale(200),
    borderRadius: scale(12),
    overflow: "hidden",
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  imageBadge: {
    position: "absolute",
    top: scale(10),
    right: scale(10),
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: scale(8),
    paddingVertical: scale(4),
    borderRadius: scale(10),
  },
  badgeText: {
    color: "white",
    fontSize: scale(10),
    fontWeight: "600",
  },
  recordSection: {
    marginTop: scale(20),
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale(10),
  },
  sectionHeaderText: {
    fontSize: scale(12),
    color: "#555",
    fontWeight: "600",
    marginLeft: scale(8),
  },
  tournamentList: {
    gap: scale(8),
  },
  tournamentItem: {
    backgroundColor: "#F5F5F5",
    padding: scale(12),
    borderRadius: scale(12),
  },
  tournamentTitle: {
    fontSize: scale(12),
    fontWeight: "bold",
    color: "#000",
  },
  tournamentSub: {
    fontSize: scale(10),
    color: "#666",
    marginTop: scale(2),
  },
  skillsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: scale(6),
  },
  skillPill: {
    paddingHorizontal: scale(12),
    paddingVertical: scale(6),
    borderRadius: scale(4),
  },
  skillPillText: {
    color: "white",
    fontSize: scale(10),
    fontWeight: "bold",
  },
  trainingBox: {
    backgroundColor: "#F5F5F5",
    padding: scale(12),
    borderRadius: scale(12),
  },
  coachName: {
    fontSize: scale(12),
    fontWeight: "bold",
    color: "#000",
  },
  locationRowSmall: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(4),
  },
  locationTextSmall: {
    fontSize: scale(10),
    color: "#666",
    marginLeft: scale(4),
  },
  equipmentBox: {
    backgroundColor: "#F5F5F5",
    padding: scale(12),
    borderRadius: scale(12),
  },
  equipmentText: {
    fontSize: scale(12),
    color: "#333",
  },
  emptyText: {
    fontSize: scale(12),
    color: "#9CA3AF",
    fontStyle: "italic",
  },
  // ── Initials Avatar (Teams-style) ─────────────────────────────────────────
  initialsAvatar: {
    width: "100%",
    height: "100%",
    borderRadius: scale(14),
    backgroundColor: "#B20000",
    alignItems: "center",
    justifyContent: "center",
  },
  initialsText: {
    color: "white",
    fontSize: scale(36),
    fontWeight: "800",
    lineHeight: scale(44),
  },
  // ── Add About You empty-state ──────────────────────────────────────────────
  addAboutCard: {
    borderWidth: 1.5,
    borderColor: "#6B2222",
    borderStyle: "dashed",
    borderRadius: scale(14),
    backgroundColor: "#2A1010",
    height: scale(120),
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(4),
  },
  addAboutPlus: {
    color: "white",
    fontSize: scale(26),
    fontWeight: "300",
    lineHeight: scale(32),
    marginBottom: scale(4),
  },
  addAboutTitle: {
    color: "white",
    fontSize: scale(14),
    fontWeight: "700",
  },
  addAboutSubtitle: {
    color: "#9CA3AF",
    fontSize: scale(11),
    marginTop: scale(2),
  },
  // ── Coach Record layout styles ─────────────────────────────────────────────
  selectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: scale(10),
    marginTop: scale(12),
  },
  selectionItem: {
    flex: 1,
  },
  sectionHeaderTextSmall: {
    fontSize: scale(11),
    color: "#555",
    fontWeight: "600",
    marginLeft: scale(6),
  },
  selectionTextRow: {
    backgroundColor: "#F5F5F5",
    padding: scale(10),
    borderRadius: scale(8),
    marginTop: scale(4),
  },
  selectionText: {
    fontSize: scale(11),
    color: "#333",
    fontWeight: "500",
  },
  // ── Add Coach Record empty-state ───────────────────────────────────────────
  addCoachCard: {
    borderRadius: scale(14),
    overflow: "hidden",
    height: scale(110),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7A4A4A",
    // Simulates the gradient look from mockup via layered background
    marginTop: scale(4),
  },
  addCoachPlus: {
    color: "white",
    fontSize: scale(26),
    fontWeight: "300",
    lineHeight: scale(32),
    marginBottom: scale(6),
  },
  addCoachTitle: {
    color: "white",
    fontSize: scale(14),
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});

export default ProfileInfo;