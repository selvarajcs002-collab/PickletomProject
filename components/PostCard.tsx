import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MapPin, Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react-native';
import { Colors } from '../constants/Colors';
import { Spacing, Layout } from '../constants/spacing';
import { normalize, scale, verticalScale } from '../utils/responsive';
import { PostDto } from '../models/PostDto';

interface PostCardProps {
    post: PostDto;
    onLike?: (id: string) => void;
    onComment?: (id: string) => void;
    onShare?: (id: string) => void;
}

export const PostCard: React.FC<PostCardProps> = React.memo(({ post, onLike, onComment, onShare }) => {
    const isValidUrl = (url?: string | null) => {
        return url && url.startsWith('http');
    };

    const getInitial = (name: string) => {
        return name ? name.charAt(0).toUpperCase() : '?';
    };

    const avatarValid = isValidUrl(post.user.avatar);
    const imageValid = isValidUrl(post.imageUrl);

    return (
        <View style={{
            backgroundColor: Colors.surface,
            borderRadius: Layout.cardRadius,
            marginBottom: Spacing.lg,
            borderWidth: 1,
            borderColor: Colors.border,
            overflow: 'hidden',
        }}>
            <View style={{ padding: Spacing.md }}>
                {/* Header */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Spacing.md }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.sm }}>
                        {avatarValid ? (
                            <Image 
                                source={{ uri: post.user.avatar! }} 
                                style={{ 
                                    width: scale(40), 
                                    height: scale(40), 
                                    borderRadius: scale(20),
                                    backgroundColor: Colors.surfaceSecondary,
                                }} 
                            />
                        ) : (
                            <View style={{ 
                                width: scale(40), 
                                height: scale(40), 
                                borderRadius: scale(20),
                                backgroundColor: Colors.primarySubtle,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: Colors.primary,
                            }}>
                                <Text style={{ 
                                    color: Colors.primary, 
                                    fontSize: normalize(18), 
                                    fontWeight: 'bold' 
                                }}>
                                    {getInitial(post.user.name)}
                                </Text>
                            </View>
                        )}
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.xs }}>
                                <Text style={{ color: Colors.white, fontWeight: '700', fontSize: normalize(14) }}>
                                    {post.user.name}
                                </Text>
                                {post.user.isPro && (
                                    <View style={{ backgroundColor: Colors.primary, paddingHorizontal: scale(6), paddingVertical: scale(2), borderRadius: scale(4) }}>
                                        <Text style={{ color: Colors.white, fontSize: normalize(8), fontWeight: '800' }}>PRO</Text>
                                    </View>
                                )}
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                <MapPin size={scale(10)} color={Colors.textMuted} />
                                <Text style={{ color: Colors.textMuted, fontSize: normalize(10) }}>
                                    {post.user.location} • {post.time}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={{ padding: Spacing.xs }}>
                        <MoreHorizontal size={scale(20)} color={Colors.textMuted} />
                    </TouchableOpacity>
                </View>

                {/* Content */}
                <Text style={{ color: Colors.text, fontSize: normalize(14), lineHeight: normalize(20), marginBottom: imageValid ? Spacing.md : 0 }}>
                    {post.content}
                </Text>

                {/* Image */}
                {imageValid && (
                    <View style={{ 
                        height: verticalScale(200), 
                        backgroundColor: Colors.surfaceSecondary, 
                        borderRadius: Layout.borderRadius,
                        overflow: 'hidden',
                        marginTop: Spacing.md,
                    }}>
                        <Image 
                            source={{ uri: post.imageUrl! }} 
                            style={{ width: '100%', height: '100%' }}
                            resizeMode="cover"
                        />
                    </View>
                )}
            </View>

            {/* Actions */}
            <View style={{ 
                paddingHorizontal: Spacing.md,
                paddingVertical: Spacing.sm, 
                borderTopWidth: 1, 
                borderColor: Colors.borderSubtle,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <View style={{ flexDirection: 'row', gap: Spacing.lg }}>
                    <TouchableOpacity 
                        onPress={() => onLike?.(post.postId)}
                        style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.xs }}
                    >
                        <Heart size={scale(18)} color={Colors.textMuted} />
                        <Text style={{ color: Colors.textMuted, fontSize: normalize(12) }}>{post.likes}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        onPress={() => onComment?.(post.postId)}
                        style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.xs }}
                    >
                        <MessageCircle size={scale(18)} color={Colors.textMuted} />
                        <Text style={{ color: Colors.textMuted, fontSize: normalize(12) }}>{post.comments}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        onPress={() => onShare?.(post.postId)}
                        style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.xs }}
                    >
                        <Share2 size={scale(18)} color={Colors.textMuted} />
                        <Text style={{ color: Colors.textMuted, fontSize: normalize(12) }}>{post.shares}</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{ flexDirection: 'row', gap: -scale(8) }}>
                    {[1, 2, 3].map((i) => (
                        <View 
                            key={i} 
                            style={{ 
                                width: scale(20), 
                                height: scale(20), 
                                borderRadius: scale(10), 
                                borderWidth: 2, 
                                borderColor: Colors.surface,
                                backgroundColor: Colors.surfaceSecondary,
                            }} 
                        />
                    ))}
                </View>
            </View>
        </View>
    );
});
