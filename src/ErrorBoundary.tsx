import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error if needed
    // console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-clinical dark:bg-slate-900 text-red-700 dark:text-red-400 p-8">
          <h1 className="text-2xl font-bold mb-2">Something went wrong.</h1>
          <p className="mb-4 text-text-secondary dark:text-slate-300">{this.state.error?.message || 'An unexpected error occurred.'}</p>
          <p className="text-sm text-text-muted dark:text-slate-500">Please refresh the page or contact support if the problem persists.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
