import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { X } from 'lucide-react-native';
import { scale, normalize } from '../utils/responsive';

interface PostTabHeaderProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
    onClose?: () => void;
}

export const PostTabHeader: React.FC<PostTabHeaderProps> = ({ 
    tabs, 
    activeTab, 
    onTabChange, 
    onClose 
}) => {
    return (
        <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            paddingHorizontal: scale(15),
            paddingVertical: scale(10),
            backgroundColor: 'white',
            borderTopLeftRadius: scale(20),
            borderTopRightRadius: scale(20),
        }}>
            <View style={{ flexDirection: 'row', gap: scale(15) }}>
                {tabs.map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                        <TouchableOpacity
                            key={tab}
                            onPress={() => onTabChange(tab)}
                            style={{
                                backgroundColor: isActive ? '#2d0a06' : 'transparent',
                                paddingHorizontal: scale(12),
                                paddingVertical: scale(6),
                                borderRadius: scale(20),
                            }}
                        >
                            <Text style={{
                                color: isActive ? 'white' : '#666',
                                fontSize: normalize(12),
                                fontWeight: 'bold'
                            }}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            
            <TouchableOpacity onPress={onClose} style={{ padding: scale(5) }}>
                <X size={scale(20)} color="#666" />
            </TouchableOpacity>
        </View>
    );
};
