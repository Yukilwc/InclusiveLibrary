# 数据库经验记录

对于 sql 的生成，绝对不可直接用前端参数，拼接进去，那会容易被 sql 注入。
前端参数加入 sql，必定使用占位符，其会自动进行字符串化处理，防止特殊字符污染 sql。

go-zero 中，sql 查询后的 Scan，只能查 10 列，然后扫描赋值到小于等于 10 个 fields 的结构体，如果目标结构体高于 10，
则会报`ErrNotMatchDestination = errors.New("not matching destination to scan")`

## sql 执行顺序

书写顺序 SELECT -> DISTINCT -> FROM -> JOIN -> ON -> WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT 

执行顺序 FROM -> JOIN -> ON -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT 

执行顺序解释 

1. from 要做数据分析，得先有个表 
2. join 一个表可能还不够，两个表甚至多个表都可以，关联条件啥也先不用，可以都来个笛卡儿积先 
3. on 在诸多表左右连接后，设定两个表之间的关联键，把不符合条件的全部筛掉 
4. where 上三步整合各表，形成一个统一大表；在此大表上，设置筛选条件 
5. group by 把指定字段相同的行组合在一起，其余没有加入 group by 的字段，可以用聚合函数如 max/min 等合并 
6. having 在 group by 了之后，再度指定筛选条件；注意 where 和 having 是不同的，主要在于中间多了 group by
7. select 在行层面的处理暂告一段落，在列层面再来一波 
8. distinct 指定字段去重 
9. order by 指定字段排序，升降序 
10. limit 指定哪些行

先聚合，再聚合筛选，再where通用筛选，分组，

## 多表得查询方式

[关于多表查询和单表查询后组合得问题](https://www.zhihu.com/question/298745803)

多表join本质是求解笛卡尔积，然后筛选，把性能压力给了数据库，而且不利于分布式。

如果是一对一，则join查询，如果是一对多，则分两次查询

## 分页

分页sql，必须能查询出，筛选条件内的，全部数据集合，然后才能分页。
例如，查询用户+角色，那么角色的名字也是一个筛选条件。