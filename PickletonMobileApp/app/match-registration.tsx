import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useRouter } from "expo-router";
import {
  Users,
  UserPlus,
  CircleDollarSign,
  ClipboardCheck,
  ChevronDown,
  Info,
} from "lucide-react-native";
import { StatusBar } from "expo-status-bar";
import { GradientBackground } from "../components/GradientBackground";

const { width } = Dimensions.get("window");
const scale = (size: number) => (width / 375) * size;

export default function MatchRegistrationScreen() {
  const router = useRouter();
  const [gameType, setGameType] = useState("Doubles");

  const OptionCard = ({
    label,
    Icon,
    active,
    onPress,
  }: {
    label: string;
    Icon: any;
    active: boolean;
    onPress: () => void;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: scale(24),
        borderRadius: scale(24),
        borderWidth: 3,
        borderColor: active ? "#F44725" : "rgba(255, 255, 255, 0.15)",
        backgroundColor: active ? "#F44725" : "rgba(255, 255, 255, 0.08)",
        margin: scale(8),
      }}
    >
      <Icon size={scale(28)} color={active ? "white" : "#9CA3AF"} style={{ marginBottom: scale(12) }} />
      <Text
        style={{
          fontSize: scale(16),
          fontWeight: "bold",
          color: active ? "white" : "#9CA3AF",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <GradientBackground>
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <StatusBar style="light" />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          {/* Header - No Back Button */}
          <View style={{
            paddingHorizontal: scale(24),
            paddingVertical: scale(70),
            borderBottomWidth: 1.5,
            borderBottomColor: "rgba(255, 255, 255, 0.15)",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "white", fontSize: scale(24), fontWeight: "bold" }}>Competition Format</Text>
              <Text style={{
                color: "#F44725",
                fontSize: scale(14),
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 2.5,
                textAlign: "center",
                marginTop: scale(6)
              }}>
                Step 3 of 5
              </Text>
            </View>
          </View>

          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: scale(200), paddingTop: scale(20) }}
            showsVerticalScrollIndicator={true}
            keyboardShouldPersistTaps="handled"
          >
            {/* Progress Bar Container */}
            <View style={{ height: 6, backgroundColor: "rgba(255, 255, 255, 0.1)", width: "100%" }}>
              <View style={{ height: "100%", backgroundColor: "#F44725", width: "60%" }} />
            </View>

            <View style={{ padding: scale(30), gap: scale(60) }}>
              {/* Main Title Section */}
              <View style={{ gap: scale(16) }}>
                <Text style={{ fontSize: scale(32), fontWeight: "bold", color: "white" }}>Competition Format</Text>
                <Text style={{ color: "#9CA3AF", fontSize: scale(16), lineHeight: scale(24) }}>
                  Configure how your tournament will be played and managed.
                </Text>
              </View>

              {/* Section 1: Game Type */}
              <View style={{ gap: scale(30) }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: scale(16) }}>
                  <Users size={scale(28)} color="#F44725" />
                  <Text style={{ color: "white", fontWeight: "bold", fontSize: scale(22) }}>Format</Text>
                </View>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", padding: scale(30), borderRadius: scale(32), borderWidth: 1.5, borderColor: "rgba(255, 255, 255, 0.15)", gap: scale(40) }}>
                  <View>
                    <Text style={{ fontSize: scale(16), fontWeight: "bold", color: "#F44725", textTransform: "uppercase", letterSpacing: 2, marginBottom: scale(20) }}>
                      Select Game Type
                    </Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                      <OptionCard
                        label="Singles"
                        Icon={UserPlus}
                        active={gameType === "Singles"}
                        onPress={() => setGameType("Singles")}
                      />
                      <OptionCard
                        label="Doubles"
                        Icon={Users}
                        active={gameType === "Doubles"}
                        onPress={() => setGameType("Doubles")}
                      />
                      <OptionCard
                        label="Mixed"
                        Icon={Users}
                        active={gameType === "Mixed"}
                        onPress={() => setGameType("Mixed")}
                      />
                    </View>
                  </View>

                  <View style={{ gap: scale(30) }}>
                    <View style={{ gap: scale(14) }}>
                      <Text style={{ fontSize: scale(16), fontWeight: "bold", color: "#9CA3AF", textTransform: "uppercase" }}>
                        Draw Size
                      </Text>
                      <TouchableOpacity style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderWidth: 2, borderColor: "rgba(255, 255, 255, 0.15)", borderRadius: scale(18), paddingHorizontal: scale(20), paddingVertical: scale(20), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ color: "white", fontSize: scale(16) }}>32 Players</Text>
                        <ChevronDown size={scale(22)} color="#666" />
                      </TouchableOpacity>
                    </View>

                    <View style={{ gap: scale(14) }}>
                      <Text style={{ fontSize: scale(16), fontWeight: "bold", color: "#9CA3AF", textTransform: "uppercase" }}>
                        Match Format
                      </Text>
                      <TouchableOpacity style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderWidth: 2, borderColor: "rgba(255, 255, 255, 0.15)", borderRadius: scale(18), paddingHorizontal: scale(20), paddingVertical: scale(20), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ color: "white", fontSize: scale(16) }}>Best of 3</Text>
                        <ChevronDown size={scale(22)} color="#666" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              {/* Section 2: Entry & Payments */}
              <View style={{ gap: scale(30) }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: scale(16) }}>
                  <CircleDollarSign size={scale(28)} color="#F44725" />
                  <Text style={{ color: "white", fontWeight: "bold", fontSize: scale(22) }}>Entry & Payments</Text>
                </View>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", padding: scale(30), borderRadius: scale(32), borderWidth: 1.5, borderColor: "rgba(255, 255, 255, 0.15)", gap: scale(40) }}>
                  <View style={{ gap: scale(14) }}>
                    <Text style={{ fontSize: scale(16), fontWeight: "bold", color: "#9CA3AF", textTransform: "uppercase" }}>
                      Entry Fee (Per Player)
                    </Text>
                    <View style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderWidth: 2, borderColor: "rgba(255, 255, 255, 0.15)", borderRadius: scale(18), paddingHorizontal: scale(20), paddingVertical: scale(20), flexDirection: "row", alignItems: "center" }}>
                      <Text style={{ color: "#F44725", marginRight: scale(12), fontSize: scale(24), fontWeight: "bold" }}>$</Text>
                      <TextInput
                        defaultValue="45"
                        style={{ color: "white", fontWeight: "bold", fontSize: scale(24), flex: 1 }}
                        keyboardType="numeric"
                      />
                    </View>
                  </View>

                  <View style={{ gap: scale(20) }}>
                    <Text style={{ fontSize: scale(16), fontWeight: "bold", color: "#9CA3AF", textTransform: "uppercase" }}>
                      Accepted Methods
                    </Text>
                    <View style={{ flexDirection: "row", gap: scale(16), flexWrap: "wrap" }}>
                      {["Stripe", "PayPal", "Venmo"].map((method) => (
                        <View
                          key={method}
                          style={{
                            paddingHorizontal: scale(24),
                            paddingVertical: scale(14),
                            borderRadius: scale(30),
                            borderWidth: 3,
                            borderColor: method === "Stripe" ? "#F44725" : "rgba(255, 255, 255, 0.2)",
                            backgroundColor: method === "Stripe" ? "#F44725" : "rgba(0, 0, 0, 0.4)"
                          }}
                        >
                          <Text
                            style={{
                              fontSize: scale(16),
                              fontWeight: "bold",
                              color: method === "Stripe" ? "white" : "#9CA3AF"
                            }}
                          >
                            {method}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
              </View>

              {/* Section 3: Registration Rules */}
              <View style={{ gap: scale(30) }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: scale(16) }}>
                  <ClipboardCheck size={scale(28)} color="#F44725" />
                  <Text style={{ color: "white", fontWeight: "bold", fontSize: scale(22) }}>Rules</Text>
                </View>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", padding: scale(30), borderRadius: scale(32), borderWidth: 1.5, borderColor: "rgba(255, 255, 255, 0.15)", gap: scale(50) }}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flex: 1, paddingRight: scale(24) }}>
                      <Text style={{ color: "white", fontWeight: "bold", fontSize: scale(18) }}>Manual Approval</Text>
                      <Text style={{ color: "#9CA3AF", fontSize: scale(16), marginTop: scale(8) }}>
                        Organizers must review each entry.
                      </Text>
                    </View>
                    <View style={{ width: scale(80), height: scale(40), backgroundColor: "#374151", borderRadius: scale(20), alignItems: "flex-start", padding: scale(5) }}>
                      <View style={{ width: scale(30), height: scale(30), backgroundColor: "#9CA3AF", borderRadius: scale(15) }} />
                    </View>
                  </View>

                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flex: 1, paddingRight: scale(24) }}>
                      <Text style={{ color: "white", fontWeight: "bold", fontSize: scale(18) }}>Automatic Waitlist</Text>
                      <Text style={{ color: "#9CA3AF", fontSize: scale(16), marginTop: scale(8) }}>
                        Queues registrants after draw limit.
                      </Text>
                    </View>
                    <View style={{ width: scale(80), height: scale(40), backgroundColor: "#F44725", borderRadius: scale(20), alignItems: "flex-end", padding: scale(5) }}>
                      <View style={{ width: scale(30), height: scale(30), backgroundColor: "white", borderRadius: scale(15) }} />
                    </View>
                  </View>
                </View>
              </View>

              {/* Pro Tip */}
              <View style={{ backgroundColor: "rgba(244, 71, 37, 0.15)", padding: scale(24), borderRadius: scale(24), borderWidth: 2.5, borderColor: "rgba(244, 71, 37, 0.4)", flexDirection: "row", gap: scale(20) }}>
                 <Info size={scale(28)} color="#F44725" />
                 <Text style={{ color: "#F44725", fontSize: scale(16), lineHeight: scale(22), flex: 1, fontWeight: "600" }}>
                    Pro Tip: Manual Approval helps ensure players meet the required skill level (DUPR) before paying the fee.
                 </Text>
              </View>

              <TouchableOpacity
                onPress={() => router.push("/prizes-and-schedule")}
                style={{
                  backgroundColor: "#F44725",
                  height: scale(72),
                  borderRadius: scale(24),
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  elevation: 12,
                  marginTop: scale(40)
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold", fontSize: scale(22) }}>CONTINUE</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GradientBackground>
  );
}
