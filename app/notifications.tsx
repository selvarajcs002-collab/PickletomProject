import React, { useState, useCallback } from "react";
import {
    View, Text, FlatList, TouchableOpacity, Image,
    ActivityIndicator, StyleSheet, Dimensions, Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useRouter } from "expo-router";
import { ChevronLeft, Bell, UserPlus, UserCheck, Heart, MessageCircle, CheckCheck } from "lucide-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../constants/Colors";
import { notificationService, NotificationItem } from "../services/notificationService";
import { userSearchService } from "../services/userSearchService";

const { width } = Dimensions.get("window");
const s = (n: number) => (width / 390) * n;

const TYPE_CONFIG: Record<string, { icon: React.ReactNode; color: string; label: string }> = {
    FOLLOW:           { icon: <Heart    size={s(16)} color={Colors.primary} />,  color: Colors.primary + "18", label: "started following you" },
    CONNECT_REQUEST:  { icon: <UserPlus size={s(16)} color={Colors.info} />,     color: Colors.info + "18",    label: "sent you a connection request" },
    CONNECT_ACCEPTED: { icon: <UserCheck size={s(16)} color={Colors.success} />, color: Colors.success + "18", label: "accepted your connection request" },
    LIKE:             { icon: <Heart    size={s(16)} color="#E91E63" />,          color: "#E91E6318",           label: "liked your post" },
    COMMENT:          { icon: <MessageCircle size={s(16)} color={Colors.warning} />, color: Colors.warning + "18", label: "commented on your post" },
};

function timeAgo(dateStr: string): string {
    const diff = (Date.now() - new Date(dateStr).getTime()) / 1000;
    if (diff < 60)    return "Just now";
    if (diff < 3600)  return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
    return new Date(dateStr).toLocaleDateString();
}

