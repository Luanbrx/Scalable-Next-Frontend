import { useEffect } from "react";
import { useTaskStore } from "@/store/task.store";
import TaskService from "@/services/task.services";
import { CreateTaskDto, UpdateTaskDto } from "@/types";

export function useTasks() {
  const {
    tasks,
    isLoading,
    error,
    setTasks,
    addTask,
    updateTask,
    removeTask,
    setLoading,
    setError,
  } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      setLoading(true);
      setError(null);
      const data = await TaskService.getAll();
      setTasks(data);
    } catch {
      setError('Erro ao carregar tarefas.');
    } finally {
      setLoading(false);
    }
  }

  async function createTask(dto: CreateTaskDto) {
    try {
      setError(null);
      const task = await TaskService.create(dto);
      addTask(task);
    } catch {
      setError('Erro ao criar tarefa.');
    }
  }

  async function editTask(id: number, dto: UpdateTaskDto) {
    try {
      setError(null);
      const updated = await TaskService.update(id, dto);
      updateTask(id, updated);
    } catch {
      setError('Erro ao atualizar tarefa.');
    }
  }

  async function toggleComplete(id: number, completed: boolean) {
    await editTask(id, { completed });
  }

  async function deleteTask(id: number) {
    try {
      setError(null);
      await TaskService.remove(id);
      removeTask(id);
    } catch {
      setError('Erro ao deletar tarefa.');
    }
  }

  return {
    tasks,
    isLoading,
    error,
    createTask,
    editTask,
    toggleComplete,
    deleteTask,
  };
}