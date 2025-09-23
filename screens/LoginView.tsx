import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { toast } from "sonner-native";
import LayoutWithBg from "@/components/common/LayoutWithBG";

type LoginViewProps = {
  type: string;
  isLoading: boolean;
  mutate: (variables: { userId: string; password: string }) => void;
};

const LoginView: React.FC<LoginViewProps> = ({ type, mutate, isLoading }) => {
  const [userId, setUsername] = useState<string | null>("UID789616");
  const [password, setPassword] = useState<string | null>("12345678");
  const handleLogin = () => {
    if (!userId || !password) {
      toast.error("Please enter userId and password");
      return;
    }
    mutate({ userId: userId, password });
  };

  return (
    <LayoutWithBg>
      <View className="flex-1 justify-center items-center px-6 gap-8 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <Text className="text-3xl font-extrabold text-white capitalize">
          Welcome {type}
        </Text>

        <View className="w-full gap-4">
          <TextInput
            placeholder="Username"
            value={userId || ""}
            onChangeText={(text) => setUsername(text)}
            className="border border-gray-300 bg-white/10 rounded-lg px-4 py-3 text-base text-white"
            placeholderTextColor="#cbd5e1"
          />
          <TextInput
            placeholder="Password"
            value={password || ""}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            className="border border-gray-300 bg-white/10 rounded-lg px-4 py-3 text-base text-white"
            placeholderTextColor="#cbd5e1"
          />
          <Pressable
            className={`py-3 mt-2 rounded-full items-center bg-violet-500`}
            onPress={handleLogin}
          >
            {isLoading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text className="text-white font-semibold text-base">Log In</Text>
            )}
          </Pressable>
        </View>
      </View>
    </LayoutWithBg>
  );
};

export default LoginView;
