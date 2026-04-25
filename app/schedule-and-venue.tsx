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
import {
  ChevronLeft,
  Calendar,
  Clock,
  MapPin,
  Globe,
  Minus,
  Plus,
} from "lucide-react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import DateTimePicker from "@react-native-community/datetimepicker";
import { GradientBackground } from "../components/GradientBackground";

const { width } = Dimensions.get("window");
const scale = (size: number) => (width / 375) * size;

export default function ScheduleVenueScreen() {
  const router = useRouter();

  const [startDate, setStartDate] = useState(new Date(2024, 9, 14, 8, 0));
  const [endDate, setEndDate] = useState(new Date(2024, 9, 16, 18, 0));
  const [regStart, setRegStart] = useState(new Date(2024, 7, 1));
  const [regEnd, setRegEnd] = useState(new Date(2024, 9, 10));

  const [showPicker, setShowPicker] = useState<string | null>(null);
  const [environment, setEnvironment] = useState("Outdoor");
  const [surface, setSurface] = useState("Hard Court");
  const [capacity, setCapacity] = useState(32);

  const onDateChange = (event: any, selectedDate?: Date) => {
    if (!selectedDate) {
      setShowPicker(null);
      return;
    }

    if (showPicker === "start") setStartDate(selectedDate);
    if (showPicker === "end") setEndDate(selectedDate);
    if (showPicker === "regStart") setRegStart(selectedDate);
    if (showPicker === "regEnd") setRegEnd(selectedDate);

    // For Android, we need to hide it after selection
    if (Platform.OS === "android") {
      setShowPicker(null);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  };

  return (
    <GradientBackground>
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <StatusBar style="light" />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          {/* HEADER */}
          <View style={{ paddingHorizontal: scale(16), paddingVertical: scale(50), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <TouchableOpacity onPress={() => router.back()}>
              <ChevronLeft size={scale(24)} color="white" />
            </TouchableOpacity>
            <Text style={{ fontSize: scale(14), fontWeight: "bold", color: "#9CA3AF", letterSpacing: 1.5 }}>
              STEP 2 OF 5
            </Text>
            <View style={{ width: scale(24) }} />
          </View>

          {/* PROGRESS */}
          <View style={{ height: 2, backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
            <View style={{ height: "100%", backgroundColor: "#F44725", width: "40%" }} />
          </View>

          <ScrollView
            style={{ flex: 1, paddingHorizontal: scale(16), paddingTop: scale(20) }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* SECTION TITLE */}
            <Text style={{ color: "#F44725", fontWeight: "600", fontSize: scale(16), marginBottom: scale(16) }}>
              Tournament Timing
            </Text>

            {/* TIMING CARD */}
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: scale(20), padding: scale(16), borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", marginBottom: scale(24) }}>
              <View style={{ gap: scale(20) }}>
                {/* START */}
                <View>
                  <Text style={{ color: "white", fontSize: scale(12), fontWeight: "bold", textTransform: "uppercase", marginBottom: scale(8) }}>
                    Start Date & Time
                  </Text>
                  <TouchableOpacity
                    onPress={() => setShowPicker("start")}
                    style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "rgba(0, 0, 0, 0.4)", padding: scale(12), borderRadius: scale(12), borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <View style={{ flexDirection: "row", alignItems: "center", gap: scale(8) }}>
                      <Calendar size={scale(16)} color="#F44725" />
                      <Text style={{ color: "white", fontSize: scale(14) }}>{formatDate(startDate)}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: scale(8) }}>
                      <Clock size={scale(16)} color="#F44725" />
                      <Text style={{ color: "white", fontSize: scale(14) }}>{formatTime(startDate)}</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* END */}
                <View>
                  <Text style={{ color: "white", fontSize: scale(12), fontWeight: "bold", textTransform: "uppercase", marginBottom: scale(8) }}>
                    End Date & Time
                  </Text>
                  <TouchableOpacity
                    onPress={() => setShowPicker("end")}
                    style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "rgba(0, 0, 0, 0.4)", padding: scale(12), borderRadius: scale(12), borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <View style={{ flexDirection: "row", alignItems: "center", gap: scale(8) }}>
                      <Calendar size={scale(16)} color="#F44725" />
                      <Text style={{ color: "white", fontSize: scale(14) }}>{formatDate(endDate)}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: scale(8) }}>
                      <Clock size={scale(16)} color="#F44725" />
                      <Text style={{ color: "white", fontSize: scale(14) }}>{formatTime(endDate)}</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* TIMEZONE */}
                <View style={{ backgroundColor: "rgba(244, 71, 37, 0.1)", padding: scale(12), borderRadius: scale(12), borderWidth: 1, borderColor: "rgba(244, 71, 37, 0.2)", flexDirection: "row", alignItems: "center", gap: scale(12) }}>
                  <Globe size={scale(18)} color="#F44725" />
                  <View>
                    <Text style={{ color: "#F44725", fontSize: scale(10), fontWeight: "bold", textTransform: "uppercase" }}>Timezone</Text>
                    <Text style={{ color: "white", fontSize: scale(12) }}>EST - New York</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* VENUE SECTION */}
            <Text style={{ color: "#F44725", fontWeight: "600", fontSize: scale(16), marginBottom: scale(16) }}>
              Venue Details
            </Text>

            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: scale(20), padding: scale(16), borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", marginBottom: scale(24) }}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: scale(8), marginBottom: scale(12) }}>
                <MapPin size={scale(16)} color="#777" />
                <Text style={{ color: "white", fontSize: scale(14) }}>Central Park Complex, NY</Text>
              </View>

              <TextInput
                placeholder="Enter venue address..."
                placeholderTextColor="#555"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", borderRadius: scale(12), paddingHorizontal: scale(12), paddingVertical: scale(12), color: "white", fontSize: scale(14), marginBottom: scale(12) }}
              />

              <View style={{ height: scale(130), backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: scale(12), alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}>
                <Text style={{ color: "#4B5563", fontSize: scale(10), fontWeight: "bold", textTransform: "uppercase" }}>Map Preview</Text>
              </View>
            </View>

            {/* COURT SETTINGS */}
            <Text style={{ color: "#F44725", fontWeight: "600", fontSize: scale(16), marginBottom: scale(16) }}>
              Court Settings
            </Text>

            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: scale(20), padding: scale(16), borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", marginBottom: scale(24), gap: scale(20) }}>
              <View>
                <Text style={{ color: "white", fontSize: scale(12), fontWeight: "bold", textTransform: "uppercase", marginBottom: scale(8) }}>Environment</Text>
                <View style={{ flexDirection: "row", backgroundColor: "rgba(0, 0, 0, 0.4)", padding: 4, borderRadius: scale(12) }}>
                  {["Indoor", "Outdoor"].map((item) => (
                    <TouchableOpacity
                      key={item}
                      onPress={() => setEnvironment(item)}
                      style={{ flex: 1, paddingVertical: scale(8), borderRadius: scale(8), alignItems: "center", backgroundColor: environment === item ? "rgba(255, 255, 255, 0.1)" : "transparent", borderWidth: environment === item ? 1 : 0, borderColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <Text style={{ fontSize: scale(12), color: environment === item ? "#F44725" : "#6B7280", fontWeight: environment === item ? "bold" : "normal" }}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* GAP BETWEEN ENVIRONMENT AND SURFACE TYPE */}
              <View style={{ height: scale(10) }} />

              <View>
                <Text style={{ color: "white", fontSize: scale(12), fontWeight: "bold", textTransform: "uppercase", marginBottom: scale(8) }}>Surface Type</Text>
                <View style={{ flexDirection: "row", backgroundColor: "rgba(0, 0, 0, 0.4)", padding: 4, borderRadius: scale(12) }}>
                  {["Hard Court", "Clay/Grass"].map((item) => (
                    <TouchableOpacity
                      key={item}
                      onPress={() => setSurface(item)}
                      style={{ flex: 1, paddingVertical: scale(8), borderRadius: scale(8), alignItems: "center", backgroundColor: surface === item ? "rgba(255, 255, 255, 0.1)" : "transparent", borderWidth: surface === item ? 1 : 0, borderColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <Text style={{ fontSize: scale(12), color: surface === item ? "#F44725" : "#6B7280", fontWeight: surface === item ? "bold" : "normal" }}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>

            {/* REGISTRATION */}
            <Text style={{ color: "#F44725", fontWeight: "600", fontSize: scale(16), marginBottom: scale(16) }}>
              Registration Rules
            </Text>

            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: scale(20), padding: scale(16), borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", marginBottom: scale(40) }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: scale(20) }}>
                <Text style={{ color: "white", fontSize: scale(14), fontWeight: "600" }}>Total Capacity</Text>
                <View style={{ flexDirection: "row", alignItems: "center", gap: scale(0) }}>
                  <TouchableOpacity
                    onPress={() => setCapacity(Math.max(0, capacity - 1))}
                    style={{ width: scale(36), height: scale(36), borderTopLeftRadius: scale(18), borderBottomLeftRadius: scale(18), backgroundColor: "rgba(255, 255, 255, 0.05)", borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", alignItems: "center", justifyContent: "center" }}
                  >
                    <Minus size={scale(16)} color="white" />
                  </TouchableOpacity>
                  <View style={{ width: scale(50), height: scale(36), backgroundColor: "rgba(0, 0, 0, 0.4)", borderTopWidth: 1, borderBottomWidth: 1, borderColor: "rgba(255, 255, 255, 0.1)", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: scale(14) }}>{capacity}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => setCapacity(capacity + 1)}
                    style={{ width: scale(36), height: scale(36), borderTopRightRadius: scale(18), borderBottomRightRadius: scale(18), backgroundColor: "#F44725", alignItems: "center", justifyContent: "center" }}
                  >
                    <Plus size={scale(16)} color="white" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ height: scale(20) }} />

              <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "rgba(0, 0, 0, 0.4)", padding: scale(16), borderRadius: scale(16), borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}>
                <TouchableOpacity onPress={() => setShowPicker("regStart")}>
                  <Text style={{ color: "white", fontSize: scale(10), fontWeight: "bold", textTransform: "uppercase", marginBottom: 2 }}>Window Opens</Text>
                  <Text style={{ color: "white", fontSize: scale(14), fontWeight: "bold" }}>{formatDate(regStart)}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowPicker("regEnd")} style={{ alignItems: "flex-end" }}>
                  <Text style={{ color: "white", fontSize: scale(10), fontWeight: "bold", textTransform: "uppercase", marginBottom: 2, textAlign: "right" }}>Window Closes</Text>
                  <Text style={{ color: "white", fontSize: scale(14), fontWeight: "bold", textAlign: "right" }}>{formatDate(regEnd)}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          {/* DATE PICKERS */}
          {showPicker && (
            <DateTimePicker
              value={
                showPicker === "start" ? startDate :
                  showPicker === "end" ? endDate :
                    showPicker === "regStart" ? regStart :
                      regEnd
              }
              mode="date"
              display={Platform.OS === "ios" ? "inline" : "default"}
              onChange={onDateChange}
              style={{ backgroundColor: "#1e2128" }}
              themeVariant="dark"
            />
          )}

          {/* FOOTER */}
          <View style={{ paddingHorizontal: scale(16), paddingBottom: scale(24), paddingTop: scale(12), backgroundColor: "transparent", borderTopWidth: 1, borderTopColor: "rgba(255, 255, 255, 0.1)" }}>
            <TouchableOpacity
              onPress={() => router.push("/format-and-registration")}
              style={{ backgroundColor: "#F44725", height: scale(54), borderRadius: scale(16), alignItems: "center", justifyContent: "center" }}
            >
              <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: scale(14) }}>
                  Continue to Registration →
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GradientBackground>
  );
}
