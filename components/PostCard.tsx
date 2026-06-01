import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
    View, Text, TouchableOpacity, Image, Modal, Animated,
    Share, Alert, Pressable, TextInput, ScrollView,
    KeyboardAvoidingView, Platform, Keyboard, ActivityIndicator,
} from 'react-native';
// Q&A accent colour (amber)
const QA_COLOR  = '#9b3224';
const QA_SUBTLE = '#fdf2f1';
const APP_COLOR = '#0a4d2d';
const APP_SUBTLE = '#f1f8f4';
import {
    MapPin, Heart, MessageCircle, Share2, MoreHorizontal,
    Trash2, Pin, EyeOff, Edit2, X, Send, CheckCircle,
} from 'lucide-react-native';
import { Colors } from '../constants/Colors';
import { Spacing, Layout } from '../constants/spacing';
import { normalize, scale, verticalScale } from '../utils/responsive';
import { PostDto } from '../models/PostDto';
import { postService } from '../services/postService';
import { BASE_URL } from '../services/api';

interface CommentItem {
    commentId: number;
    userId: number;
    userName: string;
    userAvatar?: string;
    commentText: string;
    time: string;
}

interface PostCardProps {
    post: PostDto;
    currentUserId: number | null;
    onDelete?: (id: string) => void;
    onHide?: (id: string) => void;
    onPin?: () => void;   // callback to refresh feed after pin
}

