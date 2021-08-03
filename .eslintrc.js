module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": false
        },
        "ecmaVersion": 6,
        "sourceType": "module"
},
"plugins": [
    "react"
],
rules: {
    indent: ['error', 2],
    'prettier/prettier': ['error', { tabWidth: 2 }],
  },
};