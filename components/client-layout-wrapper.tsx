"use client";

import React, { useEffect } from 'react';

// This is the ResizeObserverErrorSuppressor logic, now inside the wrapper
const ResizeObserverErrorSuppressor = () => {
  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      if (
        e.message === 'ResizeObserver loop limit exceeded' ||
        e.message === 'ResizeObserver loop completed with undelivered notifications.'
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener('error', handleError);

    const originalConsoleError = console.error;
    const newConsoleError = (...args: any[]) => {
      if (
        typeof args[0] === 'string' &&
        (args[0].includes('ResizeObserver') ||
          args[0].includes("Can't perform a React state update on an unmounted component"))
      ) {
        return; 
      }
      originalConsoleError.apply(console, args);
    };
    console.error = newConsoleError;

    return () => {
      window.removeEventListener('error', handleError);
      console.error = originalConsoleError;
    };
  }, []);
  return null; 
};

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ResizeObserverErrorSuppressor />
      {children}
    </>
  );
}
