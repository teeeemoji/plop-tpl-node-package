'use strict';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;
const INDENT_SIZE = 2;

module.exports = {
  extends: 'fbjs',

  // Stop ESLint from looking for a configuration file in parent folders
  root: true,

  env: {
    es6: true,
    browser: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  rules: {
    // 完全不要分号
    'semi': [ERROR, 'never'],
    // 缩进, 这里要跟 editorconfig 同步
    'indent': [WARNING, INDENT_SIZE, {SwitchCase: 1}],
    // 允许函数没有 return 语句
    'consistent-return': OFF,
    // 匿名函数 function 关键字和括号之间保留一个空格
    // require `function foo()` instead of `function foo ()`
    'space-before-function-paren': [
      WARNING,
      {anonymous: 'always', named: 'never'},
    ],
    // 允许按位运算符
    'no-bitwise': OFF,
    // 不允许 trailing commas
    'comma-dangle': [ERROR, 'never', {"functions": "never"}],
    // 允许未使用 var
    'no-unused-vars': [OFF],

    // 允许使用未声明变量 or 全局变量 (开发模式里面存在比较多这种东西, sio 塞进去的, 什么的)
    'no-undef': [OFF],
    // 最大长度, js 行长可能很大, 先设置为120
    'max-len': [
      WARNING,
      120,
      INDENT_SIZE,
      {'ignoreUrls': true}
    ],
    // 允许 console 啊, 上线后都允许你 console, 爱关关
    'no-console': OFF,
    // 换行符 在 操作符 之前, 强制
    'operator-linebreak': [ERROR, 'before']
  },

  globals: {
    define: true
  }
};
