import LoginView from "@/screens/LoginView";
import AuthService from "@/services/auth/index.service";
import { useAuthStore } from "@/store/auth.store";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { toast } from "sonner-native";

const login = () => {
  const { isAuthenticated, login, setIsAdmin } = useAuthStore();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["login"],
    mutationFn: async ({
      userId,
      password,
    }: {
      userId: string;
      password: string;
    }) => {
      const data = await AuthService.login(userId, password);
      return data;
    },
    onSuccess(data) {
      toast.success(data.message);
      setIsAdmin(true);
      login(data.data.role, data.data.token);
      router.replace("/admin/(tabs)/home");
    },
    onError(error) {
      console.log("error")
      toast.error(error.response.data.message);
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/admin/(tabs)/home");
    }
  }, [isAuthenticated]);
  return <LoginView type="admin" isLoading={isLoading} mutate={mutate} />;
};

export default login;
