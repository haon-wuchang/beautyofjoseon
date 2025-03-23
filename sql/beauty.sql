show databases;
use beautydb;
show tables;

-- 테이블 전체 데이터 조회
select * from cart;
select * from category;
select * from customer;
select * from orders; -- order는 mysql에 내장된 예약어라 백틱(``)사용
select * from product;
select * from qna;
select * from review;
select * from sub_category;
select * from wish;

-- 테이블 데이터 타입 조희
desc cart;
desc category;
desc customer;
desc orders;
desc product;
desc qna;
desc review;
desc sub_category;
desc wish;


-- ----------------------------------
-- *********** 수정 사항3/１９
-- ----------------------------------

alter table customer modify zipcode varchar(10) not null;
alter table customer add column addtional_address json null;	



-- ----------------------------------
-- *********** 수정 사항3/20
-- ----------------------------------
ALTER TABLE product MODIFY desc_image json NULL;
RENAME TABLE `order` TO orders;

-- *** view_cart_list 수정 ***
drop view view_cart_list;

create view view_cart_list
as
select  ca.cid as cid,
      ca.qty as qty,
      cu.id as id,
      pd.pid as pid,
      pd.pname as pname,
      format(pd.price * ca.qty, 0) as price,
      pd.discount_rate as discount_rate,
	  format((pd.price / ifnull(pd.discount_rate, 0)) * ca.qty, 0) as discount,
      ifnull(round((pd.price - (pd.price / ifnull(pd.discount_rate, 0))), -3), pd.price) as discount_price,
      main_image
from cart ca, customer cu, product pd
where ca.id = cu.id 
and ca.pid = pd.pid;


-- customer 테이블 wish 컬럼 추가 
alter table customer add column wish json null;

-- ----------------------------------
-- *********** 수정 사항3/21
-- ----------------------------------
-- orders 테이블에 배송상태delivery_status 컬럼 추가
alter table orders add column delivery_status varchar(20) null;
-- 하온 주문정보가져오기 뷰 (drop 먼저 한 후 생성해주세요)
drop view view_myOrder;
create view view_myOrder
as
select  
	o.oid as oid,
    o.id as id,
    p.pid as pid,
    o.order_number as order_number,
    o.qty as qty,
    o.total_price as total_price,
    o.odate as odate,
    p.pname as pname,
    o.delivery_status as delivery_status,
    p.main_image as main_image,
    ca.category_name as category_name,
    sca.sub_category_name as sub_category_name
from product p, orders o, category ca , sub_category sca
where o.pid = p.pid and  p.sub_category_id = sca.sub_category_id
and p.category_id = ca.category_id;

select * from  view_myOrder;

ALTER TABLE orders MODIFY delivery_status varchar(20) null default '입금전';

-- 유나
-- payment 페이지 조회용 view table 생성
create view view_payment_list
as
select ca.cid as cid,
	cu.id as id,
	cu.name as name,
    cu.address as address,
    cu.extra_address as extra_address,
    cu.zipcode as zipcode,
    cu.phone as phone,
    cu.email as email,
    ca.pid as pid,
    pd.pname as pname,
    ca.qty as qty,
    ifnull(round((pd.price - (pd.price / ifnull(pd.discount_rate, 0))), -3), pd.price) as discount_price,
    pd.main_image
from customer cu, cart ca, product pd
where cu.id = ca.id
	and ca.pid = pd.pid
order by ca.cid;

select * from view_payment_list;

-- orders 테이블 컬럼명 오타 수정
alter table orders rename column oder_number to order_number;
select * from orders;

-- orders 테이블 odate 제약사항 년월일시분초 -> 년월일 로 변경
ALTER TABLE orders MODIFY odate date not null;
    
-- review 테이블 컬럼 추가 
alter table review add column org_review_img json null;
         
-- wish 테이블 삭제하기

