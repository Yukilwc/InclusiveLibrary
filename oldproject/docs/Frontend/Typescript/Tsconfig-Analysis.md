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

compilerOptions.isolatedModules 是一个 TypeScript 编译器选项，它的作用是让 TypeScript 在编译每个模块时，只考虑该模块本身的代码，而不考虑其他模块的类型信息。

这个选项的设计意义是为了适配一些其他的转译器，比如 Babel，它们只能对单个文件进行转译，而不能像 TypeScript 那样对整个项目进行类型检查和代码转换。这种限制也适用于 TypeScript 的 ts.transpileModule API，它被一些构建工具使用。

这些限制会导致一些 TypeScript 的特性在运行时出现问题，比如 const enum 和 namespace。设置 isolatedModules 选项可以让 TypeScript 在你写出一些不能被单文件转译过程正确解释的代码时，给出警告。它不会改变你的代码的行为，或者改变 TypeScript 的检查和输出过程。

你应该在以下情况下使用这个选项：

* 当你使用 Babel 或其他单文件转译器来处理 TypeScript 代码时
* 当你使用 ts.transpileModule API 来转译 TypeScript 代码时
* 当你想要确保你的代码可以被单文件转译过程正确解释时

例如vite使用esbuild来转译typescript，受限于单文件转译限制，就需要设置此属性为true。

简单来讲，就是babel，esbuild等编译器，只能对单个ts文件编译，而不会去联系整套ts代码构造类型体系。  
因此，如果使用了一些特殊的特性，导致编译器无法处理，会产生报错时，就能够在编译阶段，提前报错。

### types

用来导入一组类型到全局  
如果不指定此数组，则会默认引入@types下的类型声明  
如过指定了此数组，则会仅引入指定的类型声明到全局中

### lib

ts自带内嵌的一组类型，可以修改为指定类型合集  
[参考](https://www.typescriptlang.org/tsconfig#lib)