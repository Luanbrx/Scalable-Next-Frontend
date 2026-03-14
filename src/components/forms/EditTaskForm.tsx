'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Task } from '@/types';
import { useTasks } from '@/hooks/useTasks';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';

const editSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  description: z.string().min(1, 'Descrição obrigatória'),
});

type EditFormData = z.infer<typeof editSchema>;

interface EditTaskFormProps {
  task: Task;
  onSuccess: () => void;
}

export function EditTaskForm({ task, onSuccess }: EditTaskFormProps) {
  const { editTask } = useTasks();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditFormData>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      name: task.name,
      description: task.description,
    },
  });

  async function onSubmit(data: EditFormData) {
    await editTask(task.id, data);
    onSuccess();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        label="Nome da tarefa"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        label="Descrição"
        error={errors.description?.message}
        {...register('description')}
      />
      <div className="flex gap-2 mt-2">
        <Button type="submit" isLoading={isSubmitting} className="flex-1">
          Salvar
        </Button>
      </div>
    </form>
  );
}