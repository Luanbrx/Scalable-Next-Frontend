import { create } from 'zustand';
import { AuthResponse } from '@/types';

interface AuthState {
  user: Omit<AuthResponse, 'token'> | null;
  token: string | null;
  isAuthenticated: boolean;

  setAuth: (data: AuthResponse) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  setAuth: (data) => {
    localStorage.setItem('access_token', data.token);
    document.cookie = `access_token=${data.token}; path=/; max-age=${60 * 60 * 24 * 7}`;
    const { token, ...user } = data;
    set({ user, token, isAuthenticated: true });
  },

  clearAuth: () => {
    localStorage.removeItem('access_token');
    document.cookie = 'access_token=; path=/; max-age=0';
    set({ user: null, token: null, isAuthenticated: false });
  },
}));