import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier'; // Import the Prettier plugin

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect', // Automatically detects React version
      },
    },
    plugins: {
      prettier: eslintPluginPrettier, // Use the plugin object here
    },
    rules: {
      'prettier/prettier': 'error', // Enforces Prettier formatting as ESLint errors
      'react/react-in-jsx-scope': 'off', // Not needed for modern React
      'import/prefer-default-export': 'off',
      'react/prop-types': 'off', // Disable prop-types if using TypeScript
    },
  },
];
