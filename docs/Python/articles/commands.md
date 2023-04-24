# 命令行相关汇总

以下如果非多版本python，或者配置了环境变量顺序，则可以省略前置的 py及其参数，例如 `py -3 -m`。

```sh
# -m的意思是module，是值要运行一个module，后面指定module是pip，也可以指定其它py文件或者exe
# 查看本机安装的python版本，并打印路径
py -0p
py -m pip install Pillow
py -m pip install --upgrade Pillow
py -m pip show Pillow
py -m pip list 
# 列举出安装的库
py -m pip freeze
# 列举出安装的库，并输出到requirements.txt
py -m pip freeze > requirements.txt
# 基于当前python解释器创建一个虚拟环境
py -m venv myvenv
```

