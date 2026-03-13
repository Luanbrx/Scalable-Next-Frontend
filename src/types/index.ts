
export interface User {
  id: number;          
  name: string;
  email: string;
  active: boolean;
  avatar?: string;     
  createdAt: string;
  updatedAt: string;

}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string; 
  user: User;
}

export interface Task {
  id: number;            
  name: string;          
  description: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
}

export interface CreateTaskDto {
  name: string;
  description: string;
}

export interface UpdateTaskDto {
  name?: string;
  description?: string;
  completed?: boolean;   
}

export interface ApiError {
  message: string;
  statusCode: number;
  error: string;
}