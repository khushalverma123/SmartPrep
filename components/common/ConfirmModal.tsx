import React, { useState, useEffect } from "react";
import {
  Animated,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";

interface ConfirmModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  heading: string;
  subtitle?: string;
  title?: string;
  HeaderIcon: React.ReactElement; // Pass icon component instance here
  confirmText?: string;
  cancelText?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export function ConfirmModal({
  visible,
  onConfirm,
  onCancel,
  heading,
  subtitle,
  title,
  HeaderIcon,
  confirmText = "Confirm",
  cancelText = "Cancel",
  containerStyle,
}: ConfirmModalProps) {
  const [scaleValue] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
        tension: 100,
        friction: 8,
      }).start();
    } else {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <TouchableWithoutFeedback onPress={onCancel}>
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
                  {HeaderIcon}
                </View>
                <View className="flex-1">
                  <Text className="text-xl font-bold">{heading}</Text>
                  {title && <Text className="text-sm mt-1">{title}</Text>}
                </View>
              </View>

              {subtitle && (
                <View className="px-6 py-5">
                  <Text className="text-gray-700 text-base">{subtitle}</Text>
                </View>
              )}

              <View className="flex-row border-t border-gray-100">
                <TouchableOpacity
                  onPress={onCancel}
                  className="flex-1 py-4 px-6"
                  activeOpacity={0.7}
                >
                  <View className="flex-row items-center justify-center">
                    <Text className="text-gray-600 font-semibold text-base">
                      {cancelText}
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={onConfirm}
                  className="flex-1 py-4 px-6"
                  activeOpacity={0.7}
                >
                  <View className="flex-row items-center justify-center">
                    <Text className="text-red-600 font-semibold text-base">
                      {confirmText}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
