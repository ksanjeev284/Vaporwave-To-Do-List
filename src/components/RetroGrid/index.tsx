import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { Todo } from './types';
import { Sparkles, ListTodo } from 'lucide-react';

type Filter = 'all' | 'active' | 'completed';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  const addTodo = (todo: Omit<Todo, 'id'>) => {
    setTodos([
      {
        ...todo,
        id: Date.now()
      },
      ...todos
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodos = todos.filter(todo => !todo.completed).length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <div className="relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-pink rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-neon-blue rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-neon-purple rounded-full blur-3xl opacity-20 animate-pulse delay-2000" />

      {/* Content */}
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-12 max-w-2xl min-h-screen flex items-center justify-center">
          <div className="w-full">
            <TodoForm onSubmit={addTodo} />
            <ul>
              {filteredTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={() => toggleTodo(todo.id)}
                  onDelete={() => deleteTodo(todo.id)}
                />
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              <span>{activeTodos} items left</span>
              <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
              </div>
              <span>{completedTodos} completed</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}