import { db } from './db.js';

export const getAllProduct = async() => {
    const sql = `
        select 
            pid,
            pname,
            format(price, 0) as price,
            discount_rate,
            ifnull(format(round(price - (price / NULLIF(discount_rate, 0)), -3), 0), format(price, 0)) as discount_price,
            main_image
        from product
    `;

    const [result] = await db.execute(sql);
    return result;
}