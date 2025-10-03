import { Header } from "@/components/common/Header";
import LayoutWithBg from "@/components/common/LayoutWithBG";
import InfoCard from "@/components/InfoCard";
import { teachers as teachersData } from "@/constants/teachersData";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const teachers = () => {
  const renderItem = ({ item }: { item: Teacher }) => (
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
          Register Teacher
        </Text>
      </TouchableOpacity>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <FlatList
          data={teachersData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </ScrollView>
    </LayoutWithBg>
  );
};

export default teachers;
