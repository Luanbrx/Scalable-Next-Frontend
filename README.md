# Scalable Tasks — Frontend

Interface web para gerenciamento de tarefas, construída com Next.js 16, React e TypeScript. Consome a [Scalable Nest Rest API](https://github.com/Luanbrx/Scalable-Nest-Rest-Api).

---

## 🖥️ Preview

> Login, cadastro, criação, edição, conclusão e exclusão de tarefas — tudo em um dashboard dark moderno.

---

## 🚀 Tecnologias

| Tecnologia | Função |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework React com App Router |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilização utilitária |
| [Zustand](https://zustand-demo.pmnd.rs/) | Estado global (token JWT, usuário, tarefas) |
| [Axios](https://axios-http.com/) | Comunicação com a API REST |
| [React Hook Form](https://react-hook-form.com/) | Gerenciamento de formulários |
| [Zod](https://zod.dev/) | Validação de schemas |
| [Lucide React](https://lucide.dev/) | Ícones |

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout global
│   ├── page.tsx            # Redireciona para /login
│   ├── login/
│   │   └── page.tsx        # Página de login e cadastro
│   └── dashboard/
│       └── page.tsx        # Dashboard de tarefas (rota protegida)
├── components/
│   ├── common/             # Button, Input, Badge, Modal, Spinner, EmptyState
│   └── forms/              # LoginForm, RegisterForm, TaskForm, EditTaskForm
├── hooks/
│   ├── useAuth.ts          # Login, register, logout + redirect
│   └── useTasks.ts         # CRUD de tarefas com loading/error
├── services/
│   ├── api.ts              # Axios configurado com interceptadores JWT
│   ├── auth.service.ts     # Chamadas de autenticação
│   ├── task.service.ts     # Chamadas de tarefas
│   └── user.service.ts     # Chamadas de usuários
├── store/
│   ├── auth.store.ts       # Estado global de autenticação (Zustand)
│   └── task.store.ts       # Estado global de tarefas (Zustand)
├── types/
│   └── index.ts            # Interfaces TypeScript (User, Task, DTOs)
└── proxy.ts                # Proteção de rotas (Next.js 16)
```

---

## ⚙️ Configuração e Instalação

### Pré-requisitos

- Node.js 20+
- [Scalable Nest Rest API](https://github.com/Luanbrx/Scalable-Nest-Rest-Api) rodando localmente

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Luanbrx/Scalable-Next-Frontend.git

# Entre na pasta
cd Scalable-Next-Frontend

# Instale as dependências
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
# URL base da sua API NestJS (sem barra no final)
NEXT_PUBLIC_API_URL=http://localhost:3001
```

> Copie o `.env.example` como base: `cp .env.example .env.local`

### Executar em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

---

## 🔐 Fluxo de Autenticação

1. Usuário faz login ou cadastro em `/login`
2. API retorna um token JWT
3. Token é salvo no `localStorage` e em um cookie
4. Axios injeta o token automaticamente em todas as requisições via interceptador
5. O `proxy.ts` protege a rota `/dashboard` — redireciona para `/login` se não houver token
6. Se o token expirar, o interceptador de resposta redireciona automaticamente para `/login`

---

## ✅ Funcionalidades

- [x] Login e cadastro de usuários
- [x] Proteção de rotas no frontend
- [x] Criar tarefas
- [x] Listar tarefas do usuário autenticado
- [x] Ver detalhes de uma tarefa
- [x] Editar tarefas
- [x] Marcar tarefa como concluída
- [x] Deletar tarefas
- [x] Barra de progresso de conclusão
- [x] Logout

---

## 🔗 Repositório do Backend

[Scalable-Nest-Rest-Api](https://github.com/Luanbrx/Scalable-Nest-Rest-Api)

---

## 📝 Licença

Este projeto está sob a licença MIT.
