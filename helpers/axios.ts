import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useAuthStore } from "@/store/auth.store";

interface AxiosFetchConfig extends Omit<AxiosRequestConfig, "url" | "method"> {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
}

const axiosFetch = async <T>({
  url,
  method,
  headers = {},
  ...rest
}: AxiosFetchConfig): Promise<T> => {
  const token = useAuthStore.getState().token;

  const defaultHeaders = {
    "Content-Type": "application/json",
    ...(token && !url.startsWith("http")
      ? { Authorization: `Bearer ${token}` }
      : {}),
  };

  const baseUrl =
    process.env.EXPO_PUBLIC_BACKEND_URL ?? "";

  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;
  console.log("Backend URL:", fullUrl);
  try {
    const response: AxiosResponse<T> = await axios.request({
      url: fullUrl,
      method,
      headers: { ...defaultHeaders, ...headers },
      ...rest,
    });
    return response.data;
  } catch (error) {
    // Optionally, add error handling here or just rethrow
    throw error;
  }
};

export default axiosFetch;
