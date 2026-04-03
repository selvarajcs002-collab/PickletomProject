import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";
import {
  LayoutGrid,
  Activity,
  SquarePlus,
  MessageSquare,
} from "lucide-react-native";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity 
          onPress={() => router.push("/community-feed")}
          style={styles.navItem}
        >
          <LayoutGrid size={24} color={isActive("/community-feed") || pathname === "/" ? "#F44725" : "#AAA"} />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push("/basic-info")}
          style={styles.navItem}
        >
          <Activity size={24} color={isActive("/basic-info") ? "#F44725" : "#AAA"} />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push("/createpostscreen")}
          style={styles.navItem}
        >
          <SquarePlus size={26} color={isActive("/createpostscreen") ? "#F44725" : "#AAA"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <MessageSquare size={24} color="#AAA" />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push("/about-player")}
          style={styles.navItem}
        >
          <View style={[styles.avatarContainer, isActive("/about-player") && styles.activeAvatar]}>
            <Image 
              source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} 
              style={styles.avatar}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    alignItems: "center",
  },
  navBar: {
    flexDirection: "row",
    backgroundColor: "rgba(40, 40, 40, 0.85)",
    borderRadius: 35,
    height: 65,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  navItem: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  activeAvatar: {
    borderColor: "#F44725",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
});
