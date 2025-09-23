import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Redirect, router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { toast } from "sonner-native";
import LayoutWithBg from "../components/common/LayoutWithBG";
import { useAuthStore } from "../store/auth.store";

export default function Index() {
  const { isAuthenticated, user, isAdmin, isTeacher, isParent, isStudent } =
    useAuthStore();
  const [pressedButton, setPressedButton] = useState<
    "admin" | "teacher" | "parent" | "student" | null
  >(null);

  const onPressHandler = (type: "admin" | "teacher" | "parent" | "student") => {
    setPressedButton(type);
    setTimeout(() => {
      if (type === "admin") {
        router.push("/admin/(auth)/login");
      }
      if (type === "teacher") {
        router.push("/teacher");
      }
      if (type === "parent") {
        router.push("/parent");
      }
      if (type === "student") {
        router.push("/student");
      }
      setPressedButton(null);
    }, 150);
  };

  if (isAuthenticated && isAdmin) {
    return <Redirect href="/admin/(protected)/(tabs)/home" />;
  }
  if (isAuthenticated && isTeacher) {
    return <Redirect href="/teacher/(protected)/(tabs)/home" />;
  }
  if (isAuthenticated && isParent) {
    return <Redirect href="/parent/(protected)/(tabs)/home" />;
  }
  if (isAuthenticated && isStudent) {
    return <Redirect href="/student/(protected)/(tabs)/home" />;
  }
  const showToast = () => {
    toast.success("Operation successful!");

    toast.error("Something went wrong!");

    toast.warning("Be careful!");
  };

  return (
    <LayoutWithBg>
      <View className="flex-1 justify-between ">
        <View className="items-center">
          <View className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 mb-6 border border-white/20">
            <Ionicons name="school" size={48} color="#ffffff" />
          </View>
          <Text className="text-4xl font-bold text-white mb-3">EduConnect</Text>
          <Text className="text-lg text-white/70 text-center px-4">
            Choose your role to get started
          </Text>
        </View>
        {/* <Button title="Show Toast" onPress={showToast} /> */}

        <View className="w-full flex-col">
          <Pressable
            className={`backdrop-blur-lg rounded-3xl p-2 shadow-lg ${
              pressedButton === "parent" ? "scale-95" : ""
            }`}
            onPress={() => onPressHandler("parent")}
            style={{
              transform: [{ scale: pressedButton === "parent" ? 0.98 : 1 }],
            }}
          >
            <View className="items-center">
              <View className="bg-blue-100 rounded-2xl p-4 mb-4">
                <Ionicons name="people" size={32} color="#3b82f6" />
              </View>
              <Text className="text-2xl font-bold text-white mb-2">Parent</Text>
            </View>
          </Pressable>

          <Pressable
            className={`backdrop-blur-lg rounded-3xl p-2 shadow-lg ${
              pressedButton === "student" ? "scale-95" : ""
            }`}
            onPress={() => onPressHandler("student")}
            style={{
              transform: [{ scale: pressedButton === "student" ? 0.98 : 1 }],
            }}
          >
            <View className="items-center">
              <View className="bg-green-100 rounded-2xl p-4 mb-4">
                <FontAwesome5 name="graduation-cap" size={28} color="#10b981" />
              </View>
              <Text className="text-2xl font-bold text-white mb-2">
                Student
              </Text>
            </View>
          </Pressable>
        </View>

        <View className="">
          <Text className="text-white text-center  text-sm">Staff Access</Text>
          <View className="flex-row justify-between">
            <Pressable
              className={`p-2 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 ${
                pressedButton === "teacher" ? "bg-white/20" : ""
              }`}
              onPress={() => onPressHandler("teacher")}
            >
              <View className="items-center">
                <View className="bg-white/20 rounded-xl p-3 mb-1">
                  <MaterialIcons name="school" size={24} color="#ffffff" />
                </View>
                <Text className="text-white font-semibold text-base">
                  Teacher
                </Text>
              </View>
            </Pressable>
            <Pressable
              className={`p-2 bg-white/10 backdrop-blur-lg rounded-2xl  border border-white/20 ${
                pressedButton === "admin" ? "bg-white/20" : ""
              }`}
              onPress={() => onPressHandler("admin")}
            >
              <View className="items-center">
                <View className="bg-white/20 rounded-xl p-3 mb-1">
                  <Ionicons name="settings" size={24} color="#ffffff" />
                </View>
                <Text className="text-white font-semibold text-base">
                  Admin
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </LayoutWithBg>
  );
}
