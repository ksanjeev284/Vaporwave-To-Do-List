import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import WindowFrame from './WindowFrame';
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
      <div className="absolute -top-6 -left-6 w-12 h-12 bg-neon-pink rounded-full blur-lg opacity-50" />
      <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-neon-blue rounded-full blur-lg opacity-50" />
      
      <div className="relative transform hover:scale-[1.01] transition-transform duration-300">
        <WindowFrame title="VAPORWAVE TODO">
          <div className="p-8" style={{ background: 'rgba(13, 2, 33, 0.85)' }}>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <ListTodo className="w-8 h-8" style={{ color: '#FF6EC7' }} />
                <h2 className="text-4xl font-bold" style={{ 
                  color: '#00F5FF',
                  textShadow: '0 0 10px rgba(0, 245, 255, 0.5)'
                }}>
                  バーチャルタスク
                </h2>
                <ListTodo className="w-8 h-8" style={{ color: '#00F5FF' }} />
              </div>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" style={{ color: '#FF6EC7' }} />
                <p className="text-sm tracking-widest font-medium" style={{ color: '#00F5FF' }}>
                  CYBERPUNK TODO LIST
                </p>
                <Sparkles className="w-4 h-4" style={{ color: '#00F5FF' }} />
              </div>
            </div>

            <TodoForm onSubmit={addTodo} />

            <div className="flex justify-center gap-4 mt-8 mb-6">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-1 rounded-full text-sm transition-all ${
                  filter === 'all'
                    ? 'bg-neon-purple/20 border border-neon-purple font-medium'
                    : 'hover:text-[#00F5FF]'
                }`}
                style={{ color: filter === 'all' ? '#9D72FF' : 'rgba(0, 245, 255, 0.7)' }}
              >
                All ({todos.length})
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-4 py-1 rounded-full text-sm transition-all ${
                  filter === 'active'
                    ? 'bg-neon-blue/20 border border-neon-blue font-medium'
                    : 'hover:text-[#00F5FF]'
                }`}
                style={{ color: filter === 'active' ? '#00F5FF' : 'rgba(0, 245, 255, 0.7)' }}
              >
                Active ({activeTodos})
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-1 rounded-full text-sm transition-all ${
                  filter === 'completed'
                    ? 'bg-neon-pink/20 border border-neon-pink font-medium'
                    : 'hover:text-[#00F5FF]'
                }`}
                style={{ color: filter === 'completed' ? '#FF6EC7' : 'rgba(0, 245, 255, 0.7)' }}
              >
                Completed ({completedTodos})
              </button>
            </div>

            <div className="space-y-4 mt-6">
              {filteredTodos.length === 0 ? (
                <div 
                  className="text-center py-8 rounded-lg"
                  style={{ 
                    background: 'rgba(13, 2, 33, 0.6)',
                    color: '#9D72FF',
                    textShadow: '0 0 8px rgba(157, 114, 255, 0.5)'
                  }}
                >
                  {filter === 'completed' ? 'No completed tasks yet' :
                   filter === 'active' ? 'No active tasks - time to add some!' :
                   'Your todo list is empty - start by adding a task!'}
                </div>
              ) : (
                filteredTodos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))
              )}
            </div>
          </div>
        </WindowFrame>
      </div>
    </div>
  );
}