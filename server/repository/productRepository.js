import { db } from './db.js';


/************************ 
    전체상품 리스트 조회
**************************/

export const getList = async () => {
    const sql = `
        select pid,
                pname, 
                price,
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
                pname name,
                price,
                description as info, 
                upload_filename as uploadFile,
                source_file as sourceFile, 
                pdate,
                concat('http://localhost:9000/',upload_filename->>'$[0]') as image,
                json_array(
                    concat('http://localhost:9000/',upload_filename->>'$[0]'),
                    concat('http://localhost:9000/',upload_filename->>'$[1]'),
                    concat('http://localhost:9000/',upload_filename->>'$[2]')
                    ) as imgList,
                json_arrayagg(
                        concat( 'http://localhost:9000/' ,jt.filename)
                    ) as detailImgList
            from shoppy_product, 
                        json_table(shoppy_product.upload_filename, '$[*]' 
                            columns(filename varchar(100) path'$' )) as jt
            where pid = ?
            group by pid
        `;

    // 2차원 배열 중 result인 배열의 첫번째 배열이 매핑됨
    const [result] = await db.execute(sql, [pid]);  // result = [[{pid:4,~~}], [컬럼명 fields ]]
    // mysql 쿼리 - > 2차원 배열로 나옴


    return result[0];
}
