// app/admin/(protected)/_layout.tsx
import { CustomDrawerContent } from "@/components/common/CustomDrawerContent";
import { Drawer } from "expo-router/drawer";

export default function ProtectedLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="(tabs)" options={{ title: "Home" }} />
      <Drawer.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Drawer.Screen name="reports" options={{ title: "Reports" }} />
    </Drawer>
  );
}
