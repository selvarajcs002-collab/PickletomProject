import React, { useMemo, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    TextInput,
    FlatList,
} from "react-native";
import { Check, Plus, X, Search } from "lucide-react-native";
import { skillsData } from "../assets/data/skills";
import { flattenSkills } from "../utils/flattenSkills";

interface Props {
    selected: string[];
    onSelectionChange: (selected: string[]) => void;
}

export default function CoreSkillsSelector({ selected, onSelectionChange }: Props) {
    const allSkills = useMemo(
        () => flattenSkills(skillsData.pickleball_skills),
        []
    );

    const [modalVisible, setModalVisible] = useState(false);
    const [search, setSearch] = useState("");

    const filtered = allSkills.filter((s) =>
        s.toLowerCase().includes(search.toLowerCase())
    );

    const toggleSkill = (skill: string) => {
        if (selected.includes(skill)) {
            onSelectionChange(selected.filter((s) => s !== skill));
        } else {
            onSelectionChange([...selected, skill]);
        }
    };

    const formatText = (text: string) =>
        text.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    return (
        <>
            {/* ================= CARD ================= */}
            <View
                style={{
                    backgroundColor: "#1e2128",
                    borderRadius: 28,
                    padding: 20,
                    borderWidth: 1,
                    borderColor: "rgba(255,255,255,0.05)",
                    marginBottom: 20,
                }}
            >
                {/* TITLE */}
                <Text
                    style={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: "700",
                        marginBottom: 12,
                    }}
                >
                    Core Skills
                </Text>

                {/* INPUT */}
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{
                        backgroundColor: "#0f1115",
                        borderRadius: 16,
                        padding: 14,
                        minHeight: 56,
                        borderWidth: 1,
                        borderColor: "rgba(255,255,255,0.05)",
                        justifyContent: "center",
                    }}
                >
                    {selected.length === 0 ? (
                        <Text style={{ color: "#555" }}>
                            Select the skills
                        </Text>
                    ) : (
                        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                            {selected.map((skill) => (
                                <View
                                    key={skill}
                                    style={{
                                        backgroundColor: "#F44725",
                                        paddingHorizontal: 10,
                                        paddingVertical: 6,
                                        borderRadius: 20,
                                        marginRight: 6,
                                        marginBottom: 6,
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "white",
                                            fontSize: 11,
                                            fontWeight: "600",
                                        }}
                                    >
                                        {formatText(skill)}
                                    </Text>

                                    <TouchableOpacity
                                        onPress={() => toggleSkill(skill)}
                                        style={{ marginLeft: 6 }}
                                    >
                                        <X size={12} color="white" />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    )}
                </TouchableOpacity>

                <Text
                    style={{
                        color: "#666",
                        fontSize: 10,
                        marginTop: 6,
                        marginLeft: 4,
                    }}
                >
                    e.g. Kitchen Master, Power Server, Deep Dink…
                </Text>
            </View>

            {/* ================= MODAL ================= */}
            <Modal visible={modalVisible} animationType="slide">
                <View
                    style={{
                        flex: 1,
                        backgroundColor: "#0f1115",
                        padding: 16,
                    }}
                >
                    {/* TITLE */}
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "700",
                            marginBottom: 12,
                        }}
                    >
                        Choose Core Skills
                    </Text>

                    {/* SEARCH */}
                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: "#1e2128",
                            borderRadius: 14,
                            paddingHorizontal: 12,
                            alignItems: "center",
                            marginBottom: 12,
                            height: 48,
                        }}
                    >
                        <Search size={16} color="#888" />
                        <TextInput
                            placeholder="Search skills..."
                            placeholderTextColor="#666"
                            value={search}
                            onChangeText={setSearch}
                            style={{
                                color: "white",
                                marginLeft: 10,
                                flex: 1,
                            }}
                        />
                    </View>

                    {/* LIST */}
                    <FlatList
                        data={filtered}
                        keyExtractor={(item) => item}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            const isSelected = selected.includes(item);

                            return (
                                <TouchableOpacity
                                    onPress={() => toggleSkill(item)}
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        paddingVertical: 16,
                                        borderBottomWidth: 1,
                                        borderBottomColor: "rgba(255,255,255,0.05)",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "white",
                                            fontSize: 14,
                                        }}
                                    >
                                        {formatText(item)}
                                    </Text>

                                    <View
                                        style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: 16,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: isSelected
                                                ? "#F44725"
                                                : "#1e2128",
                                        }}
                                    >
                                        {isSelected ? (
                                            <Check size={16} color="white" />
                                        ) : (
                                            <Plus size={16} color="#aaa" />
                                        )}
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />

                    {/* FOOTER */}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 12,
                        }}
                    >
                        <TouchableOpacity>
                            <Text style={{ color: "#aaa" }}>+ Add new</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={{
                                backgroundColor: "#F44725",
                                paddingHorizontal: 22,
                                paddingVertical: 10,
                                borderRadius: 10,
                            }}
                        >
                            <Text style={{ color: "white", fontWeight: "600" }}>
                                Done
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}