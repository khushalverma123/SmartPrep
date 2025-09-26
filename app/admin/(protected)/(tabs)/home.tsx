import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useAuthStore } from "@/store/auth.store";
import { router } from "expo-router";
import SearchBar from "@/components/common/SearchBar";
import LayoutWithBg from "@/components/common/LayoutWithBG";
import { Header } from "@/components/common/Header";
import { teachers } from "@/constants/teachersData";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import InfoCard from "@/components/InfoCard";
const Home = () => {
  const { logout, token, role } = useAuthStore();
  console.log(`Role: ${role}, Token: ${token}`);
  const renderItem = ({ item }: { item: Teacher }) => <InfoCard item={item} />;
  return (
    <LayoutWithBg noImage bgColor>
      <ScrollView className="flex-1 w-full">
        <Header title="Dashboard" />
        <SearchBar />
        <View>
          <Text className="text-xl text-gray-700 font-bold">
            Top Mentors :-
          </Text>
          <FlatList
            data={teachers}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={{ height: "100%" }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </LayoutWithBg>
  );
};

export default Home;
