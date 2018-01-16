# 中金易云出版端前端


## 使用方法

#### 初始化

```bash
// 先clone项目到新创建的项目
$ git clone ssh://git@git.dtstack.cn:10022/ziv/dt-react-starter.git projectName
// 切换到项目目录，执行初始化
$ yarn  #或者
$ npm i
```

#### 开发构建
```bash
$ npm run dev
```
#### 生产构建
```bash
$ npm run build
```

#### 测试运行构建版本
```bash
$ npm run prod
```

#### 推荐使用yarn管理依赖
```bash
$ yarn
$ yarn add package.name
```

## 目录结构说明
```bash
| - 根目录
    | - node_modules npm安装模块
    | - build 配置文件目录，主要包含Webpack配置
    | - dist 分发目录
    | - document 文档
    | - scripts 辅助脚本，例如ssh登录到测试环境
    | - src
        | - api 远程接口文件
        | - assets 非npm管理资源
        | - components 组件
        | - pages 页面
        | - redux redux相关
        | - styles scss样式文件
        | - utils 工具文件
        | - routers.js 路由
        | - async.js 异步加载js模块
        | - interceptor.js 拦截器
        | - app.js 程序入口文件
    | - .babelrc babel配置
    | - eslintrc.json eslint配置，可以自定义规则
    | - config.js 配置文件，包括devServer的相关信息
    | - README.md 文档
```

## 技术支持和特性
 - React.js
 - ES6
 - Redux
 - Webpack2.0
 - Whatwg-fetch
 - Postcss
 - Sass
 - Less
 - Eslint-config-airbnb
 - API-Mock

## 暂不支持
- 集成测试

## 文档资料
- [Webpack](https://doc.webpack-china.org/)
- [ES6](http://es6.ruanyifeng.com/)
- [Redux](http://redux.js.org/)
- [Fetch](https://github.com/github/fetch)
- [Sass](https://sass-guidelin.es/zh/#section)
- [ESlint](http://eslint.org/docs/user-guide/getting-started)

## 待改善
- 热更新
- API地址配置
- 优化引用路径（resolve)
- 固化依赖库版本
- 开发模式css文件不该合并， 需要sourceMap
- 增加运行时的配置文件

## 问题
- node版本

### 参考
[Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/config/webpack.config.dev.js)
