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
    ChevronLeft,
    Trophy,
    Users,
    Calendar,
    Shield,
    Plus,
    Clock,
    MapPin,
    PlusCircle,
    X,
} from "lucide-react-native";
import { StatusBar } from "expo-status-bar";
import DateTimePicker from "@react-native-community/datetimepicker";
import { GradientBackground } from "../components/GradientBackground";
import { tournamentService, Prize, ScheduleItem } from "../services/tournamentService";
import { Alert, ActivityIndicator } from "react-native";

const { width } = Dimensions.get("window");
const scale = (size: number) => (width / 375) * size;

export default function PrizesAndScheduleScreen() {
    const router = useRouter();

    const [prizes, setPrizes] = useState<Prize[]>([]);
    const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
    const [rules, setRules] = useState("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await tournamentService.getTournamentDetails();
                setPrizes(data.prizes || []);
                setSchedule(data.schedule || []);
                setRules(data.rules || "");
            } catch (error) {
                console.error("Failed to fetch tournament details:", error);
                // On error, we keep empty states or show an alert
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleContinue = async () => {
        setSaving(true);
        try {
            await tournamentService.saveAll({
                prizes,
                schedule,
                rules
            });
            router.push("/review-and-publish");
        } catch (error) {
            Alert.alert("Error", "Failed to save tournament details. Please try again.");
            console.error("Save error:", error);
        } finally {
            setSaving(false);
        }
    };

    const addPrizeRow = () => {
        const nextId = prizes.length + 1;
        const suffixes = ["st", "nd", "rd", "th"];
        const rank = nextId <= 4 ? `${nextId}${suffixes[nextId - 1]}` : `${nextId}th`;
        setPrizes([...prizes, { id: Date.now(), rank, amount: "" }]);
    };

    const removePrizeRow = (id: number) => {
        setPrizes(prizes.filter(p => p.id !== id));
    };

    const addScheduleItem = (time: Date) => {
        const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setSchedule([...schedule, { id: Date.now(), time: formattedTime, title: "", location: "" }]);
        setShowTimePicker(false);
    };

    const onTimeChange = (event: any, selectedDate?: Date) => {
        if (selectedDate) {
            setCurrentTime(selectedDate);
            if (Platform.OS === 'android') {
                addScheduleItem(selectedDate);
            }
        } else {
            setShowTimePicker(false);
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
                    {/* Header */}
                    <View style={{
                        paddingHorizontal: scale(16),
                        paddingVertical: scale(60),
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <ChevronLeft size={scale(24)} color="white" />
                        </TouchableOpacity>

                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: scale(16), fontWeight: "bold" }}>Prizes & Schedule</Text>
                            <Text style={{
                                color: "#F44725",
                                fontSize: scale(12),
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                letterSpacing: 1.5,
                                textAlign: "center",
                                marginTop: scale(4)
                            }}>
                                Step 4 of 5
                            </Text>
                        </View>

                        <View style={{ width: scale(24) }} />
                    </View>

                    {/* Progress Bar Container */}
                    <View style={{ height: 2, backgroundColor: "rgba(255, 255, 255, 0.1)", width: "100%" }}>
                        <View style={{ height: "100%", backgroundColor: "#F44725", width: "80%" }} />
                    </View>

                    <ScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={{ paddingHorizontal: scale(16), paddingBottom: scale(150), paddingTop: scale(24) }}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* 1. Prize Pool */}
                        <View style={{ flexDirection: "row", alignItems: "center", gap: scale(8), marginBottom: scale(12) }}>
                            <Trophy size={scale(20)} color="white" />
                            <Text style={{ color: "white", fontSize: scale(18), fontWeight: "bold" }}>Prize Pool</Text>
                        </View>
                        <View style={{ backgroundColor: "white", borderRadius: scale(20), padding: scale(20), marginBottom: scale(32) }}>
                            {prizes.length === 0 && (
                                <Text style={{ color: "#9CA3AF", fontSize: scale(14), textAlign: "center", marginBottom: scale(16) }}>No prizes added yet.</Text>
                            )}
                            {prizes.map((prize, index) => (
                                <View key={prize.id} style={{ flexDirection: "row", alignItems: "center", marginBottom: scale(16), borderBottomWidth: 1, borderBottomColor: "#F3F4F6", paddingBottom: scale(16) }}>
                                    <View style={{ width: scale(40), height: scale(40), borderRadius: scale(20), backgroundColor: "#FEE2E2", alignItems: "center", justifyContent: "center", marginRight: scale(12) }}>
                                        <Text style={{ color: "#EF4444", fontWeight: "bold", fontSize: scale(14) }}>{prize.rank}</Text>
                                    </View>
                                    <View style={{ flex: 1, backgroundColor: "#F9FAFB", borderRadius: scale(12), paddingHorizontal: scale(16), paddingVertical: scale(12), flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#E5E7EB" }}>
                                        <Text style={{ color: "#9CA3AF", fontWeight: "bold", fontSize: scale(16), marginRight: scale(4) }}>$</Text>
                                        <TextInput
                                            value={prize.amount}
                                            onChangeText={(text) => {
                                                const newPrizes = [...prizes];
                                                newPrizes[index].amount = text;
                                                setPrizes(newPrizes);
                                            }}
                                            placeholder="00.00"
                                            style={{ color: "#1F2937", fontWeight: "bold", fontSize: scale(16), flex: 1, padding: 0 }}
                                            keyboardType="numeric"
                                        />
                                    </View>
                                    <TouchableOpacity 
                                        onPress={() => removePrizeRow(prize.id)}
                                        style={{ marginLeft: scale(12) }}
                                    >
                                        <X size={scale(20)} color="#D1D5DB" />
                                    </TouchableOpacity>
                                </View>
                            ))}
                            <TouchableOpacity 
                                onPress={addPrizeRow}
                                style={{ marginTop: scale(8), borderStyle: "dashed", borderWidth: 1, borderColor: "#EF4444", borderRadius: scale(12), paddingVertical: scale(12), flexDirection: "row", alignItems: "center", justifyContent: "center", gap: scale(8) }}
                            >
                                <PlusCircle size={scale(18)} color="#EF4444" />
                                <Text style={{ color: "#EF4444", fontWeight: "bold", fontSize: scale(14) }}>Add Prize Row</Text>
                            </TouchableOpacity>
                        </View>

                        {/* 2. Sponsors */}
                        <View style={{ flexDirection: "row", alignItems: "center", gap: scale(8), marginBottom: scale(12) }}>
                            <Users size={scale(20)} color="white" />
                            <Text style={{ color: "white", fontSize: scale(18), fontWeight: "bold" }}>Sponsors</Text>
                        </View>
                        <View style={{ backgroundColor: "white", borderRadius: scale(20), padding: scale(20), marginBottom: scale(32) }}>
                            <Text style={{ color: "#6B7280", fontSize: scale(14), marginBottom: scale(20) }}>
                                Feature partner logos on the tournament landing page.
                            </Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: scale(16) }}>
                                <TouchableOpacity style={{ alignItems: "center", gap: scale(4) }}>
                                    <View style={{ width: scale(64), height: scale(64), borderRadius: scale(32), borderStyle: "dashed", borderWidth: 1, borderColor: "#D1D5DB", alignItems: "center", justifyContent: "center" }}>
                                        <Plus size={scale(24)} color="#9CA3AF" />
                                    </View>
                                    <Text style={{ color: "#9CA3AF", fontSize: scale(10), fontWeight: "600" }}>Add New</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                        {/* 3. Event Schedule */}
                        <View style={{ flexDirection: "row", alignItems: "center", gap: scale(8), marginBottom: scale(12) }}>
                            <Calendar size={scale(20)} color="white" />
                            <Text style={{ color: "white", fontSize: scale(18), fontWeight: "bold" }}>Event Schedule</Text>
                        </View>
                        <View style={{ backgroundColor: "white", borderRadius: scale(20), padding: scale(20), marginBottom: scale(32) }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: scale(20) }}>
                                <View style={{ backgroundColor: "#FEF2F2", paddingHorizontal: scale(12), paddingVertical: scale(4), borderRadius: scale(8) }}>
                                    <Text style={{ color: "#EF4444", fontWeight: "bold", fontSize: scale(12) }}>Tournament Day</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={{ color: "#EF4444", fontWeight: "bold", fontSize: scale(12) }}>Manage Dates</Text>
                                </TouchableOpacity>
                            </View>

                            {schedule.length === 0 && (
                                <Text style={{ color: "#9CA3AF", fontSize: scale(14), textAlign: "center", marginBottom: scale(16) }}>No time blocks added yet.</Text>
                            )}

                            {schedule.map((item, index) => (
                                <View key={item.id} style={{ backgroundColor: "#F9FAFB", borderRadius: scale(16), padding: scale(16), marginBottom: scale(12), borderWidth: 1, borderColor: "#F3F4F6", flexDirection: "row" }}>
                                    <View style={{ paddingRight: scale(16), borderRightWidth: 1, borderRightColor: "#E5E7EB", alignItems: "center", justifyContent: "center" }}>
                                        <Clock size={scale(16)} color="#EF4444" style={{ marginBottom: scale(4) }} />
                                        <Text style={{ color: "#1F2937", fontWeight: "bold", fontSize: scale(12) }}>{item.time}</Text>
                                    </View>
                                    <View style={{ flex: 1, paddingLeft: scale(16), justifyContent: "center", gap: scale(4) }}>
                                        <TextInput
                                            placeholder="What's happening?"
                                            placeholderTextColor="#9CA3AF"
                                            value={item.title}
                                            onChangeText={(text) => {
                                                const newSchedule = [...schedule];
                                                newSchedule[index].title = text;
                                                setSchedule(newSchedule);
                                            }}
                                            style={{ color: "#1F2937", fontWeight: "bold", fontSize: scale(14), padding: 0 }}
                                        />
                                        <View style={{ flexDirection: "row", alignItems: "center", gap: scale(4) }}>
                                            <MapPin size={scale(12)} color="#9CA3AF" />
                                            <TextInput
                                                placeholder="Location (e.g. Court 1)"
                                                placeholderTextColor="#9CA3AF"
                                                value={item.location}
                                                onChangeText={(text) => {
                                                    const newSchedule = [...schedule];
                                                    newSchedule[index].location = text;
                                                    setSchedule(newSchedule);
                                                }}
                                                style={{ color: "#6B7280", fontSize: scale(12), flex: 1, padding: 0 }}
                                            />
                                        </View>
                                    </View>
                                    <TouchableOpacity 
                                        onPress={() => setSchedule(schedule.filter(s => s.id !== item.id))}
                                        style={{ marginLeft: scale(8), alignSelf: "center" }}
                                    >
                                        <X size={scale(18)} color="#D1D5DB" />
                                    </TouchableOpacity>
                                </View>
                            ))}

                            <TouchableOpacity 
                                onPress={() => setShowTimePicker(true)}
                                style={{ marginTop: scale(8), backgroundColor: "#F9FAFB", borderRadius: scale(12), paddingVertical: scale(12), flexDirection: "row", alignItems: "center", justifyContent: "center", gap: scale(8), borderWidth: 1, borderColor: "#E5E7EB" }}
                            >
                                <Plus size={scale(18)} color="#6B7280" />
                                <Text style={{ color: "#6B7280", fontWeight: "bold", fontSize: scale(14) }}>Add Time Block</Text>
                            </TouchableOpacity>
                        </View>

                        {/* 4. Rules & Eligibility */}
                        <View style={{ flexDirection: "row", alignItems: "center", gap: scale(8), marginBottom: scale(12) }}>
                            <Shield size={scale(20)} color="white" />
                            <Text style={{ color: "white", fontSize: scale(18), fontWeight: "bold" }}>Rules & Eligibility</Text>
                        </View>
                        <View style={{ backgroundColor: "white", borderRadius: scale(20), padding: scale(20), marginBottom: scale(40) }}>
                            <Text style={{ color: "#1F2937", fontSize: scale(16), fontWeight: "bold", marginBottom: scale(16) }}>Tournament Terms</Text>
                            <View style={{ backgroundColor: "#F9FAFB", borderRadius: scale(12), padding: scale(16), borderWidth: 1, borderColor: "#F3F4F6", minHeight: scale(120) }}>
                                <TextInput
                                    multiline
                                    placeholder="Type your tournament rules, refund policy, and terms here..."
                                    placeholderTextColor="#9CA3AF"
                                    value={rules}
                                    onChangeText={setRules}
                                    style={{ color: "#4B5563", fontSize: scale(13), lineHeight: scale(20), textAlignVertical: "top", flex: 1 }}
                                />
                            </View>
                            <Text style={{ color: "#9CA3AF", fontSize: scale(11), marginTop: scale(16), fontStyle: "italic" }}>
                                * These rules will be visible to all registered players.
                            </Text>
                        </View>
                    </ScrollView>

                    {showTimePicker && (
                        <View>
                            {Platform.OS === 'ios' && (
                                <View style={{ backgroundColor: '#F9FAFB', flexDirection: 'row', justifyContent: 'flex-end', padding: scale(10), borderBottomWidth: 1, borderBottomColor: '#E5E7EB' }}>
                                    <TouchableOpacity onPress={() => addScheduleItem(currentTime)}>
                                        <Text style={{ color: '#EF4444', fontWeight: 'bold' }}>Done</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            <DateTimePicker
                                value={currentTime}
                                mode="time"
                                is24Hour={false}
                                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                onChange={onTimeChange}
                                themeVariant="light"
                                textColor="black"
                            />
                        </View>
                    )}

                    {/* Footer */}
                    <View style={{ paddingHorizontal: scale(16), paddingBottom: scale(24), paddingTop: scale(12), borderTopWidth: 1, borderTopColor: "rgba(255, 255, 255, 0.1)" }}>
                        <TouchableOpacity
                            onPress={handleContinue}
                            disabled={saving}
                            style={{ 
                                backgroundColor: "#EF4444", 
                                height: scale(54), 
                                borderRadius: scale(16), 
                                alignItems: "center", 
                                justifyContent: "center",
                                opacity: saving ? 0.7 : 1
                            }}
                        >
                            {saving ? (
                                <ActivityIndicator color="white" />
                            ) : (
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: scale(14) }}>Continue to Final Preview →</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </GradientBackground>
    );
}