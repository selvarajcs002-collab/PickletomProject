import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { Spacing } from '../constants/spacing';
import { normalize, scale } from '../utils/responsive';

interface TabsProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
    return (
        <View style={{ marginBottom: Spacing.md }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: Spacing.lg, gap: Spacing.sm }}
            >
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => onTabChange(tab)}
                        activeOpacity={0.8}
                        style={{
                            paddingHorizontal: scale(20),
                            paddingVertical: scale(10),
                            borderRadius: scale(24),
                            borderWidth: 1,
                            backgroundColor: activeTab === tab ? Colors.primary : Colors.surface,
                            borderColor: activeTab === tab ? Colors.primary : Colors.border,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: normalize(12),
                                fontWeight: '700',
                                color: activeTab === tab ? Colors.white : Colors.textSecondary,
                            }}
                        >
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};
