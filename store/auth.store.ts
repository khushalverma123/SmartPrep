import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  id?: string;
  name?: string;
  email?: string;
  userName?: string;
  phone?: string;
  role?: string;
  // add more fields as needed
}

interface AuthStore {
  user: Partial<User> | null;
  token: string | null;
  role: string | null;
  refresh: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isOtpSent: boolean;
  isOtpVerifying: boolean;
  isAdmin: boolean;
  isTeacher: boolean;
  isParent: boolean;
  isStudent: boolean;
  setUser: (user: Partial<User>) => void;
  sentOtp: (user: Partial<User>) => void;
  setIsAdmin: (isAdmin: boolean) => void;
  setIsTeacher: (isTeacher: boolean) => void;
  setIsParent: (isParent: boolean) => void;
  setIsStudent: (isStudent: boolean) => void;
  setTokens: (token?: string) => void;
  login: (token: string, role: Partial<User>) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      role: null,
      refresh: null,
      isAuthenticated: false,
      isLoading: false,
      isOtpSent: false,
      isOtpVerifying: false,
      isAdmin: false,
      isTeacher: false,
      isParent: false,
      isStudent: false,
      setUser: (user) =>
        set((state) => ({
          user: { ...state.user, ...user },
        })),
      sentOtp: (user) => {
        set({ isOtpSent: true, user });
      },
      setIsAdmin: (isAdmin) => {
        set({ isAdmin });
      },
      setIsTeacher: (isTeacher) => {
        set({ isTeacher });
      },
      setIsParent: (isParent) => {
        set({ isParent });
      },
      setIsStudent: (isStudent) => {
        set({ isStudent });
      },
      setTokens: (token) => {
        set((state) => ({
          token: state.token,
        }));
      },
      login: (role, token) => {
        set({ role, token, isAuthenticated: true, isLoading: false });
      },
      logout: () => {
        set({
          user: null,
          token: null,
          refresh: null,
          isAuthenticated: false,
          isAdmin: false,
          isTeacher: false,
          isParent: false,
          isStudent: false,
          role: null,
        });
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        refresh: state.refresh,
        isAuthenticated: state.isAuthenticated,
        isAdmin: state.isAdmin,
        isTeacher: state.isTeacher,
        isParent: state.isParent,
        isStudent: state.isStudent,
      }),
    }
  )
);
