import { db } from './db.js';


/************************ 
    전체상품 리스트 조회
**************************/

export const getList = async () => {
    const sql = `
        select pid,
                pname,
                price,
                discount_rate,
                concat('http://localhost:9000/',main_image->>'$[0]') as image, 
                main_image, 
                pdate
        from product;
    `;
    const [result] = await db.execute(sql);
    return result; 
}


/************************ 
    상품 상세 정보 조회
**************************/


export const getProduct = async(pid) => {

    const sql = `
            select 
            p.pid as pid,
            p.pname as pname,
            p.price as price,
            p.discount_rate as discount_rate,
            p.pdate as pdate,
    concat('http://localhost:9000/', p.main_image->>'$[0]') as mainImg,
    (
        select json_arrayagg(concat('http://localhost:9000/', s.slideCol))
        from json_table(p.slide_image, '$[*]' columns(slideCol varchar(100) path '$')) as s
    ) as SlideImgList,
    (
        select json_arrayagg(concat('http://localhost:9000/', d.descCol))
        from json_table(p.desc_image, '$[*]' columns(descCol varchar(100) path '$')) as d
    ) as descImgList

from product p
where p.pid = ?;

        `;

    const [result] = await db.execute(sql, [pid]); 


    return result[0];
}
