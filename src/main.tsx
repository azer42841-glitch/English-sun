import React, { Component, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-['Tajawal',sans-serif]" dir="rtl">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-xl border border-red-200 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-3xl mx-auto">
              ⚠️
            </div>
            <h2 className="text-xl font-black text-slate-900">عذراً، حدث خطأ أثناء عرض الصفحة</h2>
            <p className="text-xs text-slate-600 font-mono bg-slate-100 p-3 rounded-xl overflow-auto text-left" dir="ltr">
              {this.state.error?.message || 'Unknown render error'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-xl bg-amber-500 text-white font-bold text-xs hover:bg-amber-600 shadow"
            >
              إعادة تحميل الصفحة
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
