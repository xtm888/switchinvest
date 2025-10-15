'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertCircle, Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-beige/20 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <AlertCircle className="w-20 h-20 text-red-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-brand-teal mb-2 font-serif">
            Quelque chose s'est mal passé
          </h1>
          <p className="text-neutral-dark/70">
            Nous nous excusons pour la gêne occasionnée. Une erreur inattendue s'est produite.
          </p>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-sm font-mono text-red-800 break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-serif flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Réessayer
          </Button>
          <Button
            onClick={() => (window.location.href = '/')}
            variant="outline"
            className="border-brand-teal text-brand-teal hover:bg-brand-teal/10 font-serif flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Retour à l'accueil
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-beige">
          <p className="text-sm text-neutral-dark/60">
            Si le problème persiste, veuillez{' '}
            <a
              href="/contact"
              className="text-brand-teal hover:underline font-semibold"
            >
              nous contacter
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
