module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    ...Object.keys(require('eslint/conf/eslint-all')).reduce(
      (acc, rule) => ({ ...acc, [rule]: "off" }), 
      {}
  }
};
