import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    Image, 
    ActivityIndicator,
    ScrollView,
    Dimensions
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Plus, Globe, ChevronRight, Camera, Image as ImageIcon, X } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PostTabHeader } from './PostTabHeader';
import { postService } from '../services/postService';
import { userSearchService, UserSearchResult } from '../services/userSearchService';
import { showSuccess, showError } from '../utils/toast';
import { scale, normalize } from '../utils/responsive';
import { pickImage, pickVideo, requestMediaPermissions } from '../utils/mediaPicker';
import { getAbsoluteUrl } from '../utils/imageUtils';

const { width } = Dimensions.get('window');

interface CreatePostContainerProps {
    onClose: () => void;
}

export const CreatePostContainer: React.FC<CreatePostContainerProps> = ({ onClose }) => {
    const tabs = ['Create Post', 'Q&A', 'Appreciation'];
    const [activeTab, setActiveTab] = useState('Create Post');
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState<number | null>(null);

    // Form States
    const [caption, setCaption] = useState('');
    const [mediaUri, setMediaUri] = useState<string | null>(null);
    const [visibility, setVisibility] = useState('Public');
    
    const [question, setQuestion] = useState('');
    
    const [recipientProfile, setRecipientProfile] = useState('');
    const [selectedRecipient, setSelectedRecipient] = useState<UserSearchResult | null>(null);
    const [searchResults, setSearchResults] = useState<UserSearchResult[]>([]);
    const [searching, setSearching] = useState(false);
    const [appreciationMessage, setAppreciationMessage] = useState('');

    useEffect(() => {
        const getUserId = async () => {
            const id = await AsyncStorage.getItem('userId');
            if (id) setUserId(parseInt(id));
        };
        getUserId();
    }, []);

    // Mention Search Effect
    useEffect(() => {
        if (activeTab === 'Appreciation' && recipientProfile.length > 1 && !selectedRecipient) {
            const delayDebounceFn = setTimeout(async () => {
                setSearching(true);
                const results = await userSearchService.searchUsers(recipientProfile);
                setSearchResults(results);
                setSearching(false);
            }, 500);
            return () => clearTimeout(delayDebounceFn);
        } else {
            setSearchResults([]);
        }
    }, [recipientProfile, activeTab, selectedRecipient]);

    const pickMedia = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setMediaUri(result.assets[0].uri);
        }
    };

    const validate = () => {
        if (!userId) {
            showError("User not authenticated");
            return false;
        }

        if (activeTab === 'Create Post') {
            if (!mediaUri) {
                showError("Please select a photo or video");
                return false;
            }
        } else if (activeTab === 'Q&A') {
            if (!question.trim()) {
                showError("Please write a question");
                return false;
            }
        } else if (activeTab === 'Appreciation') {
            if (!selectedRecipient || !appreciationMessage.trim()) {
                showError("Please select a profile and write a message");
                return false;
            }
        }
        return true;
    };

    const handlePost = async () => {
        if (!validate()) return;

        setLoading(true);
        try {
            let response;

            if (activeTab === 'Create Post') {
                // Step 1: Upload media to Supabase and get public URL
                showSuccess("Uploading media...");
                const publicUrl = await postService.uploadPostMedia(mediaUri!, userId!);
                if (!publicUrl) {
                    console.error("[PostCreation] Upload failed - publicUrl is null");
                    showError("Media upload failed (Server returned no URL). Please check your internet.");
                    return;
                }
                console.log("[PostCreation] Upload success:", publicUrl);
                // Step 2: Save post with the public URL
                response = await postService.createPost(userId!, caption, publicUrl, visibility);

            } else if (activeTab === 'Q&A') {
                response = await postService.createQuestion(userId!, question, visibility);
            } else {
                response = await postService.createAppreciation(userId!, selectedRecipient!.userId, appreciationMessage, visibility);
            }

            if (response.success) {
                showSuccess(response.message);
                resetForm();
            } else {
                showError(response.message);
            }
        } catch (error) {
            showError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setCaption('');
        setMediaUri(null);
        setQuestion('');
        setRecipientProfile('');
        setSelectedRecipient(null);
        setAppreciationMessage('');
    };

    return (
        <View style={{ 
            backgroundColor: 'white', 
            borderRadius: scale(20), 
            margin: scale(15),
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
            overflow: 'hidden'
        }}>
            <PostTabHeader 
                tabs={tabs} 
                activeTab={activeTab} 
                onTabChange={setActiveTab} 
                onClose={onClose} 
            />

            <ScrollView bounces={false} contentContainerStyle={{ padding: scale(20) }}>
                {activeTab === 'Create Post' && (
                    <View>
                        <TouchableOpacity 
                            onPress={pickMedia}
                            style={{
                                height: scale(180),
                                backgroundColor: '#fdf2f1',
                                borderStyle: 'dashed',
                                borderWidth: 1,
                                borderColor: '#9b3224',
                                borderRadius: scale(15),
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden'
                            }}
                        >
                            {mediaUri ? (
                                <Image source={{ uri: mediaUri }} style={{ width: '100%', height: '100%' }} />
                            ) : (
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ 
                                        backgroundColor: 'white', 
                                        borderRadius: 30, 
                                        padding: 10, 
                                        marginBottom: 10,
                                        borderWidth: 1,
                                        borderColor: '#eee'
                                    }}>
                                        <Plus size={24} color="#9b3224" />
                                    </View>
                                    <Text style={{ color: '#9b3224', fontWeight: 'bold' }}>Add photo or Video</Text>
                                </View>
                            )}
                        </TouchableOpacity>

                        <TextInput
                            placeholder="Write a post.."
                            placeholderTextColor="#ccc"
                            value={caption}
                            onChangeText={setCaption}
                            multiline
                            style={{
                                marginTop: scale(20),
                                fontSize: normalize(14),
                                color: '#333',
                                minHeight: scale(80),
                                textAlignVertical: 'top'
                            }}
                        />
                    </View>
                )}

                {activeTab === 'Q&A' && (
                    <View>
                        <TextInput
                            placeholder="Question..."
                            placeholderTextColor="#ccc"
                            value={question}
                            onChangeText={setQuestion}
                            multiline
                            style={{
                                fontSize: normalize(16),
                                color: '#333',
                                minHeight: scale(150),
                                textAlignVertical: 'top'
                            }}
                        />
                    </View>
                )}

                {activeTab === 'Appreciation' && (
                    <View style={{ zIndex: 100 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                            <TextInput
                                placeholder="@profile"
                                placeholderTextColor="#ccc"
                                value={selectedRecipient ? selectedRecipient.fullName : recipientProfile}
                                onChangeText={(txt) => {
                                    setRecipientProfile(txt);
                                    if (selectedRecipient) setSelectedRecipient(null);
                                }}
                                style={{
                                    flex: 1,
                                    fontSize: normalize(14),
                                    color: selectedRecipient ? '#9b3224' : '#333',
                                    fontWeight: selectedRecipient ? 'bold' : 'normal',
                                    paddingVertical: scale(10)
                                }}
                            />
                            {searching && <ActivityIndicator size="small" color="#9b3224" />}
                            {selectedRecipient && (
                                <TouchableOpacity onPress={() => setSelectedRecipient(null)}>
                                    <X size={16} color="#9b3224" />
                                </TouchableOpacity>
                            )}
                        </View>

                        {/* Search Suggestions */}
                        {!selectedRecipient && searchResults.length > 0 && (
                            <View style={{ 
                                backgroundColor: 'white', 
                                borderRadius: 8, 
                                marginTop: 5,
                                maxHeight: 150,
                                borderWidth: 1,
                                borderColor: '#eee',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                elevation: 3,
                                position: 'absolute',
                                top: 40,
                                left: 0,
                                right: 0,
                                zIndex: 1000
                            }}>
                                <ScrollView keyboardShouldPersistTaps="always">
                                    {searchResults.map(user => (
                                        <TouchableOpacity 
                                            key={user.userId} 
                                            onPress={() => {
                                                setSelectedRecipient(user);
                                                setSearchResults([]);
                                            }}
                                            style={{ 
                                                padding: 10, 
                                                borderBottomWidth: 1, 
                                                borderBottomColor: '#f9f9f9',
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: '#eee', marginRight: 10, overflow: 'hidden' }}>
                                                {user.avatar ? <Image source={{ uri: getAbsoluteUrl(user.avatar)! }} style={{ width: '100%', height: '100%' }} /> : <View style={{ backgroundColor: '#9b3224', width: '100%', height: '100%' }} />}
                                            </View>
                                            <Text style={{ fontSize: 13, color: '#333' }}>{user.fullName}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>
                        )}
                        <TextInput
                            placeholder="Write an appreciation..."
                            placeholderTextColor="#ccc"
                            value={appreciationMessage}
                            onChangeText={setAppreciationMessage}
                            multiline
                            style={{
                                marginTop: scale(15),
                                fontSize: normalize(14),
                                color: '#333',
                                minHeight: scale(120),
                                textAlignVertical: 'top'
                            }}
                        />
                    </View>
                )}

                {/* VISIBILITY SELECTOR */}
                <View style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    borderTopWidth: 1, 
                    borderTopColor: '#f5f5f5',
                    marginTop: scale(20),
                    paddingTop: scale(15)
                }}>
                    <Text style={{ color: '#666', fontSize: normalize(12), fontWeight: 'bold' }}>Visible to</Text>
                    <TouchableOpacity 
                        style={{ flexDirection: 'row', alignItems: 'center', marginLeft: scale(20) }}
                        onPress={() => setVisibility(visibility === 'Public' ? 'Private' : 'Public')}
                    >
                        <Text style={{ color: '#9b3224', fontWeight: 'bold', fontSize: normalize(12) }}>{visibility}</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1 }} />
                    <ChevronRight size={18} color="#ccc" />
                </View>

                {/* POST BUTTON */}
                <View style={{ alignItems: 'flex-end', marginTop: scale(25) }}>
                    <TouchableOpacity
                        onPress={handlePost}
                        disabled={loading}
                        style={{
                            backgroundColor: '#2d0a06',
                            paddingHorizontal: scale(30),
                            paddingVertical: scale(10),
                            borderRadius: scale(20),
                            flexDirection: 'row',
                            alignItems: 'center',
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading && <ActivityIndicator color="white" style={{ marginRight: 10 }} />}
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: normalize(14) }}>Post</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
