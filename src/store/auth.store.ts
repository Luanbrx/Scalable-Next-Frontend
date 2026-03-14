import { create } from 'zustand';
import { User } from '@/types';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  setAuth: (user, token) => {
  localStorage.setItem('access_token', token);
  document.cookie = `access_token=${token}; path=/; max-age=${60 * 60 * 24 * 7}`;
  set({ user, token, isAuthenticated: true });
},

clearAuth: () => {
  localStorage.removeItem('access_token');
  document.cookie = 'access_token=; path=/; max-age=0';
  set({ user: null, token: null, isAuthenticated: false });
},
}));