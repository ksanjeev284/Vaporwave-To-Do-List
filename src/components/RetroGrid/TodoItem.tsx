import React from 'react';
import { Trash2, Clock3, Star, CircleDot, AlertCircle } from 'lucide-react';
import { Todo, Priority } from './types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const PriorityIcon = {
  low: <CircleDot className="w-4 h-4" style={{ color: '#00F5FF' }} />,
  medium: <Star className="w-4 h-4" style={{ color: '#9D72FF' }} />,
  high: <AlertCircle className="w-4 h-4" style={{ color: '#FF6EC7' }} />
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div
      className="group p-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: 'rgba(13, 2, 33, 0.7)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(0, 245, 255, 0.3)'
      }}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => onToggle(todo.id)}
          className="w-5 h-5 rounded flex items-center justify-center hover:bg-[#00F5FF]/20 transition-colors"
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
          style={{
            background: 'rgba(13, 2, 33, 0.9)',
            border: '2px solid #00F5FF'
          }}
        >
          {todo.completed && (
            <span style={{ color: '#FF6EC7', fontSize: '1.125rem' }}>✓</span>
          )}
        </button>

        <span 
          onClick={() => onToggle(todo.id)}
          className="flex-1 cursor-pointer text-lg select-none"
          style={{
            color: todo.completed ? 'rgba(0, 245, 255, 0.5)' : '#00F5FF',
            textDecoration: todo.completed ? 'line-through' : 'none',
            textShadow: '0 0 10px rgba(0, 245, 255, 0.3)'
          }}
        >
          {todo.text}
        </span>

        <div className="flex items-center gap-3">
          <span title={`Priority: ${todo.priority}`}>
            {PriorityIcon[todo.priority as Priority]}
          </span>
          <div className="flex items-center gap-1 text-sm" style={{ color: '#9D72FF' }}>
            <Clock3 className="w-3 h-3" />
            <span>{todo.timestamp}</span>
          </div>
          <button
            onClick={() => onDelete(todo.id)}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ color: '#FF6EC7' }}
            aria-label="Delete task"
          >
            <Trash2 className="w-4 h-4 hover:text-[#00F5FF]" />
          </button>
        </div>
      </div>
    </div>
  );
}