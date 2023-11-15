# VSCode配置

使用volar时，开启take over模式，使用volar接管vscode自带ts工具:  
ctrl+shift+p,show built-in extensions,TypeScript and JavaScript Language Features,disable(workspace)


使用vim插件，配置z按键折叠策略  
1. vim,extension setting,勾选vim foldfix
2. 进入json配置文件,添加如下配置
```json
  "vim.normalModeKeyBindingsNonRecursive": [
  
    {
      "before": ["z", "M"],
      "after": ["m", "_", "z", "M", "`", "_", "z", "O", "z", "t"]
    }
  ],
 
```

设置一种文件的，例如.vue文件，默认的格式化插件