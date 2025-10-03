import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";

import { ReactNode } from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function LayoutWithBg({
  noPadding = false,
  bgColor = false,
  children,
  noImage = false,
}: {
  noPadding?: boolean;
  noImage?: boolean;
  bgColor?: boolean;
  children: ReactNode;
}) {
  const height = Dimensions.get("screen").height;
  const isIOS = Platform.OS === "ios";
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 w-screen">
      <ImageBackground
        source={noImage ? undefined : require("@/assets/images/Main-BG.jpg")}
        resizeMode="cover"
        className="flex-1"
      >
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView
            className={`self-center justify-start w-full ${
              isIOS ? "flex-1" : "h-[100vh]"
            } ${noPadding ? "" : "px-4"} ${bgColor ? "bg-[#F5F9FF]" : ""}`}
            behavior="padding"
            // Add bottom padding here dynamically with safe area inset
            style={{ paddingBottom: noPadding ? 0 : insets.bottom + 25 }}
          >
            {children}
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
