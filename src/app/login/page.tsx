'use client';

import { useState } from 'react';
import { LoginForm } from '@/components/forms/LoginForm';
import { RegisterForm } from '@/components/forms/RegisterForm';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      {/* Glow de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 mb-4">
            <span className="text-xl">✓</span>
          </div>
          <h1 className="text-2xl font-semibold text-zinc-100">
            Scalable Tasks
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            {mode === 'login'
              ? 'Entre na sua conta para continuar'
              : 'Crie sua conta gratuitamente'}
          </p>
        </div>

        {/* Card */}
        <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-2xl p-8 shadow-xl shadow-black/40">
          {/* Tabs */}
          <div className="flex bg-zinc-800/50 rounded-lg p-1 mb-6">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                mode === 'login'
                  ? 'bg-zinc-700 text-zinc-100 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Entrar
            </button>
            <button
              onClick={() => setMode('register')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                mode === 'register'
                  ? 'bg-zinc-700 text-zinc-100 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Criar conta
            </button>
          </div>

          {/* Form */}
          {mode === 'login' ? <LoginForm /> : <RegisterForm />}
        </div>

        <p className="text-center text-xs text-zinc-600 mt-6">
          Scalable Tasks © {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}