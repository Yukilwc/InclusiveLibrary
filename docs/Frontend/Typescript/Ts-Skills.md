# TS技巧

## 语法

**强制类型转换**

```ts
// 类型强制转换,断言类型
let propsRef = toRefs(props);
let surchargeList = propsRef.surchargeList as Ref<SurchargeList[]>;
```

**函数类型定义**