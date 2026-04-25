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
import { Plus, Globe, ChevronRight, Camera, Image as ImageIcon } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PostTabHeader } from './PostTabHeader';
import { postService } from '../services/postService';
import { showSuccess, showError } from '../utils/toast';
import { scale, normalize } from '../utils/responsive';

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
    const [appreciationMessage, setAppreciationMessage] = useState('');

    useEffect(() => {
        const getUserId = async () => {
            const id = await AsyncStorage.getItem('userId');
            if (id) setUserId(parseInt(id));
        };
        getUserId();
    }, []);

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
            if (!recipientProfile.trim() || !appreciationMessage.trim()) {
                showError("Please provide both recipient and message");
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
                response = await postService.createPost(userId!, caption, mediaUri!, visibility);
            } else if (activeTab === 'Q&A') {
                response = await postService.createQuestion(userId!, question, visibility);
            } else {
                response = await postService.createAppreciation(userId!, recipientProfile, appreciationMessage, visibility);
            }

            if (response.success) {
                showSuccess(response.message);
                resetForm();
                // Optional: onClose(); 
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
                    <View>
                        <TextInput
                            placeholder="@profile"
                            placeholderTextColor="#ccc"
                            value={recipientProfile}
                            onChangeText={setRecipientProfile}
                            style={{
                                fontSize: normalize(14),
                                color: '#333',
                                borderBottomWidth: 1,
                                borderBottomColor: '#eee',
                                paddingVertical: scale(10)
                            }}
                        />
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
