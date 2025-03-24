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
-- *** view_cart_list 수정 ***
drop view view_cart_list;

create view view_cart_list
as
select  ca.cid as cid,
      ca.qty as qty,
      cu.id as id,
      pd.pid as pid,
      pd.pname as pname,
      format(pd.price, 0) as price,
      pd.discount_rate as discount_rate,
        format((pd.price / ifnull(pd.discount_rate, 0)), 0) as discount,
      ifnull(format(round(pd.price - (pd.price / ifnull(pd.discount_rate, 0)), -3), 0), format(pd.price, 0)) as discount_price,
      main_image
from cart ca, customer cu, product pd
where ca.id = cu.id 
and ca.pid = pd.pid;

select * from view_cart_list;

select * from customer;
alter table customer add column addtional_address json null;

ALTER TABLE customer MODIFY COLUMN zipcode VARCHAR(10);

ALTER TABLE customer MODIFY address VARCHAR(80) NULL;
ALTER TABLE customer MODIFY extra_address VARCHAR(80) NULL;

