# TS技巧

## 语法

```ts
// 类型强制转换,断言类型
let propsRef = toRefs(props);
let surchargeList = propsRef.surchargeList as Ref<SurchargeList[]>;
```