module.exports = {
  // root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  // extends: "airbnb", // 这里的extends要加上airbnb
  // parser: "babel-eslint",
  // settings: {
  //   // 配置路径别名报错
  //   "webpack": {
  //     "config": "config/webpack.config.js"
  //   }
  // },
  // plugins: [
  //   "react-hooks"
  // ],
  rules: {
    // "prettier/prettier": "" // 开启/关闭prettier: "off"/"error"
    /**
      * "off"或者0，不启用这个规则
      * "warn"或者1，出现问题会有警告
      * "error"或者2，出现问题会报错
      */
    // "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // "import/no-unresolved": [0], // 取消自动解析路径，以此开启alias的别名路径设置
    // "import/extensions": [0], // 取消对文件扩展名的验证
    // "linebreak-style": [0], // 取消换行符\n或\r\n的验证()
    // "no-undef": [0], // 取消全局变量检查，如window、document等
    // "no-multiple-empty-lines": [0], // 取消空行限制，默认2
    // "camelcase": [0], // 取消强制驼峰法命名，UNSAFE_componentWillReceiveProps钩子检查报错
    // "object-curly-newline": [0], // 取消 { a, b, c } 多个变量需要换行
    // "prefer-destructuring": [0], // 取消必须解构let { name } = obj，无法let name = obj.name;
    // "arrow-body-style": [0], // 取消检查链式回调，.then().catch()
    // "no-param-reassign": [0], // 取消函数参数需要重新赋值给另一个变量才能使用
    // "no-lonely-if": [0], // 取消else条件只有一个if判断没有其他处理的检查
    // "jsx-a11y/click-events-have-key-events": [0], // 取消点击事件还必须要键盘监听器的检查
    // "no-mixed-operators": [0], // 取消 / 被当作除运算时检查
    // "no-plusplus": [0], // 取消一元运算符 ++ 检查
    // "no-nested-ternary": [0], // 取消嵌套的三元表达式验证
    // "no-bitwise": [0], // 取消不允许按位运算符验证
    // "consistent-return": [0], // 取消return返回检查
    // "jsx-a11y/label-has-associated-control": [0], // 取消label检查
    // "global-require": [2], // 要求 require() 出现在顶层模块作用域中
    // "no-unused-vars": [2, { "vars": "all", "args": "after-used" }], // 禁止出现未使用过的变量， vars (all 检查全部变量) args（after-used 只检查最后一个函数参数）
    // "no-var": 2, // 禁用var，用let和const代替
    // "quotes": [2, "single"], // 开启强制单引号
    // "eqeqeq": 2, // 强制全等( === 和 !==)
    // "semi": [2, "always"],// 语句强制分号结尾
    // "no-use-before-define": [2, { "functions": false, "classes": true, "variables": true }], // 禁止在变量定义之前使用它们 variables(变量)
    // "arrow-parens": [2, "as-needed"], // 箭头函数参数括号，一个参数时可省略括号
    // "arrow-spacing": [2, { before: true, after: true }], // 箭头函数，箭头前后空格
    // "comma-dangle": [2, "never"], // 禁止对象最后一项逗号
    // "max-len": [2, { code: 150 }], // 单行代码/字符串最大长度
    // 以下规则还未遇到
    "import/no-anonymous-default-export": [0], // 取消默认导出需要变量名
    // "no-restricted-syntax": [0], // 取消不允许指定（即用户定义）语法验证
    // "import/no-extraneous-dependencies": [0], //  禁止导入未在包中声明的外部模块
    // "import/prefer-default-export": [0], // 当从模块中只导出单个出口时使用默认导出
    // "generator-star-spacing": [0],
    // "no-cond-assign": [0],
    // "jsx-a11y/no-static-element-interactions": [0],
    // // 这些react开头的都是针对react独有的
    // "react/jsx-props-no-spreading": [0], // 取消<Component {...this.props} />检查
    // "react/destructuring-assignment": [0], // 取消在React全局添加属性检查
    // "react/jsx-no-bind": [0], // JSX中不允许使用箭头函数和bind
    // "react/prefer-stateless-function": [0], // 无状态管理(stateless)的React组件应该继承PureComponent
    // "react/forbid-prop-types": [0], // 禁止某些propTypes 
    // "react/prop-types": [0], // 防止在React组件定义中丢失props验证(类型验证)
    // "require-yield": [1],
    // "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    // "react/sort-comp": [2], // 强制组件方法顺序
    // "react/self-closing-comp": [2], // 防止没有children的组件的额外结束标签<Text></Text>
    // "react-hooks/rules-of-hooks": [2], // 检查 Hook 的规则，不允许在if for里面使用
    // "react-hooks/exhaustive-deps": [0] // 检查 effect 的依赖
  }
}
