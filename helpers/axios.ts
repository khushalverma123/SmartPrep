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
  const token = useAuthStore.getState().access;

  const defaultHeaders = {
    "Content-Type": "application/json",
    ...(token && !url.startsWith("http") ? { Authorization: `Bearer ${token}` } : {}),
  };

  const baseUrl = process.env.EXPO_PUBLIC_BACKEND_URL ?? "http://192.168.0.131:8080/api/v1";

  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

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
