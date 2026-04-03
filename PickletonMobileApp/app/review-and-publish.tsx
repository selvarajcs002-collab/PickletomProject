import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import {
  ChevronLeft,
  Trophy,
  Calendar,
  MapPin,
  Users,
  CircleDollarSign,
  ShieldCheck,
  CheckCircle,
} from "lucide-react-native";
import { StatusBar } from "expo-status-bar";

export default function ReviewAndPublishScreen() {
  const router = useRouter();

  const SummarySection = ({
    title,
    icon: Icon,
    children,
  }: {
    title: string;
    icon: any;
    children: React.ReactNode;
  }) => (
    <View className="bg-surface p-6 rounded-3xl border border-white/5 space-y-4">
      <View className="flex-row items-center space-x-2">
        <Icon size={16} color="#F44725" />
        <Text className="text-white font-bold">{title}</Text>
      </View>
      {children}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar style="light" />

      {/* Header */}
      <View className="px-4 py-4 border-b border-white/5 flex-row items-center justify-between">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <ChevronLeft size={24} color="white" />
        </TouchableOpacity>
        <View className="items-center">
          <Text className="text-white font-bold">Review & Publish</Text>
          <Text className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            Step 5 of 5
          </Text>
        </View>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Progress Bar */}
        <View className="h-1 bg-gray-900 w-full">
          <View className="h-full bg-primary w-full" />
        </View>

        <View className="p-6 space-y-6">
          <View className="items-center py-4">
            <View className="w-20 h-20 rounded-full bg-primary/20 items-center justify-center border border-primary/30 mb-4">
              <CheckCircle size={40} color="#F44725" />
            </View>
            <Text className="text-white text-xl font-bold text-center">
              Ready to go live!
            </Text>
            <Text className="text-gray-400 text-center mt-2 px-4">
              Review your tournament details before sharing it with the community.
            </Text>
          </View>

          {/* Branding Summary */}
          <SummarySection title="Branding" icon={Trophy}>
            <View className="flex-row items-center space-x-4">
              <View className="w-12 h-12 bg-gray-800 rounded-xl overflow-hidden items-center justify-center">
                 <Trophy size={16} color="#444" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-bold text-lg">PickleMasters Open '24</Text>
                <Text className="text-gray-500 text-xs">Coastal Pickleball Classic</Text>
              </View>
            </View>
          </SummarySection>

          {/* Schedule Summary */}
          <SummarySection title="Schedule & Venue" icon={Calendar}>
            <View className="space-y-3">
              <View className="flex-row items-center space-x-2">
                <Calendar size={14} color="#666" />
                <Text className="text-gray-300 text-sm">Oct 14 - 16, 2024</Text>
              </View>
              <View className="flex-row items-center space-x-2">
                <MapPin size={14} color="#666" />
                <Text className="text-gray-300 text-sm">Central Park Complex, NY</Text>
              </View>
            </View>
          </SummarySection>

          {/* Format Summary */}
          <SummarySection title="Competition" icon={Users}>
             <View className="flex-row justify-between mb-2">
                <Text className="text-gray-500 text-sm">Type</Text>
                <Text className="text-white font-bold text-sm">Men's Doubles</Text>
             </View>
             <View className="flex-row justify-between mb-2">
                <Text className="text-gray-500 text-sm">Draw Size</Text>
                <Text className="text-white font-bold text-sm">32 Teams</Text>
             </View>
             <View className="flex-row justify-between">
                <Text className="text-gray-500 text-sm">Format</Text>
                <Text className="text-white font-bold text-sm">Best of 3</Text>
             </View>
          </SummarySection>

          {/* Finance Summary */}
          <SummarySection title="Entry & Prizes" icon={CircleDollarSign}>
             <View className="flex-row justify-between mb-2">
                <Text className="text-gray-500 text-sm">Entry Fee</Text>
                <Text className="text-white font-bold text-sm">$45.00</Text>
             </View>
             <View className="flex-row justify-between">
                <Text className="text-gray-500 text-sm">Total Prize Pool</Text>
                <Text className="text-primary font-bold text-sm">$850.00</Text>
             </View>
          </SummarySection>

          <View className="bg-primary/5 p-4 rounded-2xl border border-primary/10 mb-20">
             <Text className="text-primary text-[10px] font-bold text-center italic">
                By publishing, you agree to our Tournament Organizer Terms of Service.
             </Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View className="absolute bottom-0 left-0 right-0 p-6 bg-background/80 border-t border-white/10">
        <TouchableOpacity
          onPress={() => router.push("/community-feed")}
          className="bg-primary h-14 rounded-2xl items-center justify-center shadow-lg"
        >
          <Text className="text-white font-bold text-lg">Publish Tournament</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.back()} className="items-center py-4">
           <Text className="text-gray-600 font-bold">Edit Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
