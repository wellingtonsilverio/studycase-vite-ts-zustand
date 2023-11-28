import { create } from 'zustand';

interface Todo {
  key: number;
  label: string;
}
interface TodoState {
  todos: Todo[];
  addTodo: (label: string) => void;
  removeTodo: (key: number) => void;
}

export const useTodoState = create<TodoState>((set) => ({
  todos: [],
  addTodo: (label: string) => {
    const todo: Todo = {
      key: Math.random() * 1000,
      label: label,
    };

    set((state) => ({ todos: [...state.todos, todo] }));
  },
  removeTodo: (key: number) => {
    set((state) => ({ todos: state.todos.filter((_todo) => _todo.key !== key) }));
  },
}));
