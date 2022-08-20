# Tsconfig文件解析

## 顶层属性

## compilerOptions

### moduleResolution


该属性如果不配置，则使用`import`导入会无法解析.

### noEmit

是否编译生成js，类型声明文件，map等产物。配置成true时，一般是用来进行类型检查，而非编译打包。

### outDir

如果配置了路径，则编译生成的 `js`，`js.map`,`d.ts`文件，都会输出到该目录下  
如果不配置该路径，则输出的文件会放在`ts`文件同级目录下

### useDefineForClassFields

编译Class时，属性赋值，从setter转变为defineProperty.  
[详见](https://zhuanlan.zhihu.com/p/258906525)

### isolatedModules
时开启单文件转译时，存在错误的报错  
[详见](https://www.typescriptlang.org/tsconfig#isolatedModules)

### types

用来导入一组类型到全局  
如果不指定此数组，则会默认引入@types下的类型声明  
如过指定了此数组，则会仅引入指定的类型声明到全局中

### lib

ts自带内嵌的一组类型，可以修改为指定类型合集  
[参考](https://www.typescriptlang.org/tsconfig#lib)