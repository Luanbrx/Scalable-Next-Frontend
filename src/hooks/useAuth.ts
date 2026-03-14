import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth.store';
import AuthService from '@/services/auth.service';
import { LoginDto, RegisterDto } from '@/types';

export function useAuth() {
  const router = useRouter();
  const { user, isAuthenticated, setAuth, clearAuth } = useAuthStore();

  async function login(dto: LoginDto) {
    const data = await AuthService.login(dto);
    setAuth(data.user, data.access_token);
    router.push('/dashboard');
  }

  async function register(dto: RegisterDto) {
    const data = await AuthService.register(dto);
    setAuth(data.user, data.access_token);
    router.push('/dashboard');
  }

  function logout() {
    AuthService.logout();
    clearAuth();
    router.push('/login');
  }

  return { user, isAuthenticated, login, register, logout };
}