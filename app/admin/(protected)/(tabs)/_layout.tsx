import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#F5F9FF",
          height: 80,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "home":
              iconName = "home";
              break;
            case "insitute":
              iconName = "building";
              break;
            case "students":
              iconName = "users";
              break;
            case "teachers":
              iconName = "chalkboard-teacher";
              break;
            default:
              iconName = "circle";
          }

          return (
            <FontAwesome
              name={iconName}
              size={size ?? 20}
              color={color}
              style={{ marginBottom: -3 }}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="insitute" options={{ title: "Institute" }} />
      <Tabs.Screen name="students" options={{ title: "Students" }} />
      <Tabs.Screen name="teachers" options={{ title: "Teachers" }} />
    </Tabs>
  );
}
