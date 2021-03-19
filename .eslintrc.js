module.exports = {
    root: true,
    extends: [
        "@react-native-community",
        // https://github.com/facebook/react-native/blob/master/packages/eslint-config-react-native-community/index.js
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    plugins: [
        "react",
        "react-hooks",
    ],
    rules: {
        "react/prop-types": "off" // TODO: Understand later
    },
};
