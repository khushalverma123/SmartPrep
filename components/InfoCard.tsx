import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Linking } from "react-native";

const InfoCard = ({ item }: { item: Teacher }) => {
  return (
    <View className="bg-white rounded-xl shadow-lg m-2 overflow-hidden border border-gray-100">
      <View className="relative p-2 rounded-xl">
        <Image
          source={require("@/assets/images/PlaceholderImg.jpg")}
          className="w-full h-48 rounded-xl shadow-lg"
          resizeMode="cover"
        />
        <View className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </View>

      <View className="p-5 pb-0">
        <Text className="text-xl font-bold text-gray-900 mb-3 leading-tight">
          {item.name}
        </Text>
        <View className="gap-2">
          <View className="flex-row items-center">
            <View className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
            <View className="flex-1">
              <Text className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Subject
              </Text>
              <Text className="text-base text-gray-800 mt-0.5">
                {item.subject}
              </Text>
            </View>
          </View>

          {item.phone && (
            <View className="flex-row items-center">
              <View className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
              <View className="flex-1">
                <Text className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Phone
                </Text>
                <Text className="text-base text-gray-800 mt-0.5">
                  {item.phone}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>

      <View className="px-5 py-2">
        <View className="flex-row justify-between gap-2">
          <TouchableOpacity
            className="px-3 py-1.5 bg-green-100 rounded-full flex-row items-center gap-2"
            onPress={() => Linking.openURL(`tel:${item.phone}`)}
          >
            <Ionicons name="call-outline" size={20} color="green" />
            <Text className="text-xs font-medium text-green-700">Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="px-3 py-1.5 bg-green-100 rounded-full flex-row items-center gap-2"
            onPress={() =>
              Linking.openURL(
                `https://wa.me/${item.phone?.replace(/[^0-9]/g, "")}`
              )
            }
          >
            <Ionicons name="logo-whatsapp" size={20} color="green" />
            <Text className="text-xs font-medium text-green-700">Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InfoCard;
