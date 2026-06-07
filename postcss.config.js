export default {
  plugins: {
    'postcss-custom-media': {}, // Allow var in media-queries
    'postcss-nesting': {},      // Allows nesting css
    '@tailwindcss/postcss': {},
    autoprefixer: {},           // Gère la compatibilité navigateurs
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
