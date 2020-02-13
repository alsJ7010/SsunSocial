create table `sns`.`newtable`(`name` varchar(10) not null);

select * from sns.userinfo;

drop table sns.newtable;

create table sns.main_timeline (
num	int	auto_increment primary key,
user_num	int not null,
w_time	varchar(40)	not null,
w_content	varchar(100) not null,
anonymity	varchar(3)	not null,
like_num	int	null,
comment_num	int null
)

  CREATE TABLE sns.userinfo (
      user_num int not null,
      password varchar(20) not null,
      user_name varchar(30) not null,
      profile varchar(100),
      certify char(1),
      portal_email varchar(40) not null,
      primary key (user_num)
   );