// src/components/RetroGrid/types.ts

export type Priority = 'low' | 'medium' | 'high';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: Priority;
  timestamp: string;
}

export interface RetroGridProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onAdd: (todo: Omit<Todo, 'id'>) => void;
}

export interface TodoFormProps {
  onSubmit: (todo: Omit<Todo, 'id'>) => void;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}