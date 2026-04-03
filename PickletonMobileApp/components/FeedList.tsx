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
}

export const FeedList: React.FC<FeedListProps> = ({ posts, loading, refreshing, onRefresh }) => {
    
    const renderItem = useCallback(({ item }: { item: PostDto }) => (
        <PostCard post={item} />
    ), []);

    const keyExtractor = useCallback((item: PostDto) => item.postId, []);

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
                    <Text style={{ color: Colors.textMuted, fontSize: normalize(14) }}>No posts found</Text>
                </View>
            )}
        />
    );
};
