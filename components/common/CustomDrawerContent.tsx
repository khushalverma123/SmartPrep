// components/CustomDrawerContent.tsx

import { drawerItemsByRole } from "@/constants/drawerItems";
import { useAuthStore } from "@/store/auth.store";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

export function CustomDrawerContent(props: any) {
  const { logout, role } = useAuthStore();
  const userDrawerItems = drawerItemsByRole[role] || [];
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [scaleValue] = useState(new Animated.Value(0));

  const handleLogout = () => {
    logout();
    router.replace("/");
    setShowLogoutDialog(false);
  };

  const showDialog = () => {
    setShowLogoutDialog(true);
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start();
  };

  const hideDialog = () => {
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setShowLogoutDialog(false);
    });
  };

  return (
    <>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {userDrawerItems.map((item, index) => (
          <DrawerItem
            key={index}
            label={item.label}
            icon={({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            )}
            onPress={() => router.push(item.path)}
          />
        ))}
        <DrawerItem
          label="Logout"
          icon={({ color, size }) => (
            <Entypo name="log-out" size={size} color={color} />
          )}
          onPress={showDialog}
        />
      </DrawerContentScrollView>

      <Modal
        visible={showLogoutDialog}
        transparent={true}
        animationType="fade"
        onRequestClose={hideDialog}
      >
        <TouchableWithoutFeedback onPress={hideDialog}>
          <View className="flex-1 bg-black/50 justify-center items-center px-6">
            <TouchableWithoutFeedback>
              <Animated.View
                style={{
                  transform: [{ scale: scaleValue }],
                }}
                className="bg-gray-100 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl"
              >
                <View className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-5 flex-row items-center">
                  <View className="w-12 h-12 bg-gray-200 rounded-full justify-center items-center mr-4">
                    <MaterialIcons name="logout" size={24} color="gray" />
                  </View>
                  <View className="flex-1">
                    <Text className=" text-xl font-bold">Confirm Logout</Text>
                    <Text className="text-sm mt-1">
                      Are you sure you want to sign out?
                    </Text>
                  </View>
                </View>

                <View className="px-6 py-5">
                  <View className="flex-row items-center mb-4">
                    <AntDesign name="warning" size={20} color="#f59e0b" />
                    <Text className="text-gray-700 text-base ml-3 flex-1">
                      You'll need to sign in again to access your account.
                    </Text>
                  </View>
                </View>

                <View className="flex-row border-t border-gray-100">
                  <TouchableOpacity
                    onPress={hideDialog}
                    className="flex-1 py-4 px-6 "
                    activeOpacity={0.7}
                  >
                    <View className="flex-row items-center justify-center">
                      <AntDesign name="close" size={18} color="#6b7280" />
                      <Text className="text-gray-600 font-semibold text-base ml-2">
                        Cancel
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={handleLogout}
                    className="flex-1 py-4 px-6"
                    activeOpacity={0.7}
                  >
                    <View className="flex-row items-center justify-center">
                      <MaterialIcons name="logout" size={18} color="#dc2626" />
                      <Text className="text-red-600 font-semibold text-base ml-2">
                        Logout
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* <ConfirmModal
        visible={showLogoutDialog}
        onCancel={() => setShowLogoutDialog(false)}
        onConfirm={handleLogout}
        heading="Confirm Logout"
        title="Are you sure you want to sign out?"
        subtitle="You'll need to sign in again to access your account."
        HeaderIcon={<MaterialIcons name="logout" size={24} color="gray" />}
        confirmText="Logout"
        cancelText="Cancel"
      /> */}
    </>
  );
}
