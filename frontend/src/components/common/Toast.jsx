import React, { useEffect, useState, createContext, useContext } from 'react';

const ToastContext = createContext(null);

/**
 * Toast Card UI component
 */
export function ToastCard({
  id,
  type = 'success',
  title,
  message,
  onDismiss,
  timestamp
}) {
  const icons = {
    success: (
      <svg className="w-5 h-5 text-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    ),
    info: (
      <svg className="w-5 h-5 text-navy shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5 text-red-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  };

  return (
    <div className="flex items-start gap-3 bg-white/95 backdrop-blur-md border border-border shadow-floating rounded-card p-4 w-80 sm:w-96 text-left animate-slide-left transition-all">
      <div className="mt-0.5">{icons[type] || icons.success}</div>
      <div className="flex-1 min-w-0">
        {title && <h4 className="font-sans font-semibold text-sm text-ink truncate">{title}</h4>}
        {message && <p className="text-xs text-muted mt-0.5 leading-relaxed">{message}</p>}
        {timestamp && <span className="font-mono text-[10px] text-muted/70 block mt-1">{timestamp}</span>}
      </div>
      {onDismiss && (
        <button
          onClick={() => onDismiss(id)}
          className="text-muted hover:text-ink p-1 rounded-md transition-colors"
          aria-label="Dismiss notification"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

/**
 * Toast Provider for triggering floating toasts from anywhere in the app
 */
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = ({ title, message, type = 'success', duration = 4000 }) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 5);
    const newToast = { id, title, message, type };
    setToasts((prev) => [...prev, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        dismissToast(id);
      }, duration);
    }
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, dismissToast, toasts }}>
      {children}
      {/* Floating container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastCard {...toast} onDismiss={dismissToast} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    return {
      addToast: () => {},
      dismissToast: () => {},
      toasts: [],
    };
  }
  return context;
}

export default ToastCard;
