module.exports = {
  "env": {
    "es2021": true,
  },
  "extends": [
    "plugin:react/recommended",
    "google",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "plugins": [
    "react",
    "@typescript-eslint",
  ],
  "rules": {
    "quotes": [2, "double"],
    "require-jsdoc": 0,
    "max-len": ["off", {
      code: 100,
      ignoreUrls: true,
    }],
    "no-unused-vars": "off",
    "valid-jsdoc": ["off"],
  },

};