export const PostCard: React.FC<PostCardProps> = React.memo(({
    post, currentUserId, onDelete, onHide, onPin,
}) => {
    // ── Like state ────────────────────────────────────────────
    const [liked, setLiked]         = useState(post.isLikedByMe);
    const [likeCount, setLikeCount] = useState(post.likes);
    const [liking, setLiking]       = useState(false);

    useEffect(() => { setLiked(post.isLikedByMe); setLikeCount(post.likes); }, [post.isLikedByMe, post.likes]);

    // ── UI state ──────────────────────────────────────────────
    const [menuVisible, setMenuVisible]       = useState(false);
    const [commentVisible, setCommentVisible] = useState(false);
    const [editVisible, setEditVisible]       = useState(false);
    const [commentText, setCommentText]       = useState('');
    const [editCaption, setEditCaption]       = useState(post.content || '');
    const [editSaving, setEditSaving]         = useState(false);
    const [localContent, setLocalContent]    = useState(post.content || '');
    const [commentCount, setCommentCount]    = useState(post.comments);
    const isQuestion = post.postType?.toUpperCase() === 'QUESTION';
    const isAppreciation = post.postType?.toUpperCase() === 'APPRECIATION';

    // ── Comment sheet state ───────────────────────────────────
    const [comments, setComments]           = useState<CommentItem[]>([]);
    const [loadingComments, setLoadingComments] = useState(false);
    const [sendingComment, setSendingComment]   = useState(false);
    // Keyboard height: drives bottom offset of the sheet
    const [kbHeight, setKbHeight]           = useState(0);
    const scrollRef = useRef<ScrollView>(null);

    useEffect(() => { setLocalContent(post.content || ''); }, [post.content]);
    useEffect(() => { setCommentCount(post.comments); }, [post.comments]);

    // ── Keyboard listeners — only active when comment sheet open ──
    useEffect(() => {
        if (!commentVisible) { setKbHeight(0); return; }
        const showEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
        const hideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
        const onShow = (e: any) => setKbHeight(e.endCoordinates.height);
        const onHide = () => setKbHeight(0);
        const sub1 = Keyboard.addListener(showEvent, onShow);
        const sub2 = Keyboard.addListener(hideEvent, onHide);
        isQuestion ? loadAnswers() : loadComments();
        return () => { sub1.remove(); sub2.remove(); };
    }, [commentVisible]);

    const loadAnswers = useCallback(async () => {
        setLoadingComments(true);
        try {
            const data = await postService.getAnswers(post.postId);
            setComments(data.map((a: any) => ({
                commentId: a.answerId,
                userId: a.userId,
                userName: a.userName || 'User',
                userAvatar: a.userAvatar,
                commentText: a.answerText,
                time: a.time || '',
            })));
        } catch (_) {} finally { setLoadingComments(false); }
    }, [post.postId]);

    const loadComments = useCallback(async () => {
        setLoadingComments(true);
        try {
            const postType = isQuestion ? 'QUESTION' : isAppreciation ? 'APPRECIATION' : 'POST';
            const data = await postService.getComments(post.postId, postType);
            setComments(data.map((c: any) => ({
                commentId: c.commentId,
                userId: c.userId,
                userName: c.userName || 'User',
                userAvatar: c.userAvatar,
                commentText: c.commentText,
                time: c.time || '',
                likes: c.likes || 0,
                isLikedByMe: c.isLikedByMe || false,
            })));
        } catch (_) {} finally { setLoadingComments(false); }
    }, [post.postId, isQuestion, isAppreciation]);

    const handleSendComment = useCallback(async () => {
        const text = commentText.trim();
        if (!text || !currentUserId || sendingComment) return;
        setSendingComment(true);
        setCommentText('');
        try {
            const postType = isQuestion ? 'QUESTION' : isAppreciation ? 'APPRECIATION' : 'POST';
            const res = isQuestion
                ? await postService.addAnswer(post.postId, currentUserId, text)
                : await postService.addComment(post.postId, currentUserId, text, postType);
            if (res.success) {
                isQuestion ? await loadAnswers() : await loadComments();
                setCommentCount(c => c + 1);
                setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 200);
            } else { setCommentText(text); }
        } catch { setCommentText(text); }
        finally { setSendingComment(false); }
    }, [commentText, currentUserId, sendingComment, post.postId, loadComments]);

    const heartScale = useRef(new Animated.Value(1)).current;

    const isOwnPost   = currentUserId !== null && Number(post.user.userId) === Number(currentUserId);
    const displayName = isOwnPost ? 'You' : (post.user.name || 'User');
    const getInitial  = (name: string) => (name ? name.charAt(0).toUpperCase() : '?');
    
    const getAbsoluteUrl = (url?: string | null) => {
        if (!url || url === '—') return null;
        
        // If it's an upload, force it to use the current active BASE_URL root.
        // This fixes issues where the DB saved an old IP address (e.g., http://192.168.x.x/uploads/...)
        const uploadIndex = url.indexOf('/uploads/');
        if (uploadIndex !== -1) {
            const relativePath = url.substring(uploadIndex);
            const rootUrl = BASE_URL.replace(/\/api\/?$/, '');
            return `${rootUrl}${relativePath}`;
        }

        if (url.startsWith('http') || url.startsWith('file://')) return url;
        
        const rootUrl = BASE_URL.replace(/\/api\/?$/, '');
        return url.startsWith('/') ? `${rootUrl}${url}` : `${rootUrl}/${url}`;
    };

    const avatarValid = !!getAbsoluteUrl(post.user.avatar);
    const imageValid  = !!getAbsoluteUrl(post.imageUrl);

    // ── Like ──────────────────────────────────────────────────
    const handleLike = useCallback(async () => {
        if (!currentUserId || liking) return;
        setLiking(true);
        const wasLiked = liked;
        setLiked(!wasLiked);
        setLikeCount(c => !wasLiked ? c + 1 : Math.max(0, c - 1));
        Animated.sequence([
            Animated.spring(heartScale, { toValue: 1.5, useNativeDriver: true, speed: 40 }),
            Animated.spring(heartScale, { toValue: 1,   useNativeDriver: true, speed: 25 }),
        ]).start();
        try {
            const postType = isQuestion ? 'QUESTION' : isAppreciation ? 'APPRECIATION' : 'POST';
            const res = await postService.toggleLike(post.postId, currentUserId, postType);
            // Handle both camelCase and PascalCase response
            const success = res.success ?? (res as any).Success;
            const resLiked = res.isLiked ?? (res as any).IsLiked;
            const resCount = res.likeCount ?? (res as any).LikeCount;
            if (success) { setLiked(resLiked); setLikeCount(resCount); }
            else { setLiked(wasLiked); setLikeCount(c => wasLiked ? c + 1 : Math.max(0, c - 1)); }
        } catch { setLiked(wasLiked); setLikeCount(c => wasLiked ? c + 1 : Math.max(0, c - 1)); }
        finally { setLiking(false); }
    }, [currentUserId, liked, liking, post.postId, isQuestion]);

    const handleShare = useCallback(async () => {
        try { 
            const shareMessage = post.imageUrl 
                ? `Check out this post on Pickleon!\n\n"${localContent}"\n\n${post.imageUrl}`
                : `"${localContent}"`;
            await Share.share({ message: shareMessage, title: 'Pickleon Post' }); 
        } catch (_) {}
    }, [localContent, post.imageUrl]);

    const handleLikeAnswer = async (answerId: number) => {
        if (!currentUserId) return;
        try {
            const res = await postService.toggleLike(answerId.toString(), currentUserId, 'ANSWER');
            if (res.success) {
                setComments(prev => prev.map(c => 
                    c.commentId === answerId 
                        ? { ...c, isLikedByMe: res.isLiked, likes: res.likeCount } 
                        : c
                ));
            }
        } catch (_) {}
    };

    const handleHide = useCallback(async () => {
        setMenuVisible(false);
        if (!currentUserId) return;
        const postType = isQuestion ? 'QUESTION' : isAppreciation ? 'APPRECIATION' : 'POST';
        try { await postService.hidePost(post.postId, currentUserId, postType); onHide?.(post.postId); } catch (_) {}
    }, [currentUserId, post.postId, onHide, isQuestion, isAppreciation]);

    const handlePin = useCallback(async () => {
        setMenuVisible(false);
        if (!currentUserId) return;
        const postType = isQuestion ? 'QUESTION' : isAppreciation ? 'APPRECIATION' : 'POST';
        try {
            await postService.pinPost(post.postId, currentUserId, postType);
            Alert.alert('📌 Pinned!', 'Refreshing feed...');
            onPin?.();
        } catch (_) {}
    }, [currentUserId, post.postId, isQuestion, onPin]);

    const handleDelete = useCallback(() => {
        setMenuVisible(false);
        Alert.alert('Delete Content', `This will permanently delete your ${isQuestion ? 'question' : 'post'}.`, [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Delete', style: 'destructive', onPress: () => onDelete?.(post.postId, post.postType) },
        ]);
    }, [post.postId, post.postType, onDelete, isQuestion]);

    const handleEditSave = useCallback(async () => {
        if (!editCaption.trim() || !currentUserId || editSaving) return;
        setEditSaving(true);
        try {
            const res = await postService.updatePost(post.postId, currentUserId, editCaption.trim(), post.imageUrl || undefined, post.visibility, post.postType);
            if (res.success) { setLocalContent(editCaption.trim()); setEditVisible(false); }
            else Alert.alert('Update Failed', res.message || 'Please try again.');
        } catch { Alert.alert('Error', 'Network error.'); }
        finally { setEditSaving(false); }
    }, [editCaption, currentUserId, editSaving, post.postId, post.imageUrl, post.visibility, post.postType]);

    const menuOptions = isOwnPost
        ? [
            { icon: <Edit2  size={scale(16)} color={Colors.primary} />, label: 'Edit Post',   labelColor: Colors.primary, onPress: () => { setMenuVisible(false); setEditCaption(localContent); setEditVisible(true); } },
            { icon: <Trash2 size={scale(16)} color={Colors.error}   />, label: 'Delete Post', labelColor: Colors.error,   onPress: handleDelete },
          ]
        : [
            { icon: <Pin    size={scale(16)} color={Colors.primary}   />, label: 'Pin to Top of Feed', labelColor: Colors.primary,   onPress: handlePin },
            { icon: <EyeOff size={scale(16)} color={Colors.textMuted} />, label: 'Hide Post',                                        onPress: handleHide },
          ];

    return (
        <View style={{ 
            backgroundColor: Colors.surface, 
            borderRadius: Layout.cardRadius, 
            marginBottom: Spacing.lg, 
            borderWidth: (isQuestion || isAppreciation) ? 1.5 : 1, 
            borderColor: isQuestion ? QA_COLOR : isAppreciation ? APP_COLOR : Colors.border, 
            overflow: 'hidden' 
        }}>

            {/* ── Header ──────────────────────────────────────── */}
            {/* Q&A banner */}
            {isQuestion && (
                <View style={{ backgroundColor: QA_SUBTLE, flexDirection: 'row', alignItems: 'center', gap: Spacing.xs, paddingHorizontal: Spacing.md, paddingVertical: scale(6), borderBottomWidth: 1, borderColor: QA_COLOR }}>
                    <Text style={{ color: QA_COLOR, fontSize: normalize(11), fontWeight: '800', letterSpacing: 0.5 }}>❓ Q&A</Text>
                    <Text style={{ color: QA_COLOR, fontSize: normalize(10), opacity: 0.8 }}>· Share your knowledge</Text>
                </View>
            )}
            
            {/* Appreciation banner */}
            {isAppreciation && (
                <View style={{ backgroundColor: APP_SUBTLE, flexDirection: 'row', alignItems: 'center', gap: Spacing.xs, paddingHorizontal: Spacing.md, paddingVertical: scale(6), borderBottomWidth: 1, borderColor: APP_COLOR }}>
                    <Text style={{ color: APP_COLOR, fontSize: normalize(11), fontWeight: '800', letterSpacing: 0.5 }}>🏆 APPRECIATION</Text>
                    <Text style={{ color: APP_COLOR, fontSize: normalize(10), opacity: 0.8 }}>· Spreading positivity</Text>
                </View>
            )}

            <View style={{ padding: Spacing.md, paddingBottom: Spacing.sm, backgroundColor: isQuestion ? QA_SUBTLE : isAppreciation ? APP_SUBTLE : 'transparent' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, flex: 1 }}>
                        {avatarValid
                            ? <Image source={{ uri: getAbsoluteUrl(post.user.avatar)! }} style={{ width: scale(42), height: scale(42), borderRadius: scale(21), backgroundColor: Colors.surfaceSecondary }} />
                            : <View style={{ width: scale(42), height: scale(42), borderRadius: scale(21), backgroundColor: isAppreciation ? APP_COLOR + '20' : Colors.primarySubtle, alignItems: 'center', justifyContent: 'center', borderWidth: 1.5, borderColor: isAppreciation ? APP_COLOR : Colors.primary }}>
                                <Text style={{ color: isAppreciation ? APP_COLOR : Colors.primary, fontSize: normalize(17), fontWeight: 'bold' }}>{getInitial(post.user.name)}</Text>
                              </View>
                        }
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: Spacing.xs }}>
                                <Text style={{ 
                                    color: (isAppreciation) ? APP_COLOR : (isQuestion) ? QA_COLOR : (isOwnPost ? Colors.primary : Colors.white), 
                                    fontWeight: '700', 
                                    fontSize: normalize(14) 
                                }}>
                                    {isOwnPost ? 'You' : post.user.name}
                                </Text>
                                {isAppreciation && (
                                    <>
                                        <Text style={{ color: Colors.textMuted, fontSize: normalize(12) }}>appreciated</Text>
                                        <Text style={{ color: APP_COLOR, fontWeight: '700', fontSize: normalize(14) }}>{post.recipientName || 'User'}</Text>
                                    </>
                                )}
                                {post.user.isPro && <View style={{ backgroundColor: Colors.primary, paddingHorizontal: scale(5), paddingVertical: scale(2), borderRadius: scale(4) }}><Text style={{ color: Colors.white, fontSize: normalize(8), fontWeight: '800' }}>PRO</Text></View>}
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 3, marginTop: 2 }}>
                                {!!post.user.location && (<><MapPin size={scale(10)} color={Colors.textMuted} /><Text style={{ color: Colors.textMuted, fontSize: normalize(10) }}>{post.user.location}</Text><Text style={{ color: Colors.textMuted, fontSize: normalize(10) }}> · </Text></>)}
                                <Text style={{ color: Colors.textMuted, fontSize: normalize(10) }}>{post.time}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setMenuVisible(true)} style={{ padding: Spacing.xs }} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                        <MoreHorizontal size={scale(20)} color={Colors.textMuted} />
                    </TouchableOpacity>
                </View>
                {!!localContent && (
                    <Text style={{ 
                        color: isQuestion ? QA_COLOR : isAppreciation ? APP_COLOR : Colors.text, 
                        fontSize: (isQuestion || isAppreciation) ? normalize(15) : normalize(14), 
                        fontWeight: (isQuestion || isAppreciation) ? '600' : '400', 
                        lineHeight: normalize(22), 
                        marginTop: Spacing.sm 
                    }}>
                        {localContent}
                    </Text>
                )}
            </View>

            {/* ── Media ───────────────────────────────────────── */}
            {imageValid && getAbsoluteUrl(post.imageUrl) ? (
                <View style={{ width: '100%', height: verticalScale(230), backgroundColor: Colors.surfaceSecondary, justifyContent: 'center', alignItems: 'center' }}>
                    <Image 
                        source={{ uri: getAbsoluteUrl(post.imageUrl)! }} 
                        style={{ width: '100%', height: '100%', position: 'absolute' }} 
                        resizeMode="cover"
                    />
                </View>
            ) : null}

            {/* ── Actions ─────────────────────────────────────── */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.lg, paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm, borderTopWidth: 1, borderColor: Colors.borderSubtle }}>
                <TouchableOpacity onPress={handleLike} disabled={liking || !currentUserId} style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.xs }} activeOpacity={0.7}>
                    <Animated.View style={{ transform: [{ scale: heartScale }] }}>
                        <Heart size={scale(20)} color={liked ? Colors.error : Colors.textMuted} fill={liked ? Colors.error : 'transparent'} />
                    </Animated.View>
                    <Text style={{ color: liked ? Colors.error : Colors.textMuted, fontSize: normalize(12), fontWeight: liked ? '700' : '400' }}>{likeCount > 0 ? likeCount : 'Like'}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setCommentVisible(true)} style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.xs }} activeOpacity={0.7}>
                    <MessageCircle size={scale(20)} color={isQuestion ? QA_COLOR : isAppreciation ? APP_COLOR : Colors.textMuted} />
                    <Text style={{ color: isQuestion ? QA_COLOR : isAppreciation ? APP_COLOR : Colors.textMuted, fontSize: normalize(13), fontWeight: '600' }}>
                        {isQuestion 
                            ? `${commentCount} ${commentCount === 1 ? 'Answer' : 'Answers'}` 
                            : `${commentCount} ${commentCount === 1 ? 'Comment' : 'Comments'}`
                        }
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleShare} style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.xs }} activeOpacity={0.7}>
                    <Share2 size={scale(20)} color={Colors.textMuted} />
                    <Text style={{ color: Colors.textMuted, fontSize: normalize(12) }}>{post.shares > 0 ? post.shares : 'Share'}</Text>
                </TouchableOpacity>
            </View>

            {/* ══ 3-dot Menu ═══════════════════════════════════════ */}
            <Modal transparent visible={menuVisible} animationType="fade" onRequestClose={() => setMenuVisible(false)}>
                <Pressable style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.65)', justifyContent: 'flex-end' }} onPress={() => setMenuVisible(false)}>
                    <Pressable onPress={() => {}}>
                        <View style={{ backgroundColor: Colors.surface, borderTopLeftRadius: scale(24), borderTopRightRadius: scale(24), paddingTop: Spacing.md, paddingBottom: verticalScale(36), borderTopWidth: 1, borderColor: Colors.border }}>
                            <View style={{ width: scale(40), height: scale(4), backgroundColor: Colors.border, borderRadius: 2, alignSelf: 'center', marginBottom: Spacing.md }} />
                            <Text style={{ color: Colors.textMuted, fontSize: normalize(11), fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1, paddingHorizontal: Spacing.lg, marginBottom: Spacing.xs }}>{isOwnPost ? 'Manage Post' : 'Post Options'}</Text>
                            {menuOptions.map((opt, i) => (
                                <TouchableOpacity key={i} onPress={opt.onPress} style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.md, paddingHorizontal: Spacing.lg, paddingVertical: Spacing.md }} activeOpacity={0.7}>
                                    {opt.icon}
                                    <Text style={{ color: (opt as any).labelColor || Colors.text, fontSize: normalize(15), fontWeight: '500' }}>{opt.label}</Text>
                                </TouchableOpacity>
                            ))}
                            <TouchableOpacity onPress={() => setMenuVisible(false)} style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.md, paddingHorizontal: Spacing.lg, paddingVertical: Spacing.md, marginTop: Spacing.xs, borderTopWidth: 1, borderColor: Colors.borderSubtle }} activeOpacity={0.7}>
                                <X size={scale(16)} color={Colors.textMuted} />
                                <Text style={{ color: Colors.textMuted, fontSize: normalize(15) }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </Pressable>
            </Modal>

            {/* ══ Edit Modal ════════════════════════════════════════ */}
            <Modal transparent visible={editVisible} animationType="slide" onRequestClose={() => setEditVisible(false)}>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Pressable style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.65)' }} onPress={() => setEditVisible(false)} />
                    <View style={{ backgroundColor: Colors.surface, borderTopLeftRadius: scale(24), borderTopRightRadius: scale(24), borderTopWidth: 1, borderColor: Colors.border }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.lg, paddingVertical: Spacing.md, borderBottomWidth: 1, borderColor: Colors.borderSubtle }}>
                            <Text style={{ color: Colors.white, fontWeight: '700', fontSize: normalize(16) }}>Edit Post</Text>
                            <TouchableOpacity onPress={() => setEditVisible(false)}><X size={scale(20)} color={Colors.textMuted} /></TouchableOpacity>
                        </View>
                        <View style={{ padding: Spacing.lg }}>
                            <TextInput value={editCaption} onChangeText={setEditCaption} placeholder="What's on your mind?" placeholderTextColor={Colors.textMuted} multiline autoFocus
                                style={{ color: Colors.white, fontSize: normalize(14), lineHeight: normalize(22), minHeight: verticalScale(100), backgroundColor: Colors.surfaceSecondary, borderRadius: scale(12), padding: Spacing.md, textAlignVertical: 'top' }}
                            />
                        </View>
                        <View style={{ paddingHorizontal: Spacing.lg, paddingBottom: verticalScale(32) }}>
                            <TouchableOpacity onPress={handleEditSave} disabled={!editCaption.trim() || editSaving}
                                style={{ backgroundColor: editCaption.trim() && !editSaving ? Colors.primary : Colors.surfaceSecondary, borderRadius: scale(20), paddingVertical: scale(14), alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: Spacing.xs }}
                                activeOpacity={0.8}>
                                <CheckCircle size={scale(16)} color={Colors.white} />
                                <Text style={{ color: Colors.white, fontWeight: '700', fontSize: normalize(15) }}>{editSaving ? 'Saving…' : 'Save Changes'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>

            {/* ══ Comment Sheet ═════════════════════════════════════
             *  KEY FIX: The sheet uses position:absolute with
             *  bottom = kbHeight. When the keyboard appears the
             *  Keyboard listener updates kbHeight, sliding the
             *  entire sheet (including input row) above the keyboard.
             *  This works reliably on Android without KAV gymnastics.
             ══════════════════════════════════════════════════════ */}
            <Modal transparent visible={commentVisible} animationType="slide" statusBarTranslucent onRequestClose={() => { Keyboard.dismiss(); setCommentVisible(false); }}>
                {/* Backdrop — tapping closes sheet */}
                <Pressable
                    style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.65)' }}
                    onPress={() => { Keyboard.dismiss(); setCommentVisible(false); }}
                />

                {/* Sheet — floats above keyboard via bottom:kbHeight */}
                <View style={{
                    position: 'absolute', left: 0, right: 0,
                    bottom: kbHeight,              // ← slides up with keyboard
                    backgroundColor: Colors.surface,
                    borderTopLeftRadius: scale(24),
                    borderTopRightRadius: scale(24),
                    borderTopWidth: 1,
                    borderColor: Colors.border,
                    maxHeight: verticalScale(480),
                }}>
                    {/* Drag handle */}
                    <View style={{ width: scale(40), height: scale(4), backgroundColor: Colors.border, borderRadius: 2, alignSelf: 'center', marginTop: Spacing.sm }} />

                    {/* Title */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.lg, paddingVertical: Spacing.md, borderBottomWidth: 1, borderColor: isQuestion ? QA_COLOR : Colors.borderSubtle }}>
                        <View>
                            <Text style={{ color: isQuestion ? QA_COLOR : Colors.white, fontWeight: '700', fontSize: normalize(16) }}>{isQuestion ? '💬 Answers' : 'Comments'}</Text>
                            {commentCount > 0 && <Text style={{ color: Colors.textMuted, fontSize: normalize(11) }}>{commentCount} {isQuestion ? 'answer' : 'comment'}{commentCount !== 1 ? 's' : ''}</Text>}
                        </View>
                        <TouchableOpacity onPress={() => { Keyboard.dismiss(); setCommentVisible(false); }} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                            <X size={scale(22)} color={Colors.textMuted} />
                        </TouchableOpacity>
                    </View>

                    {/* Comments list */}
                    <ScrollView
                        ref={scrollRef}
                        keyboardShouldPersistTaps="handled"
                        style={{ maxHeight: verticalScale(300) }}
                        contentContainerStyle={{ flexGrow: 1 }}
                    >
                        {loadingComments ? (
                            <View style={{ padding: Spacing.xl, alignItems: 'center' }}>
                                <ActivityIndicator color={Colors.primary} />
                            </View>
                        ) : comments.length === 0 ? (
                            <View style={{ padding: Spacing.xl, alignItems: 'center' }}>
                                <MessageCircle size={scale(32)} color={Colors.border} />
                                <Text style={{ color: Colors.white, fontSize: normalize(14), fontWeight: '600', marginTop: Spacing.sm }}>{isQuestion ? 'No answers yet' : 'No comments yet'}</Text>
                                <Text style={{ color: Colors.textMuted, fontSize: normalize(12), marginTop: 4 }}>{isQuestion ? 'Be the first to answer!' : 'Start the conversation!'}</Text>
                            </View>
                        ) : (
                            comments.map(c => (
                                <View key={c.commentId} style={{ flexDirection: 'row', gap: Spacing.sm, paddingHorizontal: Spacing.lg, paddingVertical: Spacing.sm }}>
                                    <View style={{ width: scale(32), height: scale(32), borderRadius: scale(16), backgroundColor: Colors.primarySubtle, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: Colors.primary }}>
                                        <Text style={{ color: Colors.primary, fontSize: normalize(12), fontWeight: 'bold' }}>{getInitial(c.userName)}</Text>
                                    </View>
                                    <View style={{ flex: 1, backgroundColor: Colors.surfaceSecondary, borderRadius: scale(12), padding: Spacing.sm }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.xs, marginBottom: 2 }}>
                                            <Text style={{ color: Colors.primary, fontSize: normalize(12), fontWeight: '700' }}>
                                                {Number(c.userId) === Number(currentUserId) ? 'You' : (c.userName || 'User')}
                                            </Text>
                                            {!!c.time && <Text style={{ color: Colors.textMuted, fontSize: normalize(10) }}>· {c.time}</Text>}
                                        </View>
                                        <Text style={{ color: Colors.text, fontSize: normalize(13) }}>{c.commentText}</Text>
                                        
                                        {isQuestion && (
                                            <TouchableOpacity 
                                                onPress={() => handleLikeAnswer(c.commentId)}
                                                style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 8 }}
                                            >
                                                <Heart size={scale(14)} color={c.isLikedByMe ? Colors.error : Colors.textMuted} fill={c.isLikedByMe ? Colors.error : 'transparent'} />
                                                <Text style={{ color: c.isLikedByMe ? Colors.error : Colors.textMuted, fontSize: normalize(11) }}>{c.likes > 0 ? c.likes : 'Like'}</Text>
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </View>
                            ))
                        )}
                    </ScrollView>

                    {/* Divider */}
                    <View style={{ height: 1, backgroundColor: Colors.borderSubtle }} />

                    {/* Input row */}
                    <View style={{
                        flexDirection: 'row', alignItems: 'flex-end', gap: Spacing.sm,
                        paddingHorizontal: Spacing.md, paddingTop: Spacing.sm,
                        paddingBottom: Platform.OS === 'ios' ? Spacing.lg : Spacing.md,
                    }}>
                        <View style={{ width: scale(32), height: scale(32), borderRadius: scale(16), backgroundColor: Colors.primarySubtle, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: Colors.primary }}>
                            <Text style={{ color: Colors.primary, fontSize: normalize(12), fontWeight: 'bold' }}>{getInitial(post.user.name)}</Text>
                        </View>

                        <View style={{ flex: 1, backgroundColor: Colors.surfaceSecondary, borderRadius: scale(20), paddingHorizontal: Spacing.md, paddingVertical: scale(8), minHeight: scale(40), justifyContent: 'center' }}>
                            <TextInput
                                value={commentText} onChangeText={setCommentText}
                                placeholder={isQuestion ? 'Write your answer…' : 'Add a comment…'} placeholderTextColor={Colors.textMuted}
                                style={{ color: Colors.white, fontSize: normalize(13), maxHeight: scale(80) }}
                                multiline maxLength={500}
                            />
                        </View>

                        <TouchableOpacity
                            onPress={handleSendComment}
                            disabled={!commentText.trim() || sendingComment}
                            style={{ width: scale(40), height: scale(40), borderRadius: scale(20), backgroundColor: commentText.trim() && !sendingComment ? Colors.primary : Colors.surfaceSecondary, alignItems: 'center', justifyContent: 'center' }}
                            activeOpacity={0.7}
                        >
                            {sendingComment
                                ? <ActivityIndicator size="small" color={Colors.white} />
                                : <Send size={scale(16)} color={commentText.trim() ? Colors.white : Colors.textMuted} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
});
