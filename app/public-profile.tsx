import React, { useState, useEffect, useCallback } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView, Image,
    ActivityIndicator, StyleSheet, Dimensions, Alert, Linking, DeviceEventEmitter
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import {
    ChevronLeft, MapPin, Users, UserCheck, UserPlus,
    Calendar, Zap, Star, Trophy, Heart, Award,
    GraduationCap, Target, BarChart3, Link as LinkIcon,
} from 'lucide-react-native';
import { Colors } from '../constants/Colors';
import { userSearchService, PublicProfile } from '../services/userSearchService';
import { profileService } from '../services/profileService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserListModal } from '../components/UserListModal';
import { getAbsoluteUrl } from '../utils/imageUtils';

const { width, height } = Dimensions.get('window');
const s  = (n: number) => (width  / 390) * n;
const vs = (n: number) => (height / 844) * n;

// Default cover image from assets
const DEFAULT_COVER = require("../assets/Default-Cover-Image.jpg");

// Helper: parse skills string "Fast Volleys, Deep Serves" → array
const parseSkills = (raw: string): string[] =>
    raw ? raw.split(",").map(s => s.trim()).filter(Boolean) : [];

export default function PublicProfileScreen() {
    const router = useRouter();
    const { userId } = useLocalSearchParams<{ userId: string }>();

    const [profile, setProfile]       = useState<any>(null);
    const [social, setSocial]         = useState<PublicProfile | null>(null);
    const [loading, setLoading]       = useState(true);
    const [myUserId, setMyUserId]     = useState<number | null>(null);
    const [isFollowed, setIsFollowed] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [connPending, setConnPending] = useState(false);
    const [actionLoading, setActionLoading] = useState<'follow' | 'connect' | null>(null);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState<'Followers' | 'Following' | 'Connections'>('Followers');

    useEffect(() => {
        const init = async () => {
            const uid = await AsyncStorage.getItem('userId');
            const id  = uid ? parseInt(uid) : null;
            setMyUserId(id);

            if (!userId) return;
            const targetId = parseInt(userId);

            // Fetch full profile data (same API as about-player)
            const fullProfile = await profileService.getProfile(targetId);

            // Fetch social data (follower count, connection status, etc.)
            const socialData = await userSearchService.getPublicProfile(targetId, id ?? undefined);

            if (fullProfile) setProfile(fullProfile);
            if (socialData) {
                setSocial(socialData);
                setIsFollowed(socialData.isFollowedByMe);
                setIsConnected(socialData.isConnectionAccepted);
                setConnPending(socialData.isConnectedByMe && !socialData.isConnectionAccepted);
            }
            setLoading(false);
        };
        init();

        const sub = DeviceEventEmitter.addListener('NotificationReceived', (notification) => {
            const notifType = notification.Type || notification.type;
            const notifActor = notification.ActorUserId || notification.actorUserId;
            
            if (notifType === "CONNECT_ACCEPTED" && notifActor?.toString() === userId) {
                setIsConnected(true);
                setConnPending(false);
                setSocial(prev => prev ? { ...prev, connectionCount: prev.connectionCount + 1 } : null);
            }
        });

        return () => sub.remove();
    }, [userId]);

    // ── Follow / Connect handlers ──
    const handleFollow = useCallback(async () => {
        if (!myUserId || !userId || actionLoading) return;
        setActionLoading('follow');
        const wasFollowed = isFollowed;
        
        setIsFollowed(!wasFollowed);
        setSocial(prev => prev ? { 
            ...prev, 
            followerCount: wasFollowed ? Math.max(0, prev.followerCount - 1) : prev.followerCount + 1 
        } : null);

        try {
            const res = wasFollowed
                ? await userSearchService.unfollow(myUserId, parseInt(userId))
                : await userSearchService.follow(myUserId, parseInt(userId));
            if (!res.success) {
                setIsFollowed(wasFollowed);
                setSocial(prev => prev ? { 
                    ...prev, 
                    followerCount: wasFollowed ? prev.followerCount + 1 : Math.max(0, prev.followerCount - 1) 
                } : null);
            }
        } catch { 
            setIsFollowed(wasFollowed);
            setSocial(prev => prev ? { 
                ...prev, 
                followerCount: wasFollowed ? prev.followerCount + 1 : Math.max(0, prev.followerCount - 1) 
            } : null);
        }
        finally { setActionLoading(null); }
    }, [myUserId, userId, isFollowed, actionLoading]);

    const handleConnect = useCallback(async () => {
        if (!myUserId || !userId || actionLoading || isConnected) return;
        setActionLoading('connect');
        try {
            const res = await userSearchService.connect(myUserId, parseInt(userId));
            if (res.success) {
                if (connPending) {
                    setConnPending(false);
                    Alert.alert('Request Cancelled', 'Connection request withdrawn.');
                } else {
                    setConnPending(true);
                    Alert.alert('Request Sent! 🤝', `Your connection request has been sent.`);
                }
            }
        } finally { setActionLoading(null); }
    }, [myUserId, userId, actionLoading, isConnected, connPending]);

    // ── Loading / Error states ──
    if (loading) return (
        <SafeAreaView style={styles.container}>
            <View style={styles.center}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        </SafeAreaView>
    );

    if (!profile && !social) return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                <ChevronLeft size={s(22)} color={Colors.white} />
            </TouchableOpacity>
            <View style={styles.center}>
                <Text style={styles.emptyTitle}>Player not found</Text>
            </View>
        </SafeAreaView>
    );

    // ── Map profile fields (same pattern as about-player.tsx) ──
    const fullName       = profile?.userName || profile?.FullName || social?.fullName || "—";
    const gender         = profile?.Gender || "—";
    const yearBorn       = profile?.Age || profile?.YearBorn || "—";
    const playingLevel   = profile?.Playing_level || profile?.PlayingLevel || social?.playingLevel || "—";
    const location       = profile?.Location || social?.location || "—";
    const playingSince   = profile?.Playing_since || "—";
    const powerHand      = profile?.Power_hand || "—";
    const backHand       = profile?.Back_hand || "—";
    const duprLink       = profile?.DUPR_profile_link && profile?.DUPR_profile_link !== "—" ? profile?.DUPR_profile_link : null;
    const courts         = profile?.Often_seen_playing || "—";
    const about          = profile?.About || null;
    const skills         = parseSkills(profile?.Skills || "");
    const equipment      = profile?.Equipment || null;
    const coachName      = profile?.Coach_name || null;
    const trainingLoc    = profile?.Training_location || null;
    const clubName       = profile?.Club || null;
    const profileImageUrl = getAbsoluteUrl(profile?.ProfileImageUrl || social?.avatar || null);
    const coverImageUrl  = getAbsoluteUrl(profile?.BackgroundImageUrl || profile?.CoverImageUrl || social?.coverImage || null);

    // Tournaments
    let tournaments: any[] = [];
    try { if (profile?.Tournaments) tournaments = JSON.parse(profile.Tournaments); } catch {}

    const initial = fullName !== "—" ? fullName.trim()[0].toUpperCase() : "?";

    const followerCount   = social?.followerCount ?? 0;
    const followingCount  = social?.followingCount ?? 0;
    const connectionCount = social?.connectionCount ?? 0;

    const getLevelColor = (level?: string | null) => {
        if (level === 'Pro')          return '#F59E0B';
        if (level === 'Advanced')     return Colors.primary;
        if (level === 'Intermediate') return Colors.info;
        return Colors.success;
    };

    const connectLabel = isConnected ? 'Connected ✓' : connPending ? 'Pending…' : 'Connect';
    const connectColor = isConnected ? Colors.success : connPending ? Colors.warning : Colors.primary;

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                <ChevronLeft size={s(22)} color={Colors.white} />
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* ── Cover image ── */}
                <View style={styles.cover}>
                    <Image
                        source={coverImageUrl ? { uri: coverImageUrl } : DEFAULT_COVER}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="cover"
                    />
                    <View style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(0,0,0,0.25)' }]} />
                </View>

                {/* ── Profile card ── */}
                <View style={styles.profileCard}>
                    <View style={styles.avatarWrap}>
                        {profileImageUrl
                            ? <Image source={{ uri: profileImageUrl }} style={styles.avatar} />
                            : <View style={[styles.avatar, styles.avatarPlaceholder]}>
                                <Text style={styles.avatarInitial}>{initial}</Text>
                              </View>
                        }
                    </View>

                    <Text style={styles.name}>{fullName}</Text>
                    {playingLevel !== "—" && (
                        <View style={[styles.levelBadge, { backgroundColor: getLevelColor(playingLevel) + '22' }]}>
                            <Star size={s(11)} color={getLevelColor(playingLevel)} />
                            <Text style={[styles.levelText, { color: getLevelColor(playingLevel) }]}>{playingLevel}</Text>
                        </View>
                    )}

                    {location !== "—" && (
                        <View style={styles.metaRow}>
                            <MapPin size={s(12)} color={Colors.textMuted} />
                            <Text style={styles.metaText}>{location}</Text>
                        </View>
                    )}

                    {/* Stats */}
                    <View style={styles.statsRow}>
                        <TouchableOpacity style={styles.statItem} onPress={() => { setModalType('Followers'); setModalVisible(true); }}>
                            <Text style={styles.statNum}>{followerCount}</Text>
                            <Text style={styles.statLabel}>Followers</Text>
                        </TouchableOpacity>
                        <View style={styles.statDivider} />
                        <TouchableOpacity style={styles.statItem} onPress={() => { setModalType('Following'); setModalVisible(true); }}>
                            <Text style={styles.statNum}>{followingCount}</Text>
                            <Text style={styles.statLabel}>Following</Text>
                        </TouchableOpacity>
                        <View style={styles.statDivider} />
                        <TouchableOpacity style={styles.statItem} onPress={() => { setModalType('Connections'); setModalVisible(true); }}>
                            <Text style={styles.statNum}>{connectionCount}</Text>
                            <Text style={styles.statLabel}>Connections</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Action buttons */}
                    <View style={styles.actionRow}>
                        <TouchableOpacity
                            onPress={handleConnect}
                            disabled={!!actionLoading || isConnected}
                            style={[styles.actionBtn, { backgroundColor: connectColor, opacity: isConnected ? 0.7 : 1 }]}
                            activeOpacity={0.8}
                        >
                            {actionLoading === 'connect'
                                ? <ActivityIndicator size="small" color={Colors.white} />
                                : <>
                                    <UserPlus size={s(15)} color={Colors.white} />
                                    <Text style={styles.actionBtnText}>{connectLabel}</Text>
                                  </>
                            }
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleFollow}
                            disabled={!!actionLoading}
                            style={[styles.actionBtnOutline, isFollowed && styles.actionBtnOutlineActive]}
                            activeOpacity={0.8}
                        >
                            {actionLoading === 'follow'
                                ? <ActivityIndicator size="small" color={isFollowed ? Colors.white : Colors.primary} />
                                : <>
                                    {isFollowed
                                        ? <UserCheck size={s(15)} color={Colors.white} />
                                        : <Heart    size={s(15)} color={Colors.primary} />
                                    }
                                    <Text style={[styles.actionBtnOutlineText, isFollowed && { color: Colors.white }]}>
                                        {isFollowed ? 'Following' : 'Follow'}
                                    </Text>
                                  </>
                            }
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ── About ── */}
                {about && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>About</Text>
                        <Text style={styles.sectionText}>{about}</Text>
                    </View>
                )}

                {/* ── Player Details ── */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Player Details</Text>
                    <View style={styles.detailGrid}>
                        {gender !== "—"       && <InfoChip icon={<Users size={s(14)} color={Colors.primary} />} label="Gender" value={gender} />}
                        {yearBorn !== "—"     && <InfoChip icon={<Star size={s(14)} color={Colors.primary} />} label="Age" value={yearBorn} />}
                        {playingSince !== "—" && <InfoChip icon={<Calendar size={s(14)} color={Colors.primary} />} label="Playing Since" value={playingSince} />}
                        {powerHand !== "—"    && <InfoChip icon={<Zap size={s(14)} color={Colors.primary} />} label="Power Hand" value={powerHand} />}
                        {backHand !== "—"     && <InfoChip icon={<Trophy size={s(14)} color={Colors.primary} />} label="Backhand" value={backHand} />}
                        {courts !== "—"       && <InfoChip icon={<MapPin size={s(14)} color={Colors.primary} />} label="Favorite Courts" value={courts} />}
                    </View>

                    {duprLink && (
                        <TouchableOpacity onPress={() => Linking.openURL(duprLink)} style={styles.duprBtn} activeOpacity={0.8}>
                            <LinkIcon size={s(14)} color={Colors.primary} />
                            <Text style={styles.duprText}>View DUPR Profile</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* ── Skills ── */}
                {skills.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Core Skills</Text>
                        <View style={styles.chipRow}>
                            {skills.map((skill, i) => (
                                <View key={i} style={styles.skillChip}>
                                    <Text style={styles.skillText}>{skill}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                )}

                {/* ── Equipment ── */}
                {equipment && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Equipment</Text>
                        <Text style={styles.sectionText}>{equipment}</Text>
                    </View>
                )}

                {/* ── Training & Coach ── */}
                {(coachName || trainingLoc || clubName) && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Training</Text>
                        <View style={styles.detailGrid}>
                            {coachName    && <InfoChip icon={<GraduationCap size={s(14)} color={Colors.primary} />} label="Coach" value={coachName} />}
                            {trainingLoc  && <InfoChip icon={<Target size={s(14)} color={Colors.primary} />} label="Training Location" value={trainingLoc} />}
                            {clubName     && <InfoChip icon={<Award size={s(14)} color={Colors.primary} />} label="Club" value={clubName} />}
                        </View>
                    </View>
                )}

                {/* ── Tournaments ── */}
                {tournaments.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Tournament Record</Text>
                        {tournaments.map((t: any, i: number) => (
                            <View key={i} style={styles.tournamentCard}>
                                <View style={styles.tournamentHeader}>
                                    <Trophy size={s(14)} color={Colors.primary} />
                                    <Text style={styles.tournamentName}>{t.name || t.TournamentName || "—"}</Text>
                                </View>
                                <View style={styles.tournamentMeta}>
                                    <Text style={styles.tournamentTag}>{t.category || t.Category || "—"}</Text>
                                    <Text style={styles.tournamentTag}>{t.year || t.Year || "—"}</Text>
                                    <Text style={[styles.tournamentTag, { color: Colors.success }]}>{t.result || t.Result || "—"}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                )}

                <View style={{ height: vs(40) }} />
            </ScrollView>

            <UserListModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                userId={parseInt(userId || '0')}
                currentUserId={myUserId || parseInt(userId || '0')}
                listType={modalType}
            />
        </SafeAreaView>
    );
}

// ── InfoChip sub-component ──
function InfoChip({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <View style={chipStyles.wrap}>
            {icon}
            <View style={{ marginLeft: s(6) }}>
                <Text style={chipStyles.label}>{label.toUpperCase()}</Text>
                <Text style={chipStyles.value}>{value}</Text>
            </View>
        </View>
    );
}

const chipStyles = StyleSheet.create({
    wrap:  { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.surfaceSecondary, borderRadius: s(12), padding: s(10), margin: s(4), flex: 1, minWidth: '45%' },
    label: { color: Colors.textMuted, fontSize: s(9), fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 },
    value: { color: Colors.white, fontSize: s(13), fontWeight: '600', marginTop: 1 },
});

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    center:    { flex: 1, alignItems: 'center', justifyContent: 'center' },
    emptyTitle:{ color: Colors.white, fontSize: s(16), fontWeight: '700' },

    backBtn: {
        position: 'absolute', top: vs(56), left: s(16), zIndex: 10,
        width: s(38), height: s(38), borderRadius: s(19),
        backgroundColor: 'rgba(0,0,0,0.55)',
        alignItems: 'center', justifyContent: 'center',
    },

    cover: { height: vs(200), backgroundColor: Colors.onboardingRed, overflow: 'hidden' },

    profileCard: {
        backgroundColor: Colors.surface, borderRadius: s(24),
        marginHorizontal: s(16), marginTop: -vs(40),
        padding: s(20), alignItems: 'center',
        borderWidth: 1, borderColor: Colors.border,
        shadowColor: '#000', shadowOpacity: 0.4, shadowRadius: 12, elevation: 8,
    },

    avatarWrap: { marginTop: -vs(60), marginBottom: s(10) },
    avatar:     { width: s(90), height: s(90), borderRadius: s(45), borderWidth: 3, borderColor: Colors.surface },
    avatarPlaceholder: { backgroundColor: Colors.primarySubtle, alignItems: 'center', justifyContent: 'center', borderColor: Colors.primary },
    avatarInitial: { color: Colors.primary, fontSize: s(34), fontWeight: '800' },

    name: { color: Colors.white, fontSize: s(20), fontWeight: '800', marginBottom: s(6) },

    levelBadge: { flexDirection: 'row', alignItems: 'center', gap: s(4), paddingHorizontal: s(10), paddingVertical: s(4), borderRadius: s(12), marginBottom: s(6) },
    levelText:  { fontSize: s(12), fontWeight: '700' },

    metaRow: { flexDirection: 'row', alignItems: 'center', gap: s(4), marginBottom: s(12) },
    metaText: { color: Colors.textMuted, fontSize: s(12) },

    statsRow:   { flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderColor: Colors.borderSubtle, paddingTop: s(14), marginTop: s(4), width: '100%' },
    statItem:   { flex: 1, alignItems: 'center' },
    statNum:    { color: Colors.white, fontSize: s(18), fontWeight: '800' },
    statLabel:  { color: Colors.textMuted, fontSize: s(10), marginTop: 2 },
    statDivider:{ width: 1, height: s(30), backgroundColor: Colors.borderSubtle },

    actionRow:  { flexDirection: 'row', gap: s(10), marginTop: s(16), width: '100%' },
    actionBtn:  { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: s(6), paddingVertical: s(12), borderRadius: s(14) },
    actionBtnText: { color: Colors.white, fontSize: s(14), fontWeight: '700' },
    actionBtnOutline: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: s(6), paddingVertical: s(12), borderRadius: s(14), borderWidth: 1.5, borderColor: Colors.primary },
    actionBtnOutlineActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
    actionBtnOutlineText: { color: Colors.primary, fontSize: s(14), fontWeight: '700' },

    // ── Section styles ──
    section: {
        backgroundColor: Colors.surface, borderRadius: s(20),
        margin: s(16), marginTop: s(14), padding: s(16),
        borderWidth: 1, borderColor: Colors.border,
    },
    sectionTitle: { color: Colors.white, fontSize: s(14), fontWeight: '700', marginBottom: s(12), textTransform: 'uppercase', letterSpacing: 0.5 },
    sectionText:  { color: Colors.textSecondary, fontSize: s(13), lineHeight: s(20) },

    detailGrid: { flexDirection: 'row', flexWrap: 'wrap', margin: -s(4) },

    duprBtn: { flexDirection: 'row', alignItems: 'center', gap: s(6), backgroundColor: Colors.primarySubtle, paddingVertical: s(10), paddingHorizontal: s(14), borderRadius: s(12), marginTop: s(12), alignSelf: 'flex-start' },
    duprText: { color: Colors.primary, fontSize: s(13), fontWeight: '600' },

    chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: s(8) },
    skillChip: { backgroundColor: Colors.primarySubtle, paddingHorizontal: s(12), paddingVertical: s(6), borderRadius: s(20), borderWidth: 1, borderColor: Colors.primary + '44' },
    skillText: { color: Colors.primary, fontSize: s(12), fontWeight: '600' },

    tournamentCard: {
        backgroundColor: Colors.surfaceSecondary, borderRadius: s(12),
        padding: s(12), marginBottom: s(8),
    },
    tournamentHeader: { flexDirection: 'row', alignItems: 'center', gap: s(6), marginBottom: s(6) },
    tournamentName:   { color: Colors.white, fontSize: s(13), fontWeight: '700' },
    tournamentMeta:   { flexDirection: 'row', gap: s(8) },
    tournamentTag:    { color: Colors.textMuted, fontSize: s(11) },
});
