export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-beige/20">
      <div className="text-center">
        {/* Animated Logo Loader */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-brand-beige rounded-full"></div>
          <div className="absolute inset-0 border-4 border-brand-gold rounded-full border-t-transparent animate-spin"></div>
        </div>

        <h2 className="text-2xl font-serif text-brand-teal mb-2 animate-pulse">
          SwitchInvest
        </h2>
        <p className="text-neutral-dark/60">
          Chargement...
        </p>
      </div>
    </div>
  )
}
