import api from './api';
import { AuthResponse, LoginDto } from '@/types';

const AuthService = {
  async login(dto: LoginDto): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>('/auth', dto); 
    localStorage.setItem('access_token', data.token); 
    return data;
  },

  logout() {
    localStorage.removeItem('access_token');
  },
};

export default AuthService;