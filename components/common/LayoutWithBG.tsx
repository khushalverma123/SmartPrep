import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";

import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Toaster } from "sonner-native";

export default function LayoutWithBg({
  noPadding = false,
  children,
}: {
  noPadding?: boolean;
  children: ReactNode;
}) {
  const height = Dimensions.get("screen").height;
  const isIOS = Platform.OS === "ios";
  return (
    <View
      className="relative flex-1 w-screen"
      style={{
        height,
        minHeight: height,
      }}
    >
      <ImageBackground
        source={require("@/assets/images/Main-BG.jpg")}
        resizeMode="cover"
        className="flex-1"
      >
        {/* <Toaster closeButton richColors/> */}
        <SafeAreaView style={{ flex: 1, paddingVertical: 20 }}>
          <KeyboardAvoidingView
            className={`self-center justify-start w-full ${
              isIOS ? "flex-1" : "h-[100vh]"
            } ${noPadding ? "" : "px-4"}`}
            behavior="padding"
          >
            {children}
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
