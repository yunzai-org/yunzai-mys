# yunzai-mys

Yunzai 米游社通用接口模块，

使用了全局变量redis进行字段存储，

使用了sequelize 和 sqlite 作为主要数据存储

该模块的核心处理不基于`yunzai`模块

## 代理地址

```ts
redis.set('mys:proxy:address', '127.0.0.1')
```

## 使用教程

- install

```sh
npm install yunzai-mys
```

- use

```ts
import {} from 'yunzai-mys'
```
