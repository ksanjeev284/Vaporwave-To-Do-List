import React from 'react';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <TodoProvider>
        <div style={{ color: '#00F5FF' }} className="min-h-screen bg-retro-black retro-grid overflow-hidden">
          <div className="relative">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-gradient-to-b from-neon-purple/20 to-neon-pink/20 pointer-events-none" />
            <div className="fixed inset-0 bg-retro-black/50 pointer-events-none" />
            
            {/* Floating Elements */}
            <div className="fixed inset-0 pointer-events-none">
              <div className="absolute top-20 left-10 w-32 h-32 bg-neon-pink rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="absolute top-40 right-20 w-40 h-40 bg-neon-blue rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
              <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-neon-purple rounded-full blur-3xl opacity-20 animate-pulse delay-2000" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <main className="container mx-auto px-4 py-12 max-w-2xl min-h-screen flex items-center justify-center">
                <div className="w-full">
                  <TodoList />
                </div>
              </main>
            </div>
          </div>
        </div>
      </TodoProvider>
    </ErrorBoundary>
  );
}

export default App;