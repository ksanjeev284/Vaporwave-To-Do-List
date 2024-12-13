import React from 'react';
import { Flag } from 'lucide-react';
import { Priority } from './types';

export function getPriorityIcon(priority: Priority) {
  const colors = {
    high: 'text-red-600',
    medium: 'text-yellow-600',
    low: 'text-green-600'
  };
  
  return <Flag className={`w-4 h-4 ${colors[priority]}`} />;
}

export function getCurrentTime() {
  return new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric',
    minute: '2-digit',
    hour12: true 
  });
}