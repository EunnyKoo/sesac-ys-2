--데이터 베이스 생성하는 명령어
CREATE DATABASE sesac_test
DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

--테이블 생성1 예시
create table user(
	id int primary key auto_increment  -- 알아서 1씩 자동으로 올려줌
);

--테이블 생성2 예시
create table user(
	id varchar(10) primary key not null,
    password varchar(20) not null,
    age int unsigned
);

show tables;

--테이블에 있는 칼럼 
--1. 추가
alter table user add gender enum('여자','남자');
--2. 삭제
alter table user drop column gender;
--3. 수정
alter table user modify gender varchar(3) not null;

--테이블을 삭제하는 명령어
drop table user;

--insert문
INSERT INTO USER (id, password) values('lion','123');
insert into user values('rabbit','321','남');

--select문
select * from user;
select id, password from user;



