import React, { useState, useCallback, useRef } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, FlatList,
    Image, ActivityIndicator, StyleSheet, Dimensions, Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Search, X, MapPin, Users, UserCheck } from 'lucide-react-native';
import { Colors } from '../constants/Colors';
import { userSearchService, UserSearchResult } from '../services/userSearchService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');
const s = (n: number) => (width / 390) * n;

export default function SearchScreen() {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<UserSearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const doSearch = useCallback(async (text: string) => {
        if (text.trim().length < 2) { setResults([]); setSearched(false); return; }
        setLoading(true);
        setSearched(true);
        try {
            const uid = await AsyncStorage.getItem('userId');
            const myId = uid ? parseInt(uid) : undefined;
            const data = await userSearchService.searchUsers(text.trim(), myId);
            // Exclude the logged-in user from results (Number() coercion for type safety)
            setResults(myId ? data.filter(u => Number(u.userId) !== myId) : data);
        } finally { setLoading(false); }
    }, []);

    const onChangeText = (text: string) => {
        setQuery(text);
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => doSearch(text), 400);
    };

    const clearSearch = () => { setQuery(''); setResults([]); setSearched(false); };

    const getLevelColor = (level?: string | null) => {
        if (!level) return Colors.textMuted;
        if (level === 'Pro') return '#F59E0B';
        if (level === 'Advanced') return Colors.primary;
        if (level === 'Intermediate') return Colors.info;
        return Colors.success;
    };

    const renderItem = ({ item }: { item: UserSearchResult }) => (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => { Keyboard.dismiss(); router.push({ pathname: '/public-profile', params: { userId: item.userId } }); }}
        >
            {/* Avatar */}
            <View style={styles.avatarWrap}>
                {item.avatar
                    ? <Image source={{ uri: item.avatar }} style={styles.avatar} />
                    : <View style={[styles.avatar, styles.avatarPlaceholder]}>
                        <Text style={styles.avatarInitial}>{item.fullName.charAt(0).toUpperCase()}</Text>
                      </View>
                }
                {/* Online dot (decorative) */}
                <View style={styles.onlineDot} />
            </View>

            {/* Info */}
            <View style={{ flex: 1, marginLeft: s(12) }}>
                <Text style={styles.name} numberOfLines={1}>{item.fullName}</Text>
                {item.location && (
                    <View style={styles.row}>
                        <MapPin size={s(11)} color={Colors.textMuted} />
                        <Text style={styles.meta} numberOfLines={1}>{item.location}</Text>
                    </View>
                )}
                <View style={styles.row}>
                    {item.playingLevel && (
                        <View style={[styles.badge, { backgroundColor: getLevelColor(item.playingLevel) + '22', borderColor: getLevelColor(item.playingLevel) + '66' }]}>
                            <Text style={[styles.badgeText, { color: getLevelColor(item.playingLevel) }]}>{item.playingLevel}</Text>
                        </View>
                    )}
                    <View style={styles.statRow}>
                        <Users size={s(10)} color={Colors.textMuted} />
                        <Text style={styles.meta}>{item.followerCount} followers</Text>
                    </View>
                </View>
            </View>

            {/* Connection badge */}
            {item.isConnectionAccepted && (
                <View style={styles.connectedBadge}>
                    <UserCheck size={s(12)} color={Colors.success} />
                    <Text style={[styles.badgeText, { color: Colors.success }]}>Connected</Text>
                </View>
            )}
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* ── Header ── */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Discover Players</Text>
                <Text style={styles.headerSub}>Search the Pickleon community</Text>
            </View>

            {/* ── Search bar ── */}
            <View style={styles.searchBar}>
                <Search size={s(18)} color={query ? Colors.primary : Colors.textMuted} />
                <TextInput
                    style={styles.searchInput}
                    value={query}
                    onChangeText={onChangeText}
                    placeholder="Search by name…"
                    placeholderTextColor={Colors.textMuted}
                    returnKeyType="search"
                    autoFocus
                    onSubmitEditing={() => doSearch(query)}
                />
                {query.length > 0 && (
                    <TouchableOpacity onPress={clearSearch} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                        <X size={s(16)} color={Colors.textMuted} />
                    </TouchableOpacity>
                )}
            </View>

            {/* ── Results / states ── */}
            {loading ? (
                <View style={styles.center}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                    <Text style={styles.emptyText}>Searching…</Text>
                </View>
            ) : !searched ? (
                <View style={styles.center}>
                    <View style={styles.emptyIcon}>
                        <Search size={s(36)} color={Colors.border} />
                    </View>
                    <Text style={styles.emptyTitle}>Find Players</Text>
                    <Text style={styles.emptyText}>Type at least 2 characters to search by name</Text>
                </View>
            ) : results.length === 0 ? (
                <View style={styles.center}>
                    <View style={styles.emptyIcon}>
                        <Users size={s(36)} color={Colors.border} />
                    </View>
                    <Text style={styles.emptyTitle}>No players found</Text>
                    <Text style={styles.emptyText}>Try a different name or spelling</Text>
                </View>
            ) : (
                <FlatList
                    data={results}
                    keyExtractor={i => i.userId.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={{ padding: s(16), paddingTop: s(8) }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: s(10) }} />}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:  { flex: 1, backgroundColor: Colors.background },
    header:     { paddingHorizontal: s(20), paddingTop: s(12), paddingBottom: s(8) },
    headerTitle:{ color: Colors.white, fontSize: s(22), fontWeight: '800' },
    headerSub:  { color: Colors.textMuted, fontSize: s(12), marginTop: 2 },

    searchBar: {
        flexDirection: 'row', alignItems: 'center', gap: s(10),
        backgroundColor: Colors.surface, borderRadius: s(16),
        borderWidth: 1, borderColor: Colors.border,
        paddingHorizontal: s(14), paddingVertical: s(12),
        marginHorizontal: s(16), marginBottom: s(8),
    },
    searchInput: { flex: 1, color: Colors.white, fontSize: s(15) },

    center:     { flex: 1, alignItems: 'center', justifyContent: 'center', padding: s(32) },
    emptyIcon:  { width: s(80), height: s(80), borderRadius: s(40), backgroundColor: Colors.surface, alignItems: 'center', justifyContent: 'center', marginBottom: s(16) },
    emptyTitle: { color: Colors.white, fontSize: s(16), fontWeight: '700', marginBottom: s(6) },
    emptyText:  { color: Colors.textMuted, fontSize: s(13), textAlign: 'center' },

    card: {
        flexDirection: 'row', alignItems: 'center',
        backgroundColor: Colors.surface, borderRadius: s(16),
        padding: s(14), borderWidth: 1, borderColor: Colors.border,
    },
    avatarWrap: { position: 'relative' },
    avatar:     { width: s(52), height: s(52), borderRadius: s(26) },
    avatarPlaceholder: { backgroundColor: Colors.primarySubtle, alignItems: 'center', justifyContent: 'center', borderWidth: 1.5, borderColor: Colors.primary },
    avatarInitial: { color: Colors.primary, fontSize: s(20), fontWeight: '800' },
    onlineDot:  { position: 'absolute', bottom: 2, right: 2, width: s(10), height: s(10), borderRadius: s(5), backgroundColor: Colors.success, borderWidth: 2, borderColor: Colors.surface },

    name:       { color: Colors.white, fontSize: s(15), fontWeight: '700', marginBottom: 3 },
    row:        { flexDirection: 'row', alignItems: 'center', gap: s(4), marginTop: 2, flexWrap: 'wrap' },
    meta:       { color: Colors.textMuted, fontSize: s(11) },

    badge:      { paddingHorizontal: s(6), paddingVertical: s(2), borderRadius: s(6), borderWidth: 1 },
    badgeText:  { fontSize: s(10), fontWeight: '700' },
    statRow:    { flexDirection: 'row', alignItems: 'center', gap: s(3) },

    connectedBadge: { flexDirection: 'row', alignItems: 'center', gap: s(3), backgroundColor: Colors.success + '15', paddingHorizontal: s(8), paddingVertical: s(4), borderRadius: s(8) },
});
