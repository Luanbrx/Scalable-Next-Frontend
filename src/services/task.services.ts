import { CreateTaskDto, Task, UpdateTaskDto } from "@/types";
import api from "./api";

const TaskService = {
  async getAll(): Promise<Task[]> {
    const {data} = await api.get<Task[]> ("/tasks")
      return data;
  },

  async getById(id: number): Promise<Task>{
    const {data} = await api.get<Task>("/tasks/${id}");
    return data;
  },

  async create(dto: CreateTaskDto): Promise<Task> {
    const {data} = await api.post<Task>("/tasks", dto);
    return data;
  },

  async update(id: number, dto: UpdateTaskDto): Promise<Task>{
    const {data} = await api.patch<Task>("/tasks/${id}", dto);
    return data;
  },

  async remove(id: number): Promise<void>{
    await api.delete("/tasks/${id}");
  },
};

export default TaskService;