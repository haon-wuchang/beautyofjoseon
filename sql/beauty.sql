show databases;
use beautydb;
show tables;

-- 테이블 전체 데이터 조회
select * from cart;
select * from category;
select * from customer;
select * from `order`; -- order는 mysql에 내장된 예약어라 백틱(``)사용
select * from product;
select * from qna;
select * from review;
select * from sub_category;
select * from wish;

-- 테이블 데이터 타입 조희
desc cart;
desc category;
desc customer;
desc `order`;
desc product;
desc qna;
desc review;
desc sub_category;
desc wish;



-- ----------------------------------
-- ***********개별 테스트 공간
-- ----------------------------------




