import { View, Text } from "react-native";
import React from "react";
import LayoutWithBg from "@/components/common/LayoutWithBG";
import { Header } from "@/components/common/Header";

const teachers = () => {
  return (
    <LayoutWithBg noImage bgColor>
      <Header title="Dashboard" />
      <Text>teachers</Text>
    </LayoutWithBg>
  );
};

export default teachers;