export default function NotificationsScreen() {
    const router = useRouter();
    const [notifications, setNotifications] = useState<NotificationItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentUserId, setCurrentUserId] = useState<number | null>(null);

    useFocusEffect(
        useCallback(() => {
            let active = true;
            const load = async () => {
                setLoading(true);
                try {
                    const uid = await AsyncStorage.getItem("userId");
                    if (!uid) { setLoading(false); return; }
                    const id = parseInt(uid);
                    if (active) setCurrentUserId(id);
                    const data = await notificationService.getNotifications(id);
                    if (active) setNotifications(data);
                    // Mark as read once user opens this screen
                    await notificationService.markAllRead(id);
                } catch {
                    // API not available yet — show empty state
                }
                if (active) setLoading(false);
            };
            load();
            return () => { active = false; };
        }, [])
    );

    const handleAccept = async (actorId: number, notificationId: string) => {
        if (!currentUserId) return;
        setLoading(true);
        const res = await userSearchService.acceptConnection(currentUserId, actorId);
        if (res.success) {
            setNotifications(prev => prev.filter(n => n.notificationId.toString() !== notificationId));
            Alert.alert("Success", "Connection accepted!");
        } else {
            Alert.alert("Error", res.message);
        }
        setLoading(false);
    };

    const handleDecline = async (actorId: number, notificationId: string) => {
        if (!currentUserId) return;
        setLoading(true);
        const res = await userSearchService.declineConnection(currentUserId, actorId);
        if (res.success) {
            setNotifications(prev => prev.filter(n => n.notificationId.toString() !== notificationId));
            Alert.alert("Success", "Connection declined");
        } else {
            Alert.alert("Error", res.message);
        }
        setLoading(false);
    };

    const renderItem = ({ item }: { item: NotificationItem }) => {
        const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG.FOLLOW;
        const initial = item.actorName?.charAt(0).toUpperCase() || "?";

        return (
            <View style={[styles.card, !item.isRead && styles.unread]}>
                {/* Actor avatar */}
                <View style={[styles.iconWrap, { backgroundColor: cfg.color }]}>
                    {item.actorAvatar ? (
                        <Image source={{ uri: item.actorAvatar }} style={styles.avatar} />
                    ) : (
                        <Text style={styles.avatarInitial}>{initial}</Text>
                    )}
                </View>

                {/* Content */}
                <View style={styles.content}>
                    <Text style={styles.message} numberOfLines={2}>
                        <Text style={styles.actorName}>{item.actorName}</Text>
                        {" "}{item.message || cfg.label}
                    </Text>
                    <View style={styles.metaRow}>
                        {cfg.icon}
                        <Text style={styles.time}>{timeAgo(item.createdAt)}</Text>
                    </View>
                    {item.type === "CONNECT_REQUEST" && (
                        <View style={styles.actionRow}>
                            <TouchableOpacity style={styles.acceptBtn} onPress={() => handleAccept(item.actorUserId, item.notificationId.toString())}>
                                <Text style={styles.acceptBtnText}>Accept</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.declineBtn} onPress={() => handleDecline(item.actorUserId, item.notificationId.toString())}>
                                <Text style={styles.declineBtnText}>Decline</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>

                {/* Unread dot */}
                {!item.isRead && <View style={styles.unreadDot} />}
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                    <ChevronLeft size={s(22)} color={Colors.white} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
                <Bell size={s(20)} color={Colors.primary} />
            </View>

            {loading ? (
                <View style={styles.center}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                </View>
            ) : notifications.length === 0 ? (
                <View style={styles.center}>
                    <View style={styles.emptyIcon}>
                        <Bell size={s(36)} color={Colors.border} />
                    </View>
                    <Text style={styles.emptyTitle}>No notifications yet</Text>
                    <Text style={styles.emptyText}>
                        When people follow, connect, or interact with your posts, you'll see it here.
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={notifications}
                    keyExtractor={(item) => item.notificationId.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={{ padding: s(16) }}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: s(8) }} />}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    header: {
        flexDirection: "row", alignItems: "center", justifyContent: "space-between",
        paddingHorizontal: s(16), paddingVertical: s(14),
        borderBottomWidth: 1, borderBottomColor: Colors.border,
    },
    backBtn: { padding: s(4) },
    headerTitle: { color: Colors.white, fontSize: s(18), fontWeight: "800" },

    center: { flex: 1, alignItems: "center", justifyContent: "center", padding: s(32) },
    emptyIcon: {
        width: s(80), height: s(80), borderRadius: s(40),
        backgroundColor: Colors.surface, alignItems: "center", justifyContent: "center", marginBottom: s(16),
    },
    emptyTitle: { color: Colors.white, fontSize: s(16), fontWeight: "700", marginBottom: s(6) },
    emptyText: { color: Colors.textMuted, fontSize: s(13), textAlign: "center" },

    card: {
        flexDirection: "row", alignItems: "center",
        backgroundColor: Colors.surface, borderRadius: s(16),
        padding: s(14), borderWidth: 1, borderColor: Colors.border,
    },
    unread: { borderColor: Colors.primary + "55", backgroundColor: Colors.primary + "08" },

    iconWrap: {
        width: s(48), height: s(48), borderRadius: s(24),
        alignItems: "center", justifyContent: "center", overflow: "hidden",
    },
    avatar: { width: s(48), height: s(48), borderRadius: s(24) },
    avatarInitial: { color: Colors.primary, fontSize: s(18), fontWeight: "800" },

    content: { flex: 1, marginLeft: s(12) },
    message: { color: Colors.textSecondary, fontSize: s(13), lineHeight: s(18) },
    actorName: { color: Colors.white, fontWeight: "700" },

    metaRow: { flexDirection: "row", alignItems: "center", gap: s(4), marginTop: s(4) },
    time: { color: Colors.textMuted, fontSize: s(11) },

    unreadDot: {
        width: s(8), height: s(8), borderRadius: s(4),
        backgroundColor: Colors.primary, marginLeft: s(8),
    },

    actionRow: { flexDirection: "row", gap: s(8), marginTop: s(10) },
    acceptBtn: { backgroundColor: Colors.primary, paddingVertical: s(6), paddingHorizontal: s(16), borderRadius: s(8) },
    acceptBtnText: { color: Colors.white, fontWeight: "600", fontSize: s(13) },
    declineBtn: { backgroundColor: "transparent", borderWidth: 1, borderColor: Colors.border, paddingVertical: s(6), paddingHorizontal: s(16), borderRadius: s(8) },
    declineBtnText: { color: Colors.textSecondary, fontWeight: "600", fontSize: s(13) },
});
