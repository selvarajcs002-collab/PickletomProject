import React, { useState } from "react";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Image,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
} from "react-native";
import {
    X,
    Plus,
    Image as ImageIcon,
    Video,
    Smile,
    Globe,
    Camera,
    Link,
    ChevronRight,
} from "lucide-react-native";
import {
    scale,
    verticalScale,
    normalize,
} from "../utils/responsive";
import * as Colors from "../constants/Colors";


export default function CreatePostScreen() {
    const router = useRouter();
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState<string | null>(null);

    const handleBack = () => router.back();

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1 }}>
                        {/* HEADER */}
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: scale(10),
                                paddingVertical: verticalScale(55),
                                borderBottomWidth: 0.5,
                                borderBottomColor: "rgba(255,255,255,0.1)",
                            }}
                        >
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image
                                    source={{ uri: "https://i.pravatar.cc/100" }}
                                    style={{
                                        width: scale(36),
                                        height: scale(40),
                                        borderRadius: scale(18),
                                        marginRight: scale(10),
                                    }}
                                />

                                <View>
                                    <Text
                                        style={{
                                            fontSize: normalize(13),
                                            fontWeight: "600",
                                            color: "white",
                                        }}
                                    >
                                        Elena Richardson
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: normalize(10),
                                            color: "#777",
                                        }}
                                    >
                                        Just now
                                    </Text>
                                </View>
                            </View>

                            <TouchableOpacity onPress={handleBack}>
                                <X size={scale(20)} color="white" />
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1 }}
                            showsVerticalScrollIndicator={false}
                        >
                            {/* UPLOAD BOX */}
                            <TouchableOpacity
                                onPress={pickImage}
                                activeOpacity={0.8}
                                style={{
                                    marginHorizontal: scale(20),
                                    marginTop: verticalScale(30),
                                    borderRadius: scale(24),
                                    borderWidth: 1.5,
                                    borderStyle: "dashed",
                                    borderColor: "#F44725",
                                    height: verticalScale(280),
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "rgba(244,71,37,0.02)",
                                    overflow: "hidden",
                                }}
                            >
                                {image ? (
                                    <View style={{ width: "100%", height: "100%" }}>
                                        <Image 
                                            source={{ uri: image }} 
                                            style={{ width: "100%", height: "100%" }}
                                            resizeMode="cover"
                                        />
                                        {/* REMOVE OVERLAY COULD BE ADDED HERE */}
                                    </View>
                                ) : (
                                    <>
                                        {/* CENTER ICON */}
                                        <View
                                            style={{
                                                width: scale(56),
                                                height: scale(56),
                                                borderRadius: scale(28),
                                                backgroundColor: "rgba(244,71,37,0.08)",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginBottom: verticalScale(12),
                                            }}
                                        >
                                            <Plus size={scale(24)} color="#F44725" strokeWidth={2.5} />
                                        </View>

                                        <Text
                                            style={{
                                                color: "#F44725",
                                                fontSize: normalize(14),
                                                fontWeight: "600",
                                            }}
                                        >
                                            Add photo or video
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#555",
                                                fontSize: normalize(10),
                                                marginTop: 4,
                                                fontWeight: "500"
                                            }}
                                        >
                                            MAX 20MB
                                        </Text>

                                        {/* BOTTOM RIGHT BOX ICONS */}
                                        <View style={{
                                            position: 'absolute',
                                            bottom: scale(15),
                                            right: scale(15),
                                            flexDirection: 'row',
                                            gap: scale(10)
                                        }}>
                                            <View style={{
                                                width: scale(36),
                                                height: scale(36),
                                                borderRadius: scale(18),
                                                backgroundColor: 'white',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Camera size={scale(18)} color="#F44725" />
                                            </View>
                                            <View style={{
                                                width: scale(36),
                                                height: scale(36),
                                                borderRadius: scale(18),
                                                backgroundColor: 'white',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <ImageIcon size={scale(18)} color="#F44725" />
                                            </View>
                                        </View>
                                    </>
                                )}
                            </TouchableOpacity>

                            {/* CAPTION */}
                            <View
                                style={{
                                    marginHorizontal: scale(20),
                                    marginTop: verticalScale(25),
                                }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                                    <Smile size={scale(22)} color="#F44725" style={{ marginTop: verticalScale(2) }} />
                                    <TextInput
                                        placeholder="Write a caption..."
                                        placeholderTextColor="#555"
                                        value={caption}
                                        onChangeText={setCaption}
                                        multiline
                                        style={{
                                            flex: 1,
                                            marginLeft: scale(12),
                                            fontSize: normalize(14),
                                            minHeight: verticalScale(80),
                                            color: "white",
                                            textAlignVertical: "top",
                                        }}
                                    />
                                </View>
                                
                                {/* SEPARATOR */}
                                <View style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.05)', marginTop: verticalScale(10) }} />
                            </View>

                            {/* VISIBILITY ROW */}
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginHorizontal: scale(20),
                                    marginTop: verticalScale(25),
                                    paddingVertical: verticalScale(15),
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'rgba(255,255,255,0.03)'
                                }}
                            >
                                <Globe size={scale(20)} color="#F44725" />
                                <Text style={{ fontSize: normalize(13), color: "#888", marginLeft: scale(12) }}>
                                    Visible to
                                </Text>
                                <View style={{
                                    backgroundColor: 'rgba(244,71,37,0.08)',
                                    paddingHorizontal: scale(12),
                                    paddingVertical: verticalScale(4),
                                    borderRadius: scale(15),
                                    marginLeft: scale(10)
                                }}>
                                    <Text style={{ fontSize: normalize(11), color: "#F44725", fontWeight: "600" }}>
                                        Public
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }} />
                                <ChevronRight size={scale(18)} color="#666" />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>

                {/* BOTTOM BAR */}
                <View
                    style={{
                        paddingHorizontal: scale(20),
                        paddingBottom: verticalScale(20),
                        paddingTop: verticalScale(10),
                        backgroundColor: Colors.background,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* LEFT ACTIONS */}
                        <View style={{ flexDirection: "row", alignItems: "center", gap: scale(20) }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Link size={scale(18)} color="#888" />
                                <Text style={{ fontSize: normalize(13), color: "#888", marginLeft: scale(6) }}>
                                    Link
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleBack}>
                                <Text style={{ fontSize: normalize(13), color: "#666" }}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* POST BUTTON */}
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#9b3224",
                                paddingHorizontal: scale(35),
                                paddingVertical: verticalScale(14),
                                borderRadius: scale(30),
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: normalize(15),
                                    fontWeight: "700",
                                }}
                            >
                                Post
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

