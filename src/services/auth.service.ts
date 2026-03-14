import { AuthResponse, LoginDto, RegisterDto, User } from "@/types";
import api from "./api";

const AuthService = {
  async login(dto: LoginDto): Promise<AuthResponse> {
    const {data} = await api.post<AuthResponse>("/auth/login", dto);
    localStorage.setItem("access_token", data.access_token);
    return data;
  },

  async register(dto: RegisterDto): Promise<AuthResponse> {
     const {data} = await api.post<AuthResponse>("/auth/register", dto);
    localStorage.setItem("access_token", data.access_token);
    return data;
  },

  async me(): Promise<User> {
    const {data} = await api.get<User>("/auth/me");
    return data;
  },

  logout() {
    localStorage.removeItem("access_token")
  },

};
export default AuthService;