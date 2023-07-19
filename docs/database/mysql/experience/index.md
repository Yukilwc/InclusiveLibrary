# 数据库经验记录

对于sql的生成，绝对不可直接用前端参数，拼接进去，那会容易被sql注入。
前端参数加入sql，必定使用占位符，其会自动进行字符串化处理，防止特殊字符污染sql。

go-zero中，sql查询后的Scan，只能查10列，然后扫描赋值到小于等于10个fields的结构体，如果目标结构体高于10，
则会报`ErrNotMatchDestination = errors.New("not matching destination to scan")`