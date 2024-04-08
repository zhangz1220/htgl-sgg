module.exports = {
    //运行环境
    "env": { //
        "browser": true, //运行在浏览器端
        "es2021": true, //es2021
        "node": true,
        "jest": true
    },
    /* 指定如何解析语法 */
    parser: 'vue-eslint-parser',
    /* 优先级低于 parse 的语法解析配置 */
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        jsxPragma: 'React',
        ecmaFeatures: {
            jsx: true
        }
    },
    //规则继承
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    //要为特定类型的文件指定处理器
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    //指定解析器选项
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    //插件
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    //eslint规则 可以查eslint官网
    /**
     * "off" 或 0   ===> 关闭规则
     * "warn" 或1   ===> 打开的规则作为警告（不影响代码运行）
     * "error" 或2   ===> 规则作为一个错误（代码不能执行，界面报错）
     */
    "rules": {
        // eslint (https://eslint.bootcss.com/docs/rules/)
        'no-var': 'error', // 要求使用 let 或 const 而不是 var
    }
}
