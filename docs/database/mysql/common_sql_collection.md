# mysql常用语句收录

```sql
-- 修改列长度类型
ALTER TABLE user MODIFY COLUMN password varchar(255);

-- 自动插入当前时间
CREATE TABLE user (
  id int,
  name varchar(255),
  password varchar(255),
  create_at timestamp DEFAULT CURRENT_TIMESTAMP
  update_at timestamp null default current_timestamp on update current_timestamp,
);

-- 把字段修改为默认创建时间
ALTER TABLE user MODIFY COLUMN create_at timestamp DEFAULT CURRENT_TIMESTAMP;

```

```sql
-- 聚合字符串
SELECT user.*, GROUP_CONCAT(user_role.role_id, ',') AS role_ids, GROUP_CONCAT(role.name, ',') AS role_names
FROM `user` 
LEFT JOIN `user_role` ON user.id=user_role.user_id 
LEFT JOIN `role` on user_role.role_id=role.id 
GROUP BY user.id
ORDER BY user.id DESC

```

```sql
-- 多表分页&&临时表
SELECT ut.*,r.* from (
	SELECT * from `user` 
    ORDER BY id 
    LIMIT 0,2
) AS ut
LEFT JOIN user_role as ur ON ut.id=ur.user_id
LEFT JOIN role as r ON ur.role_id = r.id;
```

**子查询与row_number**

```sql
-- 使用row_number()
SELECT * from (
    SELECT *,row_number() over (order by id) AS `row_number`
	from user
) AS ut
LEFT JOIN user_role as ur ON ut.id=ur.user_id
LEFT JOIN role as r ON ur.role_id = r.id
WHERE ut.row_number BETWEEN 1 and 3;
```

```go
// 创建一个StatementBuilder对象
builder := sq.StatementBuilder
// 创建一个子查询
subquery := builder.Select("*", sq.RowNumber().Over(sq.OrderBy("id")).As("row_number")).From("user")

// 创建一个主查询，并连接子查询和其他表
query := builder.Select("*").FromSelect(subquery, "ut").
    LeftJoin("user_role as ur ON ut.id=ur.user_id").
    LeftJoin("role as r ON ur.role_id = r.id").
    Where(sq.Between{"ut.row_number", 1, 3})

// 生成SQL语句
sql, args, err := query.ToSql()
if err != nil {
    // 处理错误
}

```