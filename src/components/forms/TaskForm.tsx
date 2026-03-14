'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTasks } from '@/hooks/useTasks';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';

const taskSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  description: z.string().min(1, 'Descrição obrigatória'),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface TaskFormProps {
  onSuccess?: () => void;
}

export function TaskForm({ onSuccess }: TaskFormProps) {
  const { createTask } = useTasks();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  async function onSubmit(data: TaskFormData) {
    await createTask(data);
    reset();
    onSuccess?.();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        label="Nome da tarefa"
        placeholder="Ex: Estudar React"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        label="Descrição"
        placeholder="Ex: Assistir aulas e praticar hooks"
        error={errors.description?.message}
        {...register('description')}
      />
      <Button type="submit" isLoading={isSubmitting} className="w-full">
        Criar tarefa
      </Button>
    </form>
  );
}