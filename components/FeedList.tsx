import React, { useCallback } from 'react';
import { FlatList, RefreshControl, View, ActivityIndicator, Text } from 'react-native';
import { PostDto } from '../models/PostDto';
import { PostCard } from './PostCard';
import { Colors } from '../constants/Colors';
import { Spacing } from '../constants/spacing';
import { normalize } from '../utils/responsive';

interface FeedListProps {
    posts: PostDto[];
    loading: boolean;
    refreshing: boolean;
    onRefresh: () => void;
    currentUserId: number | null;
    onDeletePost?: (postId: string, postType: string) => void;
    onHidePost?: (postId: string, postType: string) => void;
}

export const FeedList: React.FC<FeedListProps> = ({
    posts,
    loading,
    refreshing,
    onRefresh,
    currentUserId,
    onDeletePost,
    onHidePost,
}) => {

    const renderItem = useCallback(({ item }: { item: PostDto }) => (
        <PostCard
            post={item}
            currentUserId={currentUserId}
            onDelete={onDeletePost}
            onHide={onHidePost}
            onPin={onRefresh}
        />
    ), [currentUserId, onDeletePost, onHidePost, onRefresh]);

    const keyExtractor = useCallback((item: PostDto, index: number) => `${item.postType ?? 'post'}_${item.postId ?? index}`, []);

    if (loading && !refreshing) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color={Colors.primary} size="large" />
            </View>
        );
    }

    return (
        <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            contentContainerStyle={{ paddingHorizontal: Spacing.lg, paddingBottom: Spacing.xxl }}
            showsVerticalScrollIndicator={false}
            initialNumToRender={10}
            windowSize={5}
            removeClippedSubviews={true}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor={Colors.primary}
                    colors={[Colors.primary]}
                />
            }
            ListEmptyComponent={() => (
                <View style={{ padding: Spacing.xxl, alignItems: 'center' }}>
                    <Text style={{ color: Colors.textMuted, fontSize: normalize(14) }}>
                        No posts yet. Be the first to post!
                    </Text>
                </View>
            )}
        />
    );
};
