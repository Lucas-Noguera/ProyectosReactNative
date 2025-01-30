// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'eslint:recommended', 'plugin:react/recommended', 'plugin:react-native/all'],
  ignorePatterns: ['/dist/*'],
  plugins: ['react', 'react-native'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react-native/no-raw-text:': 'off',
    // Agrega reglas personalizadas si lo deseas
    'react/react-in-jsx-scope': 'off', // No es necesario importar React en proyectos con React 17+
    'react/prop-types': 'off', // Si no usas prop-types
    'react-native/no-unused-styles': 'warn', // Advertencia para estilos no usados
    'react-native/split-platform-components': 'warn', // Separar componentes de plataforma
    // Reglas recomendadas de ESLint, TypeScript y React
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'off',
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'space-in-parens': ['error', 'never'],
    'react/jsx-uses-react': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'react/self-closing-comp': ['error', { component: true, html: false }],
  },
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React
    },
  },
}
