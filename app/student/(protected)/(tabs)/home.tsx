import { View, Text, Pressable } from "react-native";
import React from "react";
import { useAuthStore } from "@/store/auth.store";
import { router } from "expo-router";

const Home = () => {
  const { logout, token, role } = useAuthStore();
  console.log(`Role: ${role}, Token: ${token}`);
  const handleLogout = () => {
    logout();
    router.replace("/");
  };
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-6">Home Student</Text>

      <Pressable
        onPress={handleLogout}
        className="bg-red-500 px-6 py-3 rounded-full"
      >
        <Text className="text-white text-base font-semibold">Logout</Text>
      </Pressable>
    </View>
  );
};

export default Home;
