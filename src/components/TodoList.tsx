import React, { useState } from 'react';
import { Computer, Flag, Clock3 } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  timestamp: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { 
      hour: 'numeric',
      minute: '2-digit',
      hour12: true 
    });

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo,
        completed: false,
        priority,
        timestamp: timeStr
      }
    ]);
    setNewTodo('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Flag className="w-4 h-4 text-red-600" />;
      case 'medium':
        return <Flag className="w-4 h-4 text-yellow-600" />;
      default:
        return <Flag className="w-4 h-4 text-green-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#ECF4FE] p-8 flex justify-center items-start">
      <div className="w-full max-w-2xl">
        {/* Window Title Bar */}
        <div className="bg-gradient-to-r from-[#2C4F7C] to-[#0C306E] p-2 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Computer className="w-5 h-5 text-white" />
            <span className="text-white font-['Tahoma'] text-sm">My Todo List</span>
          </div>
          <div className="flex gap-2">
            <button className="w-6 h-6 bg-[#ECF4FE] rounded-sm hover:bg-white flex items-center justify-center">
              <span className="text-black font-bold">_</span>
            </button>
            <button className="w-6 h-6 bg-[#ECF4FE] rounded-sm hover:bg-white flex items-center justify-center">
              <span className="text-black font-bold">□</span>
            </button>
            <button className="w-6 h-6 bg-red-600 rounded-sm hover:bg-red-700 flex items-center justify-center">
              <span className="text-white font-bold">×</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white border-2 border-[#0C306E] p-4 rounded-b-lg shadow-lg">
          <form onSubmit={addTodo} className="mb-4 flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="flex-1 p-2 border-2 border-[#7F9DB9] rounded font-['Tahoma'] text-sm focus:outline-none focus:border-[#2C4F7C]"
              placeholder="Add new task..."
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
              className="p-2 border-2 border-[#7F9DB9] rounded font-['Tahoma'] text-sm"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button
              type="submit"
              className="bg-gradient-to-b from-[#36A42D] to-[#2B7A23] text-white px-4 py-2 rounded font-['Tahoma'] text-sm hover:from-[#42C437] hover:to-[#318C28]"
            >
              Add Task
            </button>
          </form>

          <div className="space-y-2">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center gap-3 p-2 rounded hover:bg-[#ECF4FE] cursor-pointer ${
                  todo.completed ? 'text-gray-500' : ''
                }`}
                onClick={() => toggleTodo(todo.id)}
              >
                <div className="w-4 h-4 border-2 border-[#7F9DB9] flex items-center justify-center bg-white">
                  {todo.completed && '✓'}
                </div>
                <Computer className="w-4 h-4 text-[#2C4F7C]" />
                <span className={`flex-1 font-['Tahoma'] text-sm ${todo.completed ? 'line-through' : ''}`}>
                  {todo.text}
                </span>
                {getPriorityIcon(todo.priority)}
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Clock3 className="w-3 h-3" />
                  {todo.timestamp}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}