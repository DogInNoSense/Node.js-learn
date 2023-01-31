-- 通过 * 查询所有列 
--  select * from users
--  把username和password对应的数据查询出来

-- select username, password from users

-- 插入新数据 
-- insert into users (username,password) values ('tony stark', '098123')


-- 将id为4的用户密码,更新成888888
-- update users set password = '888888' where id = 4


-- 更新id为2的用户 把用户密码更新为 admin123 同时把用户的状态更新为1
-- update users set password = 'admin123', status = 1 where id = 2  

-- 删除users表中, id为4的用户
-- delete from users where id = 4 

-- select * from users


-- 演示where子句的使用 

-- select * from users where  status = 1  
-- select * from users where  id > 2

-- select * from users where username != 'ls'

-- 对users表中的数据,按照status字段进行升序排序
-- select * from users order by status asc 

-- 按照id对结果进行降序的排序
-- select * from users order by id desc

-- 对users表中的数据 先按照status进行降序排序  再按照username 进行升序的排序

-- select * from users order by status desc, username asc 

-- 使用 count(*) 来统计 users 表中,状态为 0 用户的总数量 
-- select count(*) from users where status = 0

-- 使用 as 关键字给列起别名 
 
-- select count(*) as total from users where status = 0
-- select username as uname, password as upwd from users


select * from users

