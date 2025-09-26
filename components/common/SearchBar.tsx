// components/SearchBar.tsx

import React, { useState } from "react";
import { View, TextInput, Pressable } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const clearSearch = () => setSearchText("");
  return (
    <View className="flex-row items-center bg-white rounded-full px-4 py-2 my-4 shadow-sm">
      <Feather name="search" size={20} color="#888" />
      <TextInput
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
        className="flex-1 px-3 text-base text-gray-800"
        placeholderTextColor="#aaa"
      />

      {searchText.length > 0 && (
        <Pressable onPress={clearSearch}>
          <Ionicons name="close-circle" size={20} color="#888" />
        </Pressable>
      )}
    </View>
  );
}
