import { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            'w-full rounded-lg bg-zinc-900 border px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-all duration-200',
            'focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500',
            error ? 'border-red-500/50' : 'border-zinc-700/50',
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-400">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';