# Work

**2023-06-26 09:23:49**

港区码头下面，全球航线，类似船公司

四列:

中文名称 英文名称 匹配中文名称 匹配

筛选:名称

弹窗： 匹配中文名称

**2023-06-20 10:07:20**

小屏内刚好能放开

右侧disabled

**2023-06-15 10:01:32**

left comp clear all flow

后台:

导入模板配置：

1. 

import template tips:

* ok 双击可选
* ok 用户分析有投影
* ok input default no shadow,hover has shadow
* ok 34px padding-bottom
* ok min-height
* ok not close dialog when save finished
* ok default select first
* ok should design import/export type and business type,for lcl import
* ok support double click

import tips:

* ok if has template,auto select first,can not clear
* ok cache template id,when select event trigger,do cache

**2023-06-13 15:33:39**

小程序：
  * 整箱
    * ok 列表，3时，为45HQ
    * 详情
      * ok 兼容3的情景
        * ok 顶部海运费
        * ok 箱型部分
        * ok 费用清单
      * ok 增加合计计算流程
      * ok 改名
    * ok 修改费用
    * ok 添加费用
  * ok 推荐运价
    * ok 可显示最多5个
  * ok 我的报价单列表
  * 我的报价单详情--修改方案最后定
    * ok 提前更换处理好名字，查下组件里，确保没有quotation
    * ok 合并通用逻辑到class中
截屏
  * ok 对应详情修正 参考上述小程序详情
  * ok 同步合计
网站
  * ok 一系列修改containerFclShow 




ok 基础结构与工具迁移

ok 全局方法，样式补齐

* ok dialog.less
* ok 各种css变量
* ok 全局方法

弹窗顶层index修改：
* ok 去除不需要的节点
* ok 详情注入标注控制类构造

收费标准 
* 拼箱运费表格
  * ok 三个核心类调整
  * ok 标题修改为 拼箱运费
  * ok 去除操作
  * ok 列改成凯迪查询的列，可以加备注，也可不加
  * ok 币种分离出单独列
  * ok 对齐三个表格
  * ok 字段都要重新对接
  * ok 目的港 备注前加收货人类型

计算部分
* ok 加收货人类型
* ok 是否有二程转运
* ok 对齐三个表格
* ok 对合计部分的调整
* ok 计算那里的三套备注问题
* ok 汇率不折算
* ok 整体宽度都需要调整下
* ok case 处理

pdf报价:
* ok 传参修改
* ok 字段重新对接

文字报价：
* ok 传参修改
* ok 字段重新对接


ok 检查下群里的文档

ok d-dialog污染问题

对比报价单和查询，是否数据完全一致

让看下当前的对齐是否可以

build测试

CTNS的括号问题