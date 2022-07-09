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