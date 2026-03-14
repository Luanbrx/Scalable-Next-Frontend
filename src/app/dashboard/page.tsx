'use client';

import { useState } from 'react';
import { LogOut, Plus, Pencil, Trash2, Check } from 'lucide-react';
import { useTasks } from '@/hooks/useTasks';
import { useAuth } from '@/hooks/useAuth';
import { Task } from '@/types';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { Spinner } from '@/components/common/Spinner';
import { EmptyState } from '@/components/common/EmptyState';
import { Modal } from '@/components/common/Modal';
import { TaskForm } from '@/components/forms/TaskForm';
import { EditTaskForm } from '@/components/forms/EditTaskForm';

export default function DashboardPage() {
  const { tasks, isLoading, error, toggleComplete, deleteTask } = useTasks();
  const { user, logout } = useAuth();

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const completed = tasks.filter((t) => t.completed).length;

  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Navbar */}
      <nav className="border-b border-zinc-800/50 bg-zinc-900/50 backdrop-blur sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-violet-400 font-bold text-lg">✓</span>
            <span className="font-semibold text-zinc-100 text-sm">
              Scalable Tasks
            </span>
          </div>
          <div className="flex items-center gap-3">
            {user && (
              <span className="text-xs text-zinc-500 hidden sm:block">
                {user.name}
              </span>
            )}
            <Button variant="ghost" onClick={logout} className="h-8 px-3">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:block text-xs">Sair</span>
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-semibold text-zinc-100">
              Minhas tarefas
            </h1>
            <p className="text-sm text-zinc-500 mt-0.5">
              {completed} de {tasks.length} concluídas
            </p>
          </div>
          <Button onClick={() => setIsCreateOpen(true)} className="gap-2">
            <Plus className="w-4 h-4" />
            Nova tarefa
          </Button>
        </div>

        {/* Barra de progresso */}
        {tasks.length > 0 && (
          <div className="mb-6">
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-violet-500 rounded-full transition-all duration-500"
                style={{ width: `${(completed / tasks.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Lista */}
        {isLoading ? (
          <Spinner />
        ) : tasks.length === 0 ? (
          <EmptyState />
        ) : (
          <ul className="flex flex-col gap-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="group bg-zinc-900/60 border border-zinc-800/50 rounded-xl px-5 py-4 flex items-start gap-4 hover:border-zinc-700/50 transition-all duration-200"
              >
                {/* Checkbox */}
                <button
                  onClick={() => toggleComplete(task.id, !task.completed)}
                  className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                    task.completed
                      ? 'bg-emerald-500 border-emerald-500'
                      : 'border-zinc-600 hover:border-violet-500'
                  }`}
                >
                  {task.completed && (
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  )}
                </button>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-sm font-medium transition-all ${
                        task.completed
                          ? 'line-through text-zinc-500'
                          : 'text-zinc-100'
                      }`}
                    >
                      {task.name}
                    </span>
                    <Badge completed={task.completed} />
                  </div>
                  {task.description && (
                    <p className="text-xs text-zinc-500 mt-1 truncate">
                      {task.description}
                    </p>
                  )}
                </div>

                {/* Ações */}
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    onClick={() => setEditingTask(task)}
                    className="h-8 w-8 p-0"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteTask(task.id)}
                    className="h-8 w-8 p-0"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal criar */}
      <Modal
        title="Nova tarefa"
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      >
        <TaskForm onSuccess={() => setIsCreateOpen(false)} />
      </Modal>

      {/* Modal editar */}
      <Modal
        title="Editar tarefa"
        isOpen={!!editingTask}
        onClose={() => setEditingTask(null)}
      >
        {editingTask && (
          <EditTaskForm
            task={editingTask}
            onSuccess={() => setEditingTask(null)}
          />
        )}
      </Modal>
    </main>
  );
}