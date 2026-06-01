import React, { useEffect, useState } from 'react';
import {
    View, Text, StyleSheet, Modal, TouchableOpacity,
    FlatList, ActivityIndicator, Image, Dimensions, TouchableWithoutFeedback
} from 'react-native';
import { Colors } from '../constants/Colors';
import { X } from 'lucide-react-native';
import { userSearchService, UserSearchResult } from '../services/userSearchService';
import { useRouter } from 'expo-router';
import { getAbsoluteUrl } from '../utils/imageUtils';

const { width, height } = Dimensions.get('window');
const s = (n: number) => (width / 390) * n;

type ListType = 'Followers' | 'Following' | 'Connections';

interface Props {
    visible: boolean;
    onClose: () => void;
    userId: number;
    currentUserId?: number;
    listType: ListType;
}

export function UserListModal({ visible, onClose, userId, currentUserId, listType }: Props) {
    const router = useRouter();
    const [users, setUsers] = useState<UserSearchResult[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!visible) return;

        const loadData = async () => {
            setLoading(true);
            try {
                let data: UserSearchResult[] = [];
                if (listType === 'Followers') {
                    data = await userSearchService.getFollowers(userId, currentUserId);
                } else if (listType === 'Following') {
                    data = await userSearchService.getFollowing(userId, currentUserId);
                } else if (listType === 'Connections') {
                    data = await userSearchService.getConnections(userId, currentUserId);
                }
                setUsers(data);
            } catch (err) {
                console.error("Failed to load user list", err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [visible, userId, currentUserId, listType]);

    const handlePressUser = (selectedId: number) => {
        onClose();
        if (selectedId === currentUserId) {
            router.push('/about-player');
        } else {
            router.push({ pathname: '/public-profile', params: { userId: selectedId.toString() } });
        }
    };

    const renderItem = ({ item }: { item: UserSearchResult }) => {
        const initial = item.fullName.charAt(0).toUpperCase() || '?';

        return (
            <TouchableOpacity 
                style={styles.userRow} 
                activeOpacity={0.7}
                onPress={() => handlePressUser(item.userId)}
            >
                <View style={styles.avatarWrap}>
                    {item.avatar ? (
                        <Image source={{ uri: getAbsoluteUrl(item.avatar)! }} style={styles.avatar} />
                    ) : (
                        <Text style={styles.avatarInitial}>{initial}</Text>
                    )}
                </View>
                
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{item.fullName}</Text>
                    {item.playingLevel ? (
                        <Text style={styles.userMeta}>{item.playingLevel}</Text>
                    ) : null}
                </View>

                {item.userId !== currentUserId && (
                    <View style={styles.actionWrap}>
                        {item.isConnectionAccepted ? (
                            <Text style={styles.actionTextSuccess}>Connected</Text>
                        ) : item.isFollowedByMe ? (
                            <Text style={styles.actionTextInfo}>Following</Text>
                        ) : null}
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={{ flex: 1 }} />
                </TouchableWithoutFeedback>
                
                <View style={styles.sheet}>
                    <View style={styles.header}>
                        <View style={{ width: s(24) }} />
                        <Text style={styles.headerTitle}>{listType}</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                            <X size={s(20)} color={Colors.white} />
                        </TouchableOpacity>
                    </View>

                    {loading ? (
                        <View style={styles.center}>
                            <ActivityIndicator size="large" color={Colors.primary} />
                        </View>
                    ) : users.length === 0 ? (
                        <View style={styles.center}>
                            <Text style={styles.emptyText}>No {listType.toLowerCase()} found.</Text>
                        </View>
                    ) : (
                        <FlatList
                            data={users}
                            keyExtractor={(item) => item.userId.toString()}
                            renderItem={renderItem}
                            contentContainerStyle={styles.listContent}
                            showsVerticalScrollIndicator={false}
                        />
                    )}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'flex-end',
    },
    sheet: {
        backgroundColor: Colors.surface,
        borderTopLeftRadius: s(20),
        borderTopRightRadius: s(20),
        maxHeight: height * 0.75,
        minHeight: height * 0.4,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: s(16),
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    headerTitle: {
        color: Colors.white,
        fontSize: s(16),
        fontWeight: '700',
    },
    closeBtn: {
        padding: s(4),
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: s(32),
    },
    emptyText: {
        color: Colors.textMuted,
        fontSize: s(14),
    },
    listContent: {
        paddingHorizontal: s(16),
        paddingBottom: s(32),
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: s(12),
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderSubtle,
    },
    avatarWrap: {
        width: s(44),
        height: s(44),
        borderRadius: s(22),
        backgroundColor: Colors.surfaceSecondary,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    avatarInitial: {
        color: Colors.primary,
        fontSize: s(16),
        fontWeight: '700',
    },
    userInfo: {
        flex: 1,
        marginLeft: s(12),
    },
    userName: {
        color: Colors.white,
        fontSize: s(14),
        fontWeight: '700',
        marginBottom: s(2),
    },
    userMeta: {
        color: Colors.textMuted,
        fontSize: s(12),
    },
    actionWrap: {
        marginLeft: s(12),
        paddingHorizontal: s(10),
        paddingVertical: s(4),
        borderRadius: s(12),
        backgroundColor: Colors.surfaceSecondary,
    },
    actionTextSuccess: {
        color: Colors.success,
        fontSize: s(11),
        fontWeight: '600',
    },
    actionTextInfo: {
        color: Colors.primary,
        fontSize: s(11),
        fontWeight: '600',
    },
});
