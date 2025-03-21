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


export const getProduct = async (pid) => {

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

/************************ 
    위시리스트 추가
**************************/

export const setWishList = async ({ id, wishList }) => {
    const sql = `UPDATE customer SET wish = ? WHERE id = ?`;
    const values = [JSON.stringify(wishList), id]; // 
    const [result] = await db.execute(sql, values);
    return result.affectedRows;
};




/************************ 
    위시리스트 불러오기
**************************/

// export const getWishList = async ({ id }) => {
//     const sql = `SELECT wish FROM customer WHERE id = ?`;
//     const [rows] = await db.execute(sql, [id]);

//     return rows[0]?.wish;
// };

export const getWishList = async ({ id }) => {
    const sql = `SELECT wish FROM customer WHERE id = ?`;
    const [rows] = await db.execute(sql, [id]);

    const wish = rows[0]?.wish;

    // null, "null", 빈 문자열 처리
    if (!wish || wish === "null" || wish === "") {
        return JSON.stringify([]);
    }

    return typeof wish === "string" ? wish : JSON.stringify(wish);
};