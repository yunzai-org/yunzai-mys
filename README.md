# yunzai-mys

Yunzai 米游社通用接口模块

使用了全局变量redis进行字段存储

使用了sequelize 和 sqlite 作为主要数据存储

该模块的核心处理不基于`yunzai`模块

适用于任何基于node.js环境的机器人

## 使用教程

- install

```sh
npm install yunzai-mys
```

- use

```ts
import { BaseModel, DailyCache, MysUser, MysUtil, NoteUser } from 'yunzai-mys'
import { ApiTool, MysApi } from 'yunzai-mys'
```

- Yunzai V3

Yunzai V3环境内置对其他插件指令的处理

- Yunzai Next

如果你的环境是Yunzai Next，

需要设置中间件来处理消息，

否则只能依靠插件原始的正则匹配

```ts
import { defineConfig } from 'yunzai'
export default defineConfig({
  middlewares: ['yunzai-mys/mw']
})
```

## 代理地址

```ts
redis.set('mys:proxy:address', '127.0.0.1')
```

## 存储地址

```ts
const dir = join(process.cwd(), `/data/db/data.db`)
```
