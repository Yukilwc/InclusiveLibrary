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

## 子串包含查询
您好，这是Bing。我可以帮您了解如何在MySQL数据库中检索包含某个联系人的记录。😊

您的问题是，如果您有一个字段叫 contacts，存储的是联系人id的字符串，用逗号拼接，例如 "1,2,3,4,5"，您现在有一个联系人3，您应该怎样才能检索到包含3的记录。

有几种方法可以实现这个功能，我将为您介绍其中三种：
- 方法一：使用 LIKE 运算符。LIKE 运算符可以用来匹配字符串中的模式。您可以使用百分号（%）作为通配符，表示任意长度的任意字符。例如，要检索包含3的记录，您可以使用以下SQL语句：

```sql
SELECT * FROM table_name WHERE contacts LIKE '%3%';
```

这样就可以找到所有contacts字段中包含3的记录。但是，这种方法有一个缺点，就是它会匹配到不只是3的数字，例如13或30等。为了避免这种情况，您可以在3前后加上逗号（,），表示只匹配单独的3。但是，这样还会漏掉第一个和最后一个联系人，因为它们前后没有逗号。所以，您还需要加上百分号（%），表示可能有其他字符。最终的SQL语句如下：

```sql
SELECT * FROM table_name WHERE contacts LIKE '%,3,%' OR contacts LIKE '3,%' OR contacts LIKE '%,3';
```

这样就可以找到所有contacts字段中只包含3的记录。
- 方法二：使用 FIND_IN_SET 函数。FIND_IN_SET 函数可以用来在一个逗号分隔的字符串中查找一个子字符串，并返回它在字符串中的位置。如果没有找到，则返回0。例如，要检索包含3的记录，您可以使用以下SQL语句：

```sql
SELECT * FROM table_name WHERE FIND_IN_SET ('3', contacts) > 0;
```

这样就可以找到所有contacts字段中包含3的记录。这种方法比LIKE运算符更简单和准确，但是它只能用于逗号分隔的字符串，不能用于其他分隔符。
- 方法三：使用 REGEXP 运算符。REGEXP 运算符可以用来匹配字符串中的正则表达式。正则表达式是一种描述字符模式的语言，可以用来进行复杂的文本匹配和替换。例如，要检索包含3的记录，您可以使用以下SQL语句：

```sql
SELECT * FROM table_name WHERE contacts REGEXP '[[:<:]]3[[:>:]]';
```

这样就可以找到所有contacts字段中包含3的记录。这种方法比LIKE运算符和FIND_IN_SET函数更灵活和强大，但是它也更复杂和难以理解。
`[[:<:]]`和`[[:>:]]`表示单词边界，即一个单词的开始或结束位置。它们可以用来匹配单独的数字或字母。
