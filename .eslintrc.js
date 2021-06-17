module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint/eslint-plugin",
    "prettier"
  ],
  extends: [
    "react-app"
  ],
  settings: {
    react: {
      "version": "detect"
    }
  },
  rules: {
    "prettier/prettier": "error", // "error"/"off" 开启/关闭prettier
    "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    
    "no-param-reassign": [0], // 取消函数参数需要重新赋值给另一个变量才能使用
    "object-curly-newline": [0], // 取消 { a, b, c } 多个变量需要换行
    
    "no-var": 2, // 禁用var，用let和const代替
    "quotes": [2, "single"], // 开启强制单引号
    "eqeqeq": 2, // 强制全等( === 和 !==)
    "semi": [2, "always"],// 语句强制分号结尾
    "@typescript-eslint/no-unused-vars": [2],
    "arrow-parens": [2, "as-needed"], // 箭头函数参数括号，一个参数时可省略括号
    "arrow-spacing": [2, { before: true, after: true }], // 箭头函数，箭头前后空格
    "comma-dangle": [2, "never"], // 禁止对象最后一项逗号
    "max-len": [2, { code: 120 }], // 单行代码/字符串最大长度
    // "indent": [2, 2], // 缩进2个空格
    "react/jsx-indent": [2, 2], // jsx缩进2个空格
    "eol-last": [2, "always"], // 文件末尾空行

    // react配置
    "react/jsx-props-no-spreading": [0], // 取消<Component {...this.props} />检查
    "react/jsx-no-bind": [0], // 取消JSX中不允许使用箭头函数和bind
    "react/jsx-filename-extension": [0, { "extensions": [".js, .jsx"] }],
    "react/destructuring-assignment": [0],
    "react/sort-comp": [2], // 强制组件方法顺序
    // 结束标签，组件省略闭合标签，html不省略闭合标签
    "react/self-closing-comp": [2, { "component": true, "html": false }],
    "react-hooks/rules-of-hooks": [2], // 检查 Hook 的规则，不允许在if for里面使用
    "react-hooks/exhaustive-deps": [0] // 检查 effect 的依赖
  }
}
