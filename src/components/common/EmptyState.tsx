import { ClipboardList } from "lucide-react";

export function EmptyState(){
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-3 text-zinc-600">
     <ClipboardList className="w-10 h-10" />
     <p className="text-xs">Nenhuma tarefa encontrada</p>
     <p className="text-xs">Crie sua primeira tarefa acima</p>
    </div>
  );
}