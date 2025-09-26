import { View, Text } from "react-native";
import React from "react";
import LayoutWithBg from "@/components/common/LayoutWithBG";
import { Header } from "@/components/common/Header";

const students = () => {
  return (
    <LayoutWithBg noImage bgColor>
      <Header title="Dashboard" />
      <Text>students</Text>
    </LayoutWithBg>
  );
};

export default students;
