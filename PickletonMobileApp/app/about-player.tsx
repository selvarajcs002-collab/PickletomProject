import React from "react";
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
} from "react-native";
import {
  Pencil,
  Link as LinkIcon,
  MapPin,
  Users,
  UserPlus,
  ChevronRight,
  LayoutGrid,
  Zap,
  Target,
  Award,
  GraduationCap,
  Users as LucideUsers,
  BarChart3
} from "lucide-react-native";
import * as Colors from "../constants/Colors";
import BottomNav from "../components/BottomNav";

const { width } = Dimensions.get("window");

// 🔥 Responsive scale
const scale = (size: number) => (width / 375) * size;

function ProfileInfo() {
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: Colors.background || "transparent" }]}>
      <StatusBar barStyle="light-content" />

      {/* TOP HEADER */}
      <View style={styles.topHeader}>
        <Text style={styles.headerTitle}>PickleOn</Text>
        <TouchableOpacity>
          <Pencil color="white" size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* MAIN CONTENT CARD */}
        <View style={styles.mainCard}>
          {/* COVER IMAGE */}
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1594470117722-de43583d3f10", // Pickleball action shot
            }}
            style={styles.coverImage}
          />

          <View style={styles.cardContent}>
            {/* PROFILE IMAGE OVERLAP */}
            <View style={styles.profileImageWrapper}>
              <View style={styles.profilePicContainer}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/32.jpg",
                  }}
                  style={styles.profilePic}
                />
                <TouchableOpacity style={styles.editProfileTool}>
                  <Pencil color="white" size={10} />
                </TouchableOpacity>
              </View>

              <View style={styles.nameSection}>
                <View style={styles.rowAlign}>
                  <Text style={styles.name}>Ben Johns</Text>
                  <LinkIcon color="#888" size={14} style={{ marginLeft: 6 }} />
                </View>
                <Text style={styles.subText}>Professional . M . 24</Text>
                <View style={styles.locationRow}>
                  <Text style={{ fontSize: 14 }}>🇺🇸 </Text>
                  <Text style={styles.locationText}>Boca Raton, Florida, USA</Text>
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
                  <Text style={styles.statValueText}>April 2016</Text>
                  <Text style={styles.statLabelText}>Playing Since</Text>
                </View>
              </View>

              <View style={styles.statItem}>
                <View style={styles.statIconBox}>
                  <Text style={{ fontSize: 18 }}>💪</Text>
                </View>
                <View>
                  <Text style={styles.statValueText}>Right</Text>
                  <Text style={styles.statLabelText}>Power Hand</Text>
                </View>
              </View>

              <View style={styles.statItem}>
                <View style={styles.statIconBox}>
                  <Text style={{ fontSize: 18 }}>🙌</Text>
                </View>
                <View>
                  <Text style={styles.statValueText}>Double</Text>
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
            <View style={styles.cardFooter}>
              <Text style={styles.footerBaseText}>
                Often seen playing at <Text style={styles.footerBoldText}>FloridaClub</Text>
              </Text>
              <MapPin color="#D92626" size={14} style={{ marginLeft: 4 }} />
            </View>
          </View>
        </View>

        {/* ABOUT SECTION - Career Bio Card */}
        <View style={styles.mainCard}>
          <View style={styles.cardContent}>
            <Text style={styles.sectionTitleCenter}>ABOUT</Text>
            <Text style={styles.aboutText}>
              I began my professional pickleball journey in 2016, and since then, the sport has become a defining part of my life. Over the years, I've been fortunate to compete across all divisions in singles, men's doubles, and mixed doubles to hold the world number-one ranking in each. I've earned more than 100 Professional Pickleball Association (PPA) titles and multiple “Triple Crowns,” winning gold in singles, doubles, and mixed doubles at major tournaments such as the Tournament of Champions and the U.S. Open.
            </Text>
          </View>
        </View>

        {/* PLAYING STYLE SECTION - Visual Gallery Card */}
        <View style={styles.mainCard}>
          <View style={styles.cardContent}>
            <Text style={styles.sectionTitleCenter}>PLAYING STYLE</Text>
            <View style={styles.bannerContainer}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1517649763962-0c623066013b", // Alternative action shot
                }}
                style={styles.bannerImage}
              />
              {/* Image position indicator badge */}
              <View style={styles.imageBadge}>
                <Text style={styles.badgeText}>1/4</Text>
              </View>
            </View>
          </View>
        </View>

        {/* PLAYER RECORD SECTION - Detailed Achievement Card */}
        <View style={styles.mainCard}>
          <View style={styles.cardContent}>
            <Text style={styles.sectionTitleCenter}>PLAYER RECORD</Text>

            {/* Notable Tournaments List */}
            <View style={styles.recordSection}>
              <View style={styles.sectionHeaderRow}>
                <LayoutGrid color="#888" size={16} />
                <Text style={styles.sectionHeaderText}>Notable Tournaments</Text>
              </View>

              <View style={styles.tournamentList}>
                {[
                  { title: "Indian Pickleball Association, Chennai Open", sub: "Singles . 2025 . Winner . Advance" },
                  { title: "World Pickleball Rating, Malaysia Open", sub: "Mixed Doubles . 2025 . Runner . Advance" },
                  { title: "PPA, Vietnam Open", sub: "Mixed Doubles . 2024 . Semi-finalist . Professional" },
                  { title: "Winter Edition, Miami Open", sub: "Doubles . 2026 . Semi-finalist . Open" },
                  { title: "Willies Cup", sub: "Singles . 2026 . Qualifiers . Open" },
                ].map((item, idx) => (
                  <View key={idx} style={styles.tournamentItem}>
                    <Text style={styles.tournamentTitle}>{item.title}</Text>
                    <Text style={styles.tournamentSub}>{item.sub}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Skills Sub-section */}
            <View style={styles.recordSection}>
              <View style={styles.sectionHeaderRow}>
                <Zap color="#FFD700" size={16} fill="#FFD700" />
                <Text style={styles.sectionHeaderText}>Skills</Text>
              </View>
              <View style={styles.skillsWrapper}>
                {[
                  { name: "Fast Volleys", bg: "#000" },
                  { name: "Deep Serves", bg: "#B20000" },
                  { name: "Third Shot Drop", bg: "#000" },
                  { name: "Overhead Smash", bg: "#B20000" },
                  { name: "Speed Drills", bg: "#B20000" },
                  { name: "Backhand Slice", bg: "#000" },
                ].map((skill, idx) => (
                  <View key={idx} style={[styles.skillPill, { backgroundColor: skill.bg }]}>
                    <Text style={styles.skillPillText}>{skill.name}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Training Sub-section */}
            <View style={styles.recordSection}>
              <View style={styles.sectionHeaderRow}>
                <Target color="#D92626" size={16} />
                <Text style={styles.sectionHeaderText}>Training</Text>
              </View>
              <View style={styles.trainingBox}>
                <Text style={styles.coachName}>Vishnu Raja</Text>
                <View style={styles.locationRowSmall}>
                  <MapPin color="#D92626" size={14} />
                  <Text style={styles.locationTextSmall}>Pickleball Clubhouse, Coimbatore, TN, India</Text>
                </View>
              </View>
            </View>

            {/* Equipment Sub-section */}
            <View style={styles.recordSection}>
              <View style={styles.sectionHeaderRow}>
                <Award color="#888" size={16} />
                <Text style={styles.sectionHeaderText}>Equipment</Text>
              </View>
              <View style={styles.equipmentBox}>
                <Text style={styles.equipmentText}>Joola Persues, 14mm</Text>
              </View>
            </View>

          </View>
        </View>

        {/* COACH RECORD SECTION - Professional Coaching Details */}
        <View style={styles.mainCard}>
          <View style={styles.cardContent}>
            <Text style={styles.sectionTitleCenter}>COACH RECORD</Text>

            {/* Tenure and Type Row */}
            <View style={styles.selectionRow}>
              <View style={styles.selectionItem}>
                <View style={styles.sectionHeaderRow}>
                  <GraduationCap color="#2E8B57" size={16} />
                  <Text style={styles.sectionHeaderTextSmall}>Coaching Since</Text>
                </View>
                <View style={styles.selectionTextRow}>
                  <Text style={styles.selectionText}>2025</Text>
                </View>
              </View>

              <View style={styles.selectionItem}>
                <View style={styles.sectionHeaderRow}>
                  <Users color="#FF8C00" size={16} />
                  <Text style={styles.sectionHeaderTextSmall}>Open to</Text>
                </View>
                <View style={styles.selectionTextRow}>
                  <Text style={styles.selectionText}>Individual & Group</Text>
                </View>
              </View>
            </View>

            {/* Training Level Sub-section */}
            <View style={styles.recordSection}>
              <View style={styles.sectionHeaderRow}>
                <BarChart3 color="#4169E1" size={16} />
                <Text style={styles.sectionHeaderText}>Training Level</Text>
              </View>
              <View style={styles.selectionTextRow}>
                <Text style={styles.selectionText}>Beginner, Intermediate, Advance, Professional</Text>
              </View>
            </View>

            {/* Coaching Location Sub-section */}
            <View style={styles.recordSection}>
              <View style={styles.sectionHeaderRow}>
                <MapPin color="#D92626" size={16} />
                <Text style={styles.sectionHeaderText}>Often Seen Coaching At</Text>
              </View>
              <View style={styles.selectionTextRow}>
                <Text style={styles.selectionText}>RallyHub, Tirupur, TN, India</Text>
              </View>
            </View>

            {/* Coaching Specialisation Sub-section */}
            <View style={styles.recordSection}>
              <View style={styles.sectionHeaderRow}>
                <Zap color="#FFD700" size={16} fill="#FFD700" />
                <Text style={styles.sectionHeaderText}>Coaching Specialisation</Text>
              </View>
              <View style={styles.skillsWrapper}>
                {[
                  { name: "Fast Volleys", bg: "#B20000" },
                  { name: " ", bg: "#300" }, // Visual gap tag from mockup
                  { name: "Third Shot Drop", bg: "#000" },
                  { name: "Overhead Smash", bg: "#B20000" },
                  { name: "Speed Drills", bg: "#B20000" },
                  { name: "Backhand Slice", bg: "#000" },
                ].map((skill, idx) => (
                  <View key={idx} style={[styles.skillPill, { backgroundColor: skill.bg }]}>
                    <Text style={styles.skillPillText}>{skill.name}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Certification Sub-section */}
            <View style={styles.recordSection}>
              <View style={styles.sectionHeaderRow}>
                <Award color="#FFD700" size={16} />
                <Text style={styles.sectionHeaderText}>Certification</Text>
              </View>
              <View style={styles.selectionTextRow}>
                <Text style={styles.selectionText}>RallyHub, Tirupur, TN, India</Text>
              </View>
            </View>

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
    marginTop: scale(15), // Increased gap between cards
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
    color: "#0048AB", // DUPR Blue
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
  selectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: scale(10),
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
});

export default ProfileInfo;