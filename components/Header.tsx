import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Search, Bell, User as UserIcon } from 'lucide-react-native';
import { Colors } from '../constants/Colors';
import { Spacing, Layout } from '../constants/spacing';
import { normalize, scale } from '../utils/responsive';
import { useRouter } from 'expo-router';
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { notificationService } from '../services/notificationService';

export const Header = () => {
    const router = useRouter();
    const [unreadCount, setUnreadCount] = useState(0);

    // Re-fetch unread count every time the feed screen gains focus
    useFocusEffect(
        useCallback(() => {
            let active = true;
            const fetchCount = async () => {
                try {
                    const uid = await AsyncStorage.getItem('userId');
                    if (!uid) return;
                    const count = await notificationService.getUnreadCount(parseInt(uid));
                    if (active) setUnreadCount(count);
                } catch {
                    // Notification API not available yet — silently ignore
                }
            };
            fetchCount();
            return () => { active = false; };
        }, [])
    );

    return (
        <View style={{
            paddingHorizontal: Layout.paddingHorizontal,
            paddingVertical: Spacing.md,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <Text style={{
                color: Colors.white,
                fontSize: normalize(24),
                fontWeight: '800',
                letterSpacing: -1,
            }}>
                Community
            </Text>
            
            <View style={{ flexDirection: 'row', gap: Spacing.sm }}>
                <TouchableOpacity
                    onPress={() => router.push('/search')}
                    style={{
                        padding: Spacing.sm,
                        backgroundColor: Colors.border,
                        borderRadius: scale(20),
                    }}>
                    <Search size={scale(20)} color={Colors.white} />
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={() => router.push('/notifications')}
                    style={{
                        padding: Spacing.sm,
                        backgroundColor: Colors.border,
                        borderRadius: scale(20),
                    }}
                >
                    <Bell size={scale(20)} color={Colors.white} />
                    {unreadCount > 0 && (
                        <View style={{
                            position: 'absolute',
                            top: scale(4),
                            right: scale(4),
                            minWidth: scale(16),
                            height: scale(16),
                            backgroundColor: Colors.primary,
                            borderRadius: scale(8),
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 2,
                            borderColor: Colors.background,
                            paddingHorizontal: scale(3),
                        }}>
                            <Text style={{ color: Colors.white, fontSize: normalize(8), fontWeight: 'bold' }}>
                                {unreadCount > 99 ? '99+' : unreadCount}
                            </Text>
                        </View>
                    )}
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={() => router.push("/about-player")}
                    style={{
                        padding: Spacing.sm,
                        backgroundColor: Colors.border,
                        borderRadius: scale(20),
                    }}
                >
                    <UserIcon size={scale(20)} color={Colors.white} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
