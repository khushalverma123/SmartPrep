import { Header } from "@/components/common/Header";
import LayoutWithBg from "@/components/common/LayoutWithBG";
import InfoCard from "@/components/InfoCard";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { teachers as studentsData } from "@/constants/teachersData";

import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const students = () => {
  const renderItem = ({ item }: { item: Student }) => (
    <InfoCard item={item} row={true} />
  );
  return (
    <LayoutWithBg noImage bgColor>
      <Header title="Dashboard" />
      <TouchableOpacity className="bg-green-700 p-4 rounded-xl relative">
        <View className="absolute opacity-30">
          <FontAwesome5 name="user-plus" size={60} color="white" />
        </View>
        <Text className="text-center text-white font-bold text-xl">
          Register Student
        </Text>
      </TouchableOpacity>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <FlatList
          data={studentsData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </ScrollView>
    </LayoutWithBg>
  );
};

export default students;
