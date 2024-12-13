import React, { useState, useRef, useEffect } from 'react';
import { Priority, Todo } from './types';
import { getCurrentTime } from './utils';
import { Sparkles } from 'lucide-react';

interface TodoFormProps {
  onSubmit: (todo: Omit<Todo, 'id'>) => void;
}

export default function TodoForm({ onSubmit }: TodoFormProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    onSubmit({
      text: text.trim(),
      completed: false,
      priority,
      timestamp: getCurrentTime()
    });
    setText('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-3">
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 rounded-lg bg-[rgba(13,2,33,0.6)] border border-[#00F5FF] px-4 py-3 text-white placeholder-[#00F5FF]/50 focus:outline-none focus:ring-2 focus:ring-[#00F5FF]"
          style={{
            backdropFilter: 'blur(4px)',
          }}
          placeholder="Add a new task..."
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          className="min-w-[120px] max-w-[120px] rounded-lg bg-[rgba(13,2,33,0.6)] border border-[#00F5FF] px-2 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#00F5FF]"
          style={{
            backdropFilter: 'blur(4px)'
          }}
        >
          <option value="low" className="bg-[rgba(13,2,33,0.95)]">Low</option>
          <option value="medium" className="bg-[rgba(13,2,33,0.95)]">Medium</option>
          <option value="high" className="bg-[rgba(13,2,33,0.95)]">High</option>
        </select>
        <button
          type="submit"
          disabled={!text.trim()}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF6EC7] to-[#9D72FF] text-white font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          Add
        </button>
      </div>
    </form>
  );
}