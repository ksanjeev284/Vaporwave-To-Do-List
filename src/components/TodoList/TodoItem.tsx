import React from 'react';
import { Todo, Priority } from './types';
import { Check, Trash2 } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const priorityColors: Record<Priority, string> = {
  low: 'bg-emerald-200 dark:bg-emerald-900',
  medium: 'bg-yellow-200 dark:bg-yellow-900',
  high: 'bg-red-200 dark:bg-red-900'
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className={`
      flex items-center gap-3 p-3 mb-2 rounded-lg
      bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
      border border-white/20 dark:border-gray-700/50
      hover:bg-white/60 dark:hover:bg-gray-800/60
      transition-all duration-200
    `}>
      <button
        onClick={() => onToggle(todo.id)}
        className={`
          w-6 h-6 rounded-full border-2 flex items-center justify-center
          ${todo.completed 
            ? 'bg-purple-500 border-purple-500 text-white' 
            : 'border-gray-400 hover:border-purple-500'}
          transition-colors duration-200
        `}
      >
        {todo.completed && <Check size={14} />}
      </button>

      <div className="flex-1">
        <p className={`
          text-gray-800 dark:text-gray-200
          ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}
        `}>
          {todo.text}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className={`
            text-xs px-2 py-0.5 rounded-full
            ${priorityColors[todo.priority]}
            text-gray-700 dark:text-gray-200
          `}>
            {todo.priority}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(todo.timestamp).toLocaleString()}
          </span>
        </div>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
