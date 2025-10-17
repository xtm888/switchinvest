/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
                // More aggressive CSS minification
                normalizeWhitespace: true,
                colormin: true,
                minifyFontValues: true,
                minifyGradients: true,
                minifySelectors: true,
                // Remove unused CSS
                reduceIdents: false, // Keep safe for Tailwind
                discardUnused: true,
                mergeRules: true,
              },
            ],
          },
        }
      : {}),
  },
};

export default config;
