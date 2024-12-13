export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number;

  return (...args: Parameters<T>) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), wait);
  };
};

export const sortTodos = <T extends { createdAt: Date }>(
  todos: T[],
  order: 'asc' | 'desc' = 'desc'
): T[] => {
  return [...todos].sort((a, b) => {
    const comparison = b.createdAt.getTime() - a.createdAt.getTime();
    return order === 'asc' ? -comparison : comparison;
  });
};

export const getCurrentTime = (): string => {
  return new Date().toISOString();
};
