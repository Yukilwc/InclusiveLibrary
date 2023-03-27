# go zap日志封装

## 需求

区分开发环境与生产环境。  

* 开发环境下，在控制台打印，同时也输出文件，控制台支持彩色打印，同时error及以上级别，都添加调用信息输出。
* 生产环境下，仅输出文件，error及以上级别，都添加调用信息输出。 


## zapcore常用API

zapcore定义了zap构建所依赖的底层接口，通过提供这些接口的替代实现，可以扩展zap的功能。

### zapcore内置函数

`func CapitalColorLevelEncoder(Level,PrimitiveArrayEncoder)` 

把一个Level序列化为全大写，然后添加颜色。如果输入到文件可能会乱码。

`func CapitalLevelEncoder(Level,PrimitiveArrayEncoder)` 

把一个Level序列化为全大写。

`func ISO8601TimeEncoder(time.Time,PrimitiveArrayEncoder)`

按照ISO8601的规范，把time.Time格式化成精确到毫秒的字符串。

`func NewCore(Encoder,WriteSyncer,LevelEnabler)`

创建一个写日志到指定WriterSyncer的Core。






## 参考

[zap](https://pkg.go.dev/go.uber.org/zap#section-readme)

[zapcore](https://pkg.go.dev/go.uber.org/zap@v1.24.0/zapcore#Core)
