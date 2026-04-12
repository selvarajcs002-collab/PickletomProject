import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from "react-native";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Check, Apple } from "lucide-react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from "react-native";
import http from "../services/httpClient";
import { authService } from "../services/authService";
import * as Colors from "../constants/Colors";


const { width, height } = Dimensions.get("window");

export default function LoginScreen() {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 🔥 TOAST STATE
  const [toast, setToast] = useState({
    visible: false,
    type: "",
    message: ""
  });

  const CARD_WIDTH = Math.min(width * 0.9, 420);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const login = async () => {
    if (!email || !password) {
      setToast({
        visible: true,
        type: "error",
        message: "Please enter both email and password."
      });
      return;
    }

    if (!validateEmail(email)) {
      setToast({
        visible: true,
        type: "error",
        message: "Please enter a valid email address."
      });
      return;
    }

    setLoading(true);
    try {
      const res = await authService.login(email, password);

      if (res.status === 1) {
        setToast({
          visible: true,
          type: "success",
          message: res.message || "Login successful"
        });

        // Persist userId: Clear existing then store new
        if (res.userId) {
          await AsyncStorage.removeItem('userId');
          await AsyncStorage.setItem('userId', res.userId.toString());
        }

        // Navigate to community feed, replacing the stack
        setTimeout(() => {
          router.replace("/community-feed");
        }, 1000);
      } else {
        setToast({
          visible: true,
          type: "error",
          message: res.message || "Invalid credentials. Please try again."
        });
      }
    } catch (err: any) {
      console.error("Login Error:", err);
      // The error message here will be "Unable to connect to server. Request timed out." 
      // if coming from httpClient's AbortController logic.
      setToast({
        visible: true,
        type: "error",
        message: err.message || "Unable to connect to server. Please check your network."
      });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setToast({ visible: false, type: "", message: "" });
      }, 3000);
    }
  };

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>

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
            elevation: 10
          }}
        >

          <Text style={{ fontSize: 18, marginRight: 10 }}>
            {toast.type === "error" ? "❌" : "✔️"}
          </Text>

          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "700", color: "#222" }}>
              {toast.type === "error" ? "Login failed" : "Login successful"}
            </Text>
            <Text style={{ fontSize: 12, color: "#555" }}>
              {toast.message}
            </Text>
          </View>

          <TouchableOpacity onPress={() => setToast({ visible: false, type: "", message: "" })}>
            <Text style={{ fontSize: 16, color: "#888" }}>✕</Text>
          </TouchableOpacity>

        </View>
      )}

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            paddingTop: height * 0.10,
            paddingBottom: 40
          }}
          showsVerticalScrollIndicator={false}
        >

          {/* LOGO */}
          <View
            style={{
              width: 42,
              height: 42,
              backgroundColor: "#fff",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 40
            }}
          >
            <Text style={{ fontWeight: "bold" }}>⚡</Text>
          </View>

          {/* CARD */}
          <View
            style={{
              width: CARD_WIDTH,
              backgroundColor: "#1d222b",
              borderRadius: 30,
              padding: width < 360 ? 20 : 28,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.06)"
            }}
          >

            <Text style={{
              color: "#fff",
              fontSize: 28,
              fontWeight: "700",
              textAlign: "center",
              marginBottom: 6
            }}>
              Welcome Back
            </Text>

            <Text style={{
              color: "#9CA3AF",
              fontSize: 14,
              textAlign: "center",
              marginBottom: 28
            }}>
              Sign in to catch up with your Pickleball community.
            </Text>

            {/* EMAIL */}
            <Text style={{ color: "#9CA3AF", fontSize: 11, fontWeight: "700", marginBottom: 6 }}>
              EMAIL ADDRESS
            </Text>

            <View style={{ marginBottom: 16 }}>
              <View style={{ position: "absolute", left: 14, top: 14, zIndex: 10 }}>
                <Mail size={18} color="#9CA3AF" />
              </View>

              <TextInput
                placeholder="name@example.com"
                placeholderTextColor="#6B7280"
                value={email}
                onChangeText={setEmail}
                style={{
                  height: 50,
                  backgroundColor: "#11151b",
                  borderRadius: 14,
                  borderWidth: 1,
                  borderColor: "#2a2f39",
                  paddingLeft: 42,
                  color: "#fff"
                }}
              />
            </View>

            {/* PASSWORD */}
            <Text style={{ color: "#9CA3AF", fontSize: 11, fontWeight: "700", marginBottom: 6 }}>
              PASSWORD
            </Text>

            <View>
              <View style={{ position: "absolute", left: 14, top: 14, zIndex: 10 }}>
                <Lock size={18} color="#9CA3AF" />
              </View>

              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#6B7280"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                style={{
                  height: 50,
                  backgroundColor: "#11151b",
                  borderRadius: 14,
                  borderWidth: 1,
                  borderColor: "#2a2f39",
                  paddingLeft: 42,
                  paddingRight: 42,
                  color: "#fff"
                }}
              />

              <TouchableOpacity
                style={{ position: "absolute", right: 14, top: 14 }}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} color="#9CA3AF" /> : <Eye size={18} color="#9CA3AF" />}
              </TouchableOpacity>
            </View>

            {/* REMEMBER */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 12,
                marginBottom: 20,
              }}
            >
              {/* Remember Me */}
              <TouchableOpacity
                onPress={() => setRememberMe(!rememberMe)}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <View
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 3,
                    borderWidth: 1,
                    borderColor: rememberMe ? "#FF4A2A" : "#6B7280",
                    marginRight: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: rememberMe ? "#FF4A2A" : "transparent",
                  }}
                >
                  {rememberMe && <Check size={10} color="#fff" />}
                </View>

                <Text style={{ color: "#9CA3AF", fontSize: 12 }}>
                  Remember me
                </Text>
              </TouchableOpacity>

              {/* Forgot Password Link */}
              <TouchableOpacity
                onPress={() => router.push("/forgot-password")} // 👈 IMPORTANT
              >
                <Text style={{ color: "#FF4A2A", fontSize: 12 }}>
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>

            {/* SIGN IN BUTTON */}
            <TouchableOpacity
              onPress={login}
              disabled={loading}
              style={{
                height: 54,
                backgroundColor: loading ? "#FF8A75" : "#FF4A2A",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 24,
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <>
                  <Text style={{ color: "#fff", fontWeight: "700", fontSize: 18, marginRight: 8 }}>
                    Sign In
                  </Text>
                  <ArrowRight color="#fff" size={20} />
                </>
              )}
            </TouchableOpacity>

            {/* SOCIAL */}
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity style={{
                flex: 1,
                height: 48,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: "#2a2f39",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: 8
              }}>
                <FontAwesome name="google" size={18} color="#DB4437" />
              </TouchableOpacity>

              <TouchableOpacity style={{
                flex: 1,
                height: 48,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: "#2a2f39",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Apple size={18} color="#fff" />
              </TouchableOpacity>
            </View>

          </View>
          <View style={{ marginTop: 28 }}>
            <Text style={{ color: "#9CA3AF" }}>
              New here?{" "}
              <Text
                style={{ color: "#FF4A2A", fontWeight: "600" }}
                onPress={() => router.push("/signup")}
              >
                Create profile
              </Text>
            </Text>
          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView >
  );
}