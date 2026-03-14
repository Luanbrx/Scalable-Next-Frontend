import clsx from "clsx";


interface BadgeProps {
  completed: boolean;
}

export function Badge ({completed}: BadgeProps) {
  return(
    <span 
    className={clsx(
      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
      completed
      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
      : "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20"
    )}
    >
   <span className={clsx(
    "w-1.5 h-1.5 rounded-full",
    completed? "bg-emerald-400" : "bg-zinc-400"
   )} /> 
   {completed ? "Concluida" : "Pendente"}
    </span>
  );
}