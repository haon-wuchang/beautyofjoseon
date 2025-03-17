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
                pid,
                pname,
                price,
                discount_rate,
                pdate,
                concat('http://localhost:9000/',main_image->>'$[0]') as mainImg,
                json_arrayagg(
					concat( 'http://localhost:9000/' ,slideJt.slideCol)
                    ) as SlideImgList,
				json_arrayagg(
					concat( 'http://localhost:9000/' ,descJt.descCol)
                    ) as descImgList
            from product, 
                        json_table(product.slide_image, '$[*]' 
                            columns(slideCol varchar(100) path'$' )) as slideJt,
						json_table(product.desc_image, '$[*]' 
                            columns(descCol varchar(100) path'$' )) as descJt
            where pid = ?
            group by pid;
        `;

    const [result] = await db.execute(sql, [pid]); 


    return result[0];
}
