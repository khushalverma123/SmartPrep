import axiosFetch from "@/helpers/axios";
import apis from "@/constants/apis";
class AuthService {
  static async login(userId: string, password: string) {
    try {
      const data = await axiosFetch({
        url: apis.AUTH_MODULE.LOGIN,
        method: "POST",
        data: {
          userId,
          password,
        },
      });
      return data;
    } catch (e) {
      throw e;
    }
  }
}

export default AuthService;
