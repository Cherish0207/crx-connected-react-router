## connected-react-router

> 连接 redux 和路由的工具

1. 可以通过派发动作方式跳转路径
2. 可以在仓库里获取最新路径信息 store 可以存放 location action

## connected-react-router 用法

1. `src/index.js` 引入 `connected-react-router`
2. `store/reducer/index.js` 中引入中间件 `connectRouter`
3. `store/index.js` 仓库中引入中间件 `routerMiddleware`
4. `push` 跳转路径
