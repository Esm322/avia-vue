module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'jsx-ally/label-has-associated-control': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'no-return-assign': 'off',
    'arrow-body-style': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
};
