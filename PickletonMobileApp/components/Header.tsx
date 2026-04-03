import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Search, Bell, User as UserIcon } from 'lucide-react-native';
import { Colors } from '../constants/Colors';
import { Spacing, Layout } from '../constants/spacing';
import { normalize, scale } from '../utils/responsive';
import { useRouter } from 'expo-router';

export const Header = () => {
    const router = useRouter();
    
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
                <TouchableOpacity style={{
                    padding: Spacing.sm,
                    backgroundColor: Colors.border,
                    borderRadius: scale(20),
                }}>
                    <Search size={scale(20)} color={Colors.white} />
                </TouchableOpacity>
                
                <TouchableOpacity style={{
                    padding: Spacing.sm,
                    backgroundColor: Colors.border,
                    borderRadius: scale(20),
                }}>
                    <Bell size={scale(20)} color={Colors.white} />
                    <View style={{
                        position: 'absolute',
                        top: scale(4),
                        right: scale(4),
                        width: scale(14),
                        height: scale(14),
                        backgroundColor: Colors.primary,
                        borderRadius: scale(7),
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 2,
                        borderColor: Colors.background,
                    }}>
                        <Text style={{ color: Colors.white, fontSize: normalize(7), fontWeight: 'bold' }}>9</Text>
                    </View>
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
