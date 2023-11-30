import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Todo {
  key: number;
  label: string;
}
interface TodoState {
  todos: Todo[];
  addTodo: (label: string) => void;
  removeTodo: (key: number) => void;
}
type SetState = (
  partial: TodoState | Partial<TodoState> | ((state: TodoState) => TodoState | Partial<TodoState>),
  replace?: boolean | undefined,
) => void;

const todoState = (set: SetState) => ({
  todos: [],
  addTodo: (label: string) => {
    const todo: Todo = {
      key: Math.random() * 1000,
      label: label,
    };

    set((state: TodoState) => ({ todos: [...state.todos, todo] }));
  },
  removeTodo: (key: number) => {
    set((state: TodoState) => ({ todos: state.todos.filter((_todo) => _todo.key !== key) }));
  },
});

export const useTodoState = create(
  persist<TodoState>(todoState, {
    name: 'studycase::persist::todo',
  }),
);
