// Global type declarations

// Allow import of react-google-autocomplete without types
declare module 'react-google-autocomplete';

// Extend window interface for analytics dataLayer
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export {};
