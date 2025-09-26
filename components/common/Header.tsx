import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { getGreeting } from "@/utils/greetings";

export function Header({ title }: { title: string }) {
  const navigation = useNavigation();
  const greeting = getGreeting();

  return (
    <View className="flex-row items-center py-4 gap-4 border-b border-gray-300 rounded-b-lg">
      <Pressable onPress={() => navigation.toggleDrawer()}>
        <Entypo name="menu" size={24} color="black" />
      </Pressable>

      <View className="flex-1">
        <Text className="text-2xl font-bold">Hi, {title}</Text>
        <Text className="text-gray-600">{greeting}</Text>
      </View>

      <TouchableOpacity className="border-green-600 border-2 p-2 rounded-full items-center justify-center">
        <Entypo name="bell" size={24} color="#16A34A" />
      </TouchableOpacity>
    </View>
  );
}
