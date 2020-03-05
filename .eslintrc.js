module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['build/', 'node_modules/', 'next.config.js', 'scripts'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
  },
  'settings': {
    'react': {
      'version': 'detect',
    }
  }
}
