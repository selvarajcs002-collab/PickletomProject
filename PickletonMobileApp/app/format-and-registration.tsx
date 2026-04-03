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
    CircleDollarSign,
    ClipboardCheck,
    ChevronDown,
    ChevronLeft,
} from "lucide-react-native";
import { StatusBar } from "expo-status-bar";
import { GradientBackground } from "../components/GradientBackground";

const { width } = Dimensions.get("window");
const scale = (size: number) => (width / 375) * size;

export default function FormatAndRegistrationScreen() {
    const router = useRouter();
    const [selectedGameTypes, setSelectedGameTypes] = useState(["Doubles"]);
    const [manualApproval, setManualApproval] = useState(false);
    const [waitlist, setWaitlist] = useState(true);

    const toggleGameType = (type: string) => {
        if (selectedGameTypes.includes(type)) {
            if (selectedGameTypes.length > 1) {
                setSelectedGameTypes(selectedGameTypes.filter(t => t !== type));
            }
        } else {
            setSelectedGameTypes([...selectedGameTypes, type]);
        }
    };

    return (
        <GradientBackground>
            <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
                <StatusBar style="light" />
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                >
                    {/* Header with Back Button */}
                    <View style={{
                        paddingHorizontal: scale(16),
                        paddingVertical: scale(50),
                        borderBottomWidth: 1,
                        borderBottomColor: "rgba(255, 255, 255, 0.1)",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <ChevronLeft size={scale(24)} color="white" />
                        </TouchableOpacity>

                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: scale(16), fontWeight: "bold" }}>Competition Format</Text>
                            <Text style={{
                                color: "#F44725",
                                fontSize: scale(12),
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                letterSpacing: 1.5,
                                textAlign: "center",
                                marginTop: scale(4)
                            }}>
                                Step 3 of 5
                            </Text>
                        </View>

                        <View style={{ width: scale(24) }} />
                    </View>

                    {/* Progress Bar Container */}
                    <View style={{ height: 2, backgroundColor: "rgba(255, 255, 255, 0.1)", width: "100%" }}>
                        <View style={{ height: "100%", backgroundColor: "#F44725", width: "60%" }} />
                    </View>

                    <ScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={{ paddingHorizontal: scale(16), paddingBottom: scale(150), paddingTop: scale(20) }}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={{ gap: scale(24) }}>

                            {/* Section 1: Format */}
                            <View>
                                <Text style={{ color: "#F44725", fontWeight: "600", fontSize: scale(16), marginBottom: scale(16) }}>
                                    Tournament Format
                                </Text>
                                <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", padding: scale(16), borderRadius: scale(20), borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", gap: scale(20) }}>
                                    <View>
                                        <Text style={{ fontSize: scale(12), fontWeight: "bold", color: "white", textTransform: "uppercase", marginBottom: scale(8) }}>
                                            Select Game Type
                                        </Text>
                                        <View style={{ flexDirection: "row", backgroundColor: "rgba(0, 0, 0, 0.4)", padding: 4, borderRadius: scale(12) }}>
                                            {["Singles", "Doubles", "Mixed"].map((item) => (
                                                <TouchableOpacity
                                                    key={item}
                                                    onPress={() => toggleGameType(item)}
                                                    style={{
                                                        flex: 1,
                                                        paddingVertical: scale(10),
                                                        borderRadius: scale(8),
                                                        alignItems: "center",
                                                        backgroundColor: selectedGameTypes.includes(item) ? "rgba(255, 255, 255, 0.1)" : "transparent",
                                                        borderWidth: selectedGameTypes.includes(item) ? 1 : 0,
                                                        borderColor: "rgba(255, 255, 255, 0.1)"
                                                    }}
                                                >
                                                    <Text style={{ fontSize: scale(12), color: selectedGameTypes.includes(item) ? "#F44725" : "#6B7280", fontWeight: selectedGameTypes.includes(item) ? "bold" : "normal" }}>{item}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", gap: scale(16) }}>
                                        <View style={{ flex: 1, gap: scale(8) }}>
                                            <Text style={{ fontSize: scale(12), fontWeight: "bold", color: "white", textTransform: "uppercase" }}>
                                                Draw Size
                                            </Text>
                                            <TouchableOpacity style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)", borderRadius: scale(12), paddingHorizontal: scale(12), paddingVertical: scale(12), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                <Text style={{ color: "white", fontSize: scale(14) }}>32 Players</Text>
                                                <ChevronDown size={scale(18)} color="#666" />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ flex: 1, gap: scale(8) }}>
                                            <Text style={{ fontSize: scale(12), fontWeight: "bold", color: "white", textTransform: "uppercase" }}>
                                                Match Format
                                            </Text>
                                            <TouchableOpacity style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)", borderRadius: scale(12), paddingHorizontal: scale(12), paddingVertical: scale(12), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                <Text style={{ color: "white", fontSize: scale(14) }}>Best of 3</Text>
                                                <ChevronDown size={scale(18)} color="#666" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            {/* Section 2: Entry & Payments */}
                            <View>
                                <Text style={{ color: "#F44725", fontWeight: "600", fontSize: scale(16), marginBottom: scale(16) }}>
                                    Entry & Payments
                                </Text>
                                <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", padding: scale(16), borderRadius: scale(20), borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", gap: scale(20) }}>
                                    <View style={{ gap: scale(8) }}>
                                        <Text style={{ fontSize: scale(12), fontWeight: "bold", color: "white", textTransform: "uppercase" }}>
                                            Entry Fee (Per Player)
                                        </Text>
                                        <View style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)", borderRadius: scale(12), paddingHorizontal: scale(12), paddingVertical: scale(12), flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ color: "#F44725", marginRight: scale(8), fontSize: scale(14), fontWeight: "bold" }}>$</Text>
                                            <TextInput
                                                defaultValue="45"
                                                style={{ color: "white", fontWeight: "bold", fontSize: scale(14), flex: 1, padding: 0 }}
                                                keyboardType="numeric"
                                            />
                                        </View>
                                    </View>

                                    <View style={{ gap: scale(12) }}>
                                        <Text style={{ fontSize: scale(12), fontWeight: "bold", color: "white", textTransform: "uppercase" }}>
                                            Accepted Methods
                                        </Text>
                                        <View style={{ flexDirection: "row", gap: scale(10), flexWrap: "wrap" }}>
                                            {["In Person"].map((method) => (
                                                <View
                                                    key={method}
                                                    style={{
                                                        paddingHorizontal: scale(16),
                                                        paddingVertical: scale(8),
                                                        borderRadius: scale(20),
                                                        borderWidth: 1,
                                                        borderColor: method === "In Person" ? "#F44725" : "rgba(255, 255, 255, 0.1)",
                                                        backgroundColor: method === "In Person" ? "#F44725" : "rgba(0, 0, 0, 0.4)"
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            fontSize: scale(12),
                                                            fontWeight: "bold",
                                                            color: method === "In Person" ? "white" : "#9CA3AF"
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
                            <View>
                                <Text style={{ color: "#F44725", fontWeight: "600", fontSize: scale(16), marginBottom: scale(16) }}>
                                    Registration Rules
                                </Text>
                                <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", padding: scale(16), borderRadius: scale(20), borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", gap: scale(24) }}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                        <View style={{ flex: 1, paddingRight: scale(16) }}>
                                            <Text style={{ color: "white", fontWeight: "600", fontSize: scale(14) }}>Manual Approval</Text>
                                            <Text style={{ color: "#9CA3AF", fontSize: scale(12), marginTop: scale(2) }}>
                                                Review entries manually.
                                            </Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setManualApproval(!manualApproval)}
                                            style={{
                                                width: scale(80),
                                                height: scale(40),
                                                backgroundColor: manualApproval ? "#F44725" : "#374151",
                                                borderRadius: scale(20),
                                                alignItems: manualApproval ? "flex-end" : "flex-start",
                                                padding: scale(5)
                                            }}
                                        >
                                            <View style={{ width: scale(30), height: scale(30), backgroundColor: manualApproval ? "white" : "#9CA3AF", borderRadius: scale(15) }} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                        <View style={{ flex: 1, paddingRight: scale(16) }}>
                                            <Text style={{ color: "white", fontWeight: "600", fontSize: scale(14) }}>Automatic Waitlist</Text>
                                            <Text style={{ color: "#9CA3AF", fontSize: scale(12), marginTop: scale(2) }}>
                                                Queue when full.
                                            </Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setWaitlist(!waitlist)}
                                            style={{
                                                width: scale(80),
                                                height: scale(40),
                                                backgroundColor: waitlist ? "#F44725" : "#374151",
                                                borderRadius: scale(20),
                                                alignItems: waitlist ? "flex-end" : "flex-start",
                                                padding: scale(5)
                                            }}
                                        >
                                            <View style={{ width: scale(30), height: scale(30), backgroundColor: waitlist ? "white" : "#9CA3AF", borderRadius: scale(15) }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    {/* FOOTER */}
                    <View style={{ paddingHorizontal: scale(16), paddingBottom: scale(24), paddingTop: scale(12), borderTopWidth: 1, borderTopColor: "rgba(255, 255, 255, 0.1)" }}>
                        <TouchableOpacity
                            onPress={() => router.push("/prizes-and-schedule")}
                            style={{ backgroundColor: "#F44725", height: scale(54), borderRadius: scale(16), alignItems: "center", justifyContent: "center" }}
                        >
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: scale(14) }}>CONTINUE</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </GradientBackground>
    );
}
