import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { Mail, ChevronLeft, ArrowRight } from "lucide-react-native";
import { StatusBar } from "expo-status-bar";

const { width } = Dimensions.get("window");

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  // 🔥 TOAST STATE
  const [toast, setToast] = useState({
    visible: false,
    type: "",
    message: "",
  });

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleSendReset = () => {
    if (!email) {
      setToast({
        visible: true,
        type: "error",
        message: "Please enter your email.",
      });
    } else if (!validateEmail(email)) {
      setToast({
        visible: true,
        type: "error",
        message: "Please enter a valid email address.",
      });
    } else {
      setToast({
        visible: true,
        type: "success",
        message: "Reset link sent! Check your inbox.",
      });
    }

    // auto hide
    setTimeout(() => {
      setToast({ visible: false, type: "", message: "" });
    }, 3000);
  };

  return (
    <SafeAreaView className="flex-1 bg-transparent">
      <StatusBar style="light" />

      {/* 🔥 TOAST UI */}
      {toast.visible && (
        <View
          style={{
            position: "absolute",
            top: 60,
            alignSelf: "center",
            width: "90%",
            backgroundColor: toast.type === "error" ? "#FDECEC" : "#E6F4EA",
            borderRadius: 12,
            padding: 14,
            flexDirection: "row",
            alignItems: "center",
            zIndex: 999,
            borderLeftWidth: 4,
            borderLeftColor: toast.type === "error" ? "#FF4A2A" : "#22C55E",
            elevation: 10,
          }}
        >
          <Text style={{ fontSize: 18, marginRight: 10 }}>
            {toast.type === "error" ? "❌" : "✔️"}
          </Text>

          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "700", color: "#222" }}>
              {toast.type === "error" ? "Error" : "Success"}
            </Text>
            <Text style={{ fontSize: 12, color: "#555" }}>
              {toast.message}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setToast({ visible: false, type: "", message: "" })}
          >
            <Text style={{ fontSize: 16, color: "#888" }}>✕</Text>
          </TouchableOpacity>
        </View>
      )}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        {/* Header */}
        <View className="flex-row items-center px-4 py-4 border-b border-white/10">
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft size={22} color="#fff" />
          </TouchableOpacity>

          <View className="flex-1 items-center pr-6">
            <View className="w-8 h-8 bg-white rounded-md items-center justify-center">
              <Text className="text-black font-bold">⚡</Text>
            </View>
          </View>
        </View>

        {/* Body */}
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Card */}
          <View
            style={{ width: width > 400 ? 360 : "100%" }}
            className="bg-[#1C1F26] p-6 rounded-3xl"
          >
            {/* Title */}
            <Text className="text-white text-2xl font-bold mb-2">
              Forgot Password
            </Text>

            <Text className="text-gray-400 text-sm mb-6 leading-5">
              Enter the email address associated with your PickleOn account and
              we'll send you a link to reset your password.
            </Text>

            {/* Label */}
            <Text className="text-gray-500 text-[10px] font-bold mb-2 uppercase tracking-widest">
              Email Address
            </Text>

            {/* Input */}
            <View className="bg-[#2A2F38] rounded-xl flex-row items-center px-3 h-12 border border-white/5">
              <Mail size={16} color="#9CA3AF" />
              <TextInput
                placeholder="e.g. josh.dink@pickle.on"
                placeholderTextColor="#6B7280"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                className="flex-1 text-white ml-2"
              />
            </View>

            {/* Button */}
            <TouchableOpacity
              onPress={handleSendReset}
              className="bg-[#A93A32] h-12 rounded-xl items-center justify-center flex-row mt-6"
            >
              <Text className="text-white font-semibold mr-2">
                Send reset link
              </Text>
              <ArrowRight size={16} color="#fff" />
            </TouchableOpacity>

            {/* Back */}
            <TouchableOpacity
              onPress={() => router.back()}
              className="items-center mt-5"
            >
              <Text className="text-gray-400 text-sm">Back to sign in</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View className="mt-10 items-center">
            <Text className="text-gray-500 text-[10px] uppercase mb-2 tracking-widest">
              Need more help?
            </Text>

            <TouchableOpacity>
              <Text className="text-[#FF4A2A] text-[10px] font-bold tracking-widest">
                CONTACT PICKLEON SUPPORT
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}