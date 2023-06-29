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

ALTER TABLE user
MODIFY COLUMN create_at SET DEFAULT CURRENT_TIMESTAMP;

```