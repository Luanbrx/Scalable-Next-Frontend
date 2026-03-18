import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth.store';
import AuthService from '@/services/auth.service';
import UserService from '@/services/user.service';
import { LoginDto, RegisterDto } from '@/types';

export function useAuth() {
  const router = useRouter();
  const { user, isAuthenticated, setAuth, clearAuth } = useAuthStore();

  async function login(dto: LoginDto) {
    const data = await AuthService.login(dto);
    setAuth(data);
    router.push('/dashboard');
  }

  async function register(dto: RegisterDto) {
    
    await UserService.create(dto);
    
    await login({ email: dto.email, password: dto.password });
  }

  function logout() {
    AuthService.logout();
    clearAuth();
    router.push('/login');
  }

  return { user, isAuthenticated, login, register, logout };
}