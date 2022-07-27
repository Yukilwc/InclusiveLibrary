# TS技巧

## 语法

**强制类型转换**

```ts
// 类型强制转换,断言类型
let propsRef = toRefs(props);
let surchargeList = propsRef.surchargeList as Ref<SurchargeList[]>;
```

**函数类型定义**

**数组类型定义**
```ts
const routes: RouteRecordRaw[] = [];
```

## 类型

### 扩展库类型

以vue-router模块的RouteMeta为例

```ts
// 创建meta.d.ts文件
import { RouteMeta } from "vue-router";
declare module "vue-router" {
  interface RouteMeta {
    isHome: boolean;
  }
}
export {};
```

[模块扩展](https://www.tslang.cn/docs/handbook/declaration-merging.html)