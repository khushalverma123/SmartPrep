import { View, Text } from "react-native";
import React from "react";
import { Header } from "@/components/common/Header";
import LayoutWithBg from "@/components/common/LayoutWithBG";

const insitute = () => {
  return (
    <LayoutWithBg noImage bgColor>
      <Header title="Dashboard" />
      <Text>insitute</Text>
    </LayoutWithBg>
  );
};

export default insitute;
