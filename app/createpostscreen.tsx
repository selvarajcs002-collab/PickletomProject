import React from "react";
import { useRouter } from "expo-router";
import {
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    View,
} from "react-native";
import { CreatePostContainer } from "../components/CreatePostContainer";
import * as Colors from "../constants/Colors";

export default function CreatePostScreen() {
    const router = useRouter();

    const handleClose = () => {
        router.back();
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)' }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <CreatePostContainer onClose={handleClose} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
