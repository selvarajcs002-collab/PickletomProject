import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { Header } from "../components/Header";
import { Tabs } from "../components/Tabs";
import { FeedList } from "../components/FeedList";
import BottomNav from "../components/BottomNav";
import { Colors } from "../constants/Colors";
import { postService } from "../services/postService";
import { PostDto } from "../models/PostDto";
import { Spacing } from "../constants/spacing";
import { normalize, scale } from "../utils/responsive";

const TABS = ["For You", "Following", "Events", "Pro Tips", "Local"];

export const CommunityFeedScreen = () => {
    const [activeTab, setActiveTab] = useState("For You");
    const [posts, setPosts] = useState<PostDto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refreshing, setRefreshing] = useState(false);
    const [currentUserId, setCurrentUserId] = useState<number | null>(null);

    // Load logged-in userId on focus so it updates after logout/login
    useFocusEffect(
        useCallback(() => {
            let active = true;
            AsyncStorage.getItem("userId").then(id => {
                if (active && id) setCurrentUserId(Number(id));
            });
            return () => { active = false; };
        }, [])
    );

    const fetchPosts = useCallback(async (isRefresh = false) => {
        if (!currentUserId) return; // Wait until we have the ID
        
        if (isRefresh) setRefreshing(true);
        else setLoading(true);
        setError(null);

        try {
            const data = await postService.getPosts(currentUserId ?? undefined);
            setPosts(data);
        } catch (error: any) {
            console.error("Failed to fetch posts:", error);
            setError(error.message || "Unable to load posts. Please try again later.");
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, [currentUserId]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    // Hard-delete post via API then remove from local state
    const handleDeletePost = useCallback(async (postId: string, postType: string) => {
        if (!currentUserId) return;
        // Optimistically remove
        setPosts(prev => prev.filter(p => p.postId !== postId));
        try {
            const res = await postService.deletePost(postId, currentUserId.toString(), postType);
            if (!res.success) {
                // Rollback: re-fetch if delete failed
                fetchPosts();
            }
        } catch {
            fetchPosts();
        }
    }, [currentUserId, fetchPosts]);

    // Remove hidden post from feed immediately
    const handleHidePost = useCallback(async (postId: string, postType: string) => {
        if (!currentUserId) return;
        setPosts(prev => prev.filter(p => p.postId !== postId));
        try {
            await postService.hidePost(postId, currentUserId.toString(), postType);
        } catch {}
    }, [currentUserId]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
            <StatusBar style="light" />

            <Header />

            <Tabs
                tabs={TABS}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            {/* Streak Banner */}
            <View style={{ paddingHorizontal: Spacing.lg, marginBottom: Spacing.md }}>
                <View style={{
                    backgroundColor: 'rgba(244, 71, 37, 0.1)',
                    borderWidth: 1,
                    borderColor: 'rgba(244, 71, 37, 0.2)',
                    borderRadius: 16,
                    padding: Spacing.md,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.sm }}>
                        <View style={{
                            width: 40,
                            height: 40,
                            backgroundColor: 'rgba(244, 71, 37, 0.2)',
                            borderRadius: 12,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ fontSize: 20 }}>🔥</Text>
                        </View>
                        <View>
                            <Text style={{ color: Colors.primary, fontSize: normalize(10), fontWeight: 'bold', textTransform: 'uppercase' }}>
                                Current Streak
                            </Text>
                            <Text style={{ color: Colors.white, fontWeight: 'bold' }}>5 Days Active</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: Colors.primary, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 }}>
                        <Text style={{ color: Colors.white, fontSize: normalize(10), fontWeight: 'bold' }}>View Stats</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {error ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: Spacing.xl }}>
                    <Text style={{ color: Colors.error, fontSize: normalize(14), textAlign: 'center', marginBottom: Spacing.md }}>
                        {error}
                    </Text>
                    <TouchableOpacity
                        onPress={() => fetchPosts()}
                        style={{
                            backgroundColor: Colors.primary,
                            paddingHorizontal: scale(20),
                            paddingVertical: scale(10),
                            borderRadius: scale(20)
                        }}
                    >
                        <Text style={{ color: Colors.white, fontWeight: 'bold' }}>Retry</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <FeedList
                    posts={posts}
                    loading={loading}
                    refreshing={refreshing}
                    onRefresh={() => fetchPosts(true)}
                    currentUserId={currentUserId}
                    onDeletePost={handleDeletePost}
                    onHidePost={handleHidePost}
                />
            )}

            <BottomNav />
        </SafeAreaView>
    );
};
