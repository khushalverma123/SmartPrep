import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import { StatusBar } from "expo-status-bar";
import { Toaster } from "sonner-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";


export default function RootLayout() {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="dark" />
          <Stack
            screenOptions={{
              headerShown: false,
              animation: "slide_from_right",
            }}
            initialRouteName={"index"}
          >
            <Stack.Screen name="index" />
          </Stack>
          <View style={styles.toasterContainer}>
            <Toaster closeButton richColors autoWiggleOnUpdate />
          </View>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  toasterContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 9999,
    elevation: 9999,
    pointerEvents: "box-none",
  },
});
