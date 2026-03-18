import api from './api';
import { User } from '@/types';
import { RegisterDto } from '@/types';

const UserService = {
  async create(dto: RegisterDto): Promise<User> {
    const { data } = await api.post<User>('/users', dto);
    return data;
  },

  async findOne(id: number): Promise<User> {
    const { data } = await api.get<User>(`/users/${id}`);
    return data;
  },

  async update(id: number, dto: Partial<User>): Promise<User> {
    const { data } = await api.patch<User>(`/users/${id}`, dto);
    return data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`/users/${id}`);
  },

  async uploadAvatar(file: File): Promise<User> {
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await api.post<User>('/users/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  },
};

export default UserService;