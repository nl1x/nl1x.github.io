export default {
  plugins: {
    '@csstools/postcss-global-data': {
      files: [
        'src/styles/breakpoints.pcss',
      ]
    },
    'postcss-custom-media': {}, // Allow var in media-queries
    'postcss-nesting': {},      // Allows nesting css
    'autoprefixer': {},         // Browsers compatibility
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
