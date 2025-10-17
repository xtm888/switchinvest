"use client"

import React from "react"
import { m, LazyMotion, domAnimation } from "framer-motion"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import Link from "next/link"

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the component tree
 */

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to error reporting service
    console.error("Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return <ErrorFallback error={this.state.error} reset={() => this.setState({ hasError: false, error: null })} />
    }

    return this.props.children
  }
}

/**
 * Default Error Fallback UI
 */

interface ErrorFallbackProps {
  error: Error | null
  reset: () => void
}

export function ErrorFallback({ error, reset }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-beige/30 to-white flex items-center justify-center px-4">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-brand-beige/30">
          {/* Error Icon */}
          <m.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </m.div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-brand-teal text-center mb-4 font-serif">
            Oups! Une erreur s'est produite
          </h1>

          {/* Description */}
          <p className="text-neutral-dark/70 text-center mb-6">
            Nous sommes désolés, quelque chose s'est mal passé. Notre équipe technique a été notifiée et travaille sur le problème.
          </p>

          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === "development" && error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-sm font-mono text-red-800 break-all">
                {error.message}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <m.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                reset()
                window.location.reload()
              }}
              className="flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              Réessayer
            </m.button>

            <Link href="/">
              <m.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark px-6 py-3 rounded-lg font-semibold transition-colors w-full"
              >
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </m.button>
            </Link>
          </div>

          {/* Support Link */}
          <p className="text-center text-sm text-neutral-dark/60 mt-6">
            Si le problème persiste,{" "}
            <Link href="/contact" className="text-brand-teal hover:text-brand-gold transition-colors font-semibold">
              contactez notre support
            </Link>
          </p>
        </div>
      </m.div>
    </div>
  )
}

/**
 * Inline Error Component
 * For displaying errors within components
 */

interface InlineErrorProps {
  title?: string
  message: string
  retry?: () => void
}

export function InlineError({ title = "Erreur", message, retry }: InlineErrorProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <AlertTriangle className="w-6 h-6 text-red-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-red-900 mb-2">{title}</h3>
          <p className="text-red-800 text-sm mb-4">{message}</p>
          {retry && (
            <button
              onClick={retry}
              className="flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-900 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Réessayer
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
