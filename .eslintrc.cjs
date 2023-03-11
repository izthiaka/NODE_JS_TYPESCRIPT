module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        es6: true,
    },
    extends: ["airbnb-base", "prettier"],
    plugins: ["prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "import/extensions": ["error", "ignorePackages"],
        "import/no-unresolved": "off",
        "no-underscore-dangle": ["error", { "allow": ["_id", "_doc"] }],
        "semi": [2, "never"],
        indent: ["error", 4],
    },
}